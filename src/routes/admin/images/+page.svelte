<script lang="ts">
  import type { PageServerData } from './$types';
  import { uploadObject, deleteObject } from '$lib/aws/s3';
  import { getCookies } from '$lib/utils';

  export let data: PageServerData;
  let files: FileList;
  $: selectedFileName = '';
  let fileInput: HTMLInputElement;

  $: if (files?.[0]?.name) {
    const fileParts = files?.[0]?.name?.split('.') ?? []
    fileParts.splice(-1);
    if(fileParts.length) {
      fileInput.value = fileParts.join('.')
    }
  }
  let forDeletion: string | undefined;

  function imageErrorHandler(image: HTMLImageElement) {
    if (image) {
      image.onerror = (error) => {
        console.error(error);
      };
    }
  }

  function handleSubmit() {
    const { idToken } = getCookies(document.cookie);
    if (idToken) {
      const [file] = files;
      uploadObject(idToken, file, selectedFileName)
        .then(() => window.location.reload())
        .catch((e) => console.error(e));
    }
  }

  function handleDelete() {
    const { idToken } = getCookies(document.cookie);
    if (idToken) {
      if (forDeletion) {
        const file = forDeletion;
        forDeletion = undefined;
        deleteObject(idToken, file)
          .then(() => window.location.reload())
          .catch((e) => console.error(e));
      }
    }
  }
  function humanSize(size: number, unitIdx: number = 0): string {
    const units = ['B', 'KB', 'MB'];
    if (size < 1024) return `${size.toFixed(1)} ${units[unitIdx]}`;
    return humanSize(size / 1024, unitIdx + 1);
  }
</script>

<h1>Images</h1>

<form on:submit|preventDefault={handleSubmit}>
  <div><input id="file" accept="image/jpeg" type="file" bind:files /></div>
  <div><input id="filename" bind:value={selectedFileName} type="text" bind:this={fileInput} /></div>
  <div><input type="submit" value="Upload" /></div>
</form>

<table>
  <thead>
    <th />
    <th>Name</th>
    <th>Size</th>
    <th>Last modified</th>
    <th />
  </thead>
  <tbody>
    {#each data?.photos ?? [] as photo}
      <tr>
        <td><img src={photo.thumbUrl} use:imageErrorHandler /></td>
        <td>{photo.filename.replace('photos/', '')}</td>
        <td>{humanSize(photo.size || 0)}</td>
        <td>{photo.lastModified}</td>
        <td>
          {#if forDeletion == photo.filename}
            <button on:click={() => (forDeletion = undefined)}>Cancel</button>
            <button class="danger" on:click={() => handleDelete()}>Ok</button>
          {:else}
            <button on:click={() => (forDeletion = photo.filename)}>Delete</button>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  form {
    margin-bottom: 16px;
    width: 400px;
  }
  form div {
    margin-bottom: 8px;
  }
  tr {
    height: 63px;
  }
  .danger {
    color: var(--color);
    background: var(--danger);
  }
</style>
