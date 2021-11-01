<template>
  <div>
    <img :src="hotel.image" alt="" />
    <p>{{ hotel.name }}</p>
    <p>{{ hotel.location }}</p>
    <p>{{ hotel.price }}</p>
    <div class="stars">
      <i class="fas fa-star" v-for="(item, i) in hotel.star" :key="i"></i>
    </div>
    <p>Lütfen rezervasyon yapılacak kişi sayısını seçiniz.</p>
    <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>
    <router-link
      :to="`/reservation?formCount=${selected}&id=${this.$route.params.id}`"
    >
      <div>
        <b-button>rezervasyon yap</b-button>
      </div>
    </router-link>
  </div>
</template>

<script>
import data from "../assets/data.json";
export default {
  created() {
    const id = this.$route.params.id;
    this.hotel = data.find((d) => d.id == id);
  },
  data() {
    return {
      hotel: null,
      selected: "A",
      options: [
        { item: "1", name: "1" },
        { item: "2", name: "2" },
        { item: "3", name: "3" },
        { item: "4", name: "4" },
        { item: "5", name: "5" },
      ],
    };
  },
};
</script>

<style></style>
