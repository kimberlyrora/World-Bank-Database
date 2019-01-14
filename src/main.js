/* global WORLDBANK*/
/* global WorldBank*/
/* exported paises*/

// -------------------------------- Desplazamiento entre secciones-------------------------------- //
// Desplegar sección Búsqueda rápida
document.getElementById('searchfast-btn').addEventListener('click', () => {
  document.getElementById('total-result-section').style.display = 'block';
  document.getElementById('search-container').style.display = 'grid';
  document.getElementById('themes-container').style.display = 'none';
  document.getElementById('years-container').style.display = 'none';
  document.getElementById('sort-container').style.display = 'none';
  document.getElementById('average-container').style.display = 'none';
  if (window.matchMedia('(min-width: 728px)').matches) {
    document.getElementById('sections-menu').style.display = 'block';
  } else {
    document.getElementById('sections-menu').style.display = 'none';
  }
});

// Desplegar sección Búsqueda por temas
document.getElementById('themes-btn').addEventListener('click', () => {
  document.getElementById('total-result-section').style.display = 'block';
  document.getElementById('themes-container').style.display = 'grid';
  document.getElementById('years-container').style.display = 'none';
  document.getElementById('sort-container').style.display = 'none';
  document.getElementById('average-container').style.display = 'none';
  document.getElementById('search-container').style.display = 'none';
  if (window.matchMedia('(min-width: 728px)').matches) {
    document.getElementById('sections-menu').style.display = 'block';
  } else {
    document.getElementById('sections-menu').style.display = 'none';
  }
});

// Desplegar sección Búsqueda por años
document.getElementById('years-btn').addEventListener('click', () => {
  document.getElementById('total-result-section').style.display = 'block';
  document.getElementById('years-container').style.display = 'grid';
  document.getElementById('themes-container').style.display = 'none';
  document.getElementById('sort-container').style.display = 'none';
  document.getElementById('average-container').style.display = 'none';
  document.getElementById('search-container').style.display = 'none';
  if (window.matchMedia('(min-width: 728px)').matches) {
    document.getElementById('sections-menu').style.display = 'block';
  } else {
    document.getElementById('sections-menu').style.display = 'none';
  }
});

// Desplegar sección Ordenamiento de datos
document.getElementById('sort-btn').addEventListener('click', () => {
  document.getElementById('total-result-section').style.display = 'block';
  document.getElementById('sort-container').style.display = 'grid';
  document.getElementById('themes-container').style.display = 'none';
  document.getElementById('average-container').style.display = 'none';
  document.getElementById('search-container').style.display = 'none';
  document.getElementById('years-container').style.display = 'none';
  if (window.matchMedia('(min-width: 728px)').matches) {
    document.getElementById('sections-menu').style.display = 'block';
  } else {
    document.getElementById('sections-menu').style.display = 'none';
  }
});

// Desplegar sección Promedio de datos
document.getElementById('average-btn').addEventListener('click', () => {
  document.getElementById('total-result-section').style.display = 'block';
  document.getElementById('average-container').style.display = 'grid';
  document.getElementById('themes-container').style.display = 'none';
  document.getElementById('sort-container').style.display = 'none';
  document.getElementById('search-container').style.display = 'none';
  document.getElementById('years-container').style.display = 'none';
  if (window.matchMedia('(min-width: 728px)').matches) {
    document.getElementById('sections-menu').style.display = 'block';
  } else {
    document.getElementById('sections-menu').style.display = 'none';
  }
});

// Botón Volver al menú principal (sólo mobile): Desplegar menú de opciones 
document.getElementById('back-btn').addEventListener('click', () => {
  document.getElementById('sections-menu').style.display = 'block';
  document.getElementById('total-result-section').style.display = 'none';
});

// -------------------- Elección de países para uso general de variable inData -------------------- //
let inData = WORLDBANK.PER.indicators;
const paises = () => {
  switch (document.getElementById('country').value) {
  case 'BRASIL':
    inData = WORLDBANK.BRA.indicators;
    break;
  case 'CHILE':
    inData = WORLDBANK.CHL.indicators;
    break;
  case 'MÉXICO':
    inData = WORLDBANK.MEX.indicators;
    break;
  default:
    inData = WORLDBANK.PER.indicators;
  }
  return inData;
};

