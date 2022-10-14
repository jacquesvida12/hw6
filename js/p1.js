//Complete the following functions
//Displays all body nodes
const bodyNodes = () => {
    for (let i = 0; i < document.body.childNodes.length; i++) {
        console.log(document.body.childNodes[i]);
        console.log(document.body.parentElement);
        console.log(document.body.childNodes[i].innerText)
    }}

bodyNodes();