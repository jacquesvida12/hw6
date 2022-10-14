const appendLink = () => {
    //const linkElements = document.getElementsByTagName("a");

    var a = document.createElement('a');
    a.setAttribute('href','https://www.csulb.edu/college-of-business');
    a.innerHTML = '</br><li>College of Business';

    document.getElementById("csulb").appendChild(a);
   // const linkLength = linkElements.length;

    //for (i = 0; i < linkLength; i++) {
       // console.log(linkElements[i].innerText);}

};

appendLink();