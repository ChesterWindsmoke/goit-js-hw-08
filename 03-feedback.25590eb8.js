!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var o,r,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),d?p(e):a}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function O(){var e=b();if(w(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?y(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?p(e):(o=r=void 0,a)}function T(){var e=b(),n=w(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?a:h(b())},T}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),w=document.querySelector('[name="email"]'),O=document.querySelector('[name="message"]'),h=(document.querySelector('[type="submit"]'),e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:w.value,message:O.value}))}),500));window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);w.value=t.email,O.value=t.message}})),j.addEventListener("input",h),j.addEventListener("submit",(function(e){e.preventDefault();var t={email:w.value,message:O.value};console.log(t),localStorage.removeItem("feedback-form-state"),w.value="",O.value=""}))}();
//# sourceMappingURL=03-feedback.25590eb8.js.map
