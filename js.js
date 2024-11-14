let a= new Date();
console.log(a);
console.log(a.getFullYear());
console.log(a.getMonth())
console.log(a.getDate())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())
console.log(a.getMilliseconds())
// //setting date information
let b=new Date();
console.log(b.setFullYear(2025))
console.log(b.setMonth(0))
console.log(b.setDate(12))
// addtional date methods
c=new Date();
console.log(c.toDateString())
console.log(c.toTimeString())
console.log(c.toLocaleTimeString())
console.log(c.toLocaleDateString())

//alram
function alarmRing(){
let presentTime=new Date();    
let alramTime=new Date();
alramTime.setHours(24);
alramTime.setMinutes(0);
alramTime.setSeconds(0);
let timeDiff=alramTime-presentTime
console.log(timeDiff)
setTimeout(()=>{
    alert("Happy new year")
    },timeDiff)
console.log("your alram will ring at 12:00");
}
alarmRing()
//math functions
//round function
 let d=6.6
console.log(Math.round(d));
//trunk function
let p=6.6
console.log(Math.trunc(p))
//math.ceil
e=12.88
console.log(Math.ceil(e));
//math.floor
let f=123.555
console.log(Math.floor(f));
// sqt function
let g=144;
console.log(Math.sqrt(g));
//pow function
let h=12;
console.log(Math.pow(h,3))
//math.abs
let i=-6
console.log(Math.abs(i))
//math.min&math.max
console.log(Math.min(1,2,3,0,-0));
console.log(Math.max(1,2,3,0))
// //random function
let j=7
console.log(Math.random(j)*100)

//ES6 functions
//arrow function
const k=()=>(console.log("vamsi"));
k();
//default parameters
function q(x,y,z=300)
{
    console.log(x+y+z);
}
q(50,100)
//template literals
let l="ravi"
function r(){
    console.log("hi"+l+"how are u");

}
r()
let m="ravi"
function s(){
    console.log(`hi ${m} how are u`);

}
s()









