<script lang="ts">
  import Templates from "$lib/components/template/templates.svelte"
  import type { PageServerData } from "./$types"
  import { PageTransition } from "ssgoi"

  export let data: PageServerData
  let templates = data.templates.data?.records
</script>

<svelte:head>
  <title>Templates | Undb</title>
</svelte:head>

<PageTransition>
  <main class="container mx-auto space-y-4 pt-8 md:pt-20">
    <h1 class="text-center text-3xl font-bold leading-tight md:block md:text-6xl lg:leading-[1.1]">
      Undb starter templates
    </h1>

    <p class="text-center text-lg font-semibold">✨ Build your database with thousands of templates</p>
    <p class="text-center text-lg text-muted-foreground">🚧 Work in progress</p>
    <Templates {templates} />
  </main>
</PageTransition>
