<main>
  <slot />
</main>

<style>
  :root {
    --white: #fff;
    --black: #232323;
    --red: #f36363;

    --border-color: var(--white);
    --color: var(--white);
    --background-color: var(--black);

    --danger: var(--red);
  }
  :global(body) {
    background-color: var(--background-color);
    color: var(--color);
  }
  main {
    min-height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 8px;
  }
</style>
