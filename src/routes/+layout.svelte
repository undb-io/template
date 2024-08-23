<script>
  import Header from "$lib/components/header/header.svelte"
  import Footer from "$lib/components/footer/footer.svelte"
  import "../app.css"
</script>

<div class="app flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    <slot></slot>
  </main>
  <Footer />
</div>
