(()=>{"use strict";document.body;document.body;function e(e,n,t,r,a,o,c){try{var u=e[o](c),i=u.value}catch(e){return void t(e)}u.done?n(i):Promise.resolve(i).then(r,a)}function n(n){return function(){var t=this,r=arguments;return new Promise((function(a,o){var c=n.apply(t,r);function u(n){e(c,a,o,u,i,"next",n)}function i(n){e(c,a,o,u,i,"throw",n)}u(void 0)}))}}var t,r,a=function(){var e=n(regeneratorRuntime.mark((function e(n){var t,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("upload_preset","shsjufsd"),t.append("file",n),e.prev=3,e.next=6,fetch("https://api.cloudinary.com/v1_1/defok5em4/upload",{method:"POST",body:t});case 6:if(!(r=e.sent).ok){e.next=14;break}return e.next=10,r.json();case 10:return a=e.sent,e.abrupt("return",a.secure_url);case 14:return e.next=16,r.json();case 16:throw e.sent;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(n){return e.apply(this,arguments)}}(),o=document.body;o.innerHTML=' <h1 class="titulo">Subir Archivos</h1>\n                <hr>\n                <label for="caja">Seleccione una fotografia:</label>\n                <input type="file" name="caja" id="caja" accept="image/png, image/jpg">\n                <br>\n                <img src="" alt="imagen" id="foto">',t=document.querySelector("#caja"),r=document.querySelector("#foto"),t.addEventListener("change",(function(e){var n=e.target.files[0];a(n).then((function(e){r.src=e}))}))})();