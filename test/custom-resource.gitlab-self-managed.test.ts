import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as codeconnections from 'aws-cdk-lib/aws-codeconnections';
import { AwsCustomResource } from 'aws-cdk-lib/custom-resources';
import { CodeConnectionsHostCustomResource, CodeConnectionsHostProviderType } from '../src';

describe('CustomResource Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const gitLabSelfManagedConnectionHostCustomResource = new CodeConnectionsHostCustomResource(stack, 'GitLabSelfManagedCodeConnectionsHostCustomResource', {
    name: 'gitlab.example.com',
    providerEndpoint: 'https://gitlab.example.com',
    providerType: CodeConnectionsHostProviderType.GIT_LAB_SELF_MANAGED,
  });

  const hostArn = gitLabSelfManagedConnectionHostCustomResource.getHostArn();

  new codeconnections.CfnConnection(stack, 'Connection', {
    connectionName: 'example-gitlab-self-managed-connection',
    hostArn,
  });

  const template = Template.fromStack(stack);

  it('Is GitLab Self Managed Connectrion Host CustomResource', () => {
    expect(gitLabSelfManagedConnectionHostCustomResource).toBeInstanceOf(AwsCustomResource);
  });

  it('Is hostArn string', () => {
    expect(hostArn).not.toBeNull();
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});
