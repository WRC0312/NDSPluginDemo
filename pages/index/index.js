var plugin = requirePlugin("networkSafePlugin")
Page({
  data: {
    urlSrc: "",
    message:"",
    string1:"",
    string2:"",
    string3:"",
    string4:""
  },
  onLoad: function () {
    var key = "1111";
    var message = "hello world";
    var string1 = plugin.DES3encrypt(key, message);
    var string2 = plugin.DES3decrypt(key, string1);
    console.log("string2:" + string2)
    var string3 = plugin.HMACsignature(message);
    var string4 = plugin.BASE64encrypt(message);
    console.log("hmac:"+string3);
    console.log("base64:"+string4);
    this.setData({
      message: message,
      string1: string1,
      string2: string2,
      string3: string3,
      string4: string4
    })
    // var testUrl = "https://ft-gw.jdpay.com/fiqs-gw/detail/charts.html?compCode=80029463&compName=%25E4%25B8%25AD%25E5%259B%25BD%25E9%25BB%2584%25E9%2587%2591%25E9%259B%2586%25E5%259B%25A2%25E6%259C%2589%25E9%2599%2590%25E5%2585%25AC%25E5%258F%25B8&userName=test&auth=50F8C7DBA79DDC40911BFA08BC24842D";
    // var that = this;
  
    // var channel = 'fiqs_wx';
    // var serverUrl = "https://ft-gw.jdpay.com/fiqs";
    // var channel = 'bank_plus';
    // var  testUrl ="https://test-crpl.jd.com/xActivityBank/dist/index.html"
    // var serverUrl = "https://test-crpl.jd.com/xActivityBank";

    // plugin.setConfig(serverUrl, channel);

    // plugin.getUrl({
    //   url: testUrl, success:function (newUrl) {
    //   that.setData({
    //     urlSrc: newUrl
    //   });
    //   }, fail:function(error){
    //   console.dir(error);
    // }});
//     var channel = 'fiqs_wx';
//     var serverUrl = "https://ft-gw.jdpay.com/fiqs/";
//     plugin.setUpConfig(channel, serverUrl);
//     var par = { userName: "123456", userPwd:"test1"};
//     var requestHeader ={
//       "content-type": "application/json"
//     } ;
//     var url = "https://ft-gw.jdpay.com/fiqs/login/login.do";

//     plugin.encodeParams({
//       params: par, success:function(dataEntity) {
//       if (dataEntity.resultType == 1) {
//         wx.request({
//           url: url,
//           header: requestHeader,
//           data: dataEntity.requestParam,
//           method: "post",
//           success: function (res) {
//             if (res.statusCode == 200) {
//               plugin.decodeParams({
//                 params: res, success: function (dataEntity){
//                 var data = dataEntity.response;
//                 wx.showToast({
//                   title: "请求数据成功",
//                 })
//                 console.log("======="+JSON.stringify(data));
//               },fail:function(error){

//               }})
//             } else {
//               wx.showToast({
//                 title: "网络错误,请稍后重试!",
//               })
//             }
//           },
//           fail: function (error) {
//             wx.showToast({
//               title: "网络错误,请稍后重试!",
//             });
//           },

//         });
//       } else {
//         wx.showToast({
//           title: "网络错误,请稍后重试!",
//         });
//       }
//     },
//       fail:function(error){
// console.dir(error);
//       }
    
//     });
  }
})