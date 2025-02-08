export default {
  props: {
    text: String,
  },
  methods: {
    changeName() {
      this.$emit("change-name", { name: "Kevin" });
    },
  },
};
