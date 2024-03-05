<template>

  <routerLink to="/">
    <span class="border px-4 py-2 rounded mx-44 mt-5 shadow-xl inline-block">
    backout
  </span>
  </routerLink>

 
  <div class=" lg:w-1/2 w-full  m-auto lg:my-5 my-3.5 rounded lg:py-10 py-0 shadow-xl">
    <h1 class="text-center font-bold">Update page</h1>

    <p class=" px-16 py-2 font-bold ">Image</p>
    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="Image">
    <p class=" px-16 py-2 font-bold ">Name</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="name">
    <p class=" px-16 py-2 font-bold ">Model</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="model">
    <p class=" px-16 py-2 font-bold ">Price</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="price">
    <p class=" px-16 py-2 font-bold ">Ram</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="ram">
    <p class=" px-16 py-2 font-bold ">Memory</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="memory">
    <button
      class="border border-black rounded w-10/12 my-7 py-2 m-auto block bg-slate-100 hover:bg-slate-200">Save</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


let Image = ref('');
let name = ref('');
let model = ref('');
let price = ref('');
let ram = ref('');
let memory = ref('');


let router = useRoute();

onMounted(() => {




})

</script>

<style scoped></style>
