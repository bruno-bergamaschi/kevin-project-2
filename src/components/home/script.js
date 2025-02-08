import AButton from "@/components/button";
import CustomRow from "@/components/custom-row";

export default {
  name: "MeuComponente",
  components: {
    AButton,
    CustomRow,
  },
  data() {
    return {
      showList: true,
      name: "Kevin",
    };
  },
  methods: {
    toggleList() {
      this.showList = !this.showList;
    },
    changeName(value) {
      console.log(value);
      this.name = value;
    },
  },
};
