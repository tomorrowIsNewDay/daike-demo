<template>
  <div class="home">
    <h2>代课</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>

import store from '@/store/index'

export default {
  name: 'My',
  props: {
    
  },
  data(){
    return {
      name: store.state.user.account,
      form:{
        name: '',
        pwd: ''
      }
    }
  },
  created(){
    
  },
  methods:{
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
