const k=document.querySelectorAll('[data-bs-toggle="tooltip"]');[...k].map(e=>new bootstrap.Tooltip(e));const v=document.querySelectorAll('[data-bs-toggle="popover"]');[...v].map(e=>new bootstrap.Popover(e));document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("[data-trigger]");for(let r=0;r<e.length;++r){var t=e[r];new Choices(t,{allowHTML:!0,placeholderValue:"This is a placeholder set in the config",searchPlaceholderValue:"Search"})}});const q=document.querySelector(".pickr-container-primary"),b=document.querySelector(".theme-container-primary"),B=[["nano",{defaultRepresentation:"RGB",components:{preview:!0,opacity:!1,hue:!0,interaction:{hex:!1,rgba:!0,hsva:!1,input:!0,clear:!1,save:!1}}}]],d=[];let u=null;for(const[e,t]of B){const r=document.createElement("button");r.innerHTML=e,d.push(r),r.addEventListener("click",()=>{const o=document.createElement("p");q.appendChild(o),u&&u.destroyAndRemove();for(const a of d)a.classList[a===r?"add":"remove"]("active");u=new Pickr(Object.assign({el:o,theme:e,default:"rgb(84, 109, 254)"},t)),u.on("changestop",(a,l)=>{let c=l.getColor().toRGBA();document.querySelector("html").style.setProperty("--primary-rgb",`${Math.floor(c[0])}, ${Math.floor(c[1])}, ${Math.floor(c[2])}`),localStorage.setItem("primaryRGB",`${Math.floor(c[0])}, ${Math.floor(c[1])}, ${Math.floor(c[2])}`),i()})}),b.appendChild(r)}d[0].click();document.getElementById("year").innerHTML=new Date().getFullYear();(function(){document.querySelector("html"),document.querySelector(".main-content"),I(),L(),m()})();function L(){let e,t,r,o,a,l,c,s,h,p,n=document.querySelector("html");r=document.querySelector("#switcher-light-theme"),o=document.querySelector("#switcher-dark-theme"),e=document.querySelector("#switcher-ltr"),t=document.querySelector("#switcher-rtl"),a=document.querySelector("#switcher-primary"),l=document.querySelector("#switcher-primary1"),c=document.querySelector("#switcher-primary2"),s=document.querySelector("#switcher-primary3"),h=document.querySelector("#switcher-primary4"),p=document.querySelector("#reset-all"),r.addEventListener("click",()=>{w(),localStorage.setItem("xintraHeader","light"),localStorage.setItem("xintraMenu","light")}),o.addEventListener("click",()=>{E(),localStorage.setItem("xintraMenu","dark"),localStorage.setItem("xintraHeader","dark")}),a.addEventListener("click",()=>{localStorage.setItem("primaryRGB","106, 91, 204"),n.style.setProperty("--primary-rgb","106, 91, 204"),i()}),localStorage.primaryRGB=="106, 91, 204"&&(document.querySelector("#switcher-primary").checked=!0),l.addEventListener("click",()=>{localStorage.setItem("primaryRGB","100, 149, 237"),n.style.setProperty("--primary-rgb","100, 149, 237"),i()}),localStorage.primaryRGB=="100, 149, 237"&&(document.querySelector("#switcher-primary1").checked=!0),c.addEventListener("click",()=>{localStorage.setItem("primaryRGB","0, 123, 167"),n.style.setProperty("--primary-rgb","0, 123, 167"),i()}),localStorage.primaryRGB=="0, 123, 167"&&(document.querySelector("#switcher-primary2").checked=!0),s.addEventListener("click",()=>{localStorage.setItem("primaryRGB","10, 180, 255"),n.style.setProperty("--primary-rgb","10, 180, 255"),i()}),localStorage.primaryRGB=="10, 180, 255"&&(document.querySelector("#switcher-primary3").checked=!0),h.addEventListener("click",()=>{localStorage.setItem("primaryRGB","139, 149, 4"),n.style.setProperty("--primary-rgb","139, 149, 4"),i()}),localStorage.primaryRGB=="139, 149, 4"&&(document.querySelector("#switcher-primary4").checked=!0),t.addEventListener("click",()=>{localStorage.setItem("xintrartl",!0),localStorage.removeItem("xintraltr"),f()}),e.addEventListener("click",()=>{localStorage.setItem("xintraltr",!0),localStorage.removeItem("xintrartl"),g()}),p.addEventListener("click",()=>{n.style.removeProperty("--primary-rgb"),n.removeAttribute("dir","rtl"),n.setAttribute("dir","ltr"),x()})}function g(){var t;let e=document.querySelector("html");(t=document.querySelector("#style"))==null||t.setAttribute("href","http://127.0.0.1:5500/ assets/libs/bootstrap/css/bootstrap.min.css"),e.setAttribute("dir","ltr"),document.querySelector("#switcher-ltr").checked=!0,m()}function f(){var t;document.querySelector("html").setAttribute("dir","rtl"),(t=document.querySelector("#style"))==null||t.setAttribute("href","http://127.0.0.1:5500/ assets/libs/bootstrap/css/bootstrap.rtl.min.css"),m()}localStorage.xintrartl&&f();function w(){document.querySelector("html").setAttribute("data-theme-mode","light"),document.querySelector("#switcher-light-theme").checked=!0,i(),localStorage.removeItem("xintradarktheme"),m()}function E(){document.querySelector("html").setAttribute("data-theme-mode","dark"),i(),localStorage.setItem("xintradarktheme",!0),localStorage.removeItem("xintralighttheme"),m()}function x(){document.querySelector("html"),m(),localStorage.clear(),i(),g(),w(),document.querySelector("#switcher-primary").checked=!1,document.querySelector("#switcher-primary1").checked=!1,document.querySelector("#switcher-primary2").checked=!1,document.querySelector("#switcher-primary3").checked=!1,document.querySelector("#switcher-primary4").checked=!1}function m(){localStorage.getItem("xintradarktheme")&&(document.querySelector("#switcher-dark-theme").checked=!0),localStorage.getItem("xintrartl")&&(document.querySelector("#switcher-rtl").checked=!0)}function i(){getComputedStyle(document.documentElement).getPropertyValue("--primary-rgb").trim()}i();function I(){if(localStorage.primaryRGB&&(document.querySelector(".theme-container-primary")&&(document.querySelector(".theme-container-primary").value=localStorage.primaryRGB),document.querySelector("html").style.setProperty("--primary-rgb",localStorage.primaryRGB)),localStorage.xintradarktheme&&document.querySelector("html").setAttribute("data-theme-mode","dark"),localStorage.xintrartl&&document.querySelector("html").setAttribute("dir","rtl"),localStorage.xintralayout){let e=document.querySelector("html");localStorage.getItem("xintralayout"),e.setAttribute("data-nav-layout","horizontal")}}function A(e){const t=document.querySelectorAll(".side-menu__item"),r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.forEach(o=>{var s;const a=o.getAttribute("href");let l;a!="javascript:void(0);"&&a!=="#"&&(l=document.querySelector(a));const c=r+73;(l==null?void 0:l.offsetTop)<=c&&(l==null?void 0:l.offsetTop)+l.offsetHeight>c?(o.parentElement.parentElement.classList.contains("child1")&&o.parentElement.parentElement.parentElement.children[0].classList.add("active"),o.classList.add("active"),(s=o.closest(".child1"))!=null&&s.previousElementSibling&&o.closest(".child1").previousElementSibling.classList.add("active")):o.classList.remove("active")})}window.document.addEventListener("scroll",A);const y=document.querySelector(".scrollToTop"),S=document.documentElement;window.onscroll=()=>{S.scrollHeight-S.clientHeight,window.scrollY>100?y.style.display="flex":y.style.display="none"};y.onclick=()=>{window.scrollTo(0,0)};new Swiper(".testimonialSwiperService",{slidesPerView:3,spaceBetween:30,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{enabled:!0,delay:3e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:1,spaceBetween:10},1112:{slidesPerView:3,spaceBetween:10},1300:{slidesPerView:2,spaceBetween:30}}});(function(){var e=document.querySelectorAll(".switcher-pricing input[type='checkbox']")[0],t=document.getElementById("yearly1"),r=document.getElementById("monthly1");e.addEventListener("click",function(){e.checked?(t.classList.add("show"),r.classList.remove("show")):(r.classList.add("show"),t.classList.remove("show"))})})();