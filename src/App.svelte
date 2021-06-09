<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Template from "./routes/Template.svelte";
  import TemplatesList from "./routes/TemplatesList.svelte";

  const routes = {
    "/": Home,
    "/filled": TemplatesList,
    "/:templateId": Template,
  };
</script>

<Router {routes} />
