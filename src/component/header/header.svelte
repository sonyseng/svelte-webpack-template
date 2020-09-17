<script lang="ts">
  export let title: string = '';
</script>

<style>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<header class="header box">
  <h1>{title}</h1>
  <p>This is a Header component</p>
</header>
