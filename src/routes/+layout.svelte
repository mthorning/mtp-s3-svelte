<main>
  <slot />
</main>

<style global>
  :root {
    --white: #fff;
    --black: #232323;
    --red: #f36363;
    --scrollbar-rgb: 118, 124, 131;

    --border-color: var(--white);
    --color: var(--white);
    --background-color: var(--black);

    --danger: var(--red);
  }

  @media (min-width: 400px) {
    body {
      font-size: 16px;
    }
  }
  body {
    background-color: var(--background-color);
    color: var(--color);
    margin: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 1.5;
  }
  p {
    font-size: 1.2em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 0.5em 0;
    font-weight: 400;
    line-height: 1.2;
  }
  h1 {
    font-size: 2em;
  }
  a {
    color: inherit;
  }
  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(var(--scrollbar-rgb), 0.2) rgba(var(--scrollbar-rgb), 0);
  }
  *:hover {
    scrollbar-color: rgba(var(--scrollbar-rgb), 0.4) rgba(var(--scrollbar-rgb), 0);
  }
  *::-webkit-scrollbar-track {
    background: rgba(var(--scrollbar-rgb), 0);
    border: none;
  }
  *::-webkit-scrollbar-corner {
    background: rgba(var(--scrollbar-rgb), 0);
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--scrollbar-rgb), 0.2);
    border-radius: 3px;
    border: none;
  }
  *:hover::-webkit-scrollbar-track {
    background-color: rgba(var(--scrollbar-rgb), 0);
  }
  *:hover::-webkit-scrollbar-thumb {
    background-color: rgba(var(--scrollbar-rgb), 0.4);
  }
  main {
    min-height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 8px;
  }
</style>
