<script lang="ts">
  import Img from '$lib/components/Img.svelte';
  import IntersectionObserver from './IntersectionObserver.svelte';

  export let url: string, style: string = ''
</script>

<div on:click data-test="thumbnail" class={`thumbnail `} {style}>
  <IntersectionObserver once let:intersecting>
    {#if intersecting}
      <Img src={url} />
    {/if}
  </IntersectionObserver>
</div>

<style>
  div {
    cursor: pointer;
    position: relative;
    width: 140px;
    height: 140px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    user-select: none;
  }
  @media (min-width: 600px) {
    div {
      width: 250px;
      height: 250px;
    }
  }
</style>
