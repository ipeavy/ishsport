"use strict";function makeAlert(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:5e3;if(!t.length)return!1;var n=document.querySelector(".toasts");n||((n=document.createElement("div")).classList.add("toasts"),document.body.appendChild(n));var a=document.createElement("div");return a.classList.add("toasts__item"),e&&a.classList.add(e),a.textContent=t,n.appendChild(a),a.addEventListener("click",function(){return closeAlert(n,a)}),setTimeout(function(){return closeAlert(n,a)},r),!0}function closeAlert(e,t){t.classList.add("disappear"),setTimeout(function(){t.remove(),e&&e.childElementCount<=0&&e.remove()},500)}var loader='<div class="loader"><span></span><span></span><span></span><span></span></div>',image_placeholder="./img/no_image.jpg";function SmoothScrollTo(e){e&&e.scrollIntoView({behavior:"smooth"})}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("a"),t=document.querySelectorAll("table"),r=document.querySelectorAll("form");document.querySelectorAll("img");function i(e){e.classList.remove("submit"),e.querySelector('[type="submit"]').disabled=!1}e.forEach(function(e){e.hasAttribute("target")&&"_blank"===e.getAttribute("target")&&e.setAttribute("rel","noopener noreferrer"),e.addEventListener("click",function(e){var t=e.currentTarget.getAttribute("href");"#"!==t.charAt(0)&&("/"!==t.charAt(0)||"#"!==t.charAt(1))||(t=document.querySelector(e.currentTarget.hash))&&(e.preventDefault(),SmoothScrollTo(t))})}),t.forEach(function(e){e.parentElement.classList.contains("table-responsive")||(e.outerHTML='<div class="table-responsive">'+e.outerHTML+"</div>")}),r.forEach(function(r){function n(e){var t=e.getAttribute("data-hide");"checkbox"!==e.getAttribute("type")||e.checked||(t?t+=","+e.getAttribute("data-show"):t=e.getAttribute("data-show")),(t="radio"===e.getAttribute("type")&&!e.checked?null:t)&&t.split(",").forEach(function(e){var t=o.querySelector("[name='"+e+"']"),e=t.parentElement;(e.classList.contains("form-control")?e:t).classList.add("hidden")})}function a(e){var t=e.getAttribute("data-show");"checkbox"!==e.getAttribute("type")||e.checked||(t=null),(t="radio"===e.getAttribute("type")&&!e.checked?null:t)&&t.split(",").forEach(function(e){var t=o.querySelector("[name='"+e+"']"),e=t.parentElement;(e.classList.contains("form-control")?e:t).classList.remove("hidden")})}var o;r.insertAdjacentHTML("beforeend",loader),(o=r).querySelectorAll("[data-form-behavior]").forEach(function(t){"visibility"===t.getAttribute("data-form-behavior")&&(n(t),a(t)),t.addEventListener("change",function(e){"visibility"===t.getAttribute("data-form-behavior")&&(n(t),a(t))})}),r.addEventListener("submit",function(e){e.preventDefault(),(e=r).classList.add("submit"),e.querySelector('[type="submit"]').disabled=!0;e=new FormData(r);fetch(r.action,{method:"POST",body:e}).then(function(e){return e.json()}).then(function(e){var t;1===e.success?(makeAlert("success",e.message),r.hasAttribute("data-redirect")&&("this"===(t=r.getAttribute("data-redirect"))?document.location.reload():window.location.href=t),r.hasAttribute("data-reset")&&r.reset()):makeAlert("error",e.message),i(r)}).catch(function(e){makeAlert("error",e),i(r)})})})}),window.onload=function(){document.querySelectorAll("img").forEach(function(e){e.complete&&void 0!==e.naturalWidth&&e.naturalWidth<=0&&(e.src=image_placeholder)}),document.addEventListener("contextmenu",function(e){"IMG"==e.target.nodeName&&e.preventDefault()})};