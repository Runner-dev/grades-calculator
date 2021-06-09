<script lang="ts">
  import type { Grade } from "../../types/grades";
  import Link from "./name/Link.svelte";
  import Normal from "./name/Normal.svelte";

  import Tooltip from "../NameTooltip.svelte";

  export let grade: Grade;
  export let editable: boolean;
  export let firstTime: boolean;
  export let displayHelper: boolean;
</script>

<div class="w-full">
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
      {#if firstTime && displayHelper}
        <Tooltip>
          <svelte:fragment slot="tip"
            >Clique no nome quando ele estiver azul para abrir diretamente a
            prova</svelte:fragment
          >
          <Link slot="content" {grade} />
        </Tooltip>
      {:else}
        <Link {grade} />
      {/if}
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
