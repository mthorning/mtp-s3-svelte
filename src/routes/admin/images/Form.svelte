<script lang="ts">
  import type { PageServerData } from './$types';
  import { uploadObject } from '$lib/aws/s3';

  export let idToken: string | undefined;
  export let photos: PageServerData['photos'];

  let file: File;
  let fileInput: HTMLInputElement;
  let newFilename = '';

  $: hasFileWithSameName =
    newFilename && photos?.some(({ filename }) => filename === `${newFilename}.jpg`);

  function setFilename(name: string) {
    newFilename = name.replace(/\.(?:jpg|jpeg)$/, '');
  }

  function onNewFileSelected(e: Event) {
    const newFile = (e?.target as HTMLInputElement)?.files?.[0];
    if (!newFile) return;

    file = newFile;
    setFilename(newFile.name);
    fileInput.value = newFilename;
  }

  function onFilenameChange(e: Event) {
    setFilename((e?.target as HTMLInputElement)?.value);
  }

  function handleSubmit() {
    if (idToken) {
      uploadObject(idToken, file, newFilename.replace(' ', '-'))
        .then(() => window.location.reload())
        .catch((e) => console.error(e));
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div><input id="file" accept="image/jpeg" type="file" on:input={onNewFileSelected} /></div>
  <div><input id="filename" type="text" bind:this={fileInput} on:input={onFilenameChange} /></div>
  {#if hasFileWithSameName}
    <p>A file with this name already exists</p>
  {/if}
  <div><input type="submit" value="Upload" /></div>
</form>

<style>
  p {
    color: var(--danger);
  }
  form {
    margin-bottom: 16px;
    width: 400px;
  }
  form div {
    margin-bottom: 8px;
  }
</style>
