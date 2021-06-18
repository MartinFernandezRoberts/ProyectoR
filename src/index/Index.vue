<template>
  <div class="w-full h-screen bg-black">
    <h1 class="text-white text-center align-middle text-2xl"> PROYECTO R </h1>
  </div>

  <CasasDestacadas

  />


</template>

<script>
import CasasDestacadas from './components/casasDestacadas/CasasDestacadas'


export default {
  name: 'Index',
  components:{
    CasasDestacadas
  }
}
</script>
