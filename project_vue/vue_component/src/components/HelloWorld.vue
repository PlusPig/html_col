<template>
  <div class="hello">
    <Swiper :modules="[Pagination]" :pagination="{ clickable: true }" class="mySwiper">
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: "HelloWorld",
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>

.mySwiper {
  width: 100%;
  height: 200px;
}
.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>d