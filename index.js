let app = Vue.createApp({
  data() {
    return {
      isLoading: true,
      isModalLoading: true,
      productInfo : null,
      productsList: null,
      showModal: false,
      productId: null,
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
    async getProductDetail(id){
      console.log(id)
      try {
        let data = await fetch(
          "https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/"+id
        );
        let product = await data.json();
        this.productInfo = product;
        this.isModalLoading = false;
        console.log(products)
        console.log(this.isLoading)
      } catch (error) {
        console.error("Error fetching products:", error);
        this.isModalLoading = false;
      }
    },
    closeModal(){
      this.isModalLoading = false
      this.productInfo = null
    }
  },
});

app.mount("#app");
