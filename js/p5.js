function tableCreate() {
    const body = document.body,
    tbl = document.createElement('table');
    tbl.style.border = '1px solid black';
    tbl.style.alignContent = "center";
  
    for (let i = 1; i <=12; i++) {
      const tr = tbl.insertRow();
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(i));
          td.style.border = '1px solid black';
          td.style.textAlign = "center";
          if (i % 4 === 0){
            td.style.backgroundColor = "lightblue";
          }
          }
        
       
    
    body.appendChild(tbl);
        }
  
  tableCreate();