const yellowP = () => {
    var y = document.querySelectorAll(`p`);
    for (let i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = 'yellow';
        y[i].style.fontWeight = 'bold';
      }
}
yellowP();