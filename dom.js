//WIMDOW OBJECT
//WINDOW OBJECT JO KE BROWSER KE JANIB SE PHLE SE CREATE HOTI HAI OR YE JAVA SCRRIPT NAHI KR TA 
//OR YE OAUTOMATIC BRAWSER CREATE KRTA HAI
//WINDOW OBJECT YE 1 GOLBAL OBJECT HAI ISS KE PROPERTIES OR METHOD OR SARA CODE HOTA HAI
//console.log(window)

//WHAT IS DOM
//HTML KO JAVASCRIPT ME AXIXT KR NE KA TARIKA HAI DOM
//WHEN A WEB PAGE IS LOADED ,THE BROWSER  CREATES A DOCUMENT OBJECT MODEL (DOM) OF THE PAGE

//WINDOW OBJEST KE ANDAR DOCUMENT OBJECT HOTA HAI USKE ANDAR SE HAM SARA HTML CODE YA PAGE DEKH SAKTEY HAIN
//console.log(window);
//console.log(window.document); YE HTML CODE PRINT KR WAYE GA
//CONSOLE.LOG SRIF PRINT KR WA TA HAI 
//CONSOLE.DIR HUM OBJECT KO PRINT KR WANE KE LIYE USE KAREY GE EXAMPLE DOCUMENT 
//console.dir(document);


/*                                    TREE KE ANDRE HAR BOX NADE KETHEY HAI YE HAMAREY LIYE OBJECT HOTI HAIN
                                        WINDOW
                                           |
                                           |
                                        DOCUMENT 
                                           |
                                         HTML
                                          /
                                        /
                                      /
                                    /
                                  /
                                /
                              /
                            /
                          /
                      HEAD
                    / |
            
                  /
              META*/

//DOM MANIPULATION
//YA NHI HAM ELEMENTS KO SELECTE KR KE OSME CHANGES KESAY LA SAKHEY

//1} SELCTING WITH ID
//DEFINE=> document.getElementById("myId");
//ISS SE HUM ID KO SELECT KR KE CHANGES KR SAKHTEY HAIN
//EXAMPLE
/*let my = document.getElementById("one");
//console.log(my);
console.dir(my);*/

//2} SELECTING WITH CLASS
//DEFINE=> document.getElementsByClassName("myclass");
//ISS SE HUM CLASS KI MADAD SE ELEMENTS KE ANDAR CHANGES KR SAKHTET HAIN
//EXAMPLE
 /*let cl1 = document.getElementsByClassName("class1");
 console.log(cl1);
 console.dir(cl1);*/

 //3} SELCTING WITH TAG 
 //DEFINE=> document.getElementsByTagName("p");
 //ISS SE HUM HTML TAG KO SELECT KR KE US ME CHANGES KR SAKHTEY HAIN
 //EXAMPLE
 /*let tag = document.getElementsByTagName("button");
 console.log(tag);
 console.dir(tag);*/

 //[QUERY SELECTOR] YE ACHA TARIKA HOTA HAI 
 //1ST DEFINE=> document.querySelctor("myId"/"myClass"/"tag") ye hume first elements return kr ke deta hai
 //EXAMPLE ID
/* let selc = document.querySelector("#one");
 console.dir(selc);*/

 //EXAMPLE CALSS
 /*let selc = document.querySelector(".class1");
 console.dir(selc);
 console.log(selc);*/

 //EXAMPLE TAG
 /*let sel = document.querySelector("p");
 console.dir(sel);
 console.log(sel);*/

 //2ND DEFINE=> document.querySelctorAll("myId"/"myClass"/"tag") ye all elements return kr ke deta hai or ye node list return kr ke deta hai
 //EXAMPLE ID
 /*let selc = document.querySelectorAll("#one");
 console.dir(selc);
 console.log(selc);*/

 //EXAMPLE CLASS
 /*let sel = document.querySelectorAll(".class1");
 console.dir(sel);
 console.log(sel);*/

 //EXAMPLE TAG
 /*let selct = document.querySelectorAll("p");
 console.dir(selct);
 console.log(selct);*/

 //DOM MANIPULATION
 //PROPERTIES > ISS SE HUM ELEMENTS KI VALUE CHECK BHI KR SAKHTEY OR CHANGE BHI

 //1] tagName => KISI BHI ELEMENT KA TAG NAME PRINT KR WA NA KE LIYE .tagName USE KR SAKHTEY HAIN
 //EXAMPLE
 /*let nam = document.getElementById("one2");
 console.dir(nam.tagName);*/

 //2] innerText => TEXT CONTENT RETURN KR TA HAI OR ELEMENTS KA BHI OR CHILDERNS KA

//EXAMPLE
/*let div = document.getElementById("cantenar");
console.dir(div.innerText);
console.log(div.innerText);*/

//3] innerHTML => TEXT CONTENT KE SATH HTML CONTENT BHI RETURN KRTA HAI

//EXAMPLE
/*let div = document.querySelector("#cantenar");

console.log(div.innerHTML);
console.dir(div.innerHTML);*/

//PRACTICE QUESTION
/*let heading = document.getElementById("Hello");
console.dir(heading);
heading.innerText = heading.innerText + " From Apna Collage Student";*/

//2ND PRACTICE QUESTION
/*let divs = document.querySelectorAll(".my");
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

divs[0].innerText = divs[0].innerText + " \n This Is 1st Box";
divs[1].innerText = divs[1].innerText + " \nThis Is 2nd Box";
divs[2].innerText = divs[2].innerText + " \n This Is 3rd Box";*/

//LOOPS SE 2ND QUESTION


let divs = document.querySelectorAll(".my");
let i = 1;
for(div of divs){
  //div.innerText = "Unique box", i;
  div.innerText = `Unique Box ${i}`;
  i++;
}
