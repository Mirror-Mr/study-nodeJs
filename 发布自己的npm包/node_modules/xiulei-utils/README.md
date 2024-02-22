<!-- 包的说明文档 -->

## 安装
```
npm install xiulei-tools 
```

## 导入
```javascript
const xiulei = require('xiulei-tools');
```

## 格式化时间
```javascript
// 调用dateFormat 对时间进行格式化
console.log(dateFormat(new Date()));
// 输出 2023-09-19

console.log(dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss'));
//输出 2023-09-19 10:52:00
```
## 转义html中的特殊字符
```javascript
// 调用htmlEscape 对html字符串进行转换
console.log(htmlEscape(`<p>你好，"&"</p>`));
// 输出 &lt;p&gt;你好，&quot;&amp;&quot;&lt;/p&gt;
```

## 还原转义后的html字符串
```javascript
// 调用htmlUnEscape 对转义后的html字符串进行还原
console.log(htmlUnEscape("&lt;p&gt;你好，&amp;&&lt;/p&gt;"));
// 输出 <p>你好，&&</p>
```

## 开源协议
ISC