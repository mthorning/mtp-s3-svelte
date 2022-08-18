<script lang="ts">
  export let src: string;
  export let afterLoaded: (image: HTMLElement) => void = () => {};

  let image: HTMLImageElement;
  let loaded = false;

  function setUp(image: HTMLImageElement) {
    if (image.complete) {
      loaded = true;
      afterLoaded(image);
    } else {
      image.onload = () => {
        loaded = true;
        afterLoaded(image);
      };
    }
  }
</script>

<img {src} bind:this={image} use:setUp on:click class:loaded />

<style>
  img {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 1s ease;
  }
  .loaded {
    opacity: 1;
  }
</style>
