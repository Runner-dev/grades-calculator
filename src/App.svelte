<script lang="ts">
  import Router from "svelte-spa-router";
  import Custom from "./routes/Custom.svelte";
  import Home from "./routes/Home.svelte";
  import Template from "./routes/Template.svelte";
  import TemplatesList from "./routes/TemplatesList.svelte";

  const routes = {
    "/": Home,
    "/custom": Custom,
    "/filled": TemplatesList,
    "/:templateId": Template,
  };
</script>

<Router restoreScrollState={true} {routes} />
