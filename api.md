# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveCurrentResponse</a></code>

Methods:

- <code title="get /users/{userKey}">client.users.<a href="./src/resources/users.ts">retrieve</a>(userKey) -> UserRetrieveResponse</code>
- <code title="get /users/me">client.users.<a href="./src/resources/users.ts">retrieveCurrent</a>() -> UserRetrieveCurrentResponse</code>

# Pipelines

Types:

- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineUpdateResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineDeleteResponse</a></code>

Methods:

- <code title="get /pipelines/{pipelineKey}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">retrieve</a>(pipelineKey) -> void</code>
- <code title="post /pipelines/{pipelineKey}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">update</a>(pipelineKey, { ...params }) -> PipelineUpdateResponse</code>
- <code title="get /pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /pipelines/{pipelineKey}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">delete</a>(pipelineKey) -> PipelineDeleteResponse</code>

## Boxes

Types:

- <code><a href="./src/resources/pipelines/boxes.ts">BoxListResponse</a></code>

Methods:

- <code title="get /pipelines/{pipelineKey}/boxes">client.pipelines.boxes.<a href="./src/resources/pipelines/boxes.ts">list</a>(pipelineKey, { ...params }) -> BoxListResponse</code>
- <code title="post /pipelines/{pipelineKey}/boxes/batch/">client.pipelines.boxes.<a href="./src/resources/pipelines/boxes.ts">batchGet</a>(pipelineKey, { ...params }) -> void</code>

## Stages

Types:

- <code><a href="./src/resources/pipelines/stages.ts">StageRetrieveResponse</a></code>
- <code><a href="./src/resources/pipelines/stages.ts">StageUpdateResponse</a></code>
- <code><a href="./src/resources/pipelines/stages.ts">StageListResponse</a></code>
- <code><a href="./src/resources/pipelines/stages.ts">StageDeleteResponse</a></code>

Methods:

- <code title="get /pipelines/{pipelineKey}/stages/{stageKey}">client.pipelines.stages.<a href="./src/resources/pipelines/stages.ts">retrieve</a>(stageKey, { ...params }) -> StageRetrieveResponse</code>
- <code title="post /pipelines/{pipelineKey}/stages/{stageKey}">client.pipelines.stages.<a href="./src/resources/pipelines/stages.ts">update</a>(stageKey, { ...params }) -> StageUpdateResponse</code>
- <code title="get /pipelines/{pipelineKey}/stages">client.pipelines.stages.<a href="./src/resources/pipelines/stages.ts">list</a>(pipelineKey) -> StageListResponse</code>
- <code title="delete /pipelines/{pipelineKey}/stages/{stageKey}">client.pipelines.stages.<a href="./src/resources/pipelines/stages.ts">delete</a>(stageKey, { ...params }) -> StageDeleteResponse</code>

## Fields

Types:

- <code><a href="./src/resources/pipelines/fields.ts">FieldRetrieveResponse</a></code>
- <code><a href="./src/resources/pipelines/fields.ts">FieldUpdateResponse</a></code>
- <code><a href="./src/resources/pipelines/fields.ts">FieldListResponse</a></code>
- <code><a href="./src/resources/pipelines/fields.ts">FieldDeleteResponse</a></code>

Methods:

- <code title="get /pipelines/{pipelineKey}/fields/{fieldKey}">client.pipelines.fields.<a href="./src/resources/pipelines/fields.ts">retrieve</a>(fieldKey, { ...params }) -> FieldRetrieveResponse</code>
- <code title="post /pipelines/{pipelineKey}/fields/{fieldKey}">client.pipelines.fields.<a href="./src/resources/pipelines/fields.ts">update</a>(fieldKey, { ...params }) -> FieldUpdateResponse</code>
- <code title="get /pipelines/{pipelineKey}/fields">client.pipelines.fields.<a href="./src/resources/pipelines/fields.ts">list</a>(pipelineKey) -> FieldListResponse</code>
- <code title="delete /pipelines/{pipelineKey}/fields/{fieldKey}">client.pipelines.fields.<a href="./src/resources/pipelines/fields.ts">delete</a>(fieldKey, { ...params }) -> FieldDeleteResponse</code>

## Newsfeed

Types:

- <code><a href="./src/resources/pipelines/newsfeed.ts">NewsfeedRetrieveResponse</a></code>
- <code><a href="./src/resources/pipelines/newsfeed.ts">NewsfeedExportFullResponse</a></code>

Methods:

- <code title="get /pipelines/{key}/newsfeed">client.pipelines.newsfeed.<a href="./src/resources/pipelines/newsfeed.ts">retrieve</a>(key, { ...params }) -> NewsfeedRetrieveResponse</code>
- <code title="put /pipelines/{key}/newsfeed/export/full">client.pipelines.newsfeed.<a href="./src/resources/pipelines/newsfeed.ts">exportFull</a>(key, { ...params }) -> unknown</code>

# Boxes

Types:

- <code><a href="./src/resources/boxes/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/boxes/boxes.ts">BoxUpdateResponse</a></code>
- <code><a href="./src/resources/boxes/boxes.ts">BoxDeleteResponse</a></code>
- <code><a href="./src/resources/boxes/boxes.ts">BoxGetNewsfeedResponse</a></code>
- <code><a href="./src/resources/boxes/boxes.ts">BoxListFilesResponse</a></code>
- <code><a href="./src/resources/boxes/boxes.ts">BoxListThreadsResponse</a></code>
- <code><a href="./src/resources/boxes/boxes.ts">BoxUpdateMultipleFieldsResponse</a></code>

