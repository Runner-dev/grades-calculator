<script lang="ts">
  import type { Grade } from "src/types/grades";
  import calculateAverage from "../utils/calculateAverage";
  import { fade, fly } from "svelte/transition";
  import { onMount, tick } from "svelte";
  import calculateMissingRequiredGrade from "../utils/calculateMissingRequiredGrade";
  import Name from "./calculator/Name.svelte";
  import GradeComponent from "./calculator/Grade.svelte";

  export let grades: Array<Grade> = [];

  export let editable = true;

  const gradeIds = grades.map((grade) => grade.id ?? 0);

  let idCounter: number = 0;

  if (gradeIds.length > 0) {
    idCounter = Math.max(...gradeIds) + 1;
  }

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

  $: onDelete = (i: number) => {
    grades.splice(i, 1);
    grades = grades;
    gradeComponents[i - 1]?.children[1]?.scrollIntoView({
      behavior: "smooth",
    });
  };

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

  const firstUrlGrade = grades.reduce<number>((prev, grade, i) => {
    if (prev !== -1) return prev;
    if (grade.url) return i;
    return prev;
  }, -1);
</script>

<ul class="z-0 max-w-4xl px-4 mx-auto mt-6 space-y-8">
  {#each grades as grade, i (grade.id || i)}
    <GradeComponent
      on:delete={() => onDelete(i)}
      bind:grade
      {editable}
      bind:component={gradeComponents[i]}
      {firstUrlGrade}
      {missing}
      {weightSum}
      index={i}
    />
  {/each}
</ul>
<div class="h-32" />
<div
  class="fixed bottom-0 left-0 right-0 flex items-center p-4 py-5 space-x-4 bg-gray-300 dark:bg-gray-900"
>
  <div
    class="flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md h-12 shadow-sm min-w-[min-content] font-semibold"
  >
    Média: {average}
  </div>
  {#if weightSum !== 100 && editable}
    <div
      class="flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-800 dark:text-white text-black rounded-md shadow-sm h-12 min-w-[min-content] font-semibold"
    >
      Nota faltante: {missing}
    </div>
  {/if}
  {#if editable}
    <button
      class={`${
        weightSum !== 100 ? "flex-grow-2" : "flex-grow"
      } flex items-center justify-center bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded-md shadow-lg h-12 min-w-[min-content] hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors`}
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
