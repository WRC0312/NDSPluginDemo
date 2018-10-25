var plugin = requirePlugin("networkSafePlugin")
Page({
  data: {
    urlSrc: ""
  },
  onLoad: function () {
    var testUrl = "https://ft-gw.jdpay.com/fiqs-gw/detail/charts.html?compCode=80029463&compName=%25E4%25B8%25AD%25E5%259B%25BD%25E9%25BB%2584%25E9%2587%2591%25E9%259B%2586%25E5%259B%25A2%25E6%259C%2589%25E9%2599%2590%25E5%2585%25AC%25E5%258F%25B8&userName=test&auth=50F8C7DBA79DDC40911BFA08BC24842D";
    var that = this;
    var channel = 'fiqs_wx';
    var serverUrl = "https://ft-gw.jdpay.com/fiqs";
    plugin.setConfig(serverUrl, channel);
    plugin.getUrl(testUrl, function (newUrl) {
      that.setData({
        urlSrc: newUrl
      });
    });
    //   var channel = 'fiqs_wx';
    //   var serverUrl = "https://ft-gw.jdpay.com/fiqs/";
    //   var par = { userName: "123456", userPwd:"test1"};
    //   var requestHeader ={
    //     "content-type": "application/json"
    //   } ;
    //   var url = "https://ft-gw.jdpay.com/fiqs/login/login.do";

    //   plugin.setUpConfig(channel, serverUrl);
    //   plugin.encodeParams(par, dataEntity => {
    //     if (dataEntity.resultType == 1) {
    //       wx.request({
    //         url: url,
    //         header: requestHeader,
    //         data: dataEntity.requestParam,
    //         method: "post",
    //         success: function (res) {
    //           if (res.statusCode == 200) {
    //             plugin.decodeParams(res, dataEntity => {
    //               var data = dataEntity.response;
    //               wx.showToast({
    //                 title: "请求数据成功",
    //               })
    //               console.log("======="+JSON.stringify(data));
    //             })
    //           } else {
    //             wx.showToast({
    //               title: "网络错误,请稍后重试!",
    //             })
    //           }
    //         },
    //         fail: function (error) {
    //           wx.showToast({
    //             title: "网络错误,请稍后重试!",
    //           });
    //         },

    //       });
    //     } else {
    //       wx.showToast({
    //         title: "网络错误,请稍后重试!",
    //       });
    //     }
    //   });
  }
})