
<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<pre>{JSON.stringify(data)}</pre>
