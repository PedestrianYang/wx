
var CryptoJS = require("../utils/tripledes.js")
var RSA = require("../utils/wx_rsa.js")


  const getSecParam = param =>{
     var str = ''
     for (var i = 0; i < 8; i++) {
       var value = Math.random() * 10
       str += Math.round(value) 
     }
     var key = str

     var paramEn = CryptoJS.encryptStr(key, param);

     console.log(param)
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

   module.exports = {
     getSecParam: getSecParam
   }
   var publicKey = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDwuf9tb4RVLNBmnY2by/ONinF9IwF7kBIVIWO4Z8ki/3SuQB/q3MUfsS2QYyDWR++VLNIzJWBsRbie+GjGxK4Rn4Lzeo8GLTCtynuzy5V9lGGT9efxqEBS+2/TXWCSzqRaJAmBiZHi+cPlhY6mEog+vnURdEp0enjuuBxm4pZpuQIDAQAB-----END PUBLIC KEY-----"
