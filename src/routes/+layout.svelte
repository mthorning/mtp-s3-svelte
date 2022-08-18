<main>
  <slot />
</main>

<style>
  :root {
    --white: #fff;
    --teal: #101b1d;

    --border-color: var(--white);
  }
  :global(body) {
    background-color: var(--teal);
  }
  main {
    min-height: 100vh;
    padding-top: 57px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  @media (min-width: 400px) {
    main {
      padding-top: 0;
    }
  }
</style>
