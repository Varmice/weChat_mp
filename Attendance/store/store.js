//创建store实例对象并导包
import { action, observable } from 'mobx-miniprogram'

export const store = observable({
  //数据字段
  activeTabBarIndex:0,
  //计算属性

  //actions函数，专门用来修改store中的数据值
  updateActiveTabBarIndex:action(function(index){
    this.activeTabBarIndex = index
  })
})