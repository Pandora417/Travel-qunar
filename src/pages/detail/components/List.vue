<template>
  <div>
    <div class="item"
      v-for="(item,index) of list" 
      :key="index"
    >
      <span class="item-title-icon"></span>
      <div class="item-title">
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list:Array
  }
}
</script>
<style lang="stylus" scoped>
  .item
    box-shadow inset 0px 1px #d2d1d1
    .item-title-icon
      position relative
      float left
      top .2rem
      left .2rem
      display: inline-block;
      width: .36rem;
      height: .36rem;
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
    .item-title
      line-height .8rem
      font-size .32rem
      padding 0 .65rem
    .item-children
      padding 0 .3rem
      .item-title
        font-size .26rem
      .item-children 
        .item-title
          font-size .20rem
</style>