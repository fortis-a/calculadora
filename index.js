let display = document.getElementById('display');

//convertimos los botones en un array
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
    case 'C':
      display.innerText = '';
      break;
    case '←':
      if(display.innerText){
        display.innerText = display.innerText.slice(0,-1);
      }
      break;
    case '=':
      try{
        display.innerText = eval(display.innerText); //tener cuidado al usar eval. no usarlo en aplicaciones con usuarios reales
      }catch{
        display.innerText = 'ERROR!';
      }
      break;
    default:
      display.innerText += e.target.innerText; 
    }
  });
});