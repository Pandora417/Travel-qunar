<template>
  <div class="header">
    <div class="header-left">
      <!-- <span class="iconfont">iconfanhui</span> -->
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe634;</i>
      输入城市\景点\游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <!-- {{this.$store.state.city}} -->
        <i class="iconfont arrow-icon">&#xe600;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
    ...mapState(['city']),  //city共用数据映射到city的计算属性中，...是展开运算符
  }
}
  // 1rem = html font-size =50px
</script>

<style lang="stylus" scoped>

@import '~styles/varibles.styl'
  .header 
    display :flex
    line-height .86rem 
    background :$bgColor
    color :#fff
    .header-left 
      width :.64rem 
      float :left 
      margin-left :.1rem
      .back-icon
        text-align :center
        font-size :.4rem
    .header-input
      flex:1
      height :.64rem
      margin-top :.11rem
      padding-left .2rem
      border-radius:.1rem
      background-color :#fff
      color :#ccc
      line-height :.64rem
    .header-right 
      min-width :1.04rem 
      padding 0 .1rem
      float :right
      color :#fff
      text-align :center
      .arrow-icon
        font-size :.25rem
</style>