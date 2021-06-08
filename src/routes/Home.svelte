<script lang="ts">
  import type { Grade } from "src/types/grades";
  import calculateAverage from "../utils/calculateAverage";
  import { fade, fly } from "svelte/transition";
  import { tick } from "svelte";
  import calculateMissingRequiredGrade from "../utils/calculateMissingRequiredGrade";

  let idCounter = 0;

  let grades: Array<Grade> = [];

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

<h1
  class="text-blue-500 text-4xl text-center py-4 dark:text-blue-500 fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-300 via-gray-300 dark:from-gray-800 dark:via-gray-800 pb-16 pointer-events-none z-50"
>
  <div class="pointer-events-auto">Cálculo de notas</div>
</h1>

<div class="mt-24" />

<ul class="max-w-2xl px-4 mt-6 mx-auto space-y-8 z-0">
  {#each grades as grade, i (grade.id)}
    <li
      class="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg flex flex-col space-y-2 shadow relative"
      bind:this={gradeComponents[i]}
      in:fade={{ duration: 200 }}
      out:fly={{
        x: -200,
        duration: 200,
      }}
    >
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
        </svg></button
      >
      <label class="flex-grow flex-shrink-0">
        <div class="px-2 py-1 text-sm">Nome</div>

        <input
          type="text"
          class="bg-gray-200 dark:bg-gray-600 rounded p-2 w-full"
          bind:value={grade.name}
        />
      </label>
      <label class="flex-grow flex-shrink-0">
        <div class="px-2 py-1 text-sm">Nota</div>

        <input
          type="number"
          class="bg-gray-200 dark:bg-gray-600 rounded p-2 w-full"
          bind:value={grade.value}
        />
      </label>
      <label class="flex-grow flex-shrink-0">
        <div class="px-2 py-1 text-sm">Peso (%)</div>

        <input
          type="number"
          class="bg-gray-200 dark:bg-gray-600 rounded p-2 w-full"
          bind:value={grade.weight}
        />
      </label>
    </li>
  {/each}
</ul>
<div class="h-32" />
<div
  class="fixed flex bottom-4 left-4 right-4 space-x-4 pt-20 bg-gradient-to-t from-gray-300 via-gray-300 dark:from-gray-800 dark:via-gray-800"
>
  <div
    class="flex-grow flex items-center justify-center bg-blue-400 rounded-lg shadow-lg h-16 min-w-[min-content]"
  >
    Média: {average}
  </div>
  {#if weightSum !== 100}
    <div
      class="flex-grow flex items-center justify-center bg-purple-400 rounded-lg shadow-lg h-16 min-w-[min-content]"
    >
      Nota faltante: {missing}
    </div>
  {/if}
  <button
    class={`${
      weightSum !== 100 ? "flex-grow-2" : "flex-grow"
    } flex items-center justify-center bg-green-400 rounded-lg shadow-lg h-16 min-w-[min-content]`}
    on:click={() => {
      grades = [...grades, { name: "", weight: 0, value: 0, id: idCounter }];
      idCounter++;
      scrollAfterUpdate();
    }}>Nova Prova</button
  >
</div>
