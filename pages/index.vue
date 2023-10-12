<template>
  <div class="div1">
    <!-- HERO SECTION -->
    <div class="hero">
      <Swiper :navigation="true" :loop="true" :autoplay="{delay: 2500,disableOnInteraction: false,  }"  :modules="modules"  class="hero-swiper">
        <SwiperSlide class="hero__slide" v-for="item in 3" :key="item">
          <div class="hero">
            <div class="container">
              <div class="text-wrapper">
                <h1>Iphone 12 pro max</h1>
                <p>
                  5G speed. A14 Bionic, the fastest chip in a smartphone.An
                  edge-to-edge OLED display. Ceramic Shield with four times better
                  drop performance. And Night mode on every camera. iPhone 12 has
                  it all — in two perfect sizes.
                </p>
                <NuxtLink class="btn">Купить iPhone 12</NuxtLink>
              </div>
            </div>
            <img src="../assets/img/png/iphone.png" alt="" class="iphone" />
            <img src="../assets/img/png/big.png" alt="" class="big" />
            <img src="../assets/img/png/small.png" alt="" class="small" />
            <img src="../assets/img/png/medium.png" alt="" class="medium" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- HERO SECTION -->
      
    <div class="category">
        <div class="container">
          <h1>Категории</h1>
          <hr>      
          <Swiper :navigation="true" :loop="true"  :modules="modules" class="category_swiper" :slides-per-view="4" :space-between="0">
          <SwiperSlide class="category_swiper" v-for="item in cat?.data" :key="item">
            <!-- <pre>{{ item }}</pre> -->
            <ul>
              <li>
                <img :src="item.imageUrl" alt="">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>


    <div class="interest">
      <div class="container">
        <h1 class="h1">Может заинтересовать</h1>
        <hr>
        <Swiper :navigation="true" :loop="true"  :modules="modules" class="category_swiper" :slides-per-view="3"
         :space-between="80">
          <SwiperSlide class="_swiper" v-for="item in newPro?.data?.products?.items" :key="item">
            <ul>
              <li>
                <span>новый</span>
                <button class="likee" @click="liked = !liked">
                  <img v-if="liked" src="@/assets/img/svg/Favorite.svg" alt="" class="like">
                  <img   v-if="!liked" src="@/assets/img/svg/favoritered.svg" alt="" class="like likes">
                </button>
                <img :src="item?.imageUrl" alt="" class="tel">
                <div class="text">
                  <NuxtLink :to="`/product/${item.slug}`"><p>{{ item.name }}</p></NuxtLink>
                  <p class="pric">{{ item?.old_price }}сум</p>
                  <h1 class="price">{{item?.price}} <br> cум</h1>
                  <button class="btn">
                    <img src="@/assets/img/svg/bag_beliy.svg" alt="">
                    Корзину
                  </button>
                  <img src="@/assets/img/svg/balancegreen.svg" alt="" class="bal">
                </div>
              </li>
              </ul>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>


    <div class="interest">
      <div class="container">
        <h1 class="h1">Хиты продаж</h1>
        <hr>
        <Swiper :navigation="true" :loop="true"  :modules="modules" class="category_swiper" :slides-per-view="3"
         :space-between="80">
          <SwiperSlide class="_swiper" v-for="item in newPro?.data?.products?.items" :key="item">
            <ul>
              <li>
                <span>новый</span>
                <button class="likee" @click="liked = !liked">
                  <img v-if="liked" src="@/assets/img/svg/Favorite.svg" alt="" class="like">
                  <img   v-if="!liked" src="@/assets/img/svg/favoritered.svg" alt="" class="like likes">
                </button>
                <img :src="item?.imageUrl" alt="" class="tel">
                <div class="text">
                  <NuxtLink :to="`/product/${item.slug}`"><p>{{ item.name }}</p></NuxtLink>
                  <p class="pric">{{ item?.old_price }}сум</p>
                  <h1 class="price">{{item?.price}} <br> cум</h1>
                  <button class="btn">
                    <img src="@/assets/img/svg/bag_beliy.svg" alt="">
                    Корзину
                  </button>
                  <img src="@/assets/img/svg/balancegreen.svg" alt="" class="bal">
                </div>
              </li>
              </ul>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>


    <div class="interest">
      <div class="container">
        <h1 class="h1">Новинки</h1>
        <hr>
        <Swiper :navigation="true" :loop="true"  :modules="modules" class="category_swiper" :slides-per-view="3"
         :space-between="80">
          <SwiperSlide class="_swiper" v-for="item in newPro?.data?.products?.items" :key="item">
            <ul>
              <li>
                <span>новый</span>
                <button class="likee" @click="liked = !liked">
                  <img v-if="liked" src="@/assets/img/svg/Favorite.svg" alt="" class="like">
                  <img   v-if="!liked" src="@/assets/img/svg/favoritered.svg" alt="" class="like likes">
                </button>
                <img :src="item?.imageUrl" alt="" class="tel">
                <div class="text">
                  <NuxtLink :to="`/product/${item.slug}`"><p>{{ item.name }}</p></NuxtLink>
                  <p class="pric">{{ item?.old_price }}сум</p>
                  <h1 class="price">{{item?.price}} <br> cум</h1>
                  <button class="btn">
                    <img src="@/assets/img/svg/bag_beliy.svg" alt="">
                    Корзину
                  </button>
                  <img src="@/assets/img/svg/balancegreen.svg" alt="" class="bal">
                </div>
              </li>
              </ul>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>


    <div class="interest">
      <div class="container">
        <h1 class="h1">Техника Apple</h1>
        <hr>
        <Swiper :navigation="true" :loop="true"  :modules="modules" class="category_swiper" :slides-per-view="3"
         :space-between="80">
          <SwiperSlide class="_swiper" v-for="item in newPro?.data?.products?.items" :key="item">
            <ul>
              <li>
                <span>новый</span>
                <button class="likee" @click="liked = !liked">
                  <img v-if="liked" src="@/assets/img/svg/Favorite.svg" alt="" class="like">
                  <img   v-if="!liked" src="@/assets/img/svg/favoritered.svg" alt="" class="like likes">
                </button>
                <img :src="item?.imageUrl" alt="" class="tel">
                <div class="text">
                  <NuxtLink :to="`/product/${item.slug}`"><p>{{ item.name }}</p></NuxtLink>
                  <p class="pric">{{ item?.old_price }}сум</p>
                  <h1 class="price">{{item?.price}} <br> cум</h1>
                  <button class="btn">
                    <img src="@/assets/img/svg/bag_beliy.svg" alt="">
                    Корзину
                  </button>
                  <img src="@/assets/img/svg/balancegreen.svg" alt="" class="bal">
                </div>
              </li>
              </ul>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>


    <div class="work">
      <div class="container">
        <h1 class="h1">Как мы работаем</h1>
        <hr>
            <ul>
              <li>
                <img src="@/assets/img/png/shoppingonline.png" alt="" class="shop">
                <h1>Покупка в рассрочку</h1>
                <p class="wop">Удобная онлайн рассрочка на товары бытовой техники в ТОП-ИТ</p>
              </li>
              <li>
                <img src="@/assets/img/png/truck.png" alt="" class="trc">
                <h1>Бесплатная доставка</h1>
                <p class="alone">Условия доставки товаров в ТОП-ИТ</p>
              </li>
              <li>
                <img src="@/assets/img/png/security.png" alt="" class="sec">
                <h1>Гарантия на товары</h1>
                <p class="wop">Узнайте всё о гарантии и возврате товара интернет- магазина ТОП-ИТ</p>
              </li>
              <li>
                <img src="@/assets/img/png/gift.png" alt="" class="gif">
                <h1>Бонусная система</h1>
                <p class="help">Бонусная система</p>
              </li>
              <li>
                <img src="@/assets/img/png/chat.png" alt="" class="cht">
                <h1>Помощь</h1>
                <p class="help">Частые вопросы</p>
              </li>
            </ul>
      </div>
    </div>
    
  </div>
</template>


<script setup>
import "swiper/css";

import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

const liked = ref(false)
const like = ref(false)
const likes = ref(false)
const likel = ref(false)
const likea = ref(false)
const modules = [Navigation, Autoplay];


const api = useRuntimeConfig().public;

  const { data: cat } = useFetch(api.baseUrl + '/product-manager/category/index')
  const { data: menu } = useFetch(api.baseUrl + '/product-manager/product/stocks');
  const { data: newPro } = useFetch(api.baseUrl + '/product-manager/product/new-comers-view?nameSort=3&priceSort=4');
</script>

<style lang="scss" scoped>
hr{
  margin-bottom: 30px;
}
.category{
  margin-top: 116px;
}
.category_swiper{
  margin: 10px 0 10px 0;
}

</style>