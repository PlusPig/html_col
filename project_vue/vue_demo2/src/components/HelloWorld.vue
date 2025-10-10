<template>
  <div class="hello">
    <p>我是单文件组件</p>

    <Swiper class="mySwiper">
      <SwiperSlide>
        <img src="../assets/logo.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/logo.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/logo.png" alt="">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  name: "HelloWorld",
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
h3 {
  color: red;
}

.mySwiper {
  width: 100%;
  height: 200px;
}

.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
