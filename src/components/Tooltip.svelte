<script lang="ts">
  import { fly } from "svelte/transition";

  export let classes: string = "";

  export let name: string = "";
  export let tipEnabled: boolean;

  let dismissed = !!window.localStorage.getItem(`${name}-dismissed`);
  $: {
    if (dismissed) window.localStorage.setItem(`${name}-dismissed`, "true");
    else window.localStorage.removeItem(`${name}-dismissed`);
  }
</script>

<div class={`${classes} relative`}>
  {#if !dismissed && tipEnabled}
    <div
      class="absolute px-4 py-2 bottom-full bg-gray-300 dark:bg-gray-600 dark:text-gray-300 rounded-lg text-black text-sm shadow-2xl flex items-center"
      out:fly={{
        x: -25,
        duration: 200,
        easing: (t) => t * (2 - t),
      }}
    >
      <slot name="tip" />
      <button
        class="ml-2 hover:text-red-500 fill-current transition-all"
        on:click={() => (dismissed = true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[20px] w-[20px]"
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
  {/if}
  <slot name="content" />
</div>
