// let obj={
//     name:"Vipin",
//     age:"19",
// }
// let arr={
//     name:"yash",
//     section:"FSD",
// const button=document.getElementsByClassName("btn_click")
// button[0].addEventListener("click",Btn_click)
// function Btn_click(){
//     alert("button clicked")
// }

// const stopButton=document.getElementsByClassName("Btn_stop")
// stopButton[0].addEventListener("click",Stop_click)
// function Stop_click(){
//     button[0].removeEventListner("click",Btn_click)
//     alert("Event Listner Removed")
// // }
// const btn=document.querySelector(".btn_click")
// btn.addEventListener('keyup',(event)=>{
//     console.log(event.key)
// })

// const form=document.querySelector("form")
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log(event.srcElement[0].value)
//     console.log(event.srcElement[1].value)
//     console.log(event)
//     console.log("Button Clicked")
// })
// debugger
// console.log(a)
// // console.log(b)
// var a = 2343
// let b = 342;

// console.log(a)
// console.log(b)

// function print(){
//     console.log("inside fn")
// }
// print()

// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.log("Inside third function")
// }
// first()

// let total=345
// function calculate(){
//     console.log(total)
//     let total=565
// }

// calculate()

// console.log("THis is the code")
// setTimeout(()=>{console.log("After 5 sec")},5000)
// console.log("End of code")
// const timeout=setTimeout(()=>{
//     console.log("After 2 sec")
// },200)
// clearTimeout(timeout)
// const interval=setInterval(() => {
//     console.log("Every second")
// }, 2000);

// setTimeout(()=>{clearInterval(interval)},10000)
// const studentName = document.querySelector('#name')
// const button=document.querySelector('#btn')
// const list =document.querySelector('#list')

// console.log("Starting homework..");

// setTimeout(()=>{
//     console.log("Homeworkdone!..");
//     console.log("Starting Dinner...");

//     setTimeout(()=>{
//         console.log("Dinner Done...");
//         console.log("Getting Ready To go Out...");

//         setTimeout(()=>{
//             console.log("Going to Playground..");
//         },1000);
//     },1500);
// },2000);

// function finishHomework(callback){
//     console.log("Starting homework...");
//     setTimeout(()=>{
//         console.log("Homework done..");
//         callback();
//     },2000);
// }

// function eatDinner(callback){
//     console.log("Starting dinner..");
//     setTimeout(()=>{
//         console.log("Dinner done...");
//         callback();
//     },1500);
// }

// function goToPlayground(){
//     console.log("Going to playgroung...");
// }

//  finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     });
// });

const p =new Promise((res , rej)=>{
    console.log("Going to do the homework!!");

    setTimeout(()=>{
        const done=false;
        if (done){
            res ("Success")
        }else{
            rej("Failed to fetch the data..")
        }
    },3000)
})
p.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})











