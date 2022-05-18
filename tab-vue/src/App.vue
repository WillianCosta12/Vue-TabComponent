<template>
  <div class="App">
    <Tab :ids='ids' :contents="contents"/>
  </div>
</template>

<script>
  import Tab from './components/Tabs.vue'

  export default {
    components: {
      Tab,
    },
    data() {
      return {
        activeTab: 'Tab01',
        ids: [
          'Tab01',
          'Tab02',
          'Tab03',
          'Tab04'
        ],
        contents: [
          'Esse é o texto do Primeiro Tab',
          'Esse é o texto do Segundo Tab',
          'Esse é o texto do Terceiro Tab',
          'Esse é o texto do Quarto Tab'
        ]
      }
    },
  }
</script>

<style>

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.App {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}



/* Tab Navigation */
</style>