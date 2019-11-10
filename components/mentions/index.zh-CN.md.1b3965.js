(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1566:function(t,n){t.exports={content:["section",["p","提及组件。"],["blockquote",["p","原 Mention 组件已废弃，原文档请点击",["a",{title:null,href:"/components/mention"},"这里"],"。"]],["h2","何时使用"],["p","用于在输入中提及某人或某事，常用于发布、聊天或评论功能。"]],meta:{category:"Components",subtitle:"提及",type:"数据录入",title:"Mentions",filename:"components/mentions/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mentions</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mentions.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sample<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mentions.Option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mentions</span><span class="token punctuation">></span></span>'},["code",'<Mentions onChange={onChange}>\n  <Mentions.Option value="sample">Sample</Mentions.Option>\n</Mentions>']],["h3","Mentions"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","autoFocus"],["td","自动获得焦点"],["td","boolean"],["td",["code","false"]],["td","3.19.0"]],["tr",["td","defaultValue"],["td","默认值"],["td","string"],["td","-"],["td","3.19.0"]],["tr",["td","filterOption"],["td","自定义过滤逻辑"],["td","false ","|"," (input: string, option: OptionProps) => boolean"],["td","-"],["td","3.19.0"]],["tr",["td","notFoundContent"],["td","当下拉列表为空时显示的内容"],["td","ReactNode"],["td","'Not Found'"],["td","3.19.0"]],["tr",["td","placement"],["td","弹出层展示位置"],["td","'top' ","|"," 'bottom'"],["td","'bottom'"],["td","3.19.0"]],["tr",["td","prefix"],["td","设置触发关键字"],["td","string ","|"," string[]"],["td","'@'"],["td","3.19.0"]],["tr",["td","split"],["td","设置选中项前后分隔符"],["td","string"],["td","' '"],["td","3.19.0"]],["tr",["td","validateSearch"],["td","自定义触发验证逻辑"],["td","(text: string, props: MentionsProps) => void"],["td","-"],["td","3.19.0"]],["tr",["td","value"],["td","设置值"],["td","string"],["td","-"],["td","3.19.0"]],["tr",["td","onChange"],["td","值改变时触发"],["td","(text: string) => void"],["td","-"],["td","3.19.0"]],["tr",["td","onSelect"],["td","选择选项时触发"],["td","(option: OptionProps, prefix: string) => void"],["td","-"],["td","3.19.0"]],["tr",["td","onSearch"],["td","搜索时触发"],["td","(text: string, prefix: string) => void"],["td","-"],["td","3.19.0"]],["tr",["td","onFocus"],["td","获得焦点时触发"],["td","() => void"],["td","-"],["td","3.19.0"]],["tr",["td","onBlur"],["td","失去焦点时触发"],["td","() => void"],["td","-"],["td","3.19.0"]],["tr",["td","getPopupContainer"],["td","指定建议框挂载的 HTML 节点"],["td","() => HTMLElement"],["td","-"],["td","3.22.0"]]]],["h3","Mentions 方法"],["table",["thead",["tr",["th","名称"],["th","描述"],["th","版本"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"],["td","3.19.0"]],["tr",["td","focus()"],["td","获取焦点"],["td","3.19.0"]]]],["h3","Option"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","children"],["td","选项内容"],["td","ReactNode"],["td","-"],["td","3.19.0"]],["tr",["td","value"],["td","选择时填充的值"],["td","string"],["td","''"],["td","3.19.0"]]]]]}}}]);