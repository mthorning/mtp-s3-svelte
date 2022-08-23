<slot />

<style global>
  table {
    border-collapse: collapse;
  }
  table th {
    border-top: 1px solid var(--white);
  }
  table th, table tr:last-child td {
    border-bottom: 1px solid var(--white);
  }
  table td, table th {
    padding: 4px 16px;
    border-left: 1px solid var(--white);
    border-right: 1px solid var(--white);
  }
</style>
