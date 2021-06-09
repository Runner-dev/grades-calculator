<script lang="ts">
  import type { Grade } from "src/types/grades";
  import calculateAverage from "../utils/calculateAverage";
  import { fade, fly } from "svelte/transition";
  import { tick } from "svelte";
  import calculateMissingRequiredGrade from "../utils/calculateMissingRequiredGrade";
  import Name from "./calculator/Name.svelte";

  export let grades: Array<Grade> = [];

  export let editable = true;

  const gradeIds = grades.map((grade) => grade.id ?? 0);

  let idCounter: number = 0;

  if (gradeIds.length > 0) {
    idCounter = Math.max(...gradeIds) + 1;
  }
  console.log(idCounter);

  let gradeComponents: HTMLLIElement[] = [];
  let scrollToLatest = false;
  $: {
    if (scrollToLatest) {
      gradeComponents[gradeComponents.length - 1].scrollIntoView({
        behavior: "smooth",
      });
      scrollToLatest = false;
    }
  }

  $: average = calculateAverage(grades);

  $: missing = calculateMissingRequiredGrade(grades);

  $: weightSum = grades.reduce((prev, grade) => prev + grade.weight, 0);

  function scrollAfterUpdate(i?: number) {
    tick().then(() => {
      if (gradeComponents.length > 0) {
        const gradeComponent = gradeComponents[gradeComponents.length - 1];
        const name = gradeComponent.children[1] as HTMLLabelElement;
        name.focus();
        gradeComponent.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }
</script>

<ul class="max-w-2xl px-4 mt-6 mx-auto space-y-8 z-0">
  {#each grades as grade, i (grade.id || i)}
    <li
      class="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg flex flex-col space-y-2 shadow relative"
      bind:this={gradeComponents[i]}
      in:fade={{ duration: 200 }}
      out:fly|local={{
        x: -200,
        duration: 200,
      }}
    >
      {#if editable}
        <button
          on:click={() => {
            grades.splice(i, 1);
            grades = grades;
            gradeComponents[i - 1]?.children[1]?.scrollIntoView({
              behavior: "smooth",
            });
          }}
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
      <Name {editable} {grade} />
      <label class="flex-grow flex-shrink-0">
        <div class="px-2 py-1 text-sm">Nota</div>

        <input
          type="number"
          class="bg-gray-100 shadow-sm dark:bg-gray-600 rounded p-2 w-full focus:outline-none focus:ring-4"
          bind:value={grade.value}
          placeholder={missing.toString()}
        />
      </label>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex-grow flex-shrink-0">
        <div class={`px-2 py-1 text-sm`}>
          Peso {#if editable}(%){/if}
        </div>

        {#if editable}
          <input
            type="number"
            class="bg-gray-100 shadow-sm dark:bg-gray-600 rounded p-2 w-full focus:outline-none focus:ring-4 disabled:bg-transparent disabled:py-0"
            bind:value={grade.weight}
            disabled={!editable}
          />
        {:else}
          <input
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
  {/each}
</ul>
<div class="h-32" />
<div
  class="fixed flex bottom-0 left-0 right-0 p-4 space-x-4 pt-20 bg-gradient-to-t from-gray-200 via-gray-200 dark:from-gray-800 dark:via-gray-800"
>
  <div
    class="flex-grow flex items-center justify-center bg-blue-400 rounded-lg shadow-lg h-12 min-w-[min-content]"
  >
    Média: {average}
  </div>
  {#if weightSum !== 100}
    <div
      class="flex-grow flex items-center justify-center bg-purple-400 rounded-lg shadow-lg h-12 min-w-[min-content]"
    >
      Nota faltante: {missing}
    </div>
  {/if}
  {#if editable}
    <button
      class={`${
        weightSum !== 100 ? "flex-grow-2" : "flex-grow"
      } flex items-center justify-center bg-green-400 rounded-lg shadow-lg h-12 min-w-[min-content]`}
      on:click={() => {
        grades = [
          ...grades,
          { name: "", weight: 0, value: undefined, id: idCounter },
        ];
        idCounter++;
        scrollAfterUpdate();
      }}>Nova Prova</button
    >
  {/if}
</div>
