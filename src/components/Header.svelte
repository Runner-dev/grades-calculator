<script lang="ts">
  import { link } from "svelte-spa-router";

  export let name = "Calculadora de notas";

  let menuVisible = false;
</script>

<header
  class=" fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-200 via-gray-200 dark:from-gray-800 dark:via-gray-800 pb-16 pointer-events-none z-50 flex items-center justify-between md:justify-evenly pl-4"
>
  <h1
    class="pointer-events-auto text-blue-500 text-3xl md:text-4xl text-center  py-4"
  >
    {name}
  </h1>
  <a
    class="pointer-events-auto text-green-500 text-2xl text-center h-full py-4 px-8 hover:bg-gray-400 dark:hover:bg-gray-600 hidden md:block"
    href="/"
    use:link
  >
    Início
  </a>
  <a
    class="pointer-events-auto text-green-500 text-2xl text-center h-full py-4 px-8 hover:bg-gray-400 dark:hover:bg-gray-600 hidden md:block"
    href="/filled"
    use:link
  >
    Pré preeenchidos
  </a>
  <button
    class="md:hidden p-4 pointer-events-auto h-full"
    on:click={() => (menuVisible = true)}
    aria-label="Abrir menu de navegação"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 fill-current dark:text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</header>
<div
  class={`fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-200 transform md:hidden transition-transform flex flex-col items-center justify-center dark:bg-gray-700 ${
    menuVisible ? "translate-x-0" : " translate-x-[100vw]"
  }`}
>
  <button
    class="md:hidden absolute right-0 top-0 p-4 pointer-events-auto self-end"
    on:click={() => (menuVisible = false)}
    aria-label="Fechar menu de navegação"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 fill-current dark:text-white"
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

  <div class="flex flex-col">
    <a
      class="pointer-events-auto text-green-700 text-2xl text-center h-full py-4 px-8 "
      href="/"
      use:link
      on:click={() => {
        menuVisible = false;
      }}
    >
      Início
    </a>
    <a
      class="pointer-events-auto text-green-700 text-2xl text-center h-full py-4 px-8 "
      href="/filled"
      use:link
      on:click={() => {
        menuVisible = false;
      }}
    >
      Pré preeenchidos
    </a>
  </div>
</div>

<div class="mt-28" />
