<script lang="ts">
  let popupViewed = !!window.localStorage.getItem("popup-2");

  $: {
    localStorage.setItem("popup-2", popupViewed ? "a" : "");
  }
</script>

{#if !popupViewed}
  <div
    class="flex justify-center pointer-events-none fixed top-0 left-0 h-screen w-screen z-50 bg-white dark:bg-black dark:text-white "
  >
    <div
      class="py-4 px-2 md:p-8 pointer-events-auto flex flex-col space-y-4 max-w-[700px] h-full"
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
      <div class="text-justify overflow-auto px-4 space-y-2">
        <p>
          O aplicativo já está com os pesos atualizados. Mesmo o sistema de
          cálculo de média, sendo bom para ter uma ideia de quanto você precisa
          tirar, não recomendo se basear exatamente nessa nota. Por agora não
          vou considerar a possibilidade de arredondamento até conseguir
          conversar com a coordenação sobre isso. Assim que conversar vou
          colocar outra mensagem desse tipo e mandar no grupo do ano.
        </p>
      </div>
    </div>
  </div>
{/if}
