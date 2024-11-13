import { ResourceAutoNaming, ResourceDefaultNaming, ResourceNaming, ResourceNamingOptions, ResourceNamingType } from '@gammarers/aws-resource-naming';
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

//export type Names = {
//  functionName: string;
//  functionRoleName: string;
//}
//export interface Names {
//  readonly functionName: string;
//  readonly functionRoleName: string;
//}
//
//export type CustomNaming = {
//  type: ResourceNaming.NamingType.CUSTOM;
//  //  functionName: string;
//  //  functionRoleName: string;
//  names: Names;
//}

//export interface ResourceNamingOptions {
//  readonly naming: ResourceNaming.AutoNaming | ResourceNaming.DefaultNaming | {
//    type: ResourceNaming.NamingType.CUSTOM;
//    names: {
//      functionName: string;
//      functionRoleName: string;
//    };
//  };
//}

//export interface ResourceNamingOptions {
//  readonly naming: ResourceNaming.AutoNaming | ResourceNaming.DefaultNaming;
//}
//export type Naming = { type: ResourceNaming.NamingType.DEFAULT } | { type: ResourceNaming.NamingType.AUTO } | CustomNaming;
//export type Naming = { type: ResourceNaming.NamingType.DEFAULT } | { type: ResourceNaming.NamingType.AUTO } | CustomNaming;
//export type Naming = CustomNaming;

//export interface ResourceNamingOptions {
//  readonly naming: Naming;
//}
//export interface DefaultNamingOption {
//  readonly type: ResourceNaming.NamingType.DEFAULT;
//}
//
//export interface AutoNamingOption {
//  readonly type: ResourceNaming.NamingType.AUTO;
//}

export interface CustomNaming {
  readonly type: ResourceNamingType.CUSTOM;
  // readonly names: Names; // CUSTOM の場合に必須
  readonly functionName: string; // フラット化
  readonly functionRoleName: string; // フラット化
}

export type ResourceNamingOption = ResourceDefaultNaming | ResourceAutoNaming | CustomNaming;

export interface CodeConnectionsHostCustomResourceProps {
  readonly name: string;
  readonly providerEndpoint: string;
  readonly providerType: CodeConnectionsHostProviderType;
  //readonly resouceNamingOption?: ResourceNamingOptions;
  //  readonly resouceNamingOption?: { type: ResourceNaming.NamingType.DEFAULT } | { type: ResourceNaming.NamingType.AUTO } | CustomNaming;
  readonly resouceNamingOption?: ResourceNamingOption;
}

export class CodeConnectionsHostCustomResource extends cr.AwsCustomResource {

  constructor(scope: Construct, id: string, props: CodeConnectionsHostCustomResourceProps) {

    // 👇 Create random 8 length string
    const random = ResourceNaming.createRandomString(`${cdk.Names.uniqueId(scope)}.${props.name}.${props.providerEndpoint}.${props.providerType}`);
    const autoNaming = {
      functionName: `custom-resource-codeconnection-host-${random}-func`,
      functionRoleName: `custom-resource-codeconnection-host-${random}-func-exc-role`,
    };
    const names = ResourceNaming.naming(autoNaming, props.resouceNamingOption as ResourceNamingOptions);
    //    const naming = {
    //      names: autoNaming,
    //    };

    const account = cdk.Stack.of(scope).account;
    const region = cdk.Stack.of(scope).region;

    const functionRole = new iam.Role(scope, 'FunctionRole', {
      roleName: names.functionRoleName,
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
      functionName: names.functionName,
      role: functionRole,
      timeout: cdk.Duration.seconds(15),
      installLatestAwsSdk: true,
      //logGroup: todo
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