const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

document.getElementById('title').style.position = "-webkit-sticky";
document.getElementById('title').style.position = "sticky";
document.getElementById('title').style.textAlign = "center";
document.getElementById('title').style.color = "white";
document.getElementById('title').style.borderBottom = "3px solid red";
document.getElementById('title').style.fontFamily = "Verdana, serif";


document.getElementById('pagechooser').style.position = "-webkit-sticky";
document.getElementById('pagechooser').style.position = "sticky";
document.getElementById('pagechooser').style.textAlign = "center";
document.getElementById('pagechooser').style.fontSize = "30px";
document.getElementById('pagechooser').style.border = "5px solid rgba(0, 0, 155, 1)";
document.getElementById('pagechooser').style.background = "rgba(0, 0, 155, 1)";

for (let index = 0; index < document.getElementsByClassName('pagelink').length; index++) {
    const element = document.getElementsByClassName('pagelink')[index];
    element.style.border = "2px solid blue";
    element.style.background = "rgba(0, 0, 200, 1)";
    element.style.borderRadius = "7px";
    element.style.textDecoration = "none";
    element.style.fontWeight= "bold";
    element.style.color = "rgba(255, 255, 255, 0.8)";
}

setInterval(() => {
    var originalsize = 150;
    var reduceslowness = 3;
    var minsize = 75;
    var startreducescrolly = 0;
    var originaltexttoppercentage = 30;
    var fontsizepx = clamp((originalsize + startreducescrolly - (window.scrollY / reduceslowness)), minsize, originalsize);
    var titlestyletoppercent = (originaltexttoppercentage * ((fontsizepx - minsize) / (originalsize - minsize)));
    document.getElementById('title').style.top = titlestyletoppercent + "%";
    document.getElementById('title').style.background = `rgba(125, 125, 175, ${1 - (fontsizepx - minsize) / (originalsize - minsize)})`;
    document.getElementById('title').style.fontSize = fontsizepx + "px";

    document.getElementById('pagechooser').style.top = (titlestyletoppercent + (0.2 * fontsizepx)) + "%";
}, 25);
