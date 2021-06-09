<script lang="ts">
  import type { Grade } from "../../../types/grades";

  export let grade: Grade;
</script>

<h2 class="flex-grow flex-shrink-0 px-2 text-xl font-bold">
  {grade.name}
</h2>
