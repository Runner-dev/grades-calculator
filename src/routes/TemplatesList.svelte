<script lang="ts">
  import templates from "../templates";

  const sections: Array<{
    name: string;
    key: string;
    subjects: Array<{
      name: string;
      grades: Array<Grade>;
      key: string;
    }>;
  }> = Object.keys(templates)
    .sort((a, b) => templates[a].name.localeCompare(templates[b].name))
    .map((key) => {
      return {
        ...templates[key],
        subjects: Object.keys(templates[key].subjects).map((k) => ({
          ...templates[key].subjects[k],
          key: k,
        })),
        key,
      };
    });

  import Header from "../components/Header.svelte";
  import { link } from "svelte-spa-router";
  import type { Grade } from "../types/grades";
  import TemplateSection from "../components/TemplateSection.svelte";
</script>

<Header />

<div class="max-w-4xl px-4 mx-auto space-y-8 z-0 mb-8">
  {#each sections as section}
    <TemplateSection {section} />
  {/each}
</div>
