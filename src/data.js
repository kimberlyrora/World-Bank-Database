window.WorldBank = {

  // Función filtrado para búsqueda rápida
  filterSearch: (dataBase, word) => {
    const indicadores = dataBase.map((arr) => {
      return arr.indicatorName;
    });
    return indicadores.filter((x) => {
      return x.toLowerCase().indexOf(word.toLowerCase()) > -1;
    });
  },

  // Función filtrado para búsqueda por temas
  filterThemes: (dataBase, themeCode) => {
    const codeData = [];
    for (let i = 0; i < dataBase.length; i++) {
      if ((dataBase[i].indicatorCode).slice(0, 2) === themeCode) {
        codeData.push(dataBase[i].indicatorName);
      }
    }
    return codeData;
  },

  // Función filtrado por años
  filterYears: (dataBase, year) => {
    const yearData = [];
    for (let i = 0; i < dataBase.length; i++) {
      yearData.push(dataBase[i].data[year]);
    }
    return yearData;
  },

  // Función ordenando data por años o valores
  sortData: (dataBase, dataType, orderType) => {
    let sorted = [];
    if (dataType === 'Valores') {
      switch (orderType) {
      case 'Mayor':
        sorted = dataBase.sort((valorA, valorB) => valorA.value < valorB.value ? 1 : -1);
        break;
      case 'Menor':
        sorted = dataBase.sort((valorA, valorB) => valorA.value > valorB.value ? 1 : -1);
      }
    } else
      switch (orderType) {
      case 'Mayor':
        sorted = dataBase.sort((añoA, añoB) => añoA.year < añoB.year ? 1 : -1);
        break;
      case 'Menor':
        sorted = dataBase.sort((añoA, añoB) => añoA.year > añoB.year ? 1 : -1);
      }
    return sorted;
  },

  // Función promedio de porcentajes
  averageCompute: (dataBase) => {
    const sumatoria = dataBase.reduce(function(acumulator, nextValue) {
      return acumulator + nextValue;
    }, 0);
    let promedio = sumatoria / dataBase.length;
    return promedio;
  }
};
