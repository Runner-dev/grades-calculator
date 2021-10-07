<script lang="ts">
  let popupViewed = !!window.localStorage.getItem("popup");

  $: {
    localStorage.setItem("popup", popupViewed ? "a" : "");
  }
</script>

{#if !popupViewed}
  <div
    class="flex justify-center pointer-events-none fixed top-0 left-0 right-0 bottom-0 z-50 bg-white dark:bg-black dark:text-white "
  >
    <div
      class="p-8 pointer-events-auto flex flex-col space-y-4 max-w-[700px] h-full"
    >
      <button class="self-end" on:click={() => (popupViewed = true)}>
        <svg
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg></button
      >
      <p class="text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam
        similique recusandae aperiam enim placeat vero, dicta commodi atque quia
        fugit consequuntur labore quas sit. Aut eos quibusdam omnis, quia
        aspernatur quae sunt harum ratione quisquam cupiditate praesentium
        sapiente est impedit facilis molestiae amet dolores iusto mollitia sint
        eaque vitae sed veritatis at. Beatae distinctio ad aperiam, cumque quod
        neque nisi officiis consequuntur reprehenderit nam est delectus
        exercitationem eos minus voluptatum, quaerat vitae dolore libero?
        Praesentium labore quis, architecto optio laborum ratione explicabo unde
        perferendis eaque saepe maxime laboriosam distinctio! Ea delectus
        ratione officia quibusdam similique quaerat necessitatibus earum
        aspernatur?
      </p>
    </div>
  </div>
{/if}
