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
      class="absolute px-8 py-2 bottom-full bg-gray-800 text-white rounded-lg text-sm shadow-2xl flex items-center justify-center dark:bg-gray-200 dark:text-black w-full"
      out:fly={{
        x: -25,
        duration: 200,
        easing: (t) => t * (2 - t),
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        class="mr-3 fill-current"
        ><path d="M0 0h24v24H0V0z" fill="none" /><path
          d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        /></svg
      >

      <slot name="tip" />
      <button
        class="ml-2 hover:text-gray-400 fill-current transition-all"
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
