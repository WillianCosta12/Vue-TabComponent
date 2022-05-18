import Tab from '../components/Tabs.vue'

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Tab/Tabs',
    component: Tab,
  };

  const Template = (args) => ({
    components: { Tab },
    setup() {
      return { args };
    },
    template: '<Tab v-bind="args" />',
  });

  export const Tab0 = Template.bind({});
  Tab0.args = { ids: [
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
};