function myfunction(e) {
    // e.preventDefault();
    e.stopPropagation();
    let parent = document.getElementById("list_items");

    console.log(e);
    let child = parent.childNodes;
    child.forEach((el) => {
        if (el.className) {
            el.classList.remove("active");
        }
    });
    console.log();
    e.target.parentElement.classList.add("active");
}
function navOpen(e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e);
    let c = e.target;
    c.classList.toggle("active");
    let menu = document.getElementById("list_items");
    menu.classList.toggle("active");
}
function monthyear(e) {
    // e.preventDefault();
    e.stopPropagation();
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    month.classList.toggle("active");
    year.classList.toggle("active");
    console.log(e);
    pricingHandler(e);
}

function pricingHandler(event){
    let h1=document.querySelectorAll(".plan_box .number h1");
    let h3=document.querySelectorAll(".plan_box .number h3");
    for (let i = 0; i < h1.length; i++) {
        if(event.target.innerText == "Yearly"){
            h1[i].innerText = `$${parseInt(h1[i].innerText.replace("$",""))*10}`;
            h3[i].innerText = `/year`;
        }else{
            h1[i].innerText = `$${parseInt(h1[i].innerText.replace("$",""))/10}`;
            h3[i].innerText = `/mo`;

        }
    }
}
(function (){const acc = document.getElementsByClassName("contentbox");
console.log("this funtion called immediately");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (event) {
        let ele = event.target.parentElement;
        ele.classList.toggle("active");
        if(ele.classList.contains("active")){
            gsap.to(ele, { 
            height: "auto"
         })
        }else{
            gsap.to(ele, { 
                height: 80
             })
        }
        
        
    })
}}())
// let home=document.getElementById("home");
// console.log(home);
// let feature=document.getElementsByTagName("img")[4];
// console.log(feature);
// let button=document.getElementsByTagName("button")[2];
// console.log(button);
// let homes=document.getElementById("home");
// let show=homes.getElementsByTagName("h1");
// console.log(show);
// let classname=document.getElementsByClassName("heading_expenses");
// console.log(classname);
// let c=document.querySelectorAll(".container");
// console.log(c);
// let doc= document.URL;
// console.log(doc);
// let team = document.querySelector("#team").innerText;
// console.log(team);
// let attribute = document.querySelector("#team").getAttributeNode("class");
// console.log(attribute);
// let attri =document.querySelector("#team").attributes[0];
// console.log(attri);
// let h=document.querySelector(".faqs .container .heading_faqs");
// h.innerHTML=" <h5> Asked Question Base On Logic. </h5>";
// console.log(h);
// let d=document.querySelectorAll(".footer a");
// for (let i = 0; i < d.length; i++) {
//     // if(d[i]){
//         d[i].setAttribute("herf","www.facebook.com");
//     // }
    
// }
// console.log(d);
// let btn= document.querySelector(".Pricing .plan_box .button");
// btn.setAttribute("class","button btn-lg ");
// let s=btn.attributes;
// console.log(btn);
// console.log(s);

// let colors=document.querySelector(" .superpower div");
// colors.style.backgroundColor="red";
// colors.style.color="black";
// colors.paddingTop="100px";  
// console.log(colors);
// let f= document.querySelector(".label").classList;
// f.add("bg-dark","bg-dangrous");
// f.remove("bg-dark");
// f.replace("bg-dangrous","bg-warning");
// console.log(f);