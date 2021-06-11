<script lang="ts">
  import type { Grade } from "src/types/grades";
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import Name from "./Name.svelte";

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
</script>

<li
  class="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg flex flex-col space-y-2 shadow relative"
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
      class="absolute right-8 fill-current hover:text-red-500 active:text-red-700 active:outline-none focus:outline-none"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  {/if}
  <Name {editable} {grade} displayHelper={firstUrlGrade === index} />
  <label class="flex-grow flex-shrink-0">
    <div class="px-2 py-1 text-sm">Nota</div>

    <input
      data-testid="value-input"
      type="number"
      class="bg-gray-100 shadow-sm dark:bg-gray-600 rounded p-2 w-full focus:outline-none focus:ring-4"
      bind:value={grade.value}
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
        value={`${grade.weight.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })}%`}
        disabled={true}
      />
    {/if}
  </label>
</li>
