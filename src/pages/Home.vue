<template>
  <div class="row">
    <div class="col-12 col-md-3" v-for="(item, i) in data" :key="i">
      <hotelCard :hotel="item" />
    </div>
  </div>
</template>

<script>
import hotelCard from "../components/hotelCard.vue";
import data from "../assets/data.json";
export default {
  components: {
    hotelCard,
  },
  data() {
    return {
      data,
    };
  },
  hotel: [],
};
</script>

<style>
img {
  vertical-align: middle;
  border-style: none;
  height: 200px;
}
</style>
