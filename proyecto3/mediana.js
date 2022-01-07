
  const lista1=[
    100,200,500,200000000,4,58
];

const  mitadLista1=parseInt(lista1.length/2);
function esPar(numerito){
if(numerito%2 ===0){
    return true;
}else{
    return false;
}
}




function s(){
  
    let mediana;  
   
    if(esPar(lista1.length)){
        mediana=(lista1[mitadLista1]+lista1[mitadLista1-1])/2;
    }else{
        mediana=lista1[mitadLista1];
    }  
   /* const resultPr= document.getElementById("resultP")*/
    resultP.innerText="La Mediana es: "+ mediana;
  
}