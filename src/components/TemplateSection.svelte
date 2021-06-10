<script lang="ts">
  export let section: {
    name: string;
    key: string;
    subjects: Array<{
      name: string;
      grades: Array<Grade>;
      key: string;
    }>;
  };

  const startExtendedString = localStorage.getItem(`extended-${section.key}`);

  let extended = startExtendedString ? JSON.parse(startExtendedString) : false;
  let comp: HTMLDivElement;

  $: {
    localStorage.setItem(`extended-${section.key}`, JSON.stringify(extended));
  }

  import type { Grade } from "../types/grades";
  import { link } from "svelte-spa-router";
</script>

<div>
  <button
    class={`text-xl font-bold flex items-center justify-start p-6 bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:text-gray-400 w-full rounded-lg shadow-xl hover:text-gray-500 ring-white active:ring focus:ring focus:outline-none active:outline-none`}
    on:click={() => (extended = !extended)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class={`h-6 w-6 transform transition duration-500 mr-2  ${
        extended ? "-rotate-90" : ""
      }`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
    {section.name}
  </button>
  <div
    class={`space-y-4 overflow-hidden "transition-all duration-[1s]`}
    style={extended
      ? `max-height: ${comp?.scrollHeight || 0}px;`
      : "max-height: 0;"}
    bind:this={comp}
  >
    {#each section.subjects as { key, name }, i}
      <a
        href={`/${section.key}/${key}`}
        use:link
        class={`bg-white p-6 block rounded-lg hover:bg-gray-100 transtion shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 cursor-pointer ${
          i === 0 ? "mt-8" : ""
        }`}
      >
        {name}
      </a>
    {/each}
  </div>
</div>
