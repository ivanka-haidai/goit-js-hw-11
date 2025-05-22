import{a as f,S as d,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="50379618-b28b09185e51127b70b956184",y="https://pixabay.com/api/";async function h(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:r})).data}const c=document.querySelector(".loader"),u=document.querySelector(".gallery");let l;function b(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:m,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img 
            class="gallery-image" 
            src="${i}" 
            alt="${e}" 
          />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${m}</p>
          <p><b>Downloads:</b> ${p}</p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){u.innerHTML=""}function w(){c.classList.add("is-active")}function S(){c.classList.remove("is-active")}const v=document.querySelector(".form");v.addEventListener("submit",E);async function E(o){o.preventDefault(),L(),w();try{const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search term.",position:"topRight",timeout:3e3});return}const i=await h(r);if(i.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}b(i.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{S()}}
//# sourceMappingURL=index.js.map
