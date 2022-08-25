<script lang="ts">
  export let src: string 
  export let style: string = ''
  export let afterLoaded: (image: HTMLElement) => void = () => {};

  let loaded = false;

  function imageLoad(image: HTMLImageElement) {
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

<img {src} {style} use:imageLoad on:click class:loaded />

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
