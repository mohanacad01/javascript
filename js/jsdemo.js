// //console.log ("welcome to js demo");

// console.log (10);

// console.log (.50);

// console.log ({fname:"mohana", gender:"female"});
// console.table ({fname:"mohana", gender:"female"});

// console.log ([10,20,30,40]);
// console.table ([10,20,30,40]);

// var a=10;
// let b=20;
// const c= 30;
// console.log (a);
// console.log (b);
// console.log (c);

// a=15;
// console.log(typeof a);

// b="mohana";
// console.log(typeof b);


// var v1=10;
// var v2=15;
// console.log(v1+v2);
// console.log(v1-v2);
// console.log(v1*v2);
// console.log(v1/v2);
// console.log(v1%v2);
// console.log(v1>v2);
// console.log(v1<v2);
// console.log(v1**v2);
// console.log(v1^v2);

// //pre increment
// v1=++v1;
// console.log(v1);
// v2=++v2;
// console.log(v2);
// //pre decrement
// v1=--v1;
// console.log(v1);
// v2=--v2;
// console.log(v2);

// v1==v2;
// console.log(v1);
// v2!==v1;
// console.log(v2);

// var v1=7;
// console.log(v1>10);
// console.log(v1<10);
// console.log(v1==10);
// console.log(v1>=7);
// console.log(v1<=7);

// //ternary operator
// //60 grade c, 70 grade b, 80 grade a, 90 grade distinction
// m=55;
// var mark= ((60<m) && (m<70))?"grade c":"grade U"
// console.log(mark);

// m=75;
// var mark=(60<m && m<70)?"garde c":(70<m && 80>m)?"grade B": "grade U"
// console.log (mark);

// m=95;
// var mark=(60<m && m<70)?"garde c":(70<m && 80>m)?"grade B": (90<m)?"grade Distinction":"grade U"
// console.log (mark);
// console.clear();

// //function declaration.
// //condition statement

// function checkgrade(m)
// {
// if (60<m && m<70)
// {
// console.log ("pass");
// console.log ("grade C");
// }
// }
// checkgrade(55);

// //if - else statement

// function checkgrade(m){

//     if (60<m && m<70)
//     {
//     console.log ("pass");
//     console.log ("grade C");
//     }
//     else
//     {
//         console.log ("fail");
//         console.log("Grade U"); 
//         console.clear(); 
  
//     }
//     checkgrade(55);
    
// }

// //Nested if statement

// function checkgrade(m){

//     if (60<m && m<70)
//     {
//     console.log ("pass");
//     console.log ("grade C");
//     }
//     else
//     {
//         if(70<m && 80>m)
//         {

//         console.log ("pass");
//         console.log ("Grade B"); 
//         }
        
//         else if(80<m && 90<=m){
//             console.log("pass");
//             console.log("Grade A");
//         }
//         else if(m>90)
//         {
//             console.log("distinction")
//         }
//         else{
//             checkgrade(prompt("enter mark"));

//         }
        
  
//     }
   
    
// }
// console.clear();
// checkgrade();

// //switch condition statement

// function checkgrade(a)
// { 
//     switch(a)
//     {
//         case 1:
//             console.log ("case 1 executed",a);
//             break;
//         case 2:
//             console.log("case 2 excecuted",a);
//             break;
//         case 3:
//             default:
//                 console.log("nothing is excecuted");
//     }
    
// }
// checkgrade(2);

// //switch condition 

// function checkgrade(m)
// {var mark= ((60<m) && (70<m));
//     switch(m)
//     {
//         case 1:
//             console.log ("Grade C",a);
//             break;
//         case 2:
//             console.log("Grade U",a);
//             break;
//         case 3:
//             default:
//                 console.log("not in list");
//     }
    
// }
// checkgrade(prompt("enter marks"));

// // swich with arithmetic operators

function switchwao(a)
{
    {
       var a1, b1;
       a1=prompt("enter a1");
       b1=prompt("enter b1");
       a1=Number(a1);
       b1=Number(b1);
    }
    switch(a)
    {
        case 'add':
        console.log('added value of ',a1, 'and ',b1,'is .. ', a1+b1);
        break;

        case 'sub':
        console.log('subtracted value of ',a1, 'and ',b1,'is .. ', a1+b1);
        break;

        case 'mul':
        console.log('multiplied value of ',a1, 'and ',b1,'is .. ', a1*b1);
        break;

        default :
          alert("value not in the list");
    }
}

function click1(){
    var username2=document.getElementById("tbuname1").value;
    console.log(username1);
    var password2=document.getElementById("tbps").value;
    // console.log(password1);
    var Name2=document.getElementById("tbName").value;
    // console.log(Name);
    var DOB2=document.getElementById("tbDOB").value;
    // console.log(DOB);
    var location2=document.getElementById("tbLocation").value;
    // console.log(location);
    var email2=document.getElementById("tbEmail").value;
    // console.log(email);
    var Male2=document.getElementById("tbMale").value;
    // console.log(Male);
     //var Female2=document.getElementById("tbFemale").value;
    // console.log(Female);
   
    // console.log(tbidAddress);
document.getElementById("tduname1").innerHTML=username2;
document.getElementById("pw1").innerHTML=password2;
document.getElementById("Name1").innerHTML=Name2;
document.getElementById("DOB1").innerHTML=DOB2;
document.getElementById("Location1").innerHTML=location2;
document.getElementById("email1").innerHTML=email2;
document.getElementById("gender1").innerHTML=Male2;


}