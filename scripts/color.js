let arrcolor = ["red","blue","purple","green", "teal", "aqua", "fuchsia"];
let colorlist = document.createElement('ul');
for (let i = 0; i < arrcolor.length; i++){
    let itemcolor = document.createElement('li');
    itemcolor.innerText = arrcolor[i];
    itemcolor.style.color = arrcolor[i];
    colorlist.appendChild(itemcolor);
}
document.body.appendChild(colorlist);

