<script lang="ts">
  export let title: string = '';
  export let names: string[] = [];
</script>

<style>
  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  ol {
    width: 200px;
    height: 200px;
    overflow: hidden;
    overflow-y: auto;
    text-align: left;
    color: red;
  }
</style>

<section class="list box">
  <h1>{title}</h1>

  <p>This component takes an array of names from the parent component and displays them in an ordered list</p>

  <ol>
    	{#each names as name}
        <li>{name}</li>
      {/each}
  </ol>
</section>

