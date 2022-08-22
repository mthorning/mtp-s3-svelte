<script lang="ts">
  import { browser } from '$app/env';
  import Spinner from '$lib/components/Spinner.svelte';

  let idToken: string;

  const startsWith = '#id_token=';

  if (browser) {
    const hash = window.location.hash;
    if (hash.startsWith(startsWith)) {
      idToken = hash.split('&')[0].replace(startsWith, '');
      document.cookie = `idToken=${idToken}`;
      window.location.replace('/admin');
    }
  }
</script>

<div>
  <Spinner />
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
