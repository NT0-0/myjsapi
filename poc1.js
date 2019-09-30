var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://console.huaweicloud.com/iam/server/create-user', true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onload = function () {};
xhr.send("foo=bar"); 
