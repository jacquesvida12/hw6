//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
   //var fourhundo = document.getElementsByClassName(`400level`);
   //console.log( fourhundo);
   const fourhundo = document.getElementsByClassName(`400level`);
   for (i = 0; i < fourhundo.length; i++) {
   console.log(fourhundo[i].innerText);
}
   
}
displayText400();