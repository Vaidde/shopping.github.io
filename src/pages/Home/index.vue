<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>

  </div>
</template>

<script>
//引入區域元件
import ListContainer from './ListContainer/index.vue';
import Recommend from './Recommend/index.vue';
import Rank from './Rank/index.vue';
import Like from './Like/index.vue';
import Floor from './Floor/index.vue';
import Brand from './Brand/index.vue';
//註冊區域元件
export default {
    name: "",
    components: { 
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    }
}
</script>

<style>

</style>