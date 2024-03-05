<template>
  <!--  departments -->
  <div class="w-full sm:py-5 py-1">
    <ul
      class="flex flex-wrap sm:justify-between justify-around sm:w-11/12 md:w-2/4 w-11/12 m-auto sm:ps-0 sm:text-lg text-[14.5px] font-normal font-sans">
      <li @click="Sort('all')" class="hover:text-blue-700 cursor-pointer">
        All
      </li>
      <li @click="Sort(item)" class="hover:text-blue-700 cursor-pointer" v-for="(item, index) of menu" :key="index">{{
        item }}
      </li>

    </ul>
  </div>
  <!-- products -->
  <div class="w-[70%] m-auto my-5 flex flex-wrap">
    <div class="w-[15%] m-2 rounded-md h-auto py-5 shadow hover:shadow-md hover:cursor-pointer"
      v-for="list of   products  ">
      <img :src="list.url" alt="" class="w-1/2 h-28 m-auto" />
      <h1 class="pt-4 px-3 text-sm">{{ list.model }}</h1>
      <h1 class="text-sm px-3 py-2 overflow-hidden line-clamp-2">
        {{ list.name }}
      </h1>
      <h1 class="font-bold text-sm px-3 pb-3">{{ list.price }} $</h1>
      <!-- delete buttom -->
      <button class="text-red-500 border border-red-500 rounded-md px-4 py-2 ml-5 hover:shadow-md"
        @click="Delete(list.id, index)">
        <i class="fa-solid fa-trash"></i>
      </button>
      <!-- update button -->

      <routerLink :to="{
        name: 'update', params: { id: list.id },
      }">
        <button class="text-green-500 border border-green-500 rounded-md px-4 py-2 hover:shadow-md">
          <i class="fa-solid fa-pen"></i>
        </button>
      </routerLink>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { resolveTypeElements } from "vue/compiler-sfc";
import router from "@/router";

let products = ref([]);

let menu = ref([]);


let GetData = function () {
  axios.get("https://mirjaxon.pythonanywhere.com/field/all/").then((resp) => {

    products.value = resp.data.data

  });
}

GetData();


axios.get("https://mirjaxon.pythonanywhere.com/field/models").then((resp) => {
  menu.value = resp.data
});


function Sort(arg) {

  if (arg === 'all') {
    axios.get("https://mirjaxon.pythonanywhere.com/field/all/").then((resp) => {
      products.value = resp.data.data
    });
  } else {
    axios.get(`https://mirjaxon.pythonanywhere.com/field/models/${arg}`).then((resp) => {
      products.value = resp.data
    });

  }
}


// delete 
function Delete(id, index) {
  products.value.splice(index, 1)


  axios.get(`https://mirjaxon.pythonanywhere.com/field/delete/${id}`).then((resp) => {

    products.value = resp.data.data

  });
  GetData();

}




</script>

<style scoped></style>
