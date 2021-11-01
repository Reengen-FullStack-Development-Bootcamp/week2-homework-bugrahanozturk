<template>
  <div>
    <Reservation
      v-for="(item, index) in formCount"
      :key="index"
      :index="index"
      ref="reservation"
    />
    <b-button type="submit" variant="primary" @click="submit()"
      >Submit</b-button
    >
    <b-button class="ml-2" @click="resetForm()">Reset</b-button>
  </div>
</template>

<script>
import Reservation from "@/components/Reservation";
export default {
  components: {
    Reservation,
  },
  created() {
    this.formCount = Number(this.$route.query.formCount);
    this.id = Number(this.$route.query.id);
  },
  data() {
    return { formCount: null, id: null };
  },
  methods: {
    submit() {
      let isNext = true;
      this.$refs.reservation.forEach((element) => {
        const response = element.change();
        if (!response) isNext = false;
      });

      if (isNext)
        this.$router.push({
          path: "payments",
          query: {
            id: this.id,
            count: this.formCount,
          },
        });
    },
  },
};
</script>

<style></style>
