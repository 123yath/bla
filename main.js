var nameofstdarray=[];
function submit(){
var name1=document.getElementById("std1").value;
var name2=document.getElementById("std2").value;
var name3=document.getElementById("std3").value;
 nameofstdarray.push(name1);
 nameofstdarray.push(name2);
 nameofstdarray.push(name3);
console.log(nameofstdarray);


document.getElementById("displayname").innerHTML=nameofstdarray;}

function sorting(){
nameofstdarray.sort();
console.log(nameofstdarray);
document.getElementById("displayname").innerHTML=nameofstdarray;}

