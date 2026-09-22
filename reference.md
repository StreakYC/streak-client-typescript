# Reference
## ApiKeys
<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">listApiKeys</a>({ ...params }) -> Streak.ApiKey[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists API keys owned by the current user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.listApiKeys();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV1ApikeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">createApiKey</a>({ ...params }) -> Streak.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an API key for the current user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.createApiKey();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PutV1ApikeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">deleteApiKey</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an API key by key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.deleteApiKey({
    apiKeyKey: "apiKeyKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV1ApikeysApiKeyKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Boxes
<details><summary><code>client.boxes.<a href="/src/api/resources/boxes/client/Client.ts">getBoxMarkdown</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the box as one markdown document: an overview, its columns, contacts, organizations, linked boxes, tasks and pipeline, followed by its timeline. Every timestamp is ISO-8601 UTC. The document's structure is best-effort and may change; use the JSON endpoints for a stable contract.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boxes.getBoxMarkdown({
    boxKey: "boxKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV1BoxesBoxKeyMdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Pipeline
<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">listPipelineFields</a>({ ...params }) -> Streak.PipelineField[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the fields in a pipeline in their stored order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.listPipelineFields({
    pipelineKey: "pipelineKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV1PipelinesPipelineKeyFieldsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">getPipelineField</a>({ ...params }) -> Streak.PipelineField</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a field by its key within a pipeline.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.getPipelineField({
    pipelineKey: "pipelineKey",
    fieldKey: "fieldKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV1PipelinesPipelineKeyFieldsFieldKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">updatePipelineField</a>({ ...params }) -> Streak.PipelineField</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a field's name, default value, options, or AI settings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.updatePipelineField({
    pipelineKey: "pipelineKey",
    fieldKey: "fieldKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PipelineFieldUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">deletePipelineField</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a custom field and clears the value from all the pipeline's boxes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.deletePipelineField({
    pipelineKey: "pipelineKey",
    fieldKey: "fieldKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV1PipelinesPipelineKeyFieldsFieldKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">listPipelines</a>({ ...params }) -> Streak.PipelineListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists pipelines accessible to the current user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.listPipelines();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2PipelinesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">createPipeline</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a basic pipeline.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.createPipeline({
    name: "name",
    teamKey: "teamKey",
    stages: ["stages"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PipelineCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">getPipeline</a>({ ...params }) -> Streak.Pipeline</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a pipeline by key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.getPipeline({
    pipelineKey: "pipelineKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2PipelinesPipelineKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">updatePipeline</a>({ ...params }) -> Streak.Pipeline</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the supplied Pipeline fields. Omitted fields remain unchanged.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.updatePipeline({
    pipelineKey: "pipelineKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PipelineUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">deletePipeline</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an empty pipeline.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.deletePipeline({
    pipelineKey: "pipelineKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV2PipelinesPipelineKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipeline.<a href="/src/api/resources/pipeline/client/Client.ts">createPipelineField</a>({ ...params }) -> Streak.PipelineField</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a custom field in a pipeline.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipeline.createPipelineField({
    pipelineKey: "pipelineKey",
    body: {
        name: "name",
        type: "TEXT_INPUT"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PostV2PipelinesPipelineKeyFieldsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Search
<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">searchBoxesContactsAndOrganizations</a>({ ...params }) -> Streak.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches visible boxes, contacts, and organizations by query, or visible boxes by exact name. Exactly one of query or name must be provided.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.searchBoxesContactsAndOrganizations();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV1SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users
<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getCurrentUser</a>() -> Streak.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns information about the currently authenticated user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getCurrentUser();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getUserByKey</a>({ ...params }) -> Streak.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns information about a specific user by their key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getUserByKey({
    userKey: "userKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV1UsersUserKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">updateUserByKey</a>({ ...params }) -> Streak.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a specific user by their key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.updateUserByKey({
    userKey: "userKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.UserUpdateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getAllUsersOnTeam</a>({ ...params }) -> Streak.UserListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all the users on a single team including archived users, payer only users, agents, owners and regular members.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getAllUsersOnTeam({
    teamKey: "teamKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2TeamsTeamKeyUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Comments
<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">listComments</a>({ ...params }) -> Streak.CommentListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists comments on a box
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.listComments({
    boxKey: "boxKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2BoxesBoxKeyCommentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">createComment</a>({ ...params }) -> Streak.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a comment on a box
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.createComment({
    boxKey: "boxKey",
    message: "message"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.CommentCreateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">getComment</a>({ ...params }) -> Streak.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a comment by key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.getComment({
    commentKey: "commentKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2CommentsCommentKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">updateComment</a>({ ...params }) -> Streak.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a comment by key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.updateComment({
    commentKey: "commentKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.CommentUpdateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">deleteComment</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a comment by key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.deleteComment({
    commentKey: "commentKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV2CommentsCommentKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">reactToComment</a>({ ...params }) -> Streak.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds an emoji reaction to a comment
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.reactToComment({
    commentKey: "commentKey",
    body: {
        emoji: "emoji"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PostV2CommentsCommentKeyReactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">removeCommentReaction</a>({ ...params }) -> Streak.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes an emoji reaction from a comment
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.removeCommentReaction({
    commentKey: "commentKey",
    body: {
        emoji: "emoji"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PostV2CommentsCommentKeyUnreactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Meetings
<details><summary><code>client.meetings.<a href="/src/api/resources/meetings/client/Client.ts">listMeetings</a>({ ...params }) -> Streak.MeetingListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists meetings and call logs on a box
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.meetings.listMeetings({
    boxKey: "boxKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2BoxesBoxKeyMeetingsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeetingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.meetings.<a href="/src/api/resources/meetings/client/Client.ts">createMeeting</a>({ ...params }) -> Streak.Meeting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a meeting or call log on a box
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.meetings.createMeeting({
    boxKey: "boxKey",
    meetingType: "CALL_LOG",
    startTimestamp: 1646870400000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.MeetingCreateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeetingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.meetings.<a href="/src/api/resources/meetings/client/Client.ts">getMeeting</a>({ ...params }) -> Streak.Meeting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a meeting or call log by key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.meetings.getMeeting({
    meetingKey: "meetingKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2MeetingsMeetingKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeetingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.meetings.<a href="/src/api/resources/meetings/client/Client.ts">updateMeeting</a>({ ...params }) -> Streak.Meeting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a meeting or call log by key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.meetings.updateMeeting({
    meetingKey: "meetingKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.MeetingUpdateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeetingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.meetings.<a href="/src/api/resources/meetings/client/Client.ts">deleteMeeting</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a meeting or call log by key
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.meetings.deleteMeeting({
    meetingKey: "meetingKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV2MeetingsMeetingKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeetingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tasks
<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">listBoxTasks</a>({ ...params }) -> Streak.TaskListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists tasks on a box, ordered by creation date.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.listBoxTasks({
    boxKey: "boxKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2BoxesBoxKeyTasksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">createTask</a>({ ...params }) -> Streak.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a task on a box.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.createTask({
    boxKey: "boxKey",
    text: "text"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.TaskCreateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">listUpcomingTasks</a>({ ...params }) -> Streak.TaskListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists tasks across all pipelines and boxes. By default, returns incomplete tasks assigned to the current user before tomorrow in the user's timezone, which includes today's and overdue tasks. Use userKeys, pipelineKey, includeCompleted, direction, limit, and sortOrder to page through other agenda slices.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.listUpcomingTasks();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2TasksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">getTask</a>({ ...params }) -> Streak.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single task by key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.getTask({
    taskKey: "taskKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2TasksTaskKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">updateTask</a>({ ...params }) -> Streak.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a task by key. Omitted body fields are left unchanged.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.updateTask({
    taskKey: "taskKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.TaskUpdateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">deleteTask</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a task by key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.deleteTask({
    taskKey: "taskKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV2TasksTaskKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Contact
<details><summary><code>client.contact.<a href="/src/api/resources/contact/client/Client.ts">getContactsInBulk</a>({ ...params }) -> Streak.ContactKeyBatch</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns accessible contacts indexed by their requested keys. Missing and inaccessible contacts are omitted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contact.getContactsInBulk(["string"]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `string[]` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contact.<a href="/src/api/resources/contact/client/Client.ts">getContact</a>({ ...params }) -> Streak.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an accessible contact by key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contact.getContact({
    contactKey: "contactKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2ContactsContactKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contact.<a href="/src/api/resources/contact/client/Client.ts">updateContact</a>({ ...params }) -> Streak.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Applies supplied changes. Null or omitted fields remain unchanged.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contact.updateContact({
    contactKey: "contactKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.ContactUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contact.<a href="/src/api/resources/contact/client/Client.ts">deleteContact</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a contact and schedules cleanup of its links. A missing contact returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contact.deleteContact({
    contactKey: "contactKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV2ContactsContactKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contact.<a href="/src/api/resources/contact/client/Client.ts">listContacts</a>({ ...params }) -> Streak.ContactPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists contacts in stable order. Pass the returned cursor to continue; keep the same after filter across pages. A full last page may be followed by an empty page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contact.listContacts({
    teamKey: "teamKey",
    after: 1646870400
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2TeamsTeamKeyContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contact.<a href="/src/api/resources/contact/client/Client.ts">createContact</a>({ ...params }) -> Streak.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a contact from its basic details. Links and custom fields require a subsequent update.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contact.createContact({
    teamKey: "teamKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.ContactCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organization
<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">getOrganizationsInABatch</a>({ ...params }) -> Record&lt;string, Streak.Organization&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns organizations keyed by their organization keys. Missing and inaccessible organizations are omitted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.getOrganizationsInABatch(["string"]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `string[]` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">getAnOrganization</a>({ ...params }) -> Streak.Organization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an organization accessible to the current user, including custom fields and relationships.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.getAnOrganization({
    organizationKey: "organizationKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2OrganizationsOrganizationKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">updateAnOrganization</a>({ ...params }) -> Streak.Organization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an organization. Omitted and null properties are unchanged. Supplied lists replace existing lists, subject to field validation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.updateAnOrganization({
    organizationKey: "organizationKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.OrganizationUpdateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">deleteAnOrganization</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an organization and schedules removal of its relationships and box links.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.deleteAnOrganization({
    organizationKey: "organizationKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV2OrganizationsOrganizationKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">listOrganizations</a>({ ...params }) -> Streak.OrganizationPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns organizations in a team, ordered by key. Pass the returned cursor to retrieve the next page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.listOrganizations({
    teamKey: "teamKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2TeamsTeamKeyOrganizationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">createAnOrganization</a>({ ...params }) -> Streak.Organization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an organization in a team. Available enrichment data may fill missing details. Provide a name or at least one domain. Set custom fields and relationships in a subsequent update.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.createAnOrganization({
    teamKey: "teamKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.OrganizationCreateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PipelineStage
<details><summary><code>client.pipelineStage.<a href="/src/api/resources/pipelineStage/client/Client.ts">listStages</a>({ ...params }) -> Record&lt;string, Streak.PipelineStage&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the pipeline's stages keyed by stage key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipelineStage.listStages({
    pipelineKey: "pipelineKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2PipelinesPipelineKeyStagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineStageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipelineStage.<a href="/src/api/resources/pipelineStage/client/Client.ts">createStage</a>({ ...params }) -> Streak.PipelineStage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a stage at the end of the pipeline's stage order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipelineStage.createStage({
    pipelineKey: "pipelineKey",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PipelineStageCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineStageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipelineStage.<a href="/src/api/resources/pipelineStage/client/Client.ts">getStage</a>({ ...params }) -> Streak.PipelineStage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a stage in a pipeline.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipelineStage.getStage({
    pipelineKey: "pipelineKey",
    stageKey: "stageKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2PipelinesPipelineKeyStagesStageKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineStageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipelineStage.<a href="/src/api/resources/pipelineStage/client/Client.ts">updateStage</a>({ ...params }) -> Streak.PipelineStage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the supplied stage name or colors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipelineStage.updateStage({
    pipelineKey: "pipelineKey",
    stageKey: "stageKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.PipelineStageUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineStageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.pipelineStage.<a href="/src/api/resources/pipelineStage/client/Client.ts">deleteStage</a>({ ...params }) -> Streak.OperationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an empty stage. The final stage in a pipeline cannot be deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pipelineStage.deleteStage({
    pipelineKey: "pipelineKey",
    stageKey: "stageKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.DeleteV2PipelinesPipelineKeyStagesStageKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PipelineStageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Team
<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">createTeam</a>({ ...params }) -> Streak.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a team with an initial member roster.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.createTeam({
    name: "name",
    members: [{}]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.TeamCreateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">getTeam</a>({ ...params }) -> Streak.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a team by key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.getTeam({
    teamKey: "teamKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2TeamsTeamKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">updateTeam</a>({ ...params }) -> Streak.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a team by key. Omitted body fields are left unchanged.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.updateTeam({
    teamKey: "teamKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.TeamUpdateBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">listCurrentUsersTeams</a>({ ...params }) -> Streak.TeamListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the teams the current user belongs to, newest first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.listCurrentUsersTeams();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Streak.GetV2UsersMeTeamsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

