定义：浏览器通过`<script>`标签的src属性，请求服务器上的数据，同时，服务器返回一个`函数的调用`，这种请求数据的方式就叫做JSONP

特点：
1.JSONP不属于真正的Ajax请求，因为它没有使用XMLHttpRequest这个对象
2.JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求