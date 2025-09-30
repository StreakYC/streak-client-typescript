# Pipelines

Types:

- <code><a href="./src/resources/pipelines.ts">PipelineCreateResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineCreateFieldResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineCreateStageResponse</a></code>

Methods:

- <code title="put /pipelines">client.pipelines.<a href="./src/resources/pipelines.ts">create</a>({ ...params }) -> PipelineCreateResponse</code>
- <code title="put /pipelines/{pipelineKey}/fields">client.pipelines.<a href="./src/resources/pipelines.ts">createField</a>(pipelineKey, { ...params }) -> PipelineCreateFieldResponse</code>
- <code title="put /pipelines/{pipelineKey}/stages">client.pipelines.<a href="./src/resources/pipelines.ts">createStage</a>(pipelineKey, { ...params }) -> PipelineCreateStageResponse</code>

# Boxes

Types:

- <code><a href="./src/resources/boxes.ts">BoxAddThreadResponse</a></code>

Methods:

- <code title="put /boxes/{key}/threads">client.boxes.<a href="./src/resources/boxes.ts">addThread</a>(key, { ...params }) -> BoxAddThreadResponse</code>

# Snippets

Types:

- <code><a href="./src/resources/snippets.ts">SnippetCreateResponse</a></code>

Methods:

- <code title="put /snippets">client.snippets.<a href="./src/resources/snippets.ts">create</a>({ ...params }) -> SnippetCreateResponse</code>
