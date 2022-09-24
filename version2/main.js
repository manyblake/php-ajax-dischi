const app = new Vue({
  el: "#app",

  data() {
    return {
      records: [],
    };
  },

  methods: {
    getRecords() {
      axios
        .get("http://localhost/php-ajax-dischi/version1/")
        .then((response) => {
          this.records.push(...response.data.response);
        });
    },
  },

  mounted() {
    this.getRecords();
  },
});
