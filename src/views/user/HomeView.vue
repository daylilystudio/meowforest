<template>
  <header class="tw-relative tw-overflow-hidden tw-w-full tw-h-screen tw-flex md:tw-items-center tw-justify-center">
    <div class="hero tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0" />
    <img class="tw-relative tw-hidden sm:tw-block tw-w-5/6" src="@/assets/img/meowforestTxt.svg" alt="Meow Forest">
    <img class="tw-relative sm:tw-hidden tw-w-7/12 tw-self-start tw-mt-36" src="@/assets/img/meowforestTxt_m.svg" alt="Meow Forest">
    <span @click="scrollNext" class="fa-rotate-180 tw-absolute tw-text-white tw-bottom-10 tw-p-10 md:tw-hidden">
      <font-awesome-icon :icon="['fas', 'paw']" class="fa-bounce fa-2x" />
    </span>
  </header>
  <section class="circleBlock tw-relative tw-mx-auto tw-text-center tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-gap-y-8">
    <a class="sm:tw-w-1/4 tw-cursor-pointer hover:tw-scale-95 tw-duration-300" v-for="(list ,i) in circle" :key="i">
      <span class="circle tw-block tw-w-full tw-rounded-full" :style="{backgroundImage: 'url('+ list.img +')'}" />
      <img :src="list.imgFont" class="tw-w-3/5 tw-pt-4" :alt="list.alt">
    </a>
  </section>
  <section class="container tw-mt-20 tw-mb-28">
    <img class="tw-w-full tw-hidden md:tw-block tw-opacity-60" :src="divider" alt="cat divider line">
    <img class="tw-w-full md:tw-hidden" :src="dividerM" alt="cat divider line">
    <TheTitle titletxt="關於喵森" subtxt="About Meow Forest" />
    <div class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-x-20">
      <img class="tw-max-w-md tw-w-3/5 tw-pl-4" :src="threeCats" alt="three cats">
      <p class="intro tw-font-medium tw-leading-8 tw-mt-4 tw-pb-1">
        建立喵森之前，我是一個有三隻貓的貓奴，因為很熱衷尋找貓咪的食物跟用品，認識了很多貓相關產品，也很重視貓咪們的食物，想給他們天然無害的用品。<br/><br/>
        漸漸開始熱衷研究貓用產品，有國外的品牌與台灣本土的產品，想把最好的貓咪各種用品，推薦給家裡有寶貝貓咪的主人們。<br/><br/>
        喵森的名字由來，希望帶給大家的產品，像天然的森林一樣，純淨自然，讓貓咪們有著自由自在的環境，成為森系貓咪！
      </p>
    </div>
  </section>
  <section class="bg-primary tw-py-20">
    <p class="tw-text-white tw-text-center tw-text-3xl md:tw-text-4xl tw-font-bold">
      SELECTED ITEM<br/>
      <span class="tw-block tw-text-base tw-font-normal">The Best Product For You</span>
    </p>
    <SelectedItem />
  </section>
  <section class="container tw-py-10 md:tw-py-28">
    <TheTitle titletxt="購物流程" subtxt="Shopping Process" />
    <div class="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-6">
      <div v-for="(item, i) in flow" :key="i" class="flow tw-flex tw-flex-col tw-bg-white">
        <p class="tw-flex-1">
          <span class="text-primary tw-block tw-text-xl tw-font-bold tw-mb-2">{{item.title}}</span>
          <span>{{item.txt}}</span>
        </p>
        <img class="tw-block tw-mx-auto sm:tw-w-3/4 lg:tw-w-full tw-mt-6" :src="item.img" alt="cat display">
      </div>
      <div v-for="(card ,i) in notice" :key="i+card.title" class="notice lg:tw-col-span-2 tw-bg-white">
        <span class="tw-block tw-text-xl tw-font-bold tw-mb-2">{{card.title}}</span>
        <ul class="tw-ml-6">
          <li v-for="list in card.content" :key="list">{{list}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import { defineComponent } from 'vue'
  import TheTitle from '@/components/global/TheTitle.vue'
  import SelectedItem from '@/components/user/SelectedItem.vue'
  // image
  import list1 from '@/assets/img/list1.png'
  import list2 from '@/assets/img/list2.png'
  import list3 from '@/assets/img/list3.png'
  import listFont1 from '@/assets/img/listFont1.svg'
  import listFont2 from '@/assets/img/listFont2.svg'
  import listFont3 from '@/assets/img/listFont3.svg'
  import divider from '@/assets/img/line.svg'
  import dividerM from '@/assets/img/line_m.svg'
  import threeCats from '@/assets/img/cats.png'
  import cat1 from '@/assets/img/process1.png'
  import cat2 from '@/assets/img/process2.png'
  import cat3 from '@/assets/img/process3.png'
  import cat4 from '@/assets/img/process4.png'

  export default defineComponent({
    components: { TheTitle, SelectedItem },
    setup() {
      const scrollNext = () => {
        const pos = document.querySelector('.circleBlock').offsetTop
        window.scrollTo({
          top: pos - 80,
          behavior: 'smooth'
        });
      }
      return {
        scrollNext,
        circle: [
          {
            link: 'products/',
            img: list1,
            imgFont: listFont1,
            alt: 'Cat Food'
          },
          {
            link: 'products/',
            img: list2,
            imgFont: listFont2,
            alt: 'Cat Use'
          },
          {
            link: 'products/',
            img: list3,
            imgFont: listFont3,
            alt: 'Cat Toy'
          }
        ],
        flow: [
          {
            title: '1.選購產品',
            txt: '將商品加入購物車，進入購物車點選結帳',
            img: cat1
          },
          {
            title: '2.確認與資料填寫',
            txt: '選擇送貨及付款方式，填寫訂購與收件人資訊',
            img: cat2
          },
          {
            title: '3.完成結帳',
            txt: '使用信用卡結帳，或用 ATM 完成付款',
            img: cat3
          },
          {
            title: '4.訂單出貨',
            txt: '訂單完成後立即為您出貨，等幾天就可收到貨囉！',
            img: cat4
          }
        ],
        notice: [
          {
            title: '退換貨須知',
            content: [
              '依消費者保護法規定：您可以享有商品貨到次日起七天猶豫期的權利, 但猶豫期並非試用期',
              '請您留意商品實屬食品，基於衛生安全考量，除瑕疵品情形外，換貨商品必須為『全新未經使用』若有拆封，恕將無法提供換貨服務',
              '若非品質問題退貨，請您於7天內將全新商品寄回公司，需自行負擔運費',
              '購買商品七天內，若遇商品瑕疵問題，請與我們聯繫，我們將無條件為您做退換貨處理，收到商品超過七天，亦不接受退換貨 (包含貨品如有短少，將無法為您補寄)',
              '若您需要辦理退換貨請與客服聯繫我們會盡快為您處理'
            ]
          },
          {
            title: '寄送須知',
            content: [
              '宅配運費(常溫)120元，全家取件70元，一張訂單只能配送同一地址，如需寄送不同地址，麻煩請分開下單',
              '單筆訂單消費金額滿999元，即可享有免運費優惠（寄送範圍僅限台灣本島，團購除外）',
              '一般將於下單後約3-5個工作天可送達若遇節日（如春節、中秋、端午）運送量較大，及遇有颱風過境時配送上較無法符合您所指定的時間，建議提早幾天下單，以免耽誤您的時間',
              '颱風天或例假日物流公司無法送貨，謝謝大家的體諒',
              '天候氣象狀況則依中央氣象台與各地縣市政府之公告為準'
            ]
          }
        ],
        divider, dividerM, threeCats
      }
    }
  })
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
}
.circleBlock{
  width: 60%;
  max-width: 70%;
  margin-top: 1.5rem;
  @media (min-width: 640px) {
    width: 975px;
    margin-top: -8%;
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
    transform: scale3d(1.16, 1.16, 1.16);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>
