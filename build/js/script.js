document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".tabs");M.Tabs.init(e);var t=document.querySelector(".collapsible");M.Collapsible.init(t)}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".top"),n=null;window.onclick=function(e){(n=e.srcElement.parentElement).classList.contains("collapsible__item")&&(n.classList.contains("active")?t.classList.add("bg-peach"):t.classList.remove("bg-peach"))}});