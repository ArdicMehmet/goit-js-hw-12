import{a as u,S as p,i as h}from"./assets/vendor-Dp7Ig4E2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector(".loading"),f=document.querySelector(".searchBtn"),c=document.querySelector(".gallery"),m="https://pixabay.com/api/?",y="46048347-9d88aa79f4238f227ee13ac9b";function g(){c.innerHTML=""}const d=document.querySelector(".searchInput");async function v(r){g();const o=`${m}key=${y}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;try{a.style.display="block";const n=await u(o);if(!(n.status>=200&&n.status<300))throw new Error(`Response status: ${n.status}`);a.style.display="none";const i=n.data;if((i==null?void 0:i.hits.length)>0){d.value="";const e=document.createDocumentFragment();i.hits.forEach(s=>{const l=document.createElement("li");l.innerHTML=`<a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}" />
            <div class="general-likes-container">
              <div class="likes-container">
                <h3 class="likes-title">Likes</h3>
                <div class="likes">${s.likes}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Views</h3>
                <div class="likes">${s.views}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Comments</h3>
                <div class="likes">${s.comments}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Downloads</h3>
                <div class="likes">${s.downloads}</div>
              </div>
            </div>
          </a>`,e.appendChild(l)}),c.appendChild(e);const t=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,showCounter:!0,enableKeyboard:!0,loop:!0,nav:!0,close:!0,animationSpeed:250});t.on("show.simplelightbox",function(){console.log("Modal is shown")}),t.on("close.simplelightbox",function(){console.log("Modal is closed")})}else h.show({theme:"custom",icon:"fas fa-exclamation-circle",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",progressBarColor:"#B51B1B",onOpening:function(e,t){console.info("Modal is open")},onClosing:function(e,t,s){console.info("closedBy: "+s)}})}catch(n){a.style.display="none",console.error(n.message)}}f.addEventListener("click",r=>{const o=d.value.trim();o?v(o):alert("Search input cant be empty")});
//# sourceMappingURL=index.js.map
