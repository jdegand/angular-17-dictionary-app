import{Ha as O,Ka as d,La as p,Ma as _,Na as f,O as w,Oa as u,Pa as o,Qa as n,Ra as m,U as S,Ua as I,Va as C,W as g,Wa as b,Ya as c,Z as B,Za as P,_a as M,aa as x,c as k,cb as h,ra as E,wb as y,xa as l}from"./chunk-O4CK4PXQ.js";var T=(()=>{let t=class t{constructor(){this.base_url="https://api.dictionaryapi.dev/api/v2/entries/en/"}getWord(a){return k(this,null,function*(){return(yield fetch(this.base_url+a)).json()??[]})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function $(e,t){e&1&&(o(0,"span"),x(),o(1,"svg",2)(2,"title"),c(3,"Pause"),n(),m(4,"path",3),n()())}function H(e,t){e&1&&(o(0,"span"),x(),o(1,"svg",4)(2,"title"),c(3,"Play"),n(),m(4,"path",5),n()())}var F=(()=>{let t=class t{constructor(){this.playing=!1}ngOnInit(){this.audio=new Audio(this.audioSrc)}isPlaying(){this.playing=!this.playing,this.playing?this.audio.play():this.audio.pause()}ngAfterViewInit(){this.audio.addEventListener("ended",()=>this.playing=!1)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["app-player"]],inputs:{audioSrc:"audioSrc"},standalone:!0,features:[h],decls:6,vars:3,consts:[[1,"player__button",3,"click"],[1,"sr-only","purple-text"],["data-testid","pause-svg","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24"],["fill","#a463d6","d","M14,19H18V5H14M6,19H10V5H6V19Z"],["data-testid","play-svg","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24"],["fill","#a463d6","d","M8,5.14V19.14L19,12.14L8,5.14Z"]],template:function(i,s){i&1&&(o(0,"div")(1,"button",0),I("click",function(){return s.isPlaying()}),d(2,$,5,0,"span")(3,H,5,0,"span"),o(4,"span",1),c(5),n()()()),i&2&&(l(2),p(2,s.playing?2:-1),l(1),p(3,s.playing?-1:3),l(2),M(" ",s.playing?"Pause":"Play"," "))},dependencies:[y],styles:[".player__button[_ngcontent-%COMP%]{border:none;outline-color:transparent;border-radius:50%;background-color:var(--playButtonBackground);width:75px;height:75px;display:grid;place-items:center;cursor:pointer}svg[_ngcontent-%COMP%]{width:64px;height:64px}","[_ngcontent-%COMP%]:root{--colors-primary: #757575;--colors-background: white;--option-background: #f8f8f8;--playButtonPurple: #a463d6;--playButtonBackground: #e9d0fa;--darkPurple: #814b81;--link-color: #0000ee;--form-input-color: #6b6b6b;--select-focus-outline: #050505;--toggle-background: #757575;--fill: #000;--select-font-color: #757575}body[data-theme=light][_ngcontent-%COMP%]{--colors-primary: #757575;--colors-background: white;--option-background: #f8f8f8;--playButtonPurple: #a463d6;--playButtonBackground: #e9d0fa;--darkPurple: #814b81;--form-input-color: #6b6b6b;--select-focus-outline: #050505;--toggle-background: #757575;--fill: #000;--select-font-color: #757575}body[data-theme=dark][_ngcontent-%COMP%]{--colors-primary: #fff;--colors-background: #050505;--playButtonPurple: #a148d9;--playButtonBackground: #321a49;--darkPurple: #9e50e7;--link-color: #f8f8f8;--form-input-color: #6b6b6b;--select-focus-outline: #fff;--toggle-background: blueviolet;--fill: #fff;--select-font-color: #757575}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]{margin:0}html[_ngcontent-%COMP%]:focus-within{scroll-behavior:smooth}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]{list-style:none}body[_ngcontent-%COMP%]{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5;background:var(--colors-background);color:var(--colors-primary)}a[_ngcontent-%COMP%]:not([class]){text-decoration-skip-ink:auto}img[_ngcontent-%COMP%]{max-width:100%;display:block}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font:inherit}select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background:var(--colors-background)}.serif[_ngcontent-%COMP%]{font-family:serif}.sans-serif[_ngcontent-%COMP%]{font-family:sans-serif}.monospace[_ngcontent-%COMP%]{font-family:monospace}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.purple-text[_ngcontent-%COMP%]{color:#af6feb}svg[_ngcontent-%COMP%]{color:var(--fill)}"]});let e=t;return e})();function W(e,t){if(e&1&&(o(0,"li"),c(1),n()),e&2){let r=t.$implicit;l(1),P(r.definition)}}function z(e,t){if(e&1&&(o(0,"span",1),c(1),n()),e&2){let r=t.$implicit;l(1),M(" ",r," ")}}function A(e,t){if(e&1&&(o(0,"div")(1,"h4"),c(2,"Synonyms"),n(),f(3,z,2,1,"span",2,_),n()),e&2){let r=C();u(3,r.meaning.synonyms)}}var D=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["app-meaning"]],inputs:{meaning:"meaning"},standalone:!0,features:[h],decls:8,vars:2,consts:[[1,"meaning__partOf"],[1,"meaning__synonym"],["class","meaning__synonym"]],template:function(i,s){i&1&&(o(0,"h2",0),c(1),n(),o(2,"h3"),c(3,"Meaning"),n(),o(4,"ul"),f(5,W,2,1,"li",null,_),n(),d(7,A,5,0,"div")),i&2&&(l(1),P(s.meaning.partOfSpeech),u(5,s.meaning.definitions),l(6),p(7,s.meaning.synonyms.length>0?7:-1))},dependencies:[y],styles:['.meaning__partOf[_ngcontent-%COMP%]{font-style:italic;margin-block:20px}.meaning__synonym[_ngcontent-%COMP%]{color:#9e50e7;margin-inline:5px;display:inline-flex;flex-wrap:wrap}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";color:#9e50e7;font-weight:700;display:inline-block;width:1em;margin-left:-1em}']});let e=t;return e})();var V=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["app-source"]],inputs:{source:"source"},standalone:!0,features:[h],decls:8,vars:2,consts:[[1,"article__source__row"],["target","_blank","rel","no-referrer",1,"article__source__row__link",3,"href"],[1,"article__external__link"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24"],["fill","currentcolor","d","M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"]],template:function(i,s){i&1&&(o(0,"div",0)(1,"a",1),c(2),n(),o(3,"span",2),x(),o(4,"svg",3)(5,"title"),c(6,"open-in-new"),n(),m(7,"path",4),n()()()),i&2&&(l(1),b("href",s.source,E),l(1),M(" ",s.source," "))},dependencies:[y],styles:[".article__external__link[_ngcontent-%COMP%]{display:inline-block;width:24px;height:24px}.article__source[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-block:20px}.article__source__row[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:flex-end}.article__source__row__link[_ngcontent-%COMP%]{color:var(--link-color)}"]});let e=t;return e})();function L(e,t){if(e&1&&(o(0,"div",1),c(1),n()),e&2){let r=C();l(1),P(r.errorResponse.message)}}function j(e,t){if(e&1&&(o(0,"div",9),m(1,"app-player",10),n()),e&2){let r=C().$implicit;l(1),b("audioSrc",r.audio)}}function G(e,t){if(e&1&&(o(0,"div"),d(1,j,2,1,"div",8),n()),e&2){let r=t.$index;l(1),p(1,r===0?1:-1)}}function Z(e,t){if(e&1&&(o(0,"section",4)(1,"div",5)(2,"h1",6),c(3),n(),o(4,"h2"),c(5),n()(),o(6,"div",7),f(7,G,2,1,"div",null,_),n()()),e&2){let r=C().$implicit,a=C();l(3),P(r.word),l(2),P(r.phonetic),u(7,a.findAudio(r.phonetics))}}function q(e,t){if(e&1&&(o(0,"section",11),m(1,"app-meaning",12),n()),e&2){let r=t.$implicit;l(1),O("meaning",r)}}function R(e,t){if(e&1&&(o(0,"div"),m(1,"app-source",14),n()),e&2){let r=t.$implicit;l(1),O("source",r)}}function U(e,t){if(e&1&&(o(0,"section",13)(1,"h4"),c(2,"Source"),n(),f(3,R,2,1,"div",null,_),n()),e&2){let r=C().$implicit;u(3,r.sourceUrls)}}function N(e,t){if(e&1&&(o(0,"article"),d(1,Z,9,2,"section",2),f(2,q,2,1,"section",15,_),d(4,U,5,0,"section",3),n()),e&2){let r=t.$implicit,a=t.$index,i=t.$count;l(1),p(1,a===0?1:-1),u(2,r.meanings),l(3),p(4,a===i-1?4:-1)}}var me=(()=>{let t=class t{constructor(){this.playing=!1,this.apiService=S(T)}set word(a){this.searched=a}ngOnChanges(){this.apiService.getWord(this.searched).then(a=>{this.word$=a})}findPhoneticText(a){return a.filter(i=>i.text)}findAudio(a){return a.filter(i=>i.audio)}isPlaying(){this.playing=!this.playing}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["app-word-details"]],inputs:{word:"word"},standalone:!0,features:[B,h],decls:4,vars:1,consts:[["class","app__error"],[1,"app__error"],["class","article__heading"],["class","article__source"],[1,"article__heading"],[1,"article__heading__left"],[1,"article-h1"],[1,"article__heading__right"],["class","player-div"],[1,"player-div"],[3,"audioSrc"],[1,"article__word__props"],[3,"meaning"],[1,"article__source"],[3,"source"],["class","article__word__props"]],template:function(i,s){i&1&&(d(0,L,2,1,"div",0),o(1,"div"),f(2,N,5,2,"article",null,_),n()),i&2&&(p(0,s.errorResponse?0:-1),u(2,s.word$))},dependencies:[y,F,D,V],styles:["svg[_ngcontent-%COMP%]{width:24px;height:24px}article[_ngcontent-%COMP%]{padding:0 10px}.article__heading[_ngcontent-%COMP%]{display:flex;gap:40%;align-items:center;margin:30px}.article__source[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-block:20px}.app__error[_ngcontent-%COMP%]{text-align:center;color:red;font-size:20px;letter-spacing:1px;overflow-wrap:anywhere;padding:10px}","[_ngcontent-%COMP%]:root{--colors-primary: #757575;--colors-background: white;--option-background: #f8f8f8;--playButtonPurple: #a463d6;--playButtonBackground: #e9d0fa;--darkPurple: #814b81;--link-color: #0000ee;--form-input-color: #6b6b6b;--select-focus-outline: #050505;--toggle-background: #757575;--fill: #000;--select-font-color: #757575}body[data-theme=light][_ngcontent-%COMP%]{--colors-primary: #757575;--colors-background: white;--option-background: #f8f8f8;--playButtonPurple: #a463d6;--playButtonBackground: #e9d0fa;--darkPurple: #814b81;--form-input-color: #6b6b6b;--select-focus-outline: #050505;--toggle-background: #757575;--fill: #000;--select-font-color: #757575}body[data-theme=dark][_ngcontent-%COMP%]{--colors-primary: #fff;--colors-background: #050505;--playButtonPurple: #a148d9;--playButtonBackground: #321a49;--darkPurple: #9e50e7;--link-color: #f8f8f8;--form-input-color: #6b6b6b;--select-focus-outline: #fff;--toggle-background: blueviolet;--fill: #fff;--select-font-color: #757575}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]{margin:0}html[_ngcontent-%COMP%]:focus-within{scroll-behavior:smooth}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]{list-style:none}body[_ngcontent-%COMP%]{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5;background:var(--colors-background);color:var(--colors-primary)}a[_ngcontent-%COMP%]:not([class]){text-decoration-skip-ink:auto}img[_ngcontent-%COMP%]{max-width:100%;display:block}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font:inherit}select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background:var(--colors-background)}.serif[_ngcontent-%COMP%]{font-family:serif}.sans-serif[_ngcontent-%COMP%]{font-family:sans-serif}.monospace[_ngcontent-%COMP%]{font-family:monospace}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.purple-text[_ngcontent-%COMP%]{color:#af6feb}svg[_ngcontent-%COMP%]{color:var(--fill)}"]});let e=t;return e})();export{me as WordDetailsComponent};
