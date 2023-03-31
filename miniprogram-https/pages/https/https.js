// pages/https/https.js
Page({
  /**
   * Page initial data
   */
  data: {
    faq: [
      {question: 'this is question', answer: 'this is answer'}
    ],
  },

  httpsRequest: function(event) {
    console.log(event)
    console.log("click me")
    wx.request({
      url: 'https://127.0.0.1:3443',
      success: (res) => {
        console.log(res.data)// 服务器回包信息
        this.setData({
          faq: res.data
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})