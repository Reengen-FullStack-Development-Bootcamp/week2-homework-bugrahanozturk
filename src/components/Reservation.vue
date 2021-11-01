<template>
  <div>
    <b-form>
      <h3>Person - {{ index }}</h3>
      <b-form-group
        id="example-input-group-1"
        label="Email"
        label-for="example-input-1"
      >
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.email.$model"
          :state="validateState('email')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be at least 12
          characters.</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group
        id="example-input-group-1"
        label="Name"
        label-for="example-input-1"
      >
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.name.$model"
          :state="validateState('name')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be at least 3
          characters.</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group
        id="example-input-group-1"
        label="Id Number"
        label-for="example-input-1"
      >
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.id.$model"
          :state="validateState('id')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be at least 10
          characters.</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group
        id="example-input-group-1"
        label="Hes Code"
        label-for="example-input-1"
      >
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.hesCode.$model"
          :state="validateState('hesCode')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be at least 10
          characters.</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group
        id="example-input-group-1"
        label="Phone Number"
        label-for="example-input-1"
      >
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.phoneNumber.$model"
          :state="validateState('phoneNumber')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be number.</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group
        id="example-input-group-1"
        label="Age"
        label-for="example-input-1"
      >
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.age.$model"
          :state="validateState('age')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be greater than
          6.</b-form-invalid-feedback
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import reservationValidation from "@/mixins/validations/reservation-validation.vue";
export default {
  mixins: [reservationValidation],
};
</script>
<style>
body {
  padding: 1rem;
}
</style>
