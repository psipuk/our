/*
jQWidgets v2.6.1 (2013-Jan-18)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxMaskedInput","",{});a.extend(a.jqx._jqxMaskedInput.prototype,{defineInstance:function(){this.value=null;this.mask="99999";this.width=null;this.height=25;this.textAlign="left";this.readOnly=false,this.promptChar="_";this.inputMode="advanced";this.events=["valuechanged","textchanged","mousedown","mouseup","keydown","keyup","keypress","change"]},createInstance:function(b){this.render()},render:function(){this.element.innerHTML="";this.host.attr({role:"maskedinput"});this.host.addClass(this.toThemeProperty("jqx-input"));this.host.addClass(this.toThemeProperty("jqx-rc-all"));this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-widget-content"));maskEditor=this;this.maskbox=a("<input autocomplete='off' type='textarea'/>").appendTo(this.host);this.maskbox.addClass(this.toThemeProperty("jqx-reset"));this.maskbox.addClass(this.toThemeProperty("jqx-input-content"));this.maskbox.addClass(this.toThemeProperty("jqx-widget-content"));var d=this.host.attr("name");if(!d){d=this.element.id}this.maskbox.attr("name",d);var f=this;this.propertyChangeMap.disabled=function(h,l,k,n){if(n){h.maskbox.addClass(f.toThemeProperty("jqx-input-disabled"))}else{h.maskbox.removeClass(f.toThemeProperty("jqx-input-disabled"))}};if(this.disabled){this.maskbox.addClass(this.toThemeProperty("jqx-input-disabled"));this.maskbox.attr("disabled",true);this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))}this.selectedText="";this._addHandlers();this.self=this;this.oldValue=this._value();this.items=new Array();this._initializeLiterals();this._render();if(this.value!=null){this.inputValue(this.value.toString())}var f=this;var e=a.jqx.mobile.isOperaMiniMobileBrowser();if(e){this.inputMode="simple";this.addHandler(a(document),"click",f._exitSimpleInputMode,f)}var c;this.addHandler(this.maskbox,"blur",function(h){if(f.inputMode=="simple"){f._exitSimpleInputMode(h,f,false);return false}f.host.removeClass(f.toThemeProperty("jqx-fill-state-focus"));if(f.maskbox.val()!=c){f._raiseEvent(7,h)}});this.addHandler(this.maskbox,"focus",function(h){c=f.maskbox.val();if(f.inputMode=="simple"){f.maskbox.val(f._getEditValue());a.data(f.maskbox,"simpleInputMode",true);return false}f.host.addClass(f.toThemeProperty("jqx-fill-state-focus"))});var f=this;if(this.host.parents("form").length>0){this.host.parents("form").bind("reset",function(){setTimeout(function(){f.clearValue()},10)})}if(a.jqx.mobile.isChromeMobileBrowser()&&!e){var b="";var g=setInterval(function(){var k=a(f.maskbox).val();var h=f._selection();if(k.length<b.length){var l=h.start;if(l<f.items.length&&f.items[l].canEdit&&f.items[l].character!=f.promptChar){f.items[l].character=f.promptChar}var k=f._getString();f.maskedValue(k);f._setSelectionStart(l)}if(k!=b){b=k}},10)}},_exitSimpleInputMode:function(b,n,g){if(n==undefined){n=b.data}if(n==null){return}if(g==undefined){if(b.target!=null&&n.element!=null){if((b.target.id!=undefined&&b.target.id.toString().length>0&&n.host.find("#"+b.target.id).length>0)||b.target==n.element){return}}var e=n.host.offset();var d=e.left;var f=e.top;var c=n.host.width();var l=n.host.height();var o=a(b.target).offset();if(o.left>=d&&o.left<=d+c){if(o.top>=f&&o.top<=f+l){return}}}if(n.disabled||n.readOnly){return}var k=a.data(n.maskbox,"simpleInputMode");if(k==null){return}var h=n.maskbox.val();n.inputValue(h,true);a.data(n.maskbox,"simpleInputMode",null);return false},_addHandlers:function(){var b=this;this.addHandler(this.maskbox,"mousedown",function(c){return b._raiseEvent(2,c)});this.addHandler(this.maskbox,"mouseup",function(c){return b._raiseEvent(3,c)});this.addHandler(this.maskbox,"keydown",function(c){return b._raiseEvent(4,c)});this.addHandler(this.maskbox,"keyup",function(c){return b._raiseEvent(5,c)});this.addHandler(this.maskbox,"keypress",function(c){return b._raiseEvent(6,c)})},_getString:function(){var b="";for(i=0;i<this.items.length;i++){var c=this.items[i].character;if((this.items[i].character==this.promptChar)&&(this.promptChar!=this.items[i].defaultCharacter)){b+=this.items[i].defaultCharacter}else{b+=c}}return b},_initializeLiterals:function(){if(this.mask==undefined||this.mask==null){this.items=new Array();return}this.mask=this.mask.toString();var f=this.mask.length;for(i=0;i<f;i++){var g=this.mask.substring(i,i+1);var e="";var b=false;if(g=="#"){e="(\\d|[+]|[-])";b=true}else{if(g=="9"||g=="0"){e="\\d";b=true}else{if(g=="$"){b=false}else{if(g=="/"||g==":"){b=false}else{if(g=="A"||g=="a"){e="\\w";b=true}else{if(g=="c"||g=="C"){e=".";b=true}else{if(g=="L"||g=="l"){e="\\p{L}";b=true}}}}}}}var c=this;var d=function(l,k,h){d.character=l;d.regex=k;d.canEdit=h;d.defaultCharacter=c.promptChar};if(b){d(this.promptChar,e,b)}else{d(g,e,b)}this.items[i]=d}},setRegex:function(d,e,b,c){if((d==null||d==undefined)||(e==null||e==undefined)){return}if(d<this.items.length){this.items[d].regex=e;if(b!=null&&b!=undefined){this.items[d].canEdit=b}if(c!=null&&c!=undefined){this.items[d].defaultCharacter=c}}},_match:function(c,b){var d=new RegExp(b,"i");return d.test(c)},_raiseEvent:function(d,q){var p=this.events[d];var g={};g.owner=this;var o=q.charCode?q.charCode:q.keyCode?q.keyCode:0;var r=true;var n=this.readOnly;var b=new jQuery.Event(p);b.owner=this;g.value=this.inputValue();g.text=this.maskedValue();b.args=g;r=this.host.trigger(b);if(this.inputMode!="simple"){if(d==4){if(n||this.disabled){return false}var h=this;if(a.jqx.mobile.isChromeMobileBrowser()){var l=h._selection();window.setTimeout(function(){var s=a.data(h.maskbox,"selectionstart");if(s!=null&&s!=l.start){a.data(h.maskbox,"selectionstart",l.start)}r=h._handleKeyDown(q,o)},25)}else{r=this._handleKeyDown(q,o)}}else{if(d==5){if(n||this.disabled){r=false}}else{if(d==6){if(n||this.disabled){return false}r=this._handleKeyPress(q,o)}}}}else{if(d==4||d==5||d==6){if(n||this.disabled){return false}var e=String.fromCharCode(o);var k=parseInt(e);var f=true;if(!isNaN(k)){f=true;var c=this.maskbox.val().toString().length;if(c>=this._getEditStringLength()&&this._selection().length==0){f=false}}if(!q.ctrlKey&&!q.shiftKey){if(o>=65&&o<=90){f=false}}return f}}return r},_handleKeyPress:function(g,c){var d=this._selection();var b=this;if((g.ctrlKey&&c==97)||(g.ctrlKey&&c==65)){return true}if(c==8){if(d.start>0){b._setSelectionStart(d.start)}return false}if(c==46){if(d.start<this.items.length){b._setSelectionStart(d.start)}return false}if(a.jqx.browser.msie){this._insertKey(c)}var f=this._isSpecialKey(c);return f},_insertKey:function(c){var d=this._selection();var b=this;if(d.start>=0&&d.start<this.items.length){var e=String.fromCharCode(c);var f=false;a.each(this.items,function(g,k){if(g<d.start){return}var h=b.items[g];if(!h.canEdit){return}if(b._match(e,h.regex)){if(!f&&d.length>0){for(j=d.start;j<d.end;j++){if(b.items[j].canEdit){b.items[j].character=b.promptChar}}var l=b._getString();b.maskedValue(l);f=true}h.character=e;var l=b._getString();b.maskedValue(l);if(d.start<b.items.length){b._setSelectionStart(g+1)}return false}else{return false}})}},_deleteSelectedText:function(){var c=this._selection();var b=false;if(c.start>0||c.length>0){for(i=c.start;i<c.end;i++){if(i<this.items.length&&this.items[i].canEdit&&this.items[i].character!=this.promptChar){this.items[i].character=this.promptChar;b=true}}var d=this._getString();this.maskedValue(d);return b}},_saveSelectedText:function(){var b=this._selection();var c="";if(b.start>0||b.length>0){for(i=b.start;i<b.end;i++){if(this.items[i].canEdit){c+=this.items[i].character}}}window.clipboardData.setData("Text",c);return c},_pasteSelectedText:function(){var e=this._selection();var f="";var d=0;var b=e.start;var c=window.clipboardData.getData("Text");if(c!=this.selectedText&&c.length>0){this.selectedText=c;if(this.selectedText==null||this.selectedText==undefined){return}}if(e.start>=0||e.length>0){for(i=e.start;i<this.items.length;i++){if(this.items[i].canEdit){if(d<this.selectedText.length){this.items[i].character=this.selectedText[d];d++;b=1+i}}}}var f=this._getString();this.maskedValue(f);if(b<this.items.length){this._setSelectionStart(b)}else{this._setSelectionStart(this.items.length)}},_handleKeyDown:function(h,p){var o=this._selection();if((h.ctrlKey&&p==97)||(h.ctrlKey&&p==65)){return true}if((h.ctrlKey&&p==120)||(h.ctrlKey&&p==88)){this.selectedText=this._saveSelectedText(h);this._deleteSelectedText(h);return false}if((h.ctrlKey&&p==99)||(h.ctrlKey&&p==67)){this.selectedText=this._saveSelectedText(h);return false}if((h.ctrlKey&&p==122)||(h.ctrlKey&&p==90)){return false}if((h.ctrlKey&&p==118)||(h.ctrlKey&&p==86)||(h.shiftKey&&p==45)){this._pasteSelectedText();return false}if(o.start>=0&&o.start<this.items.length){var f=String.fromCharCode(p);var q=this.items[o.start]}if(p==8){if(o.length==0){for(i=this.items.length-1;i>=0;i--){if(this.items[i].canEdit&&i<o.end&&this.items[i].character!=this.promptChar){this._setSelection(i,i+1);break}}}o=this._selection();var g=this._deleteSelectedText();if(o.start>0||o.length>0){if(o.start<=this.items.length){if(g){this._setSelectionStart(o.start)}else{this._setSelectionStart(o.start-1)}}}return false}if(p==190){for(i=0;i<this.items.length;i++){if(this.items[i].character=="."){this._setSelectionStart(i+1);break}}}if(p==46){if(o.length==0){for(i=0;i<this.items.length;i++){if(this.items[i].canEdit&&i>=o.start&&this.items[i].character!=this.promptChar){this._setSelection(i,i+1);break}}}var b=o;o=this._selection();var d=this._deleteSelectedText();if(o.start>=0||o.length>=0){if(o.start<this.items.length){if(o.length<=1){if(b.end!=o.end){this._setSelectionStart(o.end)}else{this._setSelectionStart(o.end+1)}}else{this._setSelectionStart(o.start)}}}return false}if(a.jqx.browser.msie==null){var n=this.maskbox.val();var k=this;if(p>=96&&p<=105){p=p-48}k._insertKey(p);var c=this.maskbox.val();if(n.toString()!=c.toString()){return false}}var l=this._isSpecialKey(p);if(p==189){return false}if(!a.jqx.browser.mozilla){return true}return l},_isSpecialKey:function(b){if(b!=8&&b!=9&&b!=13&&b!=35&&b!=36&&b!=37&&b!=39&&b!=46){return false}return true},_selection:function(){if("selectionStart" in this.maskbox[0]){var f=this.maskbox[0];var g=f.selectionEnd-f.selectionStart;return{start:f.selectionStart,end:f.selectionEnd,length:g,text:f.value}}else{var c=document.selection.createRange();if(c==null){return{start:0,end:f.value.length,length:0}}var b=this.maskbox[0].createTextRange();var d=b.duplicate();b.moveToBookmark(c.getBookmark());d.setEndPoint("EndToStart",b);var g=c.text.length;return{start:d.text.length,end:d.text.length+c.text.length,length:g,text:c.text}}},_setSelection:function(d,b){if("selectionStart" in this.maskbox[0]){this.maskbox[0].focus();this.maskbox[0].setSelectionRange(d,b)}else{var c=this.maskbox[0].createTextRange();c.collapse(true);c.moveEnd("character",b);c.moveStart("character",d);c.select()}},_setSelectionStart:function(b){this._setSelection(b,b)},refresh:function(b){if(!b){this._render()}},_render:function(){var c=parseInt(this.host.css("border-left-width"));var g=parseInt(this.host.css("border-left-width"));var f=parseInt(this.host.css("border-left-width"));var d=parseInt(this.host.css("border-left-width"));var k=parseInt(this.host.css("height"))-f-d;var e=parseInt(this.host.css("width"))-c-g;if(this.width!=null&&this.width.toString().indexOf("px")!=-1){e=this.width}else{if(this.width!=undefined&&!isNaN(this.width)){e=this.width}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){k=this.height}else{if(this.height!=undefined&&!isNaN(this.height)){k=this.height}}e=parseInt(e);k=parseInt(k);this.maskbox.css({"border-left-width":0,"border-right-width":0,"border-bottom-width":0,"border-top-width":0});this.maskbox.css("text-align",this.textAlign);var l=this.maskbox.css("font-size");if(!isNaN(k)){this.maskbox.css("height",parseInt(l)+4+"px")}if(!isNaN(e)){this.maskbox.css("width",e-2)}var h=parseInt(k)-2*parseInt(f)-2*parseInt(d)-parseInt(l);if(isNaN(h)){h=0}if(!isNaN(k)){this.host.height(k)}if(!isNaN(e)){this.host.width(e)}var b=h/2;if(a.jqx.browser.msie&&a.jqx.browser.version<8){b=h/4}this.maskbox.css("padding-right","0px");this.maskbox.css("padding-left","0px");this.maskbox.css("padding-top",b);this.maskbox.css("padding-bottom",h/2);this.maskbox.val(this._getString())},destroy:function(){this.element.removeClass("jqx-rc-all");this.maskbox.remove();this.element.remove()},maskedValue:function(b){if(b===undefined){return this._value()}this.value=b;this._refreshValue();if(this.oldValue!==b){this._raiseEvent(1,b);this.oldValue=b;this._raiseEvent(0,b)}return this},_value:function(){var b=this.maskbox.val();return b},propertyChangedHandler:function(c,d,b,e){if(this.isInitialized==undefined||this.isInitialized==false){return}if(d==="value"){if(e==undefined||e==null){e=""}e=e.toString();this.inputValue(e)}if(d==="theme"){a.jqx.utilities.setTheme(b,e,this.host)}if(d=="disabled"){if(e){c.maskbox.addClass(c.toThemeProperty("jqx-input-disabled"));c.host.addClass(c.toThemeProperty("jqx-fill-state-disabled"));c.maskbox.attr("disabled",true)}else{c.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));c.host.removeClass(this.toThemeProperty("jqx-input-disabled"));c.maskbox.attr("disabled",false)}}if(d=="readOnly"){this.readOnly=e}if(d=="promptChar"){for(i=0;i<c.items.length;i++){if(c.items[i].character==c.promptChar){c.items[i].character=e;c.items[i].defaultCharacter=e}}c.promptChar=e}if(d=="textAlign"){c.maskbox.css("text-align",e);c.textAlign=e}if(d=="mask"){c.mask=e;c.items=new Array();c._initializeLiterals();c.value=c._getString();c._refreshValue()}if(d=="width"){c.width=e;c._render()}else{if(d=="height"){c.height=e;c._render()}}},_value:function(){var b=this.value;return b},_getEditStringLength:function(){var b="";for(i=0;i<this.items.length;i++){if(this.items[i].canEdit){b+=this.items[i].character}}return b.length},_getEditValue:function(){var b="";for(i=0;i<this.items.length;i++){if(this.items[i].canEdit&&this.items[i].character!=this.promptChar){b+=this.items[i].character}}return b},parseValue:function(e){if(e==undefined||e==null){return null}var c=e.toString();var f="";var b=0;for(m=0;m<c.length;m++){var d=c.substring(m,m+1);for(i=b;i<this.items.length;i++){if(this.items[i].canEdit&&this._match(d,this.items[i].regex)){f+=d;b=i;break}}}return f},clearValue:function(){this.inputValue("",true)},val:function(b){if(b!=undefined&&typeof b!="object"){this.inputValue(b)}return this.maskbox.val()},inputValue:function(f,c){if(f==undefined||f==null){var e="";for(i=0;i<this.items.length;i++){if(this.items[i].canEdit){e+=this.items[i].character}}return e}else{var b=0;if(typeof f=="number"){f=f.toString()}for(i=0;i<this.items.length;i++){if(this.items[i].canEdit){if(this._match(f.substring(b,b+1),this.items[i].regex)){this.items[i].character=f.substring(b,b+1);b++}else{if(c){this.items[i].character=this.promptChar}}}}var d=this._getString();this.maskedValue(d);return this.inputValue()}},_refreshValue:function(){var c=this.maskedValue();var b=0;for(i=0;i<this.items.length;i++){if(c.length>b){if(this.items[i].canEdit&&this.items[i].character!=c[b]){if(this._match(c[b],this.items[i].regex)&&c[b].length==1){this.items[i].character=c[b]}}b++}}this.value=this._getString();c=this.value;this.maskbox.val(c)}})})(jQuery);