import{a as m,S as g,i as v}from"./assets/vendor-Dp7Ig4E2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const a=document.querySelector(".loading"),b=document.querySelector(".searchBtn"),h=document.querySelector(".gallery"),k="https://pixabay.com/api/?",f=document.querySelector(".searchInput"),p=document.querySelector(".load-btn");let d;const w="46048347-9d88aa79f4238f227ee13ac9b";let c,u="",r=1;function L(){h.innerHTML=""}async function y(l){r==1&&L();const s=`${k}key=${w}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${r}`;try{a.style.display="block";const o=await m(s);if(!(o.status>=200&&o.status<300))throw new Error(`Response status: ${o.status}`);a.style.display="none",c&&c.close();const i=o.data;if((i==null?void 0:i.hits.length)>0){f.value="";const t=document.createDocumentFragment();i.hits.forEach(e=>{const n=document.createElement("li");n.innerHTML=`<a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <div class="general-likes-container">
              <div class="likes-container">
                <h3 class="likes-title">Likes</h3>
                <div class="likes">${e.likes}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Views</h3>
                <div class="likes">${e.views}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Comments</h3>
                <div class="likes">${e.comments}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Downloads</h3>
                <div class="likes">${e.downloads}</div>
              </div>
            </div>
          </a>`,t.appendChild(n)}),h.appendChild(t),r!==1&&window.scrollBy(window.scrollY,d*2),c=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,showCounter:!0,enableKeyboard:!0,loop:!0,nav:!0,close:!0,animationSpeed:250})}else p.style.display="none",v.show({theme:"custom",icon:"fas fa-exclamation-circle",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",progressBarColor:"#B51B1B",onOpening:function(t,e){console.info("Modal is open")},onClosing:function(t,e,n){console.info("closedBy: "+n)}})}catch(o){a.style.display="none",console.error(o.message)}}b.addEventListener("click",l=>{const s=f.value.trim();s?(r=1,u=s,y(u),p.style.display="inline-block"):alert("Search input cant be empty")});p.addEventListener("click",l=>{r++,d=document.querySelector(".gallery a").getBoundingClientRect().height,console.log(d),y(u)});
//# sourceMappingURL=index.js.map
