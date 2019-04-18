# Data Lovers - Banco Mundial

## Índice

* [Descripción](#resumen-del-proyecto)
* [Definición del producto](#definición-del-producto)
* [Historias de usuarix](#historias-de-usuario)
* [Diseño de la Interfaz de Usuarix](#diseño-interfaz-usuarix)
* [Implementación de la Interfaz de Usuario (HTML/CSS/JS)]()

***

## Descripción
"Datalovers - WORLDBANK Base de Datos" es un proyecto desarrollado en equipo (dupla), el proyecto tuvó una duración de 4 sprints, cada uno de una semana, este proyecto tuvo como primer pasó la planificación de tareas a ser realizadas durante cada sprint y su duración aproximada, el siguiente paso fue organizarnos para poder realizar todas las tareas planificadas y que de la misma forma podamos aprender de forma conjunta, por ultimo, la ejecución fue realizada de manera conjunta y fue la parte del proceso que llevó más tiempo. 
Este proyecto conllevó mucho esfuerzo de parte de nosotras y nos permitió aprender no solamente en lo tecnico sino también en lo personal, y estamos muy agradecidas de haberlo realizado y a la dupla que conformamos.

## Definición del producto

WORLDBANK Base de Datos contiene las estadisticas nacionales e internacionales (Brasil, Mexico y Chile) de los indicadores de Desarrollo, los cuales permite analizar de manera realista las condiciones de vida de las personas pertenecientos a los paises mencionados.

WORLDBANK Base de Datos consta de 139 indicadores por pais, asi como cada indicador cuenta con la data de las estadisticas correspondiente al rango de años desde 1960 a 2017. 

WORLDBANK Base de Datos permite al usuario poder acceder a esta información de manera directa, sencilla y detallada. El usuario puede:

Filtrar la data (búsqueda rápida, busqueda por temas y búsqueda por años).

Ordenar la data (Ascendente o Descendente)

Promediar las estadisticas de la totalidad de años.

 El primer paso que realizamos fue investigar sobre nuestros usuarios y definirlos, en su mayoria son estudiantes (universitarios, de maestria,etc.); asi también, se les consultó cuales son los problemas que encuentran con las bases de datos que usan con mas frecuencias o que tipo de caracteristicas necesitan ser implementadas en la base datos. Posteriormente se realizo el análisis de los resultados de la investigaciones, en la que el metodo de recoleccion de información fue la entrevista. A partir de ello, definimos las posibles soluciones a los problemas de nuestros usuarios, las historias de usuario y su definición de terminado.

 El enfoque para las soluciones a los problemas de los usuarios, se preciso con los objetivos, de que sea muy sencillo de entender, de fácil manipulación, con acceso rápido y directo, y que la definicón de terminado abarque las soluciones al usuario. 

Se implementaron todas las definiciones de terminado a WORLDBANK Base de Datos, por consiguiente, las soluciones a los problemas del usuario.
 
## Historias de usuario

HISTORIA 1 :  
**Yo como** profesional que realiza investigaciones **necesito** un menú de navegación **con la finalidad** de saber qué opciones de manipulación de la data ofrece la web.

> Definición de terminado : Layout muestra menú de navegación con estas opciones: Búsqueda rápida, búsqueda por tema, búsqueda por año, ordenamiento de datos y promedio de datos. Menú de navegación desplegado en HTML y CSS con responsive. Pasa testeo de usabilidad.

HISTORIA 2 :  
**Yo como** estudiante universitario **necesito** una opción de búsqueda **con la finalidad** de obtener un listado de indicadores que coincidan con mi palara clave o temática buscada.

> Definición de terminado : Visualizar la lista de indicadores filtrados según la condición dada por el usaurio.

HISTORIA 3 :  
**Yo como** estudiante universitario **necesito** una opción de filtrado de indicadores por año **con la finalidad** de obtener una tabla con los indicadores y valores de acuerdo al año ingresado.

> Definición de terminado : Se visualiza la tabla con indicadores y sus respectivos valores filtrados según el año ingresado en input.

HISTORIA 4 :  
**Yo como** estudiante de maestría **necesito** tener la opción de ordenar la data de forma ascendente y descendente **con la finalidad** obtener la data ordenada de mayor a menor y viceversa asi como los años y valores.

> Definición de terminado : Tabla impresa en la sección de resultados que muestra años y valores correspondientes según indicador seleccionado, ordenada según la preferencia del usuario (Ascendente o Descendente) y filtrada según el tipo de datos (Años o Valores).

HISTORIA 5 :  
**Yo como** estudiante universitaria **necesito** obtener el promedio de los valores según indicador que elija **con la finalidad** de hacer uso de ese calculo estadistico y poder usarlo en mis investigaciones. 

> Definición de terminado : Promedio visualizado en el área de resultados, obtenido después de seleccionar un indicador y accionar el botón de PROMEDIAR.

## Diseño de la Interfaz de Usuario

### Prototipo de baja fidelidad
Se realizaron diversas iteraciones, ya que a medida que avanzaba el modifico tanto mobile como desktop; a causa de los testeos de usabilidad, en los cuales, los usuarios indicaban si las soluciones eran satisfactorias para sus problemas o no. A partir de ellos se agregaron o eliminaron fragmentos del diseño asi también las mejore que se le podrian aplicar al diseño del proyecto.

**Primera iteración**
![1 iteracion total](https://user-images.githubusercontent.com/45085970/51090896-0e3a4380-1751-11e9-8d3c-0cce8d8ebc00.png)

**Segunda y tercera iteración**
![2 y 3 iteracion total](https://user-images.githubusercontent.com/45085970/51091033-c4525d00-1752-11e9-99fc-cf562a8cf72a.png)

**Cuarta iteración**
![4 iteracion](https://user-images.githubusercontent.com/45085970/51091102-d41e7100-1753-11e9-8ee2-d8c65d98b0c6.png)

### Prototipo de alta fidelidad
También se realizaron diversos prototipos de alta fidelidad, ya que debido a que las iteraciones se modificaron, tuvimos que modificar nuestros primeros diseños. Finalmente, después de aprobar el testeo de usabilidad se realizó en diseño final, que se buscó implementar en proyecto.

**Primera iteración**
![primera iteracion alta](https://user-images.githubusercontent.com/45085970/51091412-527d1200-1758-11e9-9d11-14d2cbec5a19.png)

**Última iteración**
![iteracion ultima](https://user-images.githubusercontent.com/45085970/51091310-2614c600-1757-11e9-84dc-a8709c3a10cd.png)

## Implementación de la Interfaz de Usuario (HTML/CSS/JS)
La implementación de la interfaz de usuario también tuvo muchos cambios, la causa principal fue la aprobación del testeo de usabilidad. El primer diseño se implementó la segunda semana; sin embargo, al no pasar el testeo de usabilidad se tuvo que modificar e implementarlo nuevamente con el diseño aprobado lo cual tomó 2 semanas. Durante estas 4 semanas que duró el proyecto se realizó la construcción de la estructura en HTML, también funcionalidad de la interfaz, que incluye el filtrado, ordenado y  promediado de la data entregada, que fue desarrollada de forma progresiva a través de las emanas, el DOM se integró las últimas semanas, a medida que la funcionalidad se construia.
