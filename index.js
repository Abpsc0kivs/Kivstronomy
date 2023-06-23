var today = new Date();
var hournow = today.getHours();
var greeting;

if(hournow >18){
    greeting='Good Evening!';
}else if (hournow >12){
    greeting='Good Afternoon!';
}else if(hournow >0){
    greeting='Good Morning!';
}else{
    greeting='Welcome!';
}
var username = prompt("Enter Your Name: ");
alert(username + " is visiting Kivstronomy By Ab.PSC at " + today );
var letter1 = username.slice(0,1);
var letterRest = username.slice(1,username.length);
var Name = letter1.toUpperCase()+letterRest.toLowerCase();
document.write('<h2>'+greeting + " " +Name+ '</h2>');