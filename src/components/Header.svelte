<script lang="ts">
  import { link } from "svelte-spa-router";
  import links from "../links";

  let menuVisible = false;
</script>

<header
  class="h-20 flex w-full justify-around items-center fixed bg-gray-50 shadow-md z-30 font-mono dark:bg-gray-900 dark:text-gray-50"
>
  <span class="flex items-center space-x-2">
    <svg
      class="fill-current w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ><g><rect fill="none" height="24" width="24" /></g><g
        ><path
          d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z"
        /></g
      >
    </svg>
    <span class="text-xl font-bold">Calculadora de notas</span>
  </span>
  <ul class="justify-center items-center h-full space-x-4 md:flex hidden">
    {#each links as [href, name]}
      <li class="">
        <a
          class="p-4 hover:underline text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-gray-50 hover:font-semibold transition-colors text-lg"
          use:link
          {href}
        >
          {name}
        </a>
      </li>
    {/each}
  </ul>
  <button class="md:hidden" on:click={() => (menuVisible = !menuVisible)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 8h16M4 16h16"
      />
    </svg>
  </button>
</header>

<div
  class={`fixed top-0 bottom-0 left-0 right-0 bg-white dark:bg-gray-900 z-40 transition duration-500 transform flex items-center justify-center ${
    menuVisible ? "translate-y-0" : "translate-y-full"
  }`}
>
  <div
    class="h-20 flex w-full justify-around items-center z-30 font-mono dark:text-gray-50 top-0 absolute"
  >
    <span class="flex items-center space-x-2 invisible">
      <svg
        class="fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><g><rect fill="none" height="24" width="24" /></g><g
          ><path
            d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z"
          /></g
        >
      </svg>
      <span class="text-xl font-bold">Calculadora de notas</span>
    </span>
    <button on:click={() => (menuVisible = !menuVisible)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
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
  </div>
  <ul class="justify-around items-center space-y-16 flex flex-col">
    {#each links as [href, name]}
      <li class="">
        <a
          class="p-4 hover:underline text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-gray-50 hover:font-semibold transition-colors text-2xl"
          use:link
          {href}
        >
          {name}
        </a>
      </li>
    {/each}
  </ul>
</div>

<div class="h-24" />
