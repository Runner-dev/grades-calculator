<script lang="ts">
  import templates from "../templates";
  import Calculator from "../components/Calculator.svelte";
  import Header from "../components/Header.svelte";
  import { afterUpdate } from "svelte";
  export let params: any;

  let templateId = params.templateId;

  let template = templates[templateId];
  let dataString = localStorage.getItem(`grades-${templateId}`);

  if (dataString) {
    const data = JSON.parse(dataString);

    template.grades = template.grades.map((grade, index) => ({
      ...grade,
      value: data[index] || grade.value,
    }));
  }

  $: localStorage.setItem(
    `grades-${templateId}`,
    JSON.stringify(template.grades.map((grade) => grade.value))
  );
</script>

<Header name={template.name} />

<Calculator editable={false} bind:grades={template.grades} />
