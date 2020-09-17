<script lang="ts">
  import { people } from "src/store/people";

  import { Header } from "src/component/header";
  import { List } from "src/component/list";

  import 'src/global.css';
  import imagePng from 'src/image/svelte-vertical.png';

  const FIRST_NAMES = ['Andy', 'Akashi', 'Dara', 'Thida', 'Joseph', 'Theo']
  const LAST_NAMES = ['Smith', 'Fujita', 'Tang', 'Pil', 'Anderson', 'Alexander']

  function addPerson() {
    let first = Math.floor(Math.random()*FIRST_NAMES.length);
    let last = Math.floor(Math.random()*LAST_NAMES.length);

    people.add(`${FIRST_NAMES[first]} ${LAST_NAMES[last]}`);
  }
</script>

<style>
 main {
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   padding: 10px;
 }

 button {
   padding: 10px;
   border: none;
   color: #fff;
   background-color: #f75959;
   cursor: pointer;
 }

 .img-container {
   text-align: center;
 }

 .img-container img {
   height: 400px;
 }

</style>

<main>
  <div>
    <h1>This is the Parent component</h1>
    <p>
      The parent has access to a store that is of course reactive and on button click, will add new names to the store.
      The names are passed as props to the list component.
    </p>
    <button on:click={addPerson}>CLICK ME</button>
  </div>

  <div>
    <Header title="This is a Header component" />
    <List title="This is a List component" names={$people.map(p => p.name)} />
  </div>

  <div class="box">
    <h1>This is a PNG imported using the file-loader</h1>
    <div class="img-container">
      <img src={imagePng} alt="Secular Humanist Logo (Wiki Commons)" />
    </div>
  </div>

</main>
