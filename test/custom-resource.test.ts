import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AwsCustomResource } from 'aws-cdk-lib/custom-resources';
import { CodeConnectionsHostCustomResource } from '../src';

describe('CustomResource Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const cr = new CodeConnectionsHostCustomResource(stack, 'CodeConnectionsHostCustomResource', {
    name: 'gitlab.example.com',
    providerEndpoint: 'https://gitlab.example.com',
    providerType: 'GitLabSelfManaged',
  });

  const template = Template.fromStack(stack);

  it('Is CustomResource', () => {
    expect(cr).toBeInstanceOf(AwsCustomResource);
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});
