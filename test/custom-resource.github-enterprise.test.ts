import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
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

  const gitHubEnterpriseConnectionHostCustomResource = new CodeConnectionsHostCustomResource(stack, 'GitHibEnterpriseCodeConnectionsHostCustomResource', {
    name: 'github.example.com',
    providerEndpoint: 'https://github.example.com',
    providerType: CodeConnectionsHostProviderType.GitHubEnterpriseServer,
  });

  const template = Template.fromStack(stack);

  it('Is GitHub Enterprise Connection Host CustomResource', () => {
    expect(gitHubEnterpriseConnectionHostCustomResource).toBeInstanceOf(AwsCustomResource);
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});
