function e(e,n){return new Promise(function(t,c){e.addEventListener(n,function(c){c&&t("It was ".concat(n," on the element:\n          ").concat(e.nodeName,", id: ").concat(e.id,"."))})})}var n=function(e){var n=document.createElement("div");n.textContent=e,n.classList.add("message"),document.body.appendChild(n)},t=document.getElementById("login"),c=document.getElementById("password"),d=document.getElementById("submit");e(t,"click").then(n),e(c,"click").then(n),e(d,"click").then(n),e(t,"input").then(n),e(c,"input").then(n),e(t,"blur").then(n),e(c,"blur").then(n),e(d,"blur").then(n);
//# sourceMappingURL=index.c39ac849.js.map
