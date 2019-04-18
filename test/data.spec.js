/* global WorldBank*/
require('../src/data.js');

// Para parámetro 'data'
const miniData = [
  {
    'data': {'1960': '', '1990': 30.45, '2010': 15.3567},
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS'
  },
  {
    'data': {'1960': '', '1990': 20.55555, '2010': 55.008},
    'indicatorName': 'Fuerza laboral con educación intermedia (% del total)',
    'indicatorCode': 'SE.TLF.INTM.ZS'
  },
  {
    'data': {'1960': '', '1990': 3.5, '2010': 0.56},
    'indicatorName': 'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)',
    'indicatorCode': 'SE.TLF.INTM.MA.ZS'
  }
];

// ----------- Testeando filterSearch ----------- //
// Para parámetro 'word'
const inputSearch = 'mujeres';
// Resultado esperado para filterSearch
const outputSearch = ['Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)'];

describe('filterSearch es una función', () => {
  it('debería ser una función', () => {
    expect(typeof WorldBank.filterSearch).toBe('function');
  });

  it('returns `debería retornar los indicadores filtrados según la palabra clave`', () => {
    expect(WorldBank.filterSearch(miniData, inputSearch)).toEqual(outputSearch);
  });
});

// ----------- Testeando filterThemes ----------- //
// Para parámetro 'themeCode'
const inputThemes = 'SL';
// Resultado esperado para filterThemes
const outputThemes = ['Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)'];

describe('filterThemes es una función', () => {
  it('debería ser una función', () => {
    expect(typeof WorldBank.filterThemes).toBe('function');
  });

  it('returns `deberia retornar una lista con los indicadores filtrados por codigo`', () => {
    expect(WorldBank.filterThemes(miniData, inputThemes)).toEqual(outputThemes);
  });
});

// ----------- Testeando filterYears ----------- //
// Para parámetro 'year'
const inputByYears = '2010';
// Resultado esperado para filterYears
const outputByYears = [15.3567, 55.008, 0.56];

describe('filterYears es una función', () => {
  it('debería ser una función', () => {
    expect(typeof WorldBank.filterYears).toBe('function');
  });

  it('returns `debería retornar los porcentajes correspondientes al año ingresado`', () => {
    expect(WorldBank.filterYears(miniData, inputByYears)).toEqual(outputByYears);
  });
});
 
// ----------- Testeando sortData ----------- //
// Para parámetro 'dataBase'
const dataData = [{year: '1960', value: 45.04}, {year: '1990', value: 15.3567}, {year: '2000', value: 30.45}];
// Para parámetro 'dataType'
const inputSort1 = 'Valores';
const inputSort2 = 'Año';
// Para parámetro 'orderType'
const inputOrder1 = 'Mayor';
const inputOrder2 = 'Menor';
// Resultados esperados para sortData
const valoresMayor = [{year: '1960', value: 45.04}, {year: '2000', value: 30.45}, {year: '1990', value: 15.3567}];
const valoresMenor = [{year: '1990', value: 15.3567}, {year: '2000', value: 30.45}, {year: '1960', value: 45.04}];
const añosMayor = [{year: '2000', value: 30.45}, {year: '1990', value: 15.3567}, {year: '1960', value: 45.04}];
const añosMenor = [{year: '1960', value: 45.04}, {year: '1990', value: 15.3567}, {year: '2000', value: 30.45}];

describe('sortData es una función', () => {
  it('debería ser una función', () => {
    expect(typeof WorldBank.sortData).toBe('function');
  });
  
  it('returns `debería retornar un array de objetos ordenados por valores de mayor a menor`', () => {
    expect(WorldBank.sortData(dataData, inputSort1, inputOrder1)).toEqual(valoresMayor);
  });

  it('returns `debería retornar un array de objetos ordenados por año de mayor a menor`', () => {
    expect(WorldBank.sortData(dataData, inputSort2, inputOrder1)).toEqual(añosMayor);
  });
  
  it('returns `debería retornar un array de objetos ordenados por valores de menor a mayor`', () => {
    expect(WorldBank.sortData(dataData, inputSort1, inputOrder2)).toEqual(valoresMenor);
  });

  it('returns `debería retornar un array de objetos ordenados por año de menor a mayor`', () => {
    expect(WorldBank.sortData(dataData, inputSort2, inputOrder2)).toEqual(añosMenor);
  });
});

// ----------- Testeando averageCompute ----------- //
// Para parámetro 'dataBase'
const inputDataValue = [45.04, 30.45, 15.36];
// Resultado esperado para averageCompute
const outputDataValue = 30.28333333333333;

describe('averageCompute es una función', () => {
  it('debería ser una función', () => {
    expect(typeof WorldBank.averageCompute).toBe('function');
  });

  it('returns `deberia retornar el promedio de los porcentajes ingresados`', () => {
    expect(WorldBank.averageCompute(inputDataValue)).toEqual(outputDataValue);
  });
});