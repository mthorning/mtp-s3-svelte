<script lang="ts">
  import type { PageServerData } from './$types';
  import { browser } from '$app/env'
  import { getCookies } from '$lib/utils';
  import Table from './Table.svelte'
  import Form from './Form.svelte'

  export let data: PageServerData;
  const photos = data?.photos ?? [];

  const idToken = browser ? getCookies(document.cookie)?.idToken : undefined;
</script>

<h1>Images</h1>
<Form {idToken} {photos} />
<Table {idToken} {photos} />
