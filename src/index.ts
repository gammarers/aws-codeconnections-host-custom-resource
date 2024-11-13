// 　import * as crypto from 'crypto';
import { ResourceNaming } from '@gammarers/aws-resource-naming';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

// Bitbucket | GitHub | GitHubEnterpriseServer | GitLab | GitLabSelfManaged
export enum CodeConnectionsHostProviderType {
  BIT_BUCKET = 'Bitbucket',
  GIT_HUB = 'GitHub',
  GIT_HUB_ENTERPRISE_SERVER = 'GitHubEnterpriseServer',
  GIT_LAB = 'GitLab',
  GIT_LAB_SELF_MANAGED = 'GitLabSelfManaged',
}

export enum ResponseField {
  HOST_ARN = 'HostArn',
}

export interface ResourceNamingOptions {
  readonly naming: ResourceNaming.AutoNaming | ResourceNaming.DefaultNaming | {
    type: ResourceNaming.NamingType.CUSTOM;
    names: {
      functionName: string;
      functionRoleName: string;
    };
  };
}

export interface CodeConnectionsHostCustomResourceProps {
  readonly name: string;
  readonly providerEndpoint: string;
  readonly providerType: CodeConnectionsHostProviderType;
  readonly resouceNamingOption?: ResourceNamingOptions;
}

export class CodeConnectionsHostCustomResource extends cr.AwsCustomResource {

  constructor(scope: Construct, id: string, props: CodeConnectionsHostCustomResourceProps) {

    // 👇 Create random 8 length string
    const random = ResourceNaming.createRandomString(`${cdk.Names.uniqueId(scope)}.${props.name}.${props.providerEndpoint}.${props.providerType}`);
    const autoNaming = {
      functionName: `custom-resource-codeconnection-host-${random}-func`,
      functionRoleName: `custom-resource-codeconnection-host-${random}-func-exc-role`,
    };
    const naming = ResourceNaming.naming(autoNaming, props.resouceNamingOption);

    const account = cdk.Stack.of(scope).account;
    const region = cdk.Stack.of(scope).region;

    const functionRole = new iam.Role(scope, 'FunctionRole', {
      roleName: naming.names.functionRoleName,
      description: 'Custom Resource Function Execution Role.',
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
      ],
      inlinePolicies: {
        CustomResourcePolicy: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              effect: iam.Effect.ALLOW,
              actions: [
                'codeconnections:CreateHost',
                'codeconnections:UpdateHost',
                'codeconnections:DeleteHost',
              ],
              resources: [
                `arn:aws:codeconnections:${region}:${account}:*`,
              ],
            }),
          ],
        }),
      },
    });

    super(scope, id, {
      functionName: naming.names.functionName,
      role: functionRole,
      timeout: cdk.Duration.seconds(15),
      installLatestAwsSdk: true,
      onCreate: {
        service: 'CodeConnections',
        action: 'createHost',
        parameters: {
          Name: props.name,
          ProviderEndpoint: props.providerEndpoint,
          ProviderType: props.providerType,
        },
        physicalResourceId: cr.PhysicalResourceId.fromResponse('HostArn'),
      },
      onUpdate: {
        service: 'CodeConnections',
        action: 'updateHost',
        parameters: {
          HostArn: new cr.PhysicalResourceIdReference(),
          ProviderEndpoint: props.providerEndpoint,
        },
      },
      onDelete: {
        service: 'CodeConnections',
        action: 'deleteHost',
        parameters: {
          HostArn: new cr.PhysicalResourceIdReference(),
        },
      },
    });
  }

  findHostArn(): string {
    return this.getResponseField(ResponseField.HOST_ARN);
  }

}