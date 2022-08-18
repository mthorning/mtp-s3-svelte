<main>
  <slot />
</main>

<style>
  :root {
    --white: #fff;
    --black: #232323;

    --border-color: var(--white);
    --color: var(--white);
    --background-color: var(--black);
  }
  :global(body) {
    background-color: var(--background-color);
    color: var(--color);
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
