<script lang="ts">
  import type { Grade } from "../../../types/grades";
  export let grade: Grade;
</script>

<a
  class="flex-grow flex-shrink-0 px-2 text-xl font-bold text-blue-700 dark:text-blue-400 hover:underline"
  target="_blank"
  href={grade.url}
  data-testid="link"
>
  {grade.name}
</a>
