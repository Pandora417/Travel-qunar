<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link 
        tag="li"
        class="item border-bottom" 
        v-for="item of recommendList" 
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <div class="item-img-wrapper">
          <!-- 添加div防止 页面抖动  border-bottom 1像素边框-->
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script> 
export default{
  name:'HomeRecommend',
  props:{
    recommendList:Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .item
    display flex
    overflow hidden
    height 1.9rem
    box-shadow: -1px 1px #d1c3c3;
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        font-size .32rem
        line-height .54rem
        ellipis()
      .item-desc
        line-height .4rem
        color #6d6d6d
        ellipis()
      .item-button
        background #ff9300
        border-radius .07rem
        padding 0 .2rem
        color #ffffff
        margin-top .2rem

</style>