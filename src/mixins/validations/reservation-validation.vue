<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  minValue,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  props: ["index"],

  data() {
    return {
      form: {
        name: null,
        id: null,
        hesCode: null,
        phoneNumber: null,
        age: null,
        email: null,
      },
    };
  },
  validations: {
    form: {
      email: {
        required: true,
        email: true,
        minLength: minLength(12),
      },
      hesCode: {
        required,
        minLength: minLength(10),
        maxLenth: maxLength(10),
      },
      name: {
        required,
        minLength: minLength(3),
        maxLenth: maxLength(20),
      },
      id: {
        required,
        minLength: minLength(10),
        maxLenth: maxLength(10),
        typeof: Number,
      },
      phoneNumber: {
        required,
        minLength: minLength(10),
        maxLenth: maxLength(10),
        typeof: Number,
      },
      age: {
        required,
        minValue: minValue(6),
      },
    },
  },
  methods: {
    validateState(value) {
      const { $dirty, $error } = this.$v.form[value];

      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        id: null,
        hesCode: null,
        phoneNumber: null,
        age: null,
        email: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    change() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return false;

      return true;
    },
  },
};
</script>
