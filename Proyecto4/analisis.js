
//HELPERS
function esPar(numerito){
    return numerito%2===0;
}
//CALCULADORA DE MEDIANA
function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);
    let mediana;
    if(esPar(lista.length)){
        mediana=(lista[mitad-1]+lista[mitad])/2;
    }else{
        mediana=lista[mitad];  
    }
    return mediana;
}

//CALCULAR MEDIANA GENERAL
const salariosCol=colombia.map(
    function(personita){
        return personita.salary;
    }
)
const salariosColSorted=salariosCol.sort(
 function(salaryA,salaryB){
     return salaryA-salaryB;
 }
);

const medianaGeneralCol=medianaSalarios(salariosColSorted);
//MEDIANA DEL  TOP 10%

const spliceStart=(salariosColSorted.length*90)/100;
const spliceCount=salariosColSorted.length*90-spliceStart;
const salariosColTop10=salariosColSorted.splice(
    spliceStart,
    spliceCount,
);//para hacer un corte


const   medianaTop10Col=medianaSalarios(salariosColTop10);
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
