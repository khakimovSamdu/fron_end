<template>

  <routerLink to="/">
    <span class="border px-4 py-2 rounded-md lg:mx-44 md:mx-36 mx-10 mt-5 shadow-xl inline-block">
      <i class="fa-solid fa-caret-left"></i>
      Bask
    </span>
  </routerLink>


  <div class=" lg:w-1/2 w-full  m-auto lg:my-5 my-3.5 rounded lg:py-10 py-0 shadow-xl">
    <h1 class="text-center font-bold">Update smartphone</h1>

    <p class=" px-16 py-2 font-bold ">Name</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="name">
    <p class=" px-16 py-2 font-bold ">Company</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="company">

    <p class=" px-16 py-2 font-bold ">Color</p>
    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="color">

    <p class=" px-16 py-2 font-bold ">Price</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="price">
    <p class=" px-16 py-2 font-bold ">RAM</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="RAM">
    <p class=" px-16 py-2 font-bold ">Memory</p>

    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="memory">
    <p class=" px-16 py-2 font-bold ">Img url</p>
    <input type="text" class="border w-10/12 border-black rounded py-1 m-auto block" v-model="img_url">

    <button class="border border-black rounded w-10/12 my-7 py-2 m-auto block bg-slate-100 hover:bg-slate-200"
      @click="Update(router.params.id)">
      Save
    </button>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

let img_url = ref("");
let name = ref("");
let company = ref("");
let color = ref("");
let price = ref("");
let RAM = ref("");
let memory = ref("");

let router = useRoute();
let routers = useRouter();

onMounted(() => {
  axios
    .get(`https://allamurod.pythonanywhere.com/smartphone/get/${router.params.id}`)
    .then((resp) => {
      (img_url.value = resp.data.img_url),
        (name.value = resp.data.name),
        (company.value = resp.data.company),
        (color.value = resp.data.color),
        (price.value = resp.data.price),
        (RAM.value = resp.data.RAM),
        (memory.value = resp.data.memory);
    });




});



const Update = (id) => {
  let dataPost = {
    img_url: img_url.value,
    name: name.value,
    company: company.value,
    color: color.value,
    price: price.value,
    RAM: RAM.value,
    memory: memory.value,
  };

  console.log(dataPost)
  axios
    .post(`https://allamurod.pythonanywhere.com/smartphone/update/${id}/`, dataPost)
    .then((resp) => {
      console.log(resp.data);
    });
  routers.push("/");
};
</script>

<style scoped></style>
