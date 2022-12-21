<script>
// Header
import AppHeader from './components/AppHeader.vue';
// Main
import Jumbo from './components/main/Jumbo.vue';

import Sponsor from './components/main/Sponsor.vue';
import CrossFitWorkOut from './components/main/CrossFitWorkOut.vue';
// Footer
import AppFooter from './components/AppFooter.vue';
export default{
  components:{
    AppHeader,
    Jumbo,
    Sponsor,
    CrossFitWorkOut,
    AppFooter,
  }
}
</script>

<template>
  <AppHeader/>

  <main>
    <Jumbo/>

    <Sponsor/>
    <CrossFitWorkOut/>
  </main>

  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
