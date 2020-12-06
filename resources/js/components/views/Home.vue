<template>
  <div class="home">
    <NavigationComponent></NavigationComponent>
    <div class="main-body pt-4 text-dark">
      <div class="container">
        <div class="row m-0 p-0  bg-white">
          <div class="card-body">
            <h5 class="card-title text-left">Cho thuê Bất động sản</h5>
            <div class="row">
              <div class="item-component col-md-3 text-left" v-for="(owner, i) in owners" :key="i">
                <a href="/viewMotel" class=" border-primary" >
                    <div class="item">
                        <div>
                            <img class="w-100" src="../assets/img/item/nhatro.jpg" alt="">
                        </div>
                        <div class="my-2 ml-2">
                            <h4 class="m-0">{{owner.title}}</h4>
                            <div class="position-relative my-2">
                              <div class="position-absolute btn-rating">Rating: <span v-for="item in owner.rating" :key="item.id"><i class="fas fa-star text-warning"></i></span></div>
                              <button class="position-absolute btn-like text-primary"><i class="far fa-thumbs-up text-primary btn-i-like"></i>{{owner.like}}</button>
                            </div>
                            <br>
                            <div class="d-flex p-1">
                              <h6 class="text-danger mr-2 mb-0">{{owner.giatien}}  </h6>
                              <span> - </span>
                              <h6 class="ml-2 mb-0">  {{owner.dientich}}m<sup>2</sup></h6>
                            </div>
                            <small class="text-muted"><i class="fas fa-angle-right pr-1"></i>{{owner.csvc}}</small>
                        </div>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-4 second-background">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-12 m-0 p-0">
            <ContactComponent></ContactComponent>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";

export default {
  name: "home",
  components: {
    NavigationComponent,
    FooterComponent,
    ContactComponent
  },
  data() {
    return {
      owners: [
        {
          images: [
            "../assets/img/item/nhatro.jpg",
          ],
          title: "Hoàng Anh Dương",
          like: 40,
          rating: 4,
          giatien: "10Triệu",
          dientich: "50",
          csvc: "Có máy nóng lạnh, điều hòa"
        },
        {
          images: [
            "/assets/img/item/nhatro.jpg",
          ],
          title: "Hoàng Anh Dương",
          like: 40,
          rating: 4,
          giatien: "10Triệu",
          dientich: "50",
          csvc: "Có máy nóng lạnh, điều hòa"
        },
        {
          images: [
            "/assets/img/item/nhatro.jpg",
          ],
          title: "Hoàng Anh Dương",
          like: 40,
          rating: 4,
          giatien: "10Triệu",
          dientich: "50",
          csvc: "Có máy nóng lạnh, điều hòa"
        },
        {
          images: [
            "/assets/img/item/nhatro.jpg",
          ],
          title: "Hoàng Anh Dương",
          like: 40,
          rating: 4,
          giatien: "10Triệu",
          dientich: "50",
          csvc: "Có máy nóng lạnh, điều hòa"
        }
      ]
    }
  }
};
</script>
<style scoped>
#app {
  background-color: #e3e3e3;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
h4, h3 {
    font-size: 16px;
}
small {
    font-size: 12px;
}
.item {
    border: 1px solid #e3e3e3;
    border-radius: 5px;
}
.btn-like {
    right: 0;
    border: none;
    background-color: initial;
}
.btn-rating {
    left: 0;
    border: none;
    background-color: initial;
}
i {
  font-size: 14px;
}
.btn-i-like {
    font-size: 18px;
}
button:focus{
  outline: none;
}
</style>