// Funcion para href en search
const searchHrefToSort = () => {
  document.getElementById('search-container').style.display = 'none';
  document.getElementById('sort-container').style.display = 'block'; 
  document.getElementById('result-box').innerHTML = '';
};

// ----------------------------------***** BÚSQUEDA RÁPIDA *****---------------------------------- //
document.getElementById('search-btn').addEventListener('click', () => {
  document.getElementById('result-box').innerHTML = ''; // Limpiado de caja antes de impresión
  let inputWord = document.getElementById('word');
  if (WorldBank.filterSearch(inData, inputWord.value).join() === '') {
    document.getElementById('result-box').innerHTML = 'No se encontraron registros';
  } else {
    const outputSearch = WorldBank.filterSearch(inData, inputWord.value);
    for (let i = 0; i < outputSearch.length; i++) {
      document.getElementById('result-box').innerHTML += `
        <ul class="result">
          <li><a href="javascript:searchHrefToSort()">${outputSearch[i]}</a></li>
        </ul>
        `;
    }
  }
});

const themesHrefToSort = () => {
  document.getElementById('themes-container').style.display = 'none';
  document.getElementById('sort-container').style.display = 'block'; 
  document.getElementById('result-box').innerHTML = '';
};
// ---------------------------------***** BÚSQUEDA POR TEMAS *****-------------------------------- //
document.getElementById('education').addEventListener('click', () => { // Tema: Educación
  document.getElementById('result-box').innerHTML = '';
  (WorldBank.filterThemes(inData, 'SE')).forEach(resultado);
});
document.getElementById('social-dev').addEventListener('click', () => { // Tema: Desarrollo Social
  document.getElementById('result-box').innerHTML = '';
  (WorldBank.filterThemes(inData, 'SL')).forEach(resultado);
});
document.getElementById('gender').addEventListener('click', () => { // Tema: Género 
  document.getElementById('result-box').innerHTML = '';
  (WorldBank.filterThemes(inData, 'SP')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'SG')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'SH')).forEach(resultado);
});
document.getElementById('economy').addEventListener('click', () => { // Tema: Economía 
  document.getElementById('result-box').innerHTML = '';
  (WorldBank.filterThemes(inData, 'DT')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'HD')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'IC')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'pe')).forEach(resultado);
});

// Impresión de resultados en página
const resultado = (themes) => document.getElementById('result-box').innerHTML += `
  <ul class="result">
    <li><a href="javascript:themesHrefToSort()">${themes}</a></li>
  </ul>
  `;

// ----------------------------------***** FILTRADO POR AÑOS *****--------------------------------- //
document.getElementById('searchyears-btn').addEventListener('click', () => {
  document.getElementById('result-box').innerHTML = ''; // Limpiado de caja antes de impresión
  let inputYear = document.getElementById('year');
  document.getElementById('result-box').innerHTML = `
  <table id = 'table-years'>
      <tr>
        <th>Indicadores</th>
        <th>Valores</th>
      </tr> 
  </table>
  `;
  const resultadoValores = WorldBank.filterYears(inData, parseInt(inputYear.value));
  for (let i = 0; i < inData.length; i++) {
    const resultadoIndicadores = inData[i].indicatorName;
    if ((resultadoValores[i].toString())[1] === '.' || (resultadoValores[i].toString())[2] === '.') { // Condición para imprimir solo indicadores con valores
      document.getElementById('table-years').innerHTML += `
        <tr>
          <td>${resultadoIndicadores}</td>
          <td class='tableValues'>${resultadoValores[i].toFixed(2)} %</td>
        </tr>
        `;
    } else if (resultadoValores[i] !== '') { // Condición para imprimir solo indicadores con valores
      document.getElementById('table-years').innerHTML += `
        <tr>
          <td>${resultadoIndicadores}</td>
          <td class='tableValues'>${resultadoValores[i]}</td>
        </tr>
        `;
    }
  }
});

// Mostrar indicadores en lista desplegable para sortData y averageCompute
const indicadores = inData.map((arr) => {
  return arr.indicatorName;
});
const sortIndic = indicadores.sort();
sortIndic.forEach((indicador) => {
  document.getElementById('indicators').innerHTML += `
    <select>  
      <option>${indicador}</option>
    </select>
  `;
  document.getElementById('indicators-average').innerHTML += `
  <select>  
    <option>${indicador}</option>
  </select>
`;
});

