CORS（Corss-Origin Resource Sharing，跨域资源共享）由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源

浏览器的同源安全策略默认会阻止网页“跨域”获取资源，但如果接口服务器配置了CORS相关的HTTP响应头，就可以解除浏览器的跨域访问限制

CORS的注意事项：
1.CORS主要在服务器端进行配置，客户端浏览器无须做任何额外的配置，即可请求开启了CORS的接口
2.CORS在浏览器中有兼容性，只有支持XMLHttpRequest Level2的浏览器，才能正常访问开启了CORS的服务器端口（例如IE10+、Chrome4+、FireFox3.5+） 