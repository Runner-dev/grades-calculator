<script lang="ts">
  import templates from "../templates";
  const keys = Object.keys(templates).sort((a, b) =>
    templates[a].name.localeCompare(templates[b].name)
  );

  import Header from "../components/Header.svelte";
  import { link } from "svelte-spa-router";
</script>

<Header />

<div class="max-w-2xl px-4 mt-6 mx-auto space-y-8 z-0 mb-8">
  {#each keys as key}
    <a
      href={`/${key}`}
      use:link
      class="bg-white p-6 block rounded-lg hover:bg-gray-100 transtion shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 cursor-pointer"
    >
      {templates[key].name}
    </a>
  {/each}
</div>
