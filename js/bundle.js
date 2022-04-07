(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var a=r.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),(()=>{function e(e){const t=document.querySelector(e);return Number.parseInt(t.value)}const t=e=>parseFloat((4*e).toFixed(2)),r=e=>parseFloat((e**2).toFixed(2)),a=(e,t)=>parseFloat((e*t).toFixed(2)),o=(e,t,r)=>parseFloat((e+t+r).toFixed(2)),n=(e,t)=>Math.sqrt(e**2-t**2/4),c=(e,t,r,a)=>2/r*Math.sqrt(a*(a-e)*(a-t)*(a-r)),l=e=>parseFloat((4*e).toFixed(2)),i=(e,t)=>parseFloat((e*t/2).toFixed(2)),u=e=>parseFloat((Math.pow(e,2)*Math.PI).toFixed(2)),s=o=>{const n={sS:e("#squareInput"),rH:e("#rectangleHeightInput"),rB:e("#rectangleBaseInput"),dS:e("#diamondSideInput"),dD:e("#diamondDiagonalInput"),cR:e("#circleInput")},c=(s=n.dS,d=n.dD,parseFloat(Math.sqrt(4*s**2-d**2).toFixed(2)));var s,d;const g={squarePerimeter:t(n.sS),squareArea:r(n.sS),rectanglePerimeter:(p=n.rB,b=n.rH,parseFloat((2*(p+b)).toFixed(2))),rectangleArea:a(n.rB,n.rH),diamondDiagonal:c,diamondPerimeter:l(n.dS),diamondArea:i(c,n.dD),circumference:(m=n.cR,parseFloat((2*m*Math.PI).toFixed(2))),circleArea:u(n.cR)};var m,p,b;return document.querySelector("#"+o).textContent=g[o]},d=t=>{const r={a:e("#triangleSideAInput"),b:e("#triangleSideBInput"),base:e("#triangleBaseInput")},a=parseFloat(r.a*Math.sqrt(2).toFixed(1)),l=Math.ceil(r.a**2+r.b**2),i=r.base**2,u=r.a===r.b&&r.b===r.base,s=r.a===r.b&&r.base<a,d=r.a===r.b&&r.base==a,g=r.a===r.b&&r.base>a,m=r.a<r.b&&r.b<r.base&&l>i,p=r.a<r.b&&l>r.base**2*.983&&l<=i,b=r.a<r.b&&r.b<r.base&&l<i,q=o(r.a,r.b,r.base)/2,S=e=>document.querySelector("#triangleType").textContent=e;let h;u?(h=(e=>Math.sqrt(3)*e/2)(r.a),S("Triángulo equilatero-acutángulo")):s?(h=n(r.a,r.base),S("Triángulo isósceles-acutángulo")):d?(h=n(r.a,r.base),S("Triángulo-rectángulo Isósceles")):g?(h=n(r.a,r.base),S("Triángulo isósceles-obtusángulo")):m?(h=c(r.a,r.b,r.base,q),S("Triángulo escaleno-acutángulo")):p?(h=r.a*r.b/r.base,S("Triángulo-rectángulo Escaleno")):b?(h=c(r.a,r.b,r.base,q),S("Triángulo escaleno-obtusángulo")):alert("Ingresa correctamente todos los lados del triangulo, lee la guía");const y={triangleHeight:parseFloat(h.toFixed(2)),trianglePerimeter:o(r.a,r.b,r.base),triangleArea:(F=r.base,x=h,parseFloat((F*x/2).toFixed(2)))};var F,x;return document.querySelector("#"+t).innerHTML=y[t]},g=(e,t)=>e*(100-t)/100,m=(e,t)=>e-t,p=[],b=()=>document.querySelector("#data").textContent=p;document.querySelector(".squareCalc").onclick=()=>{s("squarePerimeter"),s("squareArea")},document.querySelector(".rectangleCalc").onclick=()=>{s("rectanglePerimeter"),s("rectangleArea")},document.querySelector(".diamondCalc").onclick=()=>{s("diamondDiagonal"),s("diamondPerimeter"),s("diamondArea")},document.querySelector(".circleCalc").onclick=()=>{s("circumference"),s("circleArea")},document.querySelector(".triangleCalc").onclick=()=>{d("triangleHeight"),d("trianglePerimeter"),d("triangleArea")},document.querySelector(".discountCalc").onclick=()=>{(()=>{const t={price:e("#priceInput"),discount:e("#discountInput")};document.querySelector("#priceDiscount").textContent=g(t.price,t.discount)})()},document.querySelector(".confirmCupon").onclick=()=>{(()=>{const e=e=>{document.querySelector("#priceCode").innerHTML=`<s>$800</s> <br>\n    $${g(800,e)}`,document.querySelector("#validation").textContent=`${e}% de descuento`};switch(document.querySelector("#inputCode").value){case"awesomeGuitar30":e(30);break;case"awesomeGuitar20":e(20);break;case"awesomeGuitar15":e(15);break;default:document.querySelector("#priceCode").textContent="$800",document.querySelector("#validation").textContent="Codigo invalido"}})()},document.querySelector(".insert").onclick=()=>{(()=>{let t=e("#dataInput");p.push(t)&&b()})()},document.querySelector(".remove").onclick=()=>{p.pop()&&b()},document.querySelector(".statisticCalc").onclick=()=>{document.querySelector("#mean").textContent=(e=>{let t=e.length>0?e.reduce(((e,t)=>e+t)):0;return parseFloat((t/e.length).toFixed(2))})(p),document.querySelector("#median").textContent=(e=>{e.sort(m);let t=parseInt(e.length/2);const r=(e[t]+e[t-1])/2,a=e[t];return e.length%2==0?r:a})(p),document.querySelector("#mode").textContent=(e=>e.sort(((t,r)=>e.filter((e=>e===t)).length-e.filter((e=>e===r)).length)).slice(e.length-1))(p)}})(),e.p})();