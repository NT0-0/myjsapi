var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://devcloud.huaweicloud.com/projectman/v2/module/updateModule', true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onload = function () {};
xhr.send("foo=bar"); 
