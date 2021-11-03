<script lang="ts">
  import type { Grade } from "src/types/grades";
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import Name from "./Name.svelte";

  const dispatch = createEventDispatcher();

  function onDelete() {
    dispatch("delete");
  }

  let inputValue: string = "";
  export let component: HTMLLIElement;
  export let editable = true;
  export let grade: Grade;
  export let firstUrlGrade: number;
  export let missing: number;
  export let weightSum: number;
  export let index: number;

  $: {
    let float = parseFloat(inputValue.replace(",", "."));
    grade.value = isNaN(float) ? undefined : float;
  }
</script>

<li
  class="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-sm flex flex-col space-y-2 shadow relative"
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
      class="absolute right-8 fill-current hover:text-gray-400 active:text-gray-800 active:outline-none focus:outline-none"
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
      class="bg-gray-100 shadow-sm dark:bg-gray-600 rounded p-2 w-full focus:outline-none focus:ring-4"
      bind:value={inputValue}
      placeholder={missing.toString()}
      min="0"
      max="10"
    />
  </label>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="flex-grow flex-shrink-0">
    <div class={`px-2 py-1 text-sm`}>
      Peso {#if editable}(%){/if}
    </div>

    {#if editable}
      <input
        data-testid="editable-input"
        type="number"
        class="bg-gray-100 shadow-sm dark:bg-gray-600 rounded p-2 w-full focus:outline-none focus:ring-4 disabled:bg-transparent disabled:py-0"
        bind:value={grade.weight}
        disabled={!editable}
        max={100 - weightSum + grade.weight}
        min="0"
      />
    {:else}
      <input
        data-testid="noteditable-input"
        type="text"
        class="shadow-sm rounded px-2 w-full focus:outline-none focus:ring-4 bg-transparent"
        value={`${grade.weight.toLocaleString("pt-BR", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })}%`}
        disabled={true}
      />
    {/if}
  </label>
</li>
