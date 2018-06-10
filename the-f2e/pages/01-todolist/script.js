import Header from "@/components/layout/header_01/Header.vue";


export default {
  components: {
    Header,
  },

  head: () => ({
    title: 'Mido的The-F2E挑戰｜01.TodoList',
  }),

  mounted() {
    $(document).ready(function () {
      $(".edit-btn").click(function () {
        $(".edit-block-focus").toggleClass("active");
      });
    });
  },
};
