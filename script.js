var me = prompt("Enter your Name");
var you = prompt("Enter your Friend's Name");

var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomimage1 = "dice"+randomnumber1 +".svg";
// var randomimagesource1 = "images/"+ randomimage1;
var randomimagesource1 =  randomimage1;
// var image1 = document.querySelectorAll("img")[0]; // This 
// image1.setAttribute("scr",randomimagesource);     // And this line is not working why?

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1); // jabki upar ka dono line mila ke hi ye line h, and this is working
// document.createElement(img)
var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomimagesource2 = "dice"+ randomnumber2+ ".svg";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

var heading= document.querySelector("h1")
if(randomnumber1>randomnumber2)
{
    // heading.innerHTML="Player 1 Winner";
    heading.innerHTML= me +" is Winner";
    // heading.innerHTML= "Player 1 Winner <img src='flag.png'>";

}
else if(randomnumber2>randomnumber1)
{
    // heading.innerHTML="Player 2 is Winner";
    heading.innerHTML="Winner is "+ you;
}
else
{
    heading.innerHTML= me+" Draw! "+ you;
}