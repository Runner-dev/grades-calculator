<script lang="ts">
  import { link } from "svelte-spa-router";

  import links from "../links";
</script>

<h1
  class="pointer-events-auto text-blue-500 text-3xl md:text-4xl text-center  py-4"
>
  Calculadora de notas
</h1>

<div
  class="flex flex-col items-center justify-evenly fixed top-0 left-0 right-0 bottom-0 py-16 md:flex-row"
>
  {#each links as [href, name]}
    <a
      class="pointer-events-auto text-green-700 dark:text-green-400 bg-gray-300 min-w-[80%] md:min-w-0 rounded-lg shadow-lg dark:bg-gray-700 text-2xl text-center  py-4 px-8  md:text-4xl font-bold"
      {href}
      use:link
    >
      {name}
    </a>
  {/each}
</div>
