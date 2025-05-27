import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.189.1',
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.5.x',
  jsiiVersion: '5.5.x',
  name: '@gammarers/aws-codeconnections-host-custom-resource',
  description: 'This AWS CDK Construct provides a custom resource (Lambda Function) to create a connection host for Self-Managed GitLab, which is not yet supported by CloudFormation. Additionally, even after creating the Host and the connection, authentication must be done via a browser.',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-codeconnections-host-custom-resource.git',
  deps: [
    '@gammarers/aws-resource-naming@^0.10.1',
  ],
  peerDeps: [
    '@gammarers/aws-resource-naming@^0.10.1',
  ],
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['8 16 * * 2']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-codeconnections-host-custom-resource',
    module: 'gammarers.aws_codeconnections_host_custom_resource',
  },
});
project.synth();