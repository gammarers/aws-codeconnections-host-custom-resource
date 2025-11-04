# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeConnectionsHostCustomResource <a name="CodeConnectionsHostCustomResource" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.Initializer"></a>

```typescript
import { CodeConnectionsHostCustomResource } from '@gammarers/aws-codeconnections-host-custom-resource'

new CodeConnectionsHostCustomResource(scope: Construct, id: string, props: CodeConnectionsHostCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps">CodeConnectionsHostCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps">CodeConnectionsHostCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.getResponseField">getResponseField</a></code> | Returns response data for the AWS SDK call as string. |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.getResponseFieldReference">getResponseFieldReference</a></code> | Returns response data for the AWS SDK call. |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.findHostArn">findHostArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getResponseField` <a name="getResponseField" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.getResponseField"></a>

```typescript
public getResponseField(dataPath: string): string
```

Returns response data for the AWS SDK call as string.

Example for S3 / listBucket : 'Buckets.0.Name'

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.getResponseField.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

##### `getResponseFieldReference` <a name="getResponseFieldReference" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.getResponseFieldReference"></a>

```typescript
public getResponseFieldReference(dataPath: string): Reference
```

Returns response data for the AWS SDK call.

Example for S3 / listBucket : 'Buckets.0.Name'

Use `Token.asXxx` to encode the returned `Reference` as a specific type or
use the convenience `getDataString` for string attributes.

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.getResponseFieldReference.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

##### `findHostArn` <a name="findHostArn" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.findHostArn"></a>

```typescript
public findHostArn(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.isConstruct"></a>

```typescript
import { CodeConnectionsHostCustomResource } from '@gammarers/aws-codeconnections-host-custom-resource'

CodeConnectionsHostCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.property.PROVIDER_FUNCTION_UUID">PROVIDER_FUNCTION_UUID</a></code> | <code>string</code> | The uuid of the custom resource provider singleton lambda function. |

---

##### `PROVIDER_FUNCTION_UUID`<sup>Required</sup> <a name="PROVIDER_FUNCTION_UUID" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResource.property.PROVIDER_FUNCTION_UUID"></a>

```typescript
public readonly PROVIDER_FUNCTION_UUID: string;
```

- *Type:* string

The uuid of the custom resource provider singleton lambda function.

---

## Structs <a name="Structs" id="Structs"></a>

### CodeConnectionsHostCustomResourceProps <a name="CodeConnectionsHostCustomResourceProps" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.Initializer"></a>

```typescript
import { CodeConnectionsHostCustomResourceProps } from '@gammarers/aws-codeconnections-host-custom-resource'

const codeConnectionsHostCustomResourceProps: CodeConnectionsHostCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.property.providerEndpoint">providerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.property.providerType">providerType</a></code> | <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType">CodeConnectionsHostProviderType</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.property.resourceNamingOption">resourceNamingOption</a></code> | <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CustomNaming">CustomNaming</a> \| @gammarers/aws-resource-naming.ResourceDefaultNaming \| @gammarers/aws-resource-naming.ResourceAutoNaming</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.property.providerEndpoint"></a>

```typescript
public readonly providerEndpoint: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.property.providerType"></a>

```typescript
public readonly providerType: CodeConnectionsHostProviderType;
```

- *Type:* <a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType">CodeConnectionsHostProviderType</a>

---

##### `resourceNamingOption`<sup>Optional</sup> <a name="resourceNamingOption" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostCustomResourceProps.property.resourceNamingOption"></a>

```typescript
public readonly resourceNamingOption: CustomNaming | ResourceDefaultNaming | ResourceAutoNaming;
```

- *Type:* <a href="#@gammarers/aws-codeconnections-host-custom-resource.CustomNaming">CustomNaming</a> | @gammarers/aws-resource-naming.ResourceDefaultNaming | @gammarers/aws-resource-naming.ResourceAutoNaming

---

### CustomNaming <a name="CustomNaming" id="@gammarers/aws-codeconnections-host-custom-resource.CustomNaming"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-codeconnections-host-custom-resource.CustomNaming.Initializer"></a>

```typescript
import { CustomNaming } from '@gammarers/aws-codeconnections-host-custom-resource'

const customNaming: CustomNaming = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CustomNaming.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CustomNaming.property.functionRoleName">functionRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CustomNaming.property.type">type</a></code> | <code>@gammarers/aws-resource-naming.ResourceNamingType</code> | *No description.* |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@gammarers/aws-codeconnections-host-custom-resource.CustomNaming.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `functionRoleName`<sup>Required</sup> <a name="functionRoleName" id="@gammarers/aws-codeconnections-host-custom-resource.CustomNaming.property.functionRoleName"></a>

```typescript
public readonly functionRoleName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@gammarers/aws-codeconnections-host-custom-resource.CustomNaming.property.type"></a>

```typescript
public readonly type: ResourceNamingType;
```

- *Type:* @gammarers/aws-resource-naming.ResourceNamingType

---



## Enums <a name="Enums" id="Enums"></a>

### CodeConnectionsHostProviderType <a name="CodeConnectionsHostProviderType" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.BIT_BUCKET">BIT_BUCKET</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.GIT_HUB">GIT_HUB</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.GIT_HUB_ENTERPRISE_SERVER">GIT_HUB_ENTERPRISE_SERVER</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.GIT_LAB">GIT_LAB</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.GIT_LAB_SELF_MANAGED">GIT_LAB_SELF_MANAGED</a></code> | *No description.* |

---

##### `BIT_BUCKET` <a name="BIT_BUCKET" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.BIT_BUCKET"></a>

---


##### `GIT_HUB` <a name="GIT_HUB" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.GIT_HUB"></a>

---


##### `GIT_HUB_ENTERPRISE_SERVER` <a name="GIT_HUB_ENTERPRISE_SERVER" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.GIT_HUB_ENTERPRISE_SERVER"></a>

---


##### `GIT_LAB` <a name="GIT_LAB" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.GIT_LAB"></a>

---


##### `GIT_LAB_SELF_MANAGED` <a name="GIT_LAB_SELF_MANAGED" id="@gammarers/aws-codeconnections-host-custom-resource.CodeConnectionsHostProviderType.GIT_LAB_SELF_MANAGED"></a>

---


### ResponseField <a name="ResponseField" id="@gammarers/aws-codeconnections-host-custom-resource.ResponseField"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codeconnections-host-custom-resource.ResponseField.HOST_ARN">HOST_ARN</a></code> | *No description.* |

---

##### `HOST_ARN` <a name="HOST_ARN" id="@gammarers/aws-codeconnections-host-custom-resource.ResponseField.HOST_ARN"></a>

---

