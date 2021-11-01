<template>
  <div>
    <b-card
      :title="hotel.name"
      :img-src="hotel.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <div class="stars">
        <i class="fas fa-star" v-for="(item, i) in hotel.star" :key="i"></i>
      </div>
      <b-card-text> Location: {{ hotel.location }} </b-card-text>

      <router-link :to="`hotel/${hotel.id}`">
        <b-button variant="primary">Booking for ${{ hotel.price }}</b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    hotel: null,
    chooseScreen: [],
  },
  mounted() {
    console.log(this.hotel);
  },
};
</script>

<style>
.fa-star {
  color: gold;
}
</style>
