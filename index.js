// console.log("Hello world", 4 + 6, "another log");
// //alert("debraj");
// //document.write("This is document")
// console.warn('this is a warning');
// console.error('this is an error');

// var number1=34;
// var number2=56;

// console.log(number1+number2);

// var str1="This is a string";
// var str2='This is also a string';

// var marks={
//     deb:67,
//     harry:89,
//     mahesh:79

// }

// function avg(a,b){
//     return (a+b)/2;
// }

// c1=avg(4,8);
// console.log(c1);

// var arr=[1,2,3,4,5,6,8];

// arr.forEach(function(element){
//     console.log(element);
// })

// let myarr=["fan","bag",1,8,null];

// // console.log(myarr.length)
// myarr.pop();
// console.log(myarr);

let ele=document.getElementById("click");
console.log(ele);
let ele1=document.getElementsByClassName("container");
ele1[1].style.background="yellow";
// ele1[0].style.background="yellow";
// ele1[0].classList.add("bg-primary");

// // console.log(ele1[0].innerHTML);
// console.log(ele1[0].innerText);
// createdele=document.createElement('p');
// createdele.innerText="This is me";
// ele1[0].appendChild(createdele);
// createdele1=document.createElement('b');
// createdele1.innerText="This is created element";
// ele1[0].replaceChild(createdele1,createdele);

// function clicked()
// {
//     console.log("The button was clicked");
// }

// window.onload=function(){console.log("The page was loaded");}

// firstcontainer.addEventListener("click",function(){console.log("click hua");});
// firstcontainer.addEventListener("mouseover",function(){console.log("mouse hua");});
// prevhtml=document.querySelectorAll(".container")[1].innerHTML;
// firstcontainer.addEventListener("mouseup",function(){
//     document.querySelectorAll(".container")[1].innerHTML=prevhtml;
//     console.log("mouse up hua");
// });
// firstcontainer.addEventListener("mousedown",function(){
//     document.querySelectorAll(".container")[1].innerHTML="<b>We have clicked</b>";
//     console.log("mouse down hua");
// });

// logkaro=()=>{
//     document.querySelectorAll(".container")[1].innerHTML="<b>We have clicked</b>";
//     console.log("let's do logkaro");
// }

// setTimeout(logkaro,3000);

// clr=setInterval(logkaro,2000);

// obj={name:"harry",length:89};
// jso=JSON.stringify(obj);

a=5;
let str=`This is ${a}
This is a new line`;
console.log(str);

