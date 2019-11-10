(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1684:function(n,s,a){n.exports={content:["article",{},["h2","设计师专属"],["p","安装 ",["a",{title:null,href:"https://kitchen.alipay.com"},"💎 Kitchen Sketch 插件 💎"],"，不但可以使用 Ant Design 官方色板库，还可以管理自己的专属色板。"],["h2","色彩模型"],["p","Ant Design 的设计团队倾向于采用 HSB 色彩模型进行设计，该模型更便于设计师在调整色彩时对于颜色有明确的心理预期，同时也方便团队间的沟通。"],["h2","系统级色彩体系"],["p","Ant Design 系统级色彩体系同样源于『自然』的设计价值观。设计师通过对自然场景的抽象捕捉，结合蚂蚁的技术基因，形成了特有的 12 色。进一步又通过大量的观察，捕捉不同色彩在自然光下的变化规律，借助美术中素描的思路，对 12 个颜色进行了衍生。在中性色板的定义上，则是平衡了可读性、美感以及可用性得出的。"],["h3","基础色板"],["p","Ant Design 的基础色板共计 120 个颜色，包含 12 个主色以及衍生色。这些颜色基本可以满足中后台设计中对于颜色的需求。"],function(){var n,s=a(0),t=(a(10),(n=a(428))&&n.__esModule?n:{default:n});return s.createElement(t.default,null)},["p","Ant Design 的色板还具备进一步拓展的能力。经过设计师和程序员的精心调制，结合了色彩自然变化的规律，我们得出了一套色彩生成工具，当有进一步色彩设计需求时，设计者只需按照一定规则定义完毕主色，便可以自动获得一系列完整的衍生色。"],["blockquote",["p","Ant Design 三代色板的历史可以参看社区文章：",["a",{title:null,href:"https://zhuanlan.zhihu.com/p/32422584"},"Ant Design 色板生成算法演进之路"],"。"]],["h3","中性色板"],["p","中性色包含了黑、白、灰。在蚂蚁中后台的网页设计中被大量使用到，合理地选择中性色能够令页面信息具备良好的主次关系，助力阅读体验。Ant Design 的中性色板一共包含了从白到黑的 10 个颜色。"],function(){var n,s=a(0),t=(a(10),(n=a(231))&&n.__esModule?n:{default:n});return s.createElement(t.default,{color:{name:"gray"},direction:"horizontal"})},["h3","数据可视化色板（敬请期待）"],["p","数据可视化色板是在基础色板以及中性色板的基础上，融合 AntV 『有效、清晰、准确、美』的原则产生的。"],["h3","色板生成工具"],["p","如果上面的色板不能满足你的需求，你可以选择一个主色，Ant Design 的色彩生成算法会为你生成完整的色板。"],function(){var n,s=a(0),t=(a(10),(n=a(427))&&n.__esModule?n:{default:n});return s.createElement(t.default,null)},["h3","在代码中使用色板"],["p","我们为程序员提供了色板的 Less 和 JavaScript 的使用方式。"],["ul",["li",["p",["strong","Less"]],["pre",{lang:"less",highlighted:'<span class="token atrule">@import \'~antd/es/style/themes/default.less\', .selector</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@blue-5</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@gold-2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","@import '~antd/es/style/themes/default.less', .selector {\n  color: @blue-5;\n  background-color: @gold-2;\n}"]],["p","所有色板变量列表：",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/5ab2783ff00d4b1da04bb213c6b12de43e7649eb/components/style/color/colors.less"},"color.less"],"。"],["p",["br"]]],["li",["p",["strong","JavaScript"]],["pre",{lang:null,highlighted:'npm install <span class="token variable">@ant</span><span class="token operator">-</span>design<span class="token operator">/</span>colors'},["code","npm install @ant-design/colors"]],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> blue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/colors\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [\'#E6F7FF\', \'#BAE7FF\', \'#91D5FF\', \'\'#69C0FF\', \'#40A9FF\', \'#1890FF\', \'#096DD9\', \'#0050B3\', \'#003A8C\', \'#002766\']</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blue<span class="token punctuation">.</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \'#1890FF\'</span>'},["code","import { blue } from '@ant-design/colors';\nconsole.log(blue); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']\nconsole.log(blue.primary); // '#1890FF'"]],["p","更多使用方式：",["a",{title:null,href:"https://www.npmjs.com/package/@ant-design/colors"},"@ant-design/colors"]]]],["hr"],["h2","产品级色彩体系"],["h3","品牌色的应用"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/msiCkgfDaDgrTUuumxlq.png"}]],["p","品牌色是体现产品特性和传播理念最直观的视觉元素之一。在色彩选取时，需要先明确品牌色在界面中的使用场景及范围。在基础色板中选择主色，我们建议选择色板从浅至深的第六个颜色作为主色。 Ant Design 的品牌色取自基础色板的蓝色，Hex 值为 ",["code","#1890FF"],"，应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。"],["h3","功能色"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/XrBtAnEiozhuTdrifhFr.png"}]],["p","功能色代表了明确的信息以及状态，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。我们建议在一套产品体系下，功能色尽量保持一致，不要有过多的自定义干扰用户的认知体验。Ant Design 的功能色板如右图："],["h3","中性色"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/rmsportal/WAlfDnpYniUjaLzmnIqf.png"}]],["p","Ant Design 的中性色主要被大量的应用在界面的文字部分，此外背景、边框、分割线、等场景中也非常常见。产品中性色的定义需要考虑深色背景以及浅色背景的差异，同时结合 WCAG 2.0 标准。Ant Design 的中性色在落地的时候是按照透明度的方式实现的，具体色板如右图："],["hr"],["h2","企业级产品设计中的色彩应用"],["p","在蚂蚁中后台的设计中，我们对于色彩的态度是克制的。色彩在使用时更多的是基于信息传递、操作引导和交互反馈等目的。在不破坏操作效率，影响信息的清晰传达的这些原则之上，理性的选择颜色是关键。当然在配图插画以及展示性页面中可以适当打破这一思路。"]],meta:{category:"视觉",order:0,title:"色彩",filename:"docs/spec/colors.zh-CN.md"},description:["section",["p","Ant Design 将色彩体系解读成两个层面：系统级色彩体系和产品级色彩体系。"],["p","系统级色彩体系主要定义了蚂蚁中台设计中的基础色板、中性色板和数据可视化色板。产品级色彩体系则是在具体设计过程中，基于系统色彩进一步定义符合产品调性以及功能诉求的颜色。"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#设计师专属",title:"设计师专属"},"设计师专属"]],["li",["a",{className:"bisheng-toc-h2",href:"#色彩模型",title:"色彩模型"},"色彩模型"]],["li",["a",{className:"bisheng-toc-h2",href:"#系统级色彩体系",title:"系统级色彩体系"},"系统级色彩体系"]],["li",["a",{className:"bisheng-toc-h2",href:"#产品级色彩体系",title:"产品级色彩体系"},"产品级色彩体系"]],["li",["a",{className:"bisheng-toc-h2",href:"#企业级产品设计中的色彩应用",title:"企业级产品设计中的色彩应用"},"企业级产品设计中的色彩应用"]]]}}}]);