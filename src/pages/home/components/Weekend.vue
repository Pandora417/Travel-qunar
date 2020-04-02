<template>
  <div>
    <div class="title">周末推荐</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <!-- 添加div防止 页面抖动  border-bottom 1像素边框-->
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script> 
export default{
  name:'HomeWeekend',
  props:{
    weekendList:Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'

  .title
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 33.9%
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      font-size .32rem
      line-height .54rem
      ellipis()
    .item-desc
      color: #616161;
      font-size: .24rem;
      line-height: .42rem;
      ellipis()
</style>