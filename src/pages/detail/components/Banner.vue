<template>
  <div>
    <div class="banner" @click="bannerClick">
      <img 
        :src="bannerImg" alt="" 
        class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <i class="iconfont banner-icon">&#xe796;</i>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery 
        :imgs="bannerImgs" 
        v-show="showGallery"
        @close="handleGalleryClose">
      </common-gallery>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallery from 'common/gallery/Gallary'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props:{
    sightName:String,
    bannerImg:String,
    bannerImgs:Array
  },
  components:{
    CommonGallery,
    FadeAnimation:Fade
  },
  data () {
    return {
      showGallery:false
    }
  },
  methods:{
    bannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 50%
    .banner-img
      width 100%
    .banner-info
      position absolute
      display flex
      color #fff
      right 0
      left 0
      bottom 0
      line-height 0.8rem
      background-image linear-gradient(top,rgba( 0, 0 ,0 ,0),rgba(0, 0, 0,0.8))
      .banner-title
        padding 0 .2rem
        flex 1
        font-size .3rem
      .banner-number
        height .4rem
        padding 0 .4rem
        line-height .4rem
        border-radius .2rem
        background rgba( 0, 0, 0, .8)
        margin .2rem .1rem
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>