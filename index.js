let app = Vue.createApp({
  data() {
    return {
      isLoading: true,
      productsList: null,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        let data = await fetch(
          "https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products"
        );
        let products = await data.json();
        this.productsList = products;
        this.isLoading = false;
        console.log(products)
        console.log(this.isLoading)
      } catch (error) {
        console.error("Error fetching products:", error);
        this.isLoading = false;
      }
    },
  },
});

app.mount("#app");
