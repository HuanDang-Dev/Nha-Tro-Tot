<template>
  <div class="home">
    <NavigationComponent></NavigationComponent>
    <div class="main-body pt-4 text-dark">
      <div class="container">
        <div class="row m-0 p-0  bg-white">
          <div class="card-body">
            <h5 class="card-title text-left">Cho thuê Bất động sản</h5>
            <div class="row">
              <ItemComponent></ItemComponent>
              <ItemComponent></ItemComponent>
              <ItemComponent></ItemComponent>
              <ItemComponent></ItemComponent>
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
import ItemComponent from "../components/ItemComponent.vue";

export default {
  name: "home",
  components: {
    NavigationComponent,
    FooterComponent,
    ContactComponent,
    ItemComponent
  }
};
</script>
<style scoped>
ul li {
  list-style: none;
}
</style>