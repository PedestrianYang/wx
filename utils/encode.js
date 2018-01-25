
var CryptoJS = require("../utils/tripledes.js")
var RSA = require("../utils/wx_rsa.js")
var Util = require('../utils/util.js')


  const getSecParam = param =>{
    var timestamp = (new Date()).valueOf();
    console.log(timestamp)

    var data = { 'device': '0', 'build': '3.6.0', 'time': timestamp }
    console.log(data)
    if(param != null){
      data = Util.addDic(data, param)
      console.log(data)
    }
    
    var paramStr = Util.jsonToString(data);
    console.log(paramStr)

     var str = ''
     for (var i = 0; i < 8; i++) {
       var value = Math.random() * 10
       str += Math.round(value) 
     }
     var key = str

     var paramEn = CryptoJS.encryptStr(key, paramStr);

     console.log(paramStr)
     console.log(key)
     var enkey = jiami(key)

     console.log(paramEn)
     return { params: paramEn, key: enkey}

  }

  const jiami = message => {
    var input_rsa = message;
    var encrypt_rsa = new RSA.RSAKey();
    encrypt_rsa = RSA.KEYUTIL.getKey(publicKey);

    var encStr = encrypt_rsa.encrypt(input_rsa)
    encStr = RSA.hex2b64(encStr);

    return encStr;
  }

  const jiemi = encStr => {
    var decrypt_rsa = new RSA.RSAKey();
    decrypt_rsa = RSA.KEYUTIL.getKey(privateKey);
    if (encStr.length <= 0) {
      wx.showToast({
        title: '请先加密',
        icon: 'loading',
        duration: 1000
      })
    } else {
      var b64Str = RSA.b64tohex(encStr)
      // encStr = RSA.b64tohex(b64Str);
      console.log(b64Str + "001--100")
      debugger
      var decStr = decrypt_rsa.decrypt(b64Str)
      console.log("解密结果：" + decStr)
      return decStr
    }  
  }

  const getdeParam = paramDic =>{
    var key = paramDic.sign
    console.log(key)
    var param = paramDic.data
    console.log(param)
    var decodeKey = jiemi(key)
  }

   module.exports = {
     getSecParam: getSecParam,
     getdeParam: getdeParam
   }
   var publicKey = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDwuf9tb4RVLNBmnY2by/ONinF9IwF7kBIVIWO4Z8ki/3SuQB/q3MUfsS2QYyDWR++VLNIzJWBsRbie+GjGxK4Rn4Lzeo8GLTCtynuzy5V9lGGT9efxqEBS+2/TXWCSzqRaJAmBiZHi+cPlhY6mEog+vnURdEp0enjuuBxm4pZpuQIDAQAB-----END PUBLIC KEY-----"

   var privateKey = '-----BEGIN RSA PRIVATE KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDwuf9tb4RVLNBmnY2by/ONinF9IwF7kBIVIWO4Z8ki/3SuQB/q3MUfsS2QYyDWR++VLNIzJWBsRbie+GjGxK4Rn4Lzeo8GLTCtynuzy5V9lGGT9efxqEBS+2/TXWCSzqRaJAmBiZHi+cPlhY6mEog+vnURdEp0enjuuBxm4pZpuQIDAQAB-----END RSA PRIVATE KEY-----'


// {sign: "WbPCAAuew5mvCJqOoPSKwzfd6609FPHVJpZPkqhi91/J2MzDkT…gK+8zixCZ2MeACfDaM4Z2IQrccF+RRYCWS6v2xyGyBZy14nU=", data: "BItb6vDk81Y="}