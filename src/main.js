/* global WORLDBANK*/
/* global WorldBank*/

// Variable a usarse para todas las funciones
const inData = WORLDBANK.PER.indicators;

// ---------------- Funcionalidad de búsqueda rápida ---------------- //
document.getElementById('searchBtn').addEventListener('click', () => {
  let inputWord = document.getElementById('word');
  if (WorldBank.filterSearch(inData, inputWord.value).join() === '') {
    document.getElementById('result').innerHTML = 'No se encontraron registros';
  } else {
    const outputSearch = WorldBank.filterSearch(inData, inputWord.value);
    for (let i = 0; i < outputSearch.length; i++) {
      document.getElementById('result').innerHTML += `
        <ul>
          <li>${outputSearch[i]}</li>
        </ul>
        `;
    }  
  }
});
// ---------------- Funcionalidad de búsqueda por temas ----------------//
document.getElementById('education').addEventListener('click', () => { // Tema: Educación
  (WorldBank.filterThemes(inData,'SE')).forEach(resultado)
}); 
document.getElementById('social-dev').addEventListener('click', () => { // Tema: Desarrollo Social
  (WorldBank.filterThemes(inData,'SL')).forEach(resultado)
});
document.getElementById('gender').addEventListener('click', () => { // Tema: Género 
  (WorldBank.filterThemes(inData,'SP')).forEach(resultado);
  (WorldBank.filterThemes(inData,'SG')).forEach(resultado);
  (WorldBank.filterThemes(inData,'SH')).forEach(resultado)
});
document.getElementById('economy').addEventListener('click', () => { // Tema: Economía 
  (WorldBank.filterThemes(inData,'DT')).forEach(resultado);
  (WorldBank.filterThemes(inData,'HD')).forEach(resultado);
  (WorldBank.filterThemes(inData,'IC')).forEach(resultado);
  (WorldBank.filterThemes(inData,'pe')).forEach(resultado)
});
const resultado = (themes) => document.getElementById('result').innerHTML += `
  <ul>
    <li>${themes}</li>
  </ul>
  `;

// ---------------- Funcionalidad para mostrar tabla de indicadores y datos según años ---------------- //
document.getElementById('yearBtn').addEventListener('click', () => {
  let inputYear = document.getElementById('year');
  const resultadoValores = WorldBank.filterYears(inData, parseInt(inputYear.value));
  for (let i = 0; i < inData.length; i++) {
    const resultadoIndicadores = inData[i].indicatorName;
    if (resultadoValores[i] != 0) { // Condición para imprimir solo indicadores con valores
      document.getElementById('table').innerHTML += `
        <tr>
            <td>${resultadoIndicadores}</td>
            <td>${resultadoValores[i].toFixed(2)} %</td>
        </tr>
        ` ;
    }
  }
});

// ---------------- Funcionalidad para mostrar tabla de años y datos según indicador ---------------- //
// Mostrar indicadores en lista desplegable
const indicadores = inData.map((arr) => {
  return arr.indicatorName;
});
const sortIndic = indicadores.sort();
sortIndic.forEach((indicador) => {
  document.getElementById('indicators').innerHTML += `
    <select>  
      <option>${indicador}</option>
    </select>
  `
});
// Aplicación de la función para impresión en página
document.getElementById('sortBy').addEventListener('click', () => {
  // Extraer nueva data en función a indicador elegido en lista desplegable 
  const indicSelected = document.getElementById('indicators').value;
  const typeSelected = document.getElementById('data-type').value;
  const orderSelected = document.getElementById('order-type').value;
  let newInData = '';
  for (let i = 0; i < inData.length; i++) {
    if (inData[i].indicatorName === indicSelected) {
      newInData = Object.assign(inData[i].data);
    }
  }  
  // Cambia objeto en newInData en objetos individuales con nombres de propiedades comunes
  let inDataIndicator = [];
  for (let values in newInData) { 
    inDataIndicator.push({"year" : values, "value" : newInData[values]});
  }
  // Impresión en tablas
    let outputSort = WorldBank.sortData(inDataIndicator, typeSelected, orderSelected); 
    let yearType = [];
    let valueType = [];
    for (let i = 0; i < outputSort.length; i++) {
      yearType.push(Object.values(outputSort[i])[0]); // Variable para años
      valueType.push(Object.values(outputSort[i])[1]); // Variable para valores o porcentajes
      if (valueType[i] !== '') { // Condición para imprimir solo años que contengan valores y obviar vacíos
          document.getElementById('table4sort').innerHTML += `
            <tr>
              <td>${yearType[i]}</td>  
              <td>${valueType[i].toFixed(2)} %</td>
            </tr>
            `;
      } 
    }
  });
document.getElementById('computeStat').addEventListener('click', () => {
    // Extraer nueva data en función a indicador elegido en lista desplegable 
  const indicSelected = document.getElementById('indicators').value;
  let newInData = '';
  for (let i = 0; i < inData.length; i++) {
    if (inData[i].indicatorName === indicSelected) {
      newInData = Object.assign(inData[i].data);
    }
  }  
  // Cambia objeto en newInData en objetos individuales con nombres de propiedades comunes
  let inDataIndicator = [];
  for (let values in newInData) { 
    inDataIndicator.push({"year" : values, "value" : newInData[values]});
  }
  let inDataValues = [];
  for(let i = 0; i < inDataIndicator.length; i++){
    if(inDataIndicator[i].value !== ''){
 inDataValues.push(inDataIndicator[i].value);
  }}
   let outputCompute = WorldBank.averageCompute(inDataValues);
      document.getElementById('compute').innerHTML +=`
        <p>${outputCompute.toFixed(2)} %</p>
      `;
});
