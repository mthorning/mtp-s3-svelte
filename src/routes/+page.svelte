<script lang="ts">
  import Thumbnail from '$lib/components/Thumbnail.svelte';
  import Lightbox from '$lib/components/Lightbox.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
  const photos = data?.photos

  let selectedIdx: number;
  $: selectedImage = photos?.[selectedIdx];
</script>

<svelte:head>
  <title>MTP:Gallery</title>
  <meta name="description" content="A selection of my favourite images." />
</svelte:head>

<div class="page">

  <div class="gallery" data-test="gallery">
    {#if !photos || !photos.length}
      <h5>I thought I had more photos than this...</h5>
    {:else}
      {#each photos as photo, index}
        <Thumbnail
          url={photo?.thumbUrl}
          on:click={(e) => {
            e.preventDefault();
            selectedIdx = index;
          }}
        />
      {/each}
    {/if}
    {#if selectedImage}
      {#key selectedImage?.fullsizeUrl}
        <Lightbox
          click
          radial={true}
          url={selectedImage.fullsizeUrl}
          close={() => (selectedIdx = -1)}
          next={() => (selectedIdx = selectedIdx === photos?.length ?? 0 - 1 ? 0 : selectedIdx + 1)}
          previous={() => (selectedIdx = selectedIdx === 0 ? photos?.length ?? 0 - 1 : selectedIdx - 1)}
        />
      {/key}
    {/if}
  </div>
</div>

<style>
  .page {
    margin: 0 auto;
    background: var(--primary-bg-color);
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, max-content));
    grid-gap: 16px;
    justify-content: center;
    padding: initial;
  }
  @media (min-width: 600px) {
    .gallery {
      grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
      grid-gap: 24px;
    }
  }
</style>
