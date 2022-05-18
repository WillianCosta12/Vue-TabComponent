<template>
    <div class="Tabs">
      <div class="nav">
        <div v-for="(id, index) in ids" :key="id">
          <button @click="contentTab = contents[index]">{{id}}</button>
        </div>
      </div>
      <div class="outlet">
        <p>{{contentTab}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Tab',

    data(){
      return{
        contentTab: 'Esse é o texto do Primeiro Tab',
      }
    },

    props: {
      ids: Array, 
      contents: Array
    } 
}
</script>

<style>

div.nav {
  width: 100%;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
  }
}

div.nav button {
  width: 150px;
  height: 50px;
  padding: 1rem;
  margin: 0.5px 10px;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
  border-radius: 0.5rem;
  font-size: 15px;
  background-color: rgba(219, 209, 209, 0.993);
}


div.nav button:hover {
  background-color: rgba(219, 209, 209, 0.299);
}

div.nav button.active {
  background-color: rgba(219, 209, 209, 0.299);
}

div.outlet {
  width: 100%;
  height: 180px;
  padding: 1rem 1rem;
  list-style: none;
  cursor: pointer;
  transition: all 0.7s;
  border-radius: 0.5rem;
  border: 1px solid black;
  background: #e1e8ec;
  font-size: 25px;
}


</style>