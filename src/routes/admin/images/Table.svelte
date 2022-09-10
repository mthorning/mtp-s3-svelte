<script lang="ts">
  import { deleteObject } from '$lib/aws/s3';
  import { invalidateCache } from '$lib/aws/cloudfront';
  import type { PageServerData } from './$types';

  export let photos: PageServerData['photos'];
  export let idToken: string | undefined;

  let forDeletion: string | undefined;

  function imageErrorHandler(image: HTMLImageElement) {
    if (image) {
      image.onerror = (error) => {
        console.error(error);
      };
    }
  }

  function handleDelete() {
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

  function handleInvalidate(paths: string[]) {
    if (idToken) {
      invalidateCache(idToken, paths);
    }
  }
</script>

<table>
  <thead>
    <th />
    <th>Name</th>
    <th>Size</th>
    <th>Last modified</th>
    <th />
    <th />
  </thead>
  <tbody>
    {#each photos ?? [] as photo}
      <tr>
        <!--svelte-ignore a11y-missing-attribute -->
        <td><img src={photo.thumbUrl} use:imageErrorHandler /></td>
        <td>{photo.filename.replace('photos/', '')}</td>
        <td>{humanSize(photo.size || 0)}</td>
        <td>{photo.lastModified}</td>
        <td><button on:click={() => handleInvalidate(photo.invalidationPaths)}>Invalidate</button></td>
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
  tr {
    height: 63px;
  }
  .danger {
    color: var(--color);
    background: var(--danger);
  }
</style>
