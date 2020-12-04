<template>
  <div class="item-component col-md-3 text-left">
    <a href="/viewMotel" class=" border-primary" >
        <div class="item">
            <div>
                <img class="w-100" src="../assets/img/item/nhatro.jpg" alt="">
            </div>
            <div class="my-2 ml-2">
                <h4 class="m-0">Căn hộ Cầu Giấy</h4>
                <small class="text-muted m-0">30 m² - 1 PN</small>
                <h3 class="text-danger my-1">3 triệu/tháng </h3>
                <small class="text-muted"><i class="fas fa-angle-right pr-1"></i> Có điều hòa, máy nóng lạnh</small>
            </div>
        </div>
    </a>
  </div>
</template>

<script>
export default {
   name: "ItemComponent",
};
</script>

<style scoped>
.list-nostyle {
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
</style>
