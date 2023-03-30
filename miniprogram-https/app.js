// app.js
App({
  onLaunch() {
    console.log('run in onLaunch')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow: function(options) {
    console.log('run in onShow'),
    console.log(options)
  },
  onHide: function() {
    console.log('run in onHide')
  },
  onError: function(msg) {
    console.log('run in onError'),
    console.log(msg)
  },
  globalData: {
    userInfo: null
  }
})
