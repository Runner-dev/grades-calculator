<script lang="ts">
  import type { Grade } from "../../types/grades";
  import Link from "./name/Link.svelte";
  import Normal from "./name/Normal.svelte";

  export let grade: Grade;
  export let editable: boolean;
</script>

<div>
  {#if editable}
    <label class="flex-grow flex-shrink-0">
      <div class="px-2 py-1 text-sm">Nome</div>

      <input
        type="text"
        class="bg-gray-100 shadow-sm dark:bg-gray-600 rounded p-2 w-full focus:outline-none focus:ring-4"
        bind:value={grade.name}
        disabled={!editable}
      />
    </label>
  {:else}
    {#if grade.url}
      <Link {grade} />
    {:else}
      <Normal {grade} />
    {/if}
    {#if grade.helper}
      <h4 class="flex-grow flex-shrink-0 px-2 text-sm font-bold">
        {grade.helper}
      </h4>
    {/if}
  {/if}
</div>
