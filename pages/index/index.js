//index.js
//获取应用实例
const app = getApp()

const img1 = 'https://storage.fans.sports.sina.com.cn/frozen/olaf/9438d9330406d46867a230ba7224e65e.jpg'
const img2 = 'https://storage.fans.sports.sina.com.cn/frozen/olaf/bd3a811e4eccf222cb2474536facfe3d.jpg'

const gif1 = 'https://storage.fans.sports.sina.com.cn/frozen/olaf/83fe0d6b84788ff6a5fcde3d44777b86.gif'
const gif2 = 'https://storage.fans.sports.sina.com.cn/frozen/olaf/1af08d320fc565ca5ca197fe84f9e1cd.gif'

Page({
  data: {
    src: gif1
  },

  onShareAppMessage() {
    return {
      title: 'test',
      imageUrl: this.shareUrl
    }
  },

  handleDone(e) {
    this.shareUrl = e.detail
  },

  handleFail() {
    // 裁图失败
  }

})
