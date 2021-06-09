<script lang="ts">
  import templates from "../templates";
  import Calculator from "../components/Calculator.svelte";
  import Header from "../components/Header.svelte";

  export let params: any;

  let templateId: string;
  $: templateId = params.templateId;

  $: template = templates[templateId];
</script>

<Header name={template.name} />

<Calculator editable={false} grades={template.grades ?? []} />