Methods:

- <code title="get /boxes/{boxKey}">client.boxes.<a href="./src/resources/boxes/boxes.ts">retrieve</a>(boxKey) -> BoxRetrieveResponse</code>
- <code title="post /boxes/{boxKey}">client.boxes.<a href="./src/resources/boxes/boxes.ts">update</a>(boxKey, { ...params }) -> BoxUpdateResponse</code>
- <code title="delete /boxes/{boxKey}">client.boxes.<a href="./src/resources/boxes/boxes.ts">delete</a>(boxKey) -> BoxDeleteResponse</code>
- <code title="get /boxes/{key}/newsfeed">client.boxes.<a href="./src/resources/boxes/boxes.ts">getNewsfeed</a>(key, { ...params }) -> BoxGetNewsfeedResponse</code>
- <code title="get /boxes/{key}/files">client.boxes.<a href="./src/resources/boxes/boxes.ts">listFiles</a>(key) -> BoxListFilesResponse</code>
- <code title="get /boxes/{key}/threads">client.boxes.<a href="./src/resources/boxes/boxes.ts">listThreads</a>(key) -> BoxListThreadsResponse</code>
- <code title="post /boxes/{key}">client.boxes.<a href="./src/resources/boxes/boxes.ts">updateMultipleFields</a>(key, { ...params }) -> BoxUpdateMultipleFieldsResponse</code>

## Fields

Types:

- <code><a href="./src/resources/boxes/fields.ts">FieldRetrieveResponse</a></code>
- <code><a href="./src/resources/boxes/fields.ts">FieldUpdateResponse</a></code>

Methods:

- <code title="get /boxes/{boxKey}/fields/{fieldKey}">client.boxes.fields.<a href="./src/resources/boxes/fields.ts">retrieve</a>(fieldKey, { ...params }) -> FieldRetrieveResponse</code>
- <code title="post /boxes/{boxKey}/fields/{fieldKey}">client.boxes.fields.<a href="./src/resources/boxes/fields.ts">update</a>(fieldKey, { ...params }) -> FieldUpdateResponse</code>
- <code title="get /boxes/{boxKey}/fields">client.boxes.fields.<a href="./src/resources/boxes/fields.ts">list</a>(boxKey) -> void</code>

# SearchQuery

Methods:

- <code title="get /search?query={query}">client.searchQuery.<a href="./src/resources/search-query.ts">performSearch</a>(query, { ...params }) -> void</code>

# SearchName

Types:

- <code><a href="./src/resources/search-name.ts">SearchNameRetrieveResponse</a></code>

Methods:

- <code title="get /search?name={name}">client.searchName.<a href="./src/resources/search-name.ts">retrieve</a>(name, { ...params }) -> SearchNameRetrieveResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/files.ts">FileRetrieveContentsResponse</a></code>

Methods:

- <code title="get /files/{key}">client.files.<a href="./src/resources/files.ts">retrieve</a>(key) -> FileRetrieveResponse</code>
- <code title="get /files/{key}/contents">client.files.<a href="./src/resources/files.ts">retrieveContents</a>(key) -> unknown</code>

# Threads

Types:

- <code><a href="./src/resources/threads.ts">ThreadRetrieveResponse</a></code>
- <code><a href="./src/resources/threads.ts">ThreadDeleteResponse</a></code>

Methods:

- <code title="get /threads/{key}">client.threads.<a href="./src/resources/threads.ts">retrieve</a>(key) -> ThreadRetrieveResponse</code>
- <code title="delete /threads/{key}">client.threads.<a href="./src/resources/threads.ts">delete</a>(key) -> ThreadDeleteResponse</code>

# Snippets

Types:

- <code><a href="./src/resources/snippets.ts">SnippetRetrieveResponse</a></code>
- <code><a href="./src/resources/snippets.ts">SnippetUpdateResponse</a></code>
- <code><a href="./src/resources/snippets.ts">SnippetListResponse</a></code>
- <code><a href="./src/resources/snippets.ts">SnippetDeleteResponse</a></code>

Methods:

- <code title="get /snippets/{key}">client.snippets.<a href="./src/resources/snippets.ts">retrieve</a>(key) -> SnippetRetrieveResponse</code>
- <code title="post /snippets/{key}">client.snippets.<a href="./src/resources/snippets.ts">update</a>(key, { ...params }) -> SnippetUpdateResponse</code>
- <code title="get /snippets">client.snippets.<a href="./src/resources/snippets.ts">list</a>() -> SnippetListResponse</code>
- <code title="delete /snippets/{key}">client.snippets.<a href="./src/resources/snippets.ts">delete</a>(key) -> SnippetDeleteResponse</code>

# Newsfeed

Types:

- <code><a href="./src/resources/newsfeed.ts">NewsfeedRetrieveResponse</a></code>

Methods:

- <code title="get /newsfeed">client.newsfeed.<a href="./src/resources/newsfeed.ts">retrieve</a>({ ...params }) -> NewsfeedRetrieveResponse</code>
