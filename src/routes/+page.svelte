<script lang="ts">
  import Templates from "$lib/components/template/templates.svelte"
  import type { PageServerData } from "./$types"

  export let data: PageServerData
  let templates = data.templates.data?.records
</script>

<svelte:head>
  <title>Templates | Undb</title>
</svelte:head>
<main class="container mx-auto pt-20">
  <h1 class="text-center text-3xl font-bold leading-tight md:block md:text-6xl lg:leading-[1.1]">
    Undb starter templates
  </h1>
  <Templates {templates} />
</main>
