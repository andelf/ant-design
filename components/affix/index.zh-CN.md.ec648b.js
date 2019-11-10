(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1468:function(t,n){t.exports={content:["section",["p","将页面元素钉在可视范围。"],["h2","何时使用"],["p","当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。"],["p","页面可视范围过小时，慎用此功能以免遮挡页面内容。"]],meta:{category:"Components",subtitle:"固钉",type:"导航",title:"Affix",filename:"components/affix/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","成员"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","offsetBottom"],["td","距离窗口底部达到指定偏移量后触发"],["td","number"],["td"],["td"]],["tr",["td","offsetTop"],["td","距离窗口顶部达到指定偏移量后触发"],["td","number"],["td"],["td"]],["tr",["td","target"],["td","设置 ",["code","Affix"]," 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数"],["td","() => HTMLElement"],["td","() => window"],["td"]],["tr",["td","onChange"],["td","固定状态改变时触发的回调函数"],["td","Function(affixed)"],["td","无"],["td"]]]],["p",["strong","注意："],["code","Affix"]," 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 ",["code","Affix"]," 为绝对定位："],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> position<span class="token punctuation">:</span> <span class="token string">\'absolute\'</span><span class="token punctuation">,</span> top<span class="token punctuation">:</span> y<span class="token punctuation">,</span> left<span class="token punctuation">:</span> x <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>'},["code","<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>"]],["h2","FAQ"],["h3","Affix 使用 ",["code","target"]," 绑定容器时，元素会跑到容器外。"],["p","从性能角度考虑，我们只监听容器滚动事件。如果希望任意滚动，你可以在窗体添加滚动监听：",["a",{title:null,href:"https://codesandbox.io/s/2xyj5zr85p"},"https://codesandbox.io/s/2xyj5zr85p"]],["p","相关 issue：",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3938"},"#3938"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5642"},"#5642"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/16120"},"#16120"]]]}}}]);