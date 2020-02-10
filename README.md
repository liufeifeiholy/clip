# clip

微信小程序分享裁图
微信小程序分享给朋友时，需要分享图5:4。有时候提供的分享图可能比例不合适，这时就需要对分享图进行裁剪

1. 代码引入
git submodule add https://github.com/liufeifeiholy/clipCore.git components/clip

2. 组件中添加
"usingComponents":{
  "clip":"/components/clip/index"
}

3. 组件参数可参考pages/index中的使用

``` javascript
  <clip 
    src="{{src}}" 
    loading="{{true}}" 
    customStyle="top: 0; left: 0"
    binddone="handleDone"
    bindfail="handleFail"
  ></clip>
```

4. 裁图完成后可以通过binddone事件获取裁剪之后的图片

``` javascript
  handleDone(e) {
    this.shareUrl = e.detail
  }
```
