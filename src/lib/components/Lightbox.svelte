<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Img from '$lib/components/Img.svelte';
  import Spinner from '$lib/components/Spinner.svelte';

  export let url: string, close: () => void, click: boolean, radial: boolean;
  // to close, call handleClose() not close()
  export let previous = () => {};
  export let next = () => {};

  let touchstart = 0;
  let controls = false;
  let scrollY: number;

  let showSpinner = true;

  const onImageLoad = () => {
    controls = true;
    showSpinner = false;
  };

  onMount(() => {
    const main = document.querySelector('main');
    const currentScroll = main ? stopAppScroll(main) : null;
    history.pushState({ id: 'modal' }, 'modal');
    return () => {
      if (main && currentScroll !== null) restoreAppScroll(main, currentScroll);
    };
  });

  function onPopstate(e: PopStateEvent) {
    e.preventDefault();
    e.stopPropagation();
    close();
  }

  function handleClose() {
    window.dispatchEvent(new Event('popstate'));
  }

  function stopAppScroll(main: HTMLElement) {
    main.style.position = 'fixed';
    main.style.top = -1 * scrollY + 'px';
    main.style.right = '0';
    main.style.left = '0';
    return scrollY;
  }

  function restoreAppScroll(main: HTMLElement, currentScroll: number) {
    main.style.position = 'static';
    main.style.top = '';
    main.style.right = '';
    main.style.left = '';
    window.scrollTo(0, currentScroll);
  }

  function onTouchstart({ changedTouches }: TouchEvent) {
    touchstart = changedTouches[0].screenX;
  }
  function onTouchend({ changedTouches }: TouchEvent) {
    const touchend = changedTouches[0].screenX;
    if (touchend + 100 < touchstart) {
      next();
    }
    if (touchend - 100 > touchstart) {
      previous();
    }
  }
  function onKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case 'Escape':
        handleClose();
        break;
      case 'Left':
      case 'ArrowLeft':
        previous();
        break;
      case 'Right':
      case 'ArrowRight':
        next();
        break;
    }
  }
  function arrowClick(cb: () => void) {
    return function changeImage(e: MouseEvent) {
      e.stopPropagation();
      e.preventDefault();
      cb();
    };
  }
</script>

<!-- svelte-ignore a11y-autofocus -->
<svelte:window on:keydown={onKeydown} on:popstate={onPopstate} bind:scrollY />
<div
  class="overlay top"
  class:radial
  data-test="lightbox"
  on:click={handleClose}
  on:touchstart={onTouchstart}
  on:touchend={onTouchend}
>
  {#if showSpinner}
    <Spinner
      style={`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  `}
    />
  {/if}
  <Img
    on:click
    style={`
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      border: 4px solid var(--border-color);
      box-sizing: border-box;
      ${click ? 'cursor: pointer;' : ''} 
    `}
    afterLoaded={onImageLoad}
    src={url}
  />
</div>
<div on:click={handleClose} class="overlay bottom">
  {#if click}
    <span on:click={handleClose} class:controls>
      <div on:click={arrowClick(previous)} class="icon control">
        <ion-icon name="caret-back-outline" />
      </div>
      <div class="control details" />
      <div on:click={arrowClick(next)} class="icon control">
        <ion-icon name="caret-forward-outline" />
      </div>
    </span>
  {/if}
</div>

<style>
  .overlay {
    position: fixed;
    display: flex;
    justify-content: center;
    right: 0;
    left: 0;
    z-index: 9999;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
  }
  @media (min-width: 400px) and (min-height: 400px) {
    .radial {
      background: no-repeat center center radial-gradient(#9fa0ae -74%, rgba(0, 0, 0, 0.9) 67%);
      background-size: cover !important;
    }
  }
  .top {
    background-image: url('/spinner.gif') no-repeat center;
    background-size: 75px;
    top: 0;
    bottom: 50px;
    padding: 16px 16px 0 16px;
  }
  .bottom {
    top: calc(100% - 50px);
    align-items: center;
    bottom: 0;
  }
  span {
    display: flex;
    justify-content: space-between;
  }
  .control {
    border-radius: 2px;
    cursor: pointer;
    margin: 0 4px;
    user-select: none;
  }
  .icon {
    font-size: 16px;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
  }
  .details {
    padding: 3px 8px;
    line-height: 28px;
    white-space: nowrap;
    text-align: center;
    width: 150px;
  }
</style>
