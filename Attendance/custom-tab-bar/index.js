import { storeBindingsBehavior } from "mobx-miniprogram-bindings"
import { store } from '../store/store'


// custom-tab-bar/index.js
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store,
    fields:{
      active:'activeTabBarIndex'
    },
    actions:{
      updateActive:'updateActiveTabBarIndex'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [{
      "pagePath": "/pages/home/home",
      "text": "首页"
    }, {
      "pagePath": "/pages/mine/mine",
      "text": "我的"
    }]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail })
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    }
  }
})