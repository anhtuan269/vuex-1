<template>
  <div class="container" v-show="isShow">
    <h2>Feature Product</h2>
     <div class="products">
    <div class="product" v-for="(product, index) in products" :key="index">
      <figure>
        <a href="#">
          <img :src="product.default_thumbnail_url" alt="" />
        </a>
      </figure>
      <div class="content">
        <p>Ghế Thanh Lý</p>
        <h2>
          <a href="#" @click.prevent>{{ product.name }}</a>
        </h2>
        <span class="price"> $500.000</span>
        <div class="vote">
          <ul>
            <li>
              <i class="fas fa-star voted"></i>
            </li>
            <li>
              <i class="fas fa-star voted"></i>
            </li>
            <li>
              <i class="fas fa-star voted"></i>
            </li>
            <li>
              <i class="fas fa-star voted"></i>
            </li>
            <li>
              <i class="fas fa-star"></i>
            </li>
            <li>
              <span> ({{ index }})</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

 <script>
 import { mapState, mapGetters, mapActions} from 'vuex'
 export default {

     computed: {
        ...mapState(["isShow"]),
         ...mapGetters(["products"]),
         ...mapActions(["getProduct"])
         
     },
     methods: {
     },
     created(){
        this.getProduct;
     }
 }

</script>

 <style scoped>
 li {
  list-style: none;
}
.products {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-content: space-between;
  max-height: 400px;
  margin-top: 50px;
}
.products .product {
  margin: 0 25px 30px;
  max-height: 500px;
}
.products .product .content {
  margin-top: 30px;
}
.products .product .content  p {
  margin-bottom:10px;
  color: greenyellow;
}
.products .product .content h2 {
  margin-bottom: 10px;
}
.products .product .content span {
  margin-bottom: 10px;
  color: greenyellow;
}
.products .product figure {
  overflow: hidden;
}
.products .product figure img {
  width: 100%;
  height: 320px;
  transition: all 0.3s linear;
}

i {
  font-weight: 400;
  margin: 10px 3px;
  font-size: 14px;
}
i.voted {
  color: gold;
  font-weight: 700;
}
.vote ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.products .product .content .vote ul li  span {
  color: #333;
  margin-left: 5px;
}
</style>
 