<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide  v-for="(page, index) of pages" :key="index">
        <!-- 双重循环 -->
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeIcons',
  props:{
    iconList:Array
  },
  computed:{
    pages (){
      const pages = [];
      this.iconList.forEach((item,index)=>{
        const page = Math.floor(index/8)
        if (!pages[page]) {
          pages[page]=[]
        }
        pages[page].push(item)  //二维数组
      })
      return pages
    }
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'

  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons >>> .swiper-pagination-bullets
    bottom 0
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      
      .icon-img-content
        height 100% 
        margin 0 auto
        display block
    .icon-desc
      bottom: 0;
      left: 0;
      right: 0;
      line-height: 0.44rem;
      position absolute
      height: 0.44rem;
      color: $darkText;
      text-align: center;
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      ellipis()
</style>