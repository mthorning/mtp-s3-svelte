<script lang="ts">
  import type { PageServerData } from './$types';
  import { uploadObject } from '$lib/aws/s3';
  import { getCookies } from '$lib/utils';

  export let data: PageServerData;
  let files: FileList;

  function handleSubmit() {
    const { idToken } = getCookies(document.cookie);
    if (idToken) {
      const [file] = files
      uploadObject(idToken, file, file.name);
    }
  }
</script>

<h1>Images</h1>

<form on:submit|preventDefault={handleSubmit}>
  <input accept="image/jpeg" type="file" bind:files />
  <input type="submit" value="Upload" />
</form>

<table>
  <thead>
    <th>Name</th>
    <th>Size</th>
    <th>Last modified</th>
  </thead>
  <tbody>
    {#each data?.Contents ?? [] as datum}
      {#if datum.Key && /^photos\/.+/.test(datum?.Key)}
        <tr>
          <td>{datum.Key.replace('photos/', '')}</td>
          <td>{datum.Size}</td>
          <td>{datum.LastModified}</td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

<style>
  form {
    margin-bottom: 16px;
  }
</style>
