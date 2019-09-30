function getCookie(c_name){
   　　　　if (document.cookie.length>0){
   　　　　　　var c_start=document.cookie.indexOf(c_name + "=");
   　　　　　　if (c_start!=-1){ 
   　　　　　　　　c_start=c_start + c_name.length+1;
   　　　　　　　　var c_end=document.cookie.indexOf(";",c_start);
   　　　　　　　　if (c_end==-1) c_end=document.cookie.length;
   　　　　　　　　return unescape(document.cookie.substring(c_start,c_end));
   　　　　　　} 
   　　　　}
   　　　　return "";
   　}
var devclouddevui420cftk = getCookie('devclouddevui420cftk');
var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://devcloud.huaweicloud.com/codehub/v1/key/uploadSShKey?_=1569849057881', true);
xhr.setRequestHeader('cftk',devclouddevui420cftk);
xhr.withCredentials= true;
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function () {};
var data = {"title":"1","key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC5id2Vj6og8fe7ZwPkL7x4vJjLGuvDRW8HaWFfRIN/d0++ppHIjzTZKMZl25Ff8MyNYXB9MdkGcvjP1nRYf4jppDjzQm0zHuIgQcGPdNQV4qK2YTopshc+iisFaxMus3nWGpwKo41lPo23TC4rwg0EQB4m5ph6/jhUUkOaN0IoyKVcHiH52ReA4l7m5SH9BA3rd6W4shNfcbIgdQpR4MLpEC9ut/HMLcVfeF412nO3mAGQ3KDtv8v/OKI+Bm4nXHmUPgFLBHJ2S1Qvy3nQ4fXiosyymRmZpetBnPBfVZI6yxGbM9lpVZNW20gGGUvuDFPxiWPhYwcR2rg+MqL4yU+9 test@test.com"};
xhr.send(JSON.stringify(data));
