<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="menu">
        <ul>
          <li><a href="#" > Home </a></li>
          <li><a href="#" > List Product </a></li>
          <li><a href="#" > Blog </a></li>
          <li><a href="#" > About Us </a></li>
          <li><a href="#" > Cart </a></li>
          <li><a href="#" > Checkout </a></li>
        </ul>
      </div>
      <div class="acccount">
        <div class="login">
          <ul>
            <li v-show=!isShow>
          <button class="btn btn-success" @click.prevent="change" >login</button>

            </li>
            <ul v-show=isShow>
              <li><button class="btn btn-success"  @click.prevent="change" >logout</button></li>
              <li class="avatar">
               
              </li>
            </ul>
          </ul>
        </div>
        <div class="avatar">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["isShow"]),
  },
  methods: {
    ...mapMutations(["change"])
  },
};
</script>
 <style scoped>
 .logo img {
   width:50px;
   height:50px;
 }
 .header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 50px;
 }
 .menu ul {
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .menu ul li { margin: 0 10px;
 padding: 10px 5px;
 }
 .menu ul li a {
   padding: 10px 5px;
   text-decoration: none;
   color: #222;
   transition: all 0.3s ease-in;
 } 
 .menu ul li a:hover {
   color: greenyellow
 }
 p {
     cursor: pointer;
 }
 li {
   list-style-type: none
 }
</style>
 