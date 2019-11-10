(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1634:function(t,e){t.exports={content:["section",["p","By clicking the input box, you can select a time from a popup panel."]],meta:{category:"Components",type:"Data Entry",title:"TimePicker",filename:"components/time-picker/index.en-US.md"},description:["section",["p","To select/input a time."],["h2","When To Use"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]]],api:["section",["h2","API"],["hr"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'13:30:56\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","import moment from 'moment';\n<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","addon"],["td","called from timepicker panel to render some addon to its bottom"],["td","function"],["td","-"],["td"]],["tr",["td","allowClear"],["td","allow clearing text"],["td","boolean"],["td","true"],["td","3.13.0"]],["tr",["td","autoFocus"],["td","get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","className"],["td","className of picker"],["td","string"],["td","''"],["td"]],["tr",["td","clearText"],["td","clear tooltip of icon"],["td","string"],["td","clear"],["td"]],["tr",["td","defaultOpenValue"],["td","default open panel value, used to set utcOffset,locale if value/defaultValue absent"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","moment()"],["td"]],["tr",["td","defaultValue"],["td","to set default time"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","disabled"],["td","determine whether the TimePicker is disabled"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabledHours"],["td","to specify the hours that cannot be selected"],["td","function()"],["td","-"],["td"]],["tr",["td","disabledMinutes"],["td","to specify the minutes that cannot be selected"],["td","function(selectedHour)"],["td","-"],["td"]],["tr",["td","disabledSeconds"],["td","to specify the seconds that cannot be selected"],["td","function(selectedHour, selectedMinute)"],["td","-"],["td"]],["tr",["td","format"],["td","to set the time format"],["td","string"],["td",'"HH:mm:ss"'],["td"]],["tr",["td","getPopupContainer"],["td","to set the container of the floating layer, while the default is to create a div element in body"],["td","function(trigger)"],["td","-"],["td"]],["tr",["td","hideDisabledOptions"],["td","hide the options that can not be selected"],["td","boolean"],["td","false"],["td"]],["tr",["td","hourStep"],["td","interval between hours in picker"],["td","number"],["td","1"],["td"]],["tr",["td","inputReadOnly"],["td","Set the ",["code","readonly"]," attribute of the input tag (avoids virtual keyboard on touch devices)"],["td","boolean"],["td","false"],["td","3.3.0"]],["tr",["td","minuteStep"],["td","interval between minutes in picker"],["td","number"],["td","1"],["td"]],["tr",["td","open"],["td","whether to popup panel"],["td","boolean"],["td","false"],["td"]],["tr",["td","placeholder"],["td","display when there's no value"],["td","string"],["td",'"Select a time"'],["td"]],["tr",["td","popupClassName"],["td","className of panel"],["td","string"],["td","''"],["td"]],["tr",["td","popupStyle"],["td","style of panel"],["td","object"],["td","-"],["td","3.12.0"]],["tr",["td","secondStep"],["td","interval between seconds in picker"],["td","number"],["td","1"],["td"]],["tr",["td","suffixIcon"],["td","The custom suffix icon"],["td","ReactNode"],["td","-"],["td","3.10.0"]],["tr",["td","clearIcon"],["td","The custom clear icon"],["td","ReactNode"],["td","-"],["td","3.14.0"]],["tr",["td","use12Hours"],["td","display as 12 hours format, with default format ",["code","h:mm:ss a"]],["td","boolean"],["td","false"],["td"]],["tr",["td","value"],["td","to set time"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(time: moment, timeString: string): void"],["td","-"],["td"]],["tr",["td","onOpenChange"],["td","a callback function which will be called while panel opening/closing"],["td","(open: boolean): void"],["td","-"],["td"]]]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","remove focus"],["td"]],["tr",["td","focus()"],["td","get focus"],["td"]]]],["style",".code-box-demo .ant-time-picker { margin: 0 8px 12px 0; }"]]}}}]);