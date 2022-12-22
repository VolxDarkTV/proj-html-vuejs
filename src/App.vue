<script>
// Header
import AppHeader from './components/AppHeader.vue';
// Main
import Jumbo from './components/main/Jumbo.vue';

import Join from './components/main/Join.vue';
import LastArticles from './components/main/LastArticles.vue';
import BuyCourse from './components/main/BuyCourse.vue';
import Sponsor from './components/main/Sponsor.vue';
import CrossFitWorkOut from './components/main/CrossFitWorkOut.vue';
// Footer
import AppFooter from './components/AppFooter.vue';
export default{
  components:{
    AppHeader,
    Jumbo,

    Join,
    LastArticles,
    BuyCourse,
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
    
    <Join/>
    <LastArticles/>
    <BuyCourse/>
    <Sponsor/>
    <CrossFitWorkOut/>
  </main>

  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
