function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function w(e){return c=e,u=setTimeout(j,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function j(){var e=v();if(S(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function O(e){return u=void 0,p&&o?b(e):(o=i=void 0,a)}function h(){var e=v(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},h.flush=function(){return void 0===u?a:O(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),w=document.querySelector('[name="email"]'),S=document.querySelector('[name="message"]'),j=(document.querySelector('[type="submit"]'),e(t)((()=>{localStorage.setItem("feedback-form-state",JSON.stringify({email:w.value,message:S.value}))}),500));window.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);w.value=t.email,S.value=t.message}})),b.addEventListener("input",j),b.addEventListener("submit",(e=>{e.preventDefault();const t={email:w.value,message:S.value};console.log(t),localStorage.removeItem("feedback-form-state"),w.value="",S.value=""}));
//# sourceMappingURL=03-feedback.4c97d31e.js.map
