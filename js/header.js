// animated text vars

const headerText = 'My name is Lamorna Read';
const paraText = 'I am an aspiring web developer with a great passion for being creative and using code to do it.';
let headerSpeed = 80;
let paraSpeed = 60;
let headerLength = 0;
let paraLength = 0;

// animated text function 

function typeWriterHeader() {
    if (headerLength < headerText.length) {
        document.getElementById('type-header').innerHTML += headerText.charAt(headerLength);
        headerLength++;
        setTimeout(typeWriterHeader, headerSpeed);
    }
}
function typeWriterPara() {
    if (paraLength < paraText.length) {
        document.getElementById('type-para').innerHTML += paraText.charAt(paraLength);
        paraLength++;
        setTimeout(typeWriterPara, paraSpeed);
    }
}

function typeWriter() {
    typeWriterHeader();
    setTimeout(typeWriterPara, 3000);
}

typeWriter();