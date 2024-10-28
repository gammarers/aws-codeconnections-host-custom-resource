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

  const gitLabConnectionHostCustomResource = new CodeConnectionsHostCustomResource(stack, 'GitLabCodeConnectionsHostCustomResource', {
    name: 'gitlab.example.com',
    providerEndpoint: 'https://gitlab.example.com',
    providerType: CodeConnectionsHostProviderType.GIT_LAB,
  });

  const hostArn = gitLabConnectionHostCustomResource.getHostArn();

  new codeconnections.CfnConnection(stack, 'Connection', {
    connectionName: 'example-gitlab-connection',
    hostArn,
  });

  const template = Template.fromStack(stack);

  it('Is GitLab Connection Host CustomResource', () => {
    expect(gitLabConnectionHostCustomResource).toBeInstanceOf(AwsCustomResource);
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});
