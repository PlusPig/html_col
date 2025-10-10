<template>
  <div class="hello">
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data() {
      return {
        chengpin:{ }
      }
    },
  mounted() {
    
    axios({
    method: "get",
    url:"https://pic.baike.soso.com/ugc/baikepic2/976/20180516164441-171181292_jpeg_474_593_30946.jpg/0",
    }).then(res => {
      console.log(res.data);
    })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
