<template>
  <header class="tw-relative tw-overflow-hidden tw-w-full tw-h-screen tw-flex md:tw-items-center tw-justify-center">
    <div class="hero tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0" />
    <img class="heroTxt tw-relative tw-hidden sm:tw-block tw-w-5/6 tw-opacity-75" src="@/assets/img/meowforestTxt.svg" alt="Meow Forest">
    <img class="heroTxt tw-relative sm:tw-hidden tw-w-7/12 tw-self-start tw-mt-36" src="@/assets/img/meowforestTxt_m.svg" alt="Meow Forest">
    <span @click="scrollNext" class="fa-rotate-180 tw-absolute tw-text-white tw-bottom-10 tw-p-10 md:tw-hidden">
      <FontAwesomeIcon :icon="['fas', 'paw']" class="fa-bounce fa-2x" />
    </span>
  </header>
  <section ref="circleRef" class="circleBlock tw-relative tw-mx-auto tw-text-center tw-flex tw-justify-between tw-gap-4 md:tw-gap-24">
    <RouterLink v-for="(list ,i) in circle" :key="i" :to="list.link" class="tw-flex-1 tw-cursor-pointer hover:tw-scale-95 tw-duration-300">
      <span class="circle tw-block tw-w-full tw-rounded-full" :style="{backgroundImage: 'url('+ list.img +')'}" />
      <img :src="list.imgFont" class="tw-w-5/6 sm:tw-w-3/5 tw-pt-4" :alt="list.alt">
    </RouterLink>
  </section>
  <section class="container tw-mt-20 tw-mb-28">
    <img class="tw-w-full tw-hidden md:tw-block tw-opacity-60" src="@/assets/img/line.svg" alt="cat divider line">
    <img class="tw-w-full md:tw-hidden" src="@/assets/img/line_m.svg" alt="cat divider line">
    <TheTitle titletxt="關於喵森" subtxt="About Meow Forest" />
    <div class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-x-20">
      <div class="tw-relative">
        <img class="tw-w-full tw-h-auto tw-opacity-0" src="@/assets/img/cats_a.png" alt="three cats(left)">
        <img class="tw-w-full tw-h-auto tw-absolute tw-left-0 cats_a" src="@/assets/img/cats_a.png" alt="three cats(left)">
        <img class="tw-w-full tw-h-auto tw-absolute tw-left-0 cats_b" src="@/assets/img/cats_b.png" alt="three cats(right)">
        <img class="tw-w-full tw-h-auto tw-absolute tw-left-0 cats_c" src="@/assets/img/cats_c.png" alt="three cats(center)">
      </div>
      <div class="intro tw-w-2/3 tw-font-medium tw-leading-8 tw-mt-4 tw-pb-1">
        <!-- <p>建立喵森之前，我是一個有三隻貓的貓奴，因為很熱衷尋找貓咪的食物跟用品，認識了很多貓相關產品，也很重視貓咪們的食物，想給他們天然無害的用品。</p>
        <p>漸漸開始熱衷研究貓用產品，有國外的品牌與台灣本土的產品，想把最好的貓咪各種用品，推薦給家裡有寶貝貓咪的主人們。</p>
        <p>喵森的名字由來，希望帶給大家的產品，像天然的森林一樣，純淨自然，讓貓咪們有著自由自在的環境，成為森系貓咪！</p> -->
        <p>Before establishing Meow Forest, I was a cat servant with three cats. Because I was passionate about finding cat food and supplies, I became acquainted with many cat-related products and placed great importance on providing my cats with natural and harmless items.</p>
        <p>Gradually, I developed a strong interest in researching cat products, both from international brands and local Taiwanese products, with the goal of recommending the best variety of cat supplies to cat owners who have precious feline companions at home.</p>
        <p>The name Meow Forest originates from the desire to bring products that resemble a natural forest, pure and pristine, offering cats a free and unrestricted environment, thus becoming a haven for forest-loving cats!</p>
      </div>
    </div>
  </section>
  <section class="tw-bg-primary tw-py-20">
    <p class="tw-text-white tw-text-center tw-text-3xl md:tw-text-4xl tw-font-bold">
      SELECTED ITEM<br/>
      <span class="tw-block tw-text-base tw-font-normal">The Best Product For You</span>
    </p>
    <SelectedItem />
  </section>
  <section class="container tw-pt-10">
    <TheTitle titletxt="購物流程" subtxt="Shopping Process" />
    <div class="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-6">
      <div v-for="(item, i) in flow" :key="i" class="flow tw-flex tw-flex-col tw-bg-white">
        <p class="tw-flex-1">
          <span class="tw-text-primary tw-block tw-text-xl tw-font-bold tw-mb-2">{{ item.title }}</span>
          <span>{{ item.txt }}</span>
        </p>
        <img class="tw-block tw-mx-auto tw-w-3/5 lg:tw-w-full tw-mt-6" :src="item.img" alt="cat display">
      </div>
      <div v-for="(card ,i) in notice" :key="i+card.title" class="notice lg:tw-col-span-2 tw-bg-white">
        <span class="tw-block tw-text-xl tw-font-bold tw-mb-2">{{ card.title }}</span>
        <ul class="tw-ml-6">
          <li v-for="list in card.content" :key="list">{{ list }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TheTitle from '@/components/global/TheTitle.vue'
import SelectedItem from '@/components/user/SelectedItem.vue'
// image
import list1 from '@/assets/img/list1.png'
import list2 from '@/assets/img/list2.png'
import list3 from '@/assets/img/list3.png'
import listFont1 from '@/assets/img/listFont1.svg'
import listFont2 from '@/assets/img/listFont2.svg'
import listFont3 from '@/assets/img/listFont3.svg'
import cat1 from '@/assets/img/process1.png'
import cat2 from '@/assets/img/process2.png'
import cat3 from '@/assets/img/process3.png'
import cat4 from '@/assets/img/process4.png'

const circleRef = ref(null)
const scrollNext = () => {
  const pos = circleRef.value.offsetTop
  window.scrollTo({
    top: pos - 80,
    behavior: 'smooth'
  })
}
const circle = [
  {
    link: 'products?category=food',
    img: list1,
    imgFont: listFont1,
    alt: 'Cat Food'
  },
  {
    link: 'products?category=use',
    img: list2,
    imgFont: listFont2,
    alt: 'Cat Use'
  },
  {
    link: 'products?category=toy',
    img: list3,
    imgFont: listFont3,
    alt: 'Cat Toy'
  }
]
const flow = [
  {
    title: '1. Choose Products',
    txt: 'Add Products in Cart, then go to Cart.',
    img: cat1
  },
  {
    title: '2. Check Cart',
    txt: 'Comfirm purchase of items, select delivery and payment method.',
    img: cat2
  },
  {
    title: '3. Checkout',
    txt: 'Fill in the order information, credit card details. If choosing ATM payment, the remittance account will be displayed on the finish page.',
    img: cat3
  },
  {
    title: '4. Finish',
    txt: 'After payment, your order will be shipped, you will receive in few days! If you pick up at store, available for pickup next day.',
    img: cat4
  }
]
const notice = [
  {
    title: 'Return and Exchange Policy',
    content: [
      'According to the Consumer Protection Act, you are entitled to a seven-day cooling-off period starting from the day after the goods are delivered. However, please note that the cooling-off period is not a trial period.',
      'Please note that the products are food items, and for hygiene and safety reasons, except in the case of defective products, the exchanged items must be “brand new and unused“ If the packaging has been opened, we regret to inform you that exchange services cannot be provided.',
      'If you wish to return the product for reasons other than quality issues, please return the brand new item to our company within 7 days. You will be responsible for the shipping fees.',
      'If you encounter any product defects within seven days of purchase, please contact us, and we will provide unconditional returns or exchanges. However, we do not accept returns or exchanges for products received after seven days (including cases where the product is missing, as we are unable to send replacements).',
      'If you need to process returns or exchanges, please contact our customer service, and we will assist you as soon as possible.'
    ]
  },
  {
    title: 'Shipping Information',
    content: [
      'The home delivery fee (normal temperature) is NTD.80. Pick-up at Meow Forest store is free of charge. Only one address can be used for delivery per order. If you need to send to different addresses, please place separate orders.',
      'For a single order with a total purchase amount of NTD.3,000 or more, you will be eligible for free shipping (limited to Taiwan Main Island, excluding group purchases).',
      'Normally, the delivery will take approximately 3-5 business days after placing the order. However, during holidays such as Chinese New Year, Mid-Autumn Festival, Dragon Boat Festival, or when there is a high volume of shipments or typhoon impacts, the delivery may not be able to meet the specified time. We recommend placing your order a few days in advance to avoid any inconvenience or delays.',
      'During typhoon days or holidays, delivery service may not be available. We appreciate your understanding.',
      'The weather conditions will be based on the announcements made by the Central Weather Bureau and local city/county governments.'
    ]
  }
]
</script>

<style lang="scss" scoped>
.hero{
  animation: zoom 30s ease-out infinite;
  background-position: center;
  background-size: cover;
  background-image: url(@/assets/img/hero_m.jpg);
  @media (min-width: 640px) {
    background-image: url(@/assets/img/hero.jpg);
  }
  &Txt{
    max-width: 1200px;
    animation: heartbeat 1.2s 1.5s ease-in infinite;
  }
}
.circleBlock{
  margin-top: 1.5rem;
  max-width: 88%;
  width: 880px;
  @media (min-width: 768px) {
    margin-top: -5rem;
  }
}
.circle{
  padding-bottom: 100%;
  background-color: var(--thirdColor);
  background-size: cover;
  background-position: center;
}
.intro{
  background-image: url('@/assets/img/txtline.png');
  background-position: 0 30px;
}
.flow, .notice{
  border-radius: 40px;
  border: 2px solid var(--primaryColor);
}
.flow{
  padding: 32px 32px 40px 32px;
  @media (min-width: 1024px) {
    height: 400px
  }
}
.notice{
  padding: 32px;
  border-color: var(--themeColor);
}
@keyframes zoom {
  0% {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
.cats_a{
  animation: cats_a 6s ease-in-out infinite;
}
.cats_b{
  animation: cats_b 6s .5s ease-in-out infinite;
}
.cats_c{
  animation: cats_c 6s 1s ease-in-out infinite;
}
@keyframes cats_a {
  0%, 100%{
    opacity: 0;
    transform: translateX(-40%) translateY(70%);
  }
  10%, 85%{
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
  99.6%{
    opacity: 0;
    transform: translateX(5%) translateY(-25%);
  }
}
@keyframes cats_b {
  0%, 100%{
    opacity: 0;
    transform: translateX(40%) translateY(70%);
  }
  10%, 85%{
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
  99.6%{
    opacity: 0;
    transform: translateX(-5%) translateY(-25%);
  }
}
@keyframes cats_c {
  0%, 100%{
    opacity: 0;
    transform: translateX(0) translateY(70%);
  }
  5%, 85%{
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
  99.6%{
    opacity: 0;
    transform: translateX(0) translateY(-25%);
  }
}
</style>
