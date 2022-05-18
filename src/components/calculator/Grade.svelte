<script lang="ts">
  import type { Grade } from "src/types/grades";
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import Name from "./Name.svelte";
  import { getPerformance } from "firebase/performance";

  const dispatch = createEventDispatcher();

  function onDelete() {
    dispatch("delete");
  }

  export let component: HTMLLIElement;
  export let editable = true;
  export let grade: Grade;
  export let firstUrlGrade: number;
  export let missing: number;
  export let weightSum: number;
  export let index: number;

  let inputValue: string = grade.value?.toString() || "";

  $: {
    let float = parseFloat(inputValue.replace(",", "."));
    grade.value = isNaN(float) ? undefined : float;
  }
</script>

<li
  class="relative flex flex-col p-6 space-y-2 bg-white rounded-sm shadow dark:bg-gray-700 dark:text-white"
  bind:this={component}
  in:fade={{
    duration: 500,
    easing: (t) => t * (2 - t),
  }}
  out:fly|local={{
    x: -200,
    duration: 500,
    easing: (t) => t * (2 - t),
  }}
>
  {#if editable}
    <button
      data-testid="delete-button"
      on:click={onDelete}
      class="absolute fill-current right-8 hover:text-gray-400 active:text-gray-800 active:outline-none focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  {/if}
  <Name {editable} {grade} displayHelper={firstUrlGrade === index} />
  <label class="flex-grow flex-shrink-0">
    <div class="px-2 py-1 text-sm">Nota</div>

    <input
      data-testid="value-input"
      type="text"
      class="w-full p-2 bg-gray-100 rounded shadow-sm dark:bg-gray-600 focus:outline-none focus:ring-4"
      bind:value={inputValue}
      placeholder={missing.toString()}
      disabled={grade.unknown}
      min="0"
      max="10"
    />
  </label>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  {#if !grade.unknown}
    <label class="flex-grow flex-shrink-0">
      <div class={`px-2 py-1 text-sm`}>
        Peso {#if editable}(%){/if}
      </div>

      {#if editable}
        <input
          data-testid="editable-input"
          type="number"
          class="w-full p-2 bg-gray-100 rounded shadow-sm dark:bg-gray-600 focus:outline-none focus:ring-4 disabled:bg-transparent disabled:py-0"
          bind:value={grade.weight}
          disabled={!editable}
          max={100 - weightSum + grade.weight}
          min="0"
        />
      {:else}
        <input
          data-testid="noteditable-input"
          type="text"
          class="w-full px-2 bg-transparent rounded shadow-sm focus:outline-none focus:ring-4"
          value={`${grade.weight.toLocaleString("pt-BR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}%`}
          disabled={true}
        />
      {/if}
    </label>
  {/if}
</li>
