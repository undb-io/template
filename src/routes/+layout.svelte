<script>
  import Header from "$lib/components/header/header.svelte"
  import Footer from "$lib/components/footer/footer.svelte"
  import { onNavigate } from "$app/navigation"
  import { Ssgoi } from "ssgoi"
  import { config } from "$lib/ssgoi/config"

  import "../app.css"
</script>

<div class="app flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    <Ssgoi {onNavigate} {config}>
      <slot></slot>
    </Ssgoi>
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
