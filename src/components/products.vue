<template>
  <!--  departments -->
  <div class="w-full sm:py-5 py-1">
    <ul
      class="flex flex-wrap sm:justify-between justify-around sm:w-11/12 md:w-2/4 w-11/12 m-auto sm:ps-0 sm:text-lg text-[14.5px] font-normal font-sans"
    >
      <li @click="Sort('')" class="hover:text-blue-700 cursor-pointer">
        Apple
      </li>
      <li @click="Sort('')" class="hover:text-blue-700 cursor-pointer">
        Samsung
      </li>
      <li @click="Sort('')" class="hover:text-blue-700 cursor-pointer">OPPO</li>
      <li @click="Sort('')" class="hover:text-blue-700 cursor-pointer">
        Nokia
      </li>
      <li @click="Sort('')" class="hover:text-blue-700 cursor-pointer">
        Redmi
      </li>
      <li @click="Sort('')" class="hover:text-blue-700 cursor-pointer">LG</li>
    </ul>
  </div>
  <!-- products -->
  <div class="w-[70%] m-auto my-5 flex flex-wrap">
    <div
      class="w-[15%] m-2 rounded-md h-auto py-5 shadow hover:shadow-md hover:cursor-pointer"
      v-for="list of products"
    >
      <img :src="list.image" alt="" class="w-1/2 h-28 m-auto" />
      <h1 class="text-sm px-3 py-5 my-7 overflow-hidden line-clamp-2 h-[60px]">
        {{ list.title }}
      </h1>
      <!-- delete buttom -->
      <button
        class="text-red-500 border border-red-500 rounded-md px-4 py-2 mx-8 hover:shadow-md"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
      <!-- update button -->
      <button
        class="text-green-500 border border-green-500 rounded-md px-4 py-2 hover:shadow-md"
      >
        <i class="fa-solid fa-pen"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

let products = ref([]);

axios.get("https://fakestoreapi.com/products").then((data) => {
  products.value = data.data;
});
</script>

<style scoped></style>
