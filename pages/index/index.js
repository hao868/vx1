//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      '/imgs/1.jpg',
      '/imgs/2.jpg',
      '/imgs/4.jpg'
    ],
    autoplay: true,
    indicatorDots: true,
    interval: 3000,
    duration: 1000,
    circular:true,
    a:1,
    b:2,

    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4]
  },
  //事件处理函数
  hhh:function(){
    wx:wx.showToast({
      title: '哈哈哈',
      icon: '',
      image: '',
      duration: 3000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
  
})
