<script lang="ts">
  import Router from "svelte-spa-router";
  import Custom from "./routes/Custom.svelte";
  import Template from "./routes/Template.svelte";
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getPerformance } from "firebase/performance";
  import isDev from "./utils/isDev";
  import Popup from "./components/Popup.svelte";
  import Templates from "./routes/Templates.svelte";

  const routes = {
    "/": Templates,
    "/custom": Custom,
    "/:templateId": Template,
  };

  const firebaseConfig = {
    apiKey: "AIzaSyDYvLM0o4QfD4OwD77BavJznJ10QYl4gh0",
    authDomain: "mobile-grades-calculator.firebaseapp.com",
    projectId: "mobile-grades-calculator",
    storageBucket: "mobile-grades-calculator.appspot.com",
    messagingSenderId: "537652042736",
    appId: "1:537652042736:web:24c20b2cf2e8cb22b4db35",
    measurementId: "G-RQCJ5KNTXV",
  };
  if (!isDev()) {
    const firebaseApp = initializeApp(firebaseConfig);
    const analytics = getAnalytics(firebaseApp);
    const performance = getPerformance(firebaseApp);
  }
</script>

<Popup />
<Router restoreScrollState={true} {routes} />
