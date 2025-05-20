import{a as p,S as d,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="50379618-b28b09185e51127b70b956184",g="https://pixabay.com/api/";async function h(o){const r={key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(g,{params:r})).data}const c=document.querySelector(".loader"),u=document.querySelector(".gallery");let n;function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:m,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img 
            class="gallery-image" 
            src="${s}" 
            alt="${e}" 
          />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${m}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",r),n?n.refresh():n=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){u.innerHTML=""}function S(){c.classList.add("is-active")}function v(){c.classList.remove("is-active")}const w=document.querySelector(".form");w.addEventListener("submit",E);async function E(o){o.preventDefault(),L(),S();try{const r=o.target.elements["search-text"].value.trim(),s=await h(r);if(s.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}b(s.hits)}catch{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{v()}}
//# sourceMappingURL=index.js.map