// -------------------------***** ORDENADO DE DATA SEGÚN INDICADORES *****------------------------- //
// Aplicación de la función para impresión en página
document.getElementById('sortBy-btn').addEventListener('click', () => {
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
    inDataIndicator.push({
      'year': values,
      'value': newInData[values]
    });
  }
  // Impresión en tablas
  document.getElementById('result-box').innerHTML = ''; // Limpiado de caja antes de impresión
  document.getElementById('result-box').innerHTML = `
  <table id='table-sort'>
    <tr>
      <th>Año</td>
      <th>Valores</td>
    </tr>  
  </table>
  `;
  let outputSort = WorldBank.sortData(inDataIndicator, typeSelected, orderSelected);
  let yearType = [];
  let valueType = [];
  for (let i = 0; i < outputSort.length; i++) {
    yearType.push(Object.values(outputSort[i])[0]); // Variable para años
    valueType.push(Object.values(outputSort[i])[1]); // Variable para valores o porcentajes
    if ((valueType[i].toString())[1] === '.' || (valueType[i].toString())[2] === '.') {
      document.getElementById('table-sort').innerHTML += `
      <tr>
        <td class='tableYear'>${yearType[i]}</td>  
        <td class='tableValues'>${valueType[i].toFixed(2)} %</td>
      </tr>
      `;
    } else if (valueType[i] !== '') { // Condición para imprimir solo años que contengan valores y obviar vacíos
      document.getElementById('table-sort').innerHTML += `
            <tr>
              <td class='tableYear'>${yearType[i]}</td>  
              <td class='tableValues'>${valueType[i]}</td>
            </tr>
            `;
    }
  }
});

// -----------------------------***** PROMEDIO SEGÚN INDICADORES *****----------------------------- //

document.getElementById('averageBtn').addEventListener('click', () => {
  // Extraer nueva data en función a indicador elegido en lista desplegable 
  const indicSelected = document.getElementById('indicators-average').value;
  let newInData = '';
  for (let i = 0; i < inData.length; i++) {
    if (inData[i].indicatorName === indicSelected) {
      newInData = Object.assign(inData[i].data);
    }
  }
  // Cambia objeto en newInData en objetos individuales con nombres de propiedades comunes
  let inDataIndicator = [];
  for (let values in newInData) {
    inDataIndicator.push({
      'year': values,
      'value': newInData[values]
    });
  }
  let inDataValues = [];
  for (let i = 0; i < inDataIndicator.length; i++) {
    if (inDataIndicator[i].value !== '') {
      inDataValues.push(inDataIndicator[i].value);
    }
  }
  document.getElementById('result-box').innerHTML = ''; // Limpiado de caja antes de impresión
  let outputCompute = WorldBank.averageCompute(inDataValues);
  if ((outputCompute.toString())[1] === '.' || (outputCompute.toString())[2] === '.') {
    document.getElementById('result-box').innerHTML += `
    <p class='indicator-txt'>${indicSelected}</p>
    <hr/>
    <div align='center'><span class='pais-txt'>${document.getElementById('country').value}</span>
    <span class='value-txt'>${outputCompute.toFixed(2)} %</span></div>
    `;
  } else document.getElementById('result-box').innerHTML += `
    <p class='indicator-txt'>${indicSelected}</p>
    <hr/>
    <div align='center'><span class='pais-txt'>${document.getElementById('country').value}</span>
    <span class='value-txt'>${outputCompute}</span></div>
   `;
});

// -------------------------------- Copiado de referencia tipo APA -------------------------------- //
document.getElementById('apa-btn').addEventListener('click', () => {
  const inputTemporal = document.createElement('input');
  let fecha = new Date();
  inputTemporal.type = 'text';
  inputTemporal.value = `"Banco Mundial. (${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}). Indicadores del Desarrollo Mundial: Perú. Obtenido de  https://datos.bancomundial.org/pais/peru?view=chart"`;
  document.body.appendChild(inputTemporal);
  inputTemporal.select();
  document.execCommand('Copy');
  document.body.removeChild(inputTemporal);
  alert('El texto para referenciar la presente página en formato APA ha sido copiado');
});
