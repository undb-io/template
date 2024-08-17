<script>
  import Header from "$lib/components/header/header.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header />
  <main>
    <slot></slot>
  </main>
</div>
