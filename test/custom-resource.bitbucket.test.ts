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

  const bitbucketConnectionHostCustomResource = new CodeConnectionsHostCustomResource(stack, 'BitBucketCodeConnectionsHostCustomResource', {
    name: 'bitbucket.example.com',
    providerEndpoint: 'https://bitbucket.example.com',
    providerType: CodeConnectionsHostProviderType.Bitbucket,
  });

  const template = Template.fromStack(stack);

  it('Is Bitbucket Connection Host CustomResource', () => {
    expect(bitbucketConnectionHostCustomResource).toBeInstanceOf(AwsCustomResource);
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});