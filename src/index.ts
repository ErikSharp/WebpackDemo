import _ from "lodash";
import "./style.scss";
import Erik from "./Azureus2.png";
import Data from "./data.xml";
import Names from "./names.csv";
import Colors from "./colors.json";
import printMe from "./print";

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    btn.innerHTML = "Click me and check the console";
    btn.onclick = printMe;

    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add("hello");

    //Add the image to our existing div.
    const myImage = new Image();
    myImage.src = Erik;

    element.appendChild(myImage);
    element.appendChild(btn);
    console.log(Data);
    console.log(Names);
    var primaryColors = _.filter(Colors.colors, c => c.type === "primary");
    console.log(primaryColors);

    return element;
}

document.body.appendChild(component());
