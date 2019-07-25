(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(t,a,s){t.exports=s.p+"assets/img/1.a03ebe4a.png"},127:function(t,a,s){t.exports=s.p+"assets/img/2.3e95a85c.png"},128:function(t,a,s){t.exports=s.p+"assets/img/3.9b036708.png"},129:function(t,a,s){t.exports=s.p+"assets/img/4.a22e7a86.png"},130:function(t,a,s){t.exports=s.p+"assets/img/5.10afc76e.png"},131:function(t,a,s){t.exports=s.p+"assets/img/6.78c0434f.png"},132:function(t,a,s){t.exports=s.p+"assets/img/7.7a3fe2bf.png"},133:function(t,a,s){t.exports=s.p+"assets/img/8.4a039507.png"},159:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),e("h2",{attrs:{id:"什么是浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是浏览器缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是浏览器缓存")]),t._v(" "),e("h3",{attrs:{id:"浏览器缓存简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器缓存简介")]),t._v(" "),e("ul",[e("li",[t._v("Web缓存是指一个Web资源（如html页面，图片，js，数据等）存在于Web服务器和客户端（浏览器）之间的副本。缓存会根据进来的请求保存输出内容的副本；当下一个请求来到的时候，如果是相同的URL，缓存会根据缓存机制决定是直接使用副本响应访问请求，还是向源服务器再次发送请求。")]),t._v(" "),e("li",[t._v("比较常见的就是浏览器会缓存访问过网站的网页，当再次访问这个URL地址的时候，如果网页没有更新，就不会再次下载网页，而是直接使用本地缓存的网页。只有当网站明确标识资源已经更新，浏览器才会再次下载网页。浏览器和网站服务器是根据缓存机制进行缓存的")])]),t._v(" "),e("h3",{attrs:{id:"非http协议定义的缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非http协议定义的缓存机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 非HTTP协议定义的缓存机制")]),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Pragma"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])]),t._v(" "),e("h2",{attrs:{id:"简述http报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简述http报文","aria-hidden":"true"}},[t._v("#")]),t._v(" 简述http报文")]),t._v(" "),e("ul",[e("li",[t._v("HTTP报文就是浏览器和服务器间通信时发送及响应的数据块。")]),t._v(" "),e("li",[t._v("浏览器向服务器请求数据，发送请求(request)报文。")]),t._v(" "),e("li",[t._v("服务器向浏览器返回数据，返回响应(response)报文。")]),t._v(" "),e("li",[t._v("报文信息主要分为两部分\n"),e("ul",[e("li",[t._v("1.包含属性的首部(header)-----附加信息（cookie，缓存信息等）与缓存相关的规   则信息，\n均包含在header中")]),t._v(" "),e("li",[t._v("2.包含数据的主体部分(body)-----HTTP请求真正想要传输的部分")])])])]),t._v(" "),e("h2",{attrs:{id:"缓存规则解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存规则解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存规则解析")]),t._v(" "),e("p",[t._v("根据是否需要重新向服务器发起请求来分为：强制缓存和对比缓存\n"),e("img",{attrs:{src:s(126),alt:"An image"}})]),t._v(" "),e("h3",{attrs:{id:"强制缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 强制缓存")]),t._v(" "),e("ul",[e("li",[t._v("在没有缓存数据的时候，浏览器向服务器请求数据时，服务器会将数据和缓存规则一并返回，缓存规则信息包含在响应header中。")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("响应header中会有两个字段来标明失效规则（Expires/Cache-Control）")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(127),alt:"An image"}})]),t._v(" "),e("h3",{attrs:{id:"对比缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 对比缓存")]),t._v(" "),e("ul",[e("li",[t._v("对比缓存，顾名思义，需要进行比较判断是否可以使用缓存。")]),t._v(" "),e("li",[t._v("浏览器第一次请求数据时，服务器会将缓存标识与数据一起返回给客户端，客户端将二者备份至缓存数据库中。")]),t._v(" "),e("li",[t._v("再次请求数据时，客户端将备份的缓存标识发送给服务器，服务器根据缓存标识进行判断，判断成功后，返回304状态码，通知客户端比较成功，可以使用缓存数据。")])]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("对于对比缓存来说，缓存标识的传递是我们着重需要理解的，它在请求header和响应header间进行传递.")])]),t._v(" "),e("h4",{attrs:{id:"last-modified-if-modified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since","aria-hidden":"true"}},[t._v("#")]),t._v(" Last-Modified / If-Modified-Since")]),t._v(" "),e("p",[e("img",{attrs:{src:s(128),alt:"An image"}}),t._v(" "),e("img",{attrs:{src:s(129),alt:"An image"}})]),t._v(" "),e("h4",{attrs:{id:"etag-if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match","aria-hidden":"true"}},[t._v("#")]),t._v(" Etag / If-None-Match")]),t._v(" "),e("p",[e("img",{attrs:{src:s(130),alt:"An image"}}),t._v(" "),e("img",{attrs:{src:s(131),alt:"An image"}})]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("ul",[e("li",[t._v("对于强制缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。")]),t._v(" "),e("li",[t._v("对于比较缓存，将缓存信息中的Etag和Last-Modified通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存。")])]),t._v(" "),e("h4",{attrs:{id:"第一次请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一次请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一次请求")]),t._v(" "),e("p",[e("img",{attrs:{src:s(132),alt:"An image"}})]),t._v(" "),e("h4",{attrs:{id:"第二次请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二次请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二次请求")]),t._v(" "),e("p",[e("img",{attrs:{src:s(133),alt:"An image"}})])])},[],!1,null,null,null);a.default=r.exports}}]);