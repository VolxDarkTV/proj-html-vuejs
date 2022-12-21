<script>
// Header
import AppHeader from './components/AppHeader.vue';

// Footer
import AppFooter from './components/AppFooter.vue';
export default{
  components:{
    AppHeader,
    AppFooter,
  }
}
</script>

<template>
  <AppHeader/>


  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
