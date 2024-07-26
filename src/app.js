//Instantiate DOM elements
const body = document.querySelector('body');
const codeHex = document.getElementById('code-hex');
const btnGenerate = document.getElementById('btn-generate');

//Set of characters used to create the Hexadecimal color code
const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


//Generate random hexadecimal color code
function getColorHex() {
    let hex = '#';
    
    for (let i = 0; i < 6; i++) {
        let numberRandom = Math.floor(Math.random() * 16);
        hex += characters[numberRandom];
    }

    return hex;
}

//Change background color and show hexadecimal code
function changeColor() {
    body.style.backgroundColor = getColorHex();
    codeHex.innerHTML = getColorHex();
}

//Change background color and show hex code when page loads
window.onload = () => {
    changeColor();
};

//Changes the background color and shows the hexadecimal code when the Generate button is clicked
btnGenerate.addEventListener('click', () => {
    changeColor();
});