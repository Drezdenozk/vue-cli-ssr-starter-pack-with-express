<template>
  <div>
    <div class="home">
      <img src="../../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'homePage',
  components: {
    HelloWorld,
  },
  metaInfo: {
    title: 'Welcome to Mara',
    titleTemplate: '%s | Mara app',
  },
};
</script>
