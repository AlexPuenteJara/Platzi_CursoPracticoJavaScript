const hola = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    arr=hola;
    let modele= arr.sort((a,b) =>//funcion comparacion de sort
          arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
  const model= document.getElementById("model")
    model.innerText="La Moda es: "+ modele;
}