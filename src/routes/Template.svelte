<script lang="ts">
  import templates from "../templates";
  import Calculator from "../components/Calculator.svelte";
  import Header from "../components/Header.svelte";
  import { logEvent, getAnalytics } from "firebase/analytics";
  import isDev from "../utils/isDev";

  export let params: any;
  const key = '3a2s';

  let templateId = params.templateId;
  let dataString = localStorage.getItem(`grades-${templateId}-${key}`);

  if (!isDev())
    logEvent(getAnalytics(), "view_template", {
      templateName: templateId,
      firstView: !dataString,
    });

  let template = templates[templateId];


  if (dataString) {
    const data = JSON.parse(dataString);

    template.grades = template.grades.map((grade, index) => ({
      ...grade,
      value: data[index] || grade.value,
    }));
  }

  $: localStorage.setItem(
    `grades-${templateId}-${key}`,
    JSON.stringify(template.grades.map((grade) => grade.value))
  );
</script>

<Header />

<Calculator editable={false} bind:grades={template.grades} />
