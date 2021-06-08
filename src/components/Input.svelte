<script lang="ts">
  export let value: string | undefined;
  export let label: string | undefined;
</script>

<label class="flex-grow flex-shrink-0">
  {#if label}
    <div class="px-2 py-1 text-sm">{label}</div>
  {/if}
  <input type="text" class="bg-gray-200 rounded p-2 w-full" bind:value />
</label>
