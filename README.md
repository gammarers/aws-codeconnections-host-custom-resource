# AWS CodeConnections Host Custom Resource

This AWS CDK Construct provides a custom resource (Lambda Function) to create a connection host for Self-Managed GitLab, which is not yet supported by CloudFormation. Additionally, even after creating the Host and the connection, authentication must be done via a browser.


## Example

```typescript
import { RDSDatabaseAutoRunningStopStack } from '@gammarers/aws-codeconnections-host-custom-resource';

const codeConnectionsHostCustomResource = new CodeConnectionsHostCustomResource(this, 'CodeConnectionsHost', {
  name: 'gitlab.example.com', // required, connection host name (Minimum length of 1. Maximum length of 64.)
  providerEndpoint: 'https://gitlab.example.com', // required, your provider endpoint (Minimum length of 1. Maximum length of 512.)
  providerType: 'GitLabSelfManaged', // required, Bitbucket | GitHub | GitHubEnterpriseServer | GitLab | GitLabSelfManaged
});

// get host arn
const hostArn = codeConnectionsHostCustomResource.getResponseField('HostArn');

new codeconnections.CfnConnection(this, 'Connection', {
  connectionName: 'example-gitlab-connection',
  hostArn,
});

```

## License

This project is licensed under the Apache-2.0 License.
