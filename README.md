Título: Galería de fotos

Usando Ionic se ha implementado una galería de fotos en donde es posible acceder a la cámara del dispositivo, tomar fotos y almacenarlas.  Este ejercicio ha sido previamente diseñado para posteriormente
aplicar ciertas mejoras tales como:

1.- Mostrar las fotos y además mostrar el nombre del archivo debajo de cada foto (rama Cambio_1)

![Captura de pantalla 2025-05-08 000250](https://github.com/user-attachments/assets/bcd56654-937c-4851-ae4d-5f4d127dbe93)

Este primer cambio permite a la galería original poder mostrar el nombre de las fotos tomadas junto con su extensión en la parte inferior de cada una de las mismas. De este modo, cada foto tomada será
almacenada en galería y se podrán visualizar sus respectivos datos.

2.- Mostrar las fotos previamente guardadas en el tab3 en lugar del tab2 (rama Cambio_2)

![Captura de pantalla 2025-05-08 002822](https://github.com/user-attachments/assets/99a09055-198a-4c34-94df-abe8d5607577)

En esta rama se ha cambiado la ubicación fijada como predeterminada para la galería. En primera instancia la galería se encontraba en la sección Tab2 o Pestaña 2 y ahora se ha movido a Tab3 o Pestaña 3.
Este cambio podría facilitar el manejo de la aplicación en caso de que se diseñen otra funciones para las 2 primeras pestañas.

3.- No mostrar las fotos automáticamente, implementar un botón que me permita cargar las fotos (en cualquier tab) (rama Cambio_3)

![Captura de pantalla 2025-05-08 010038](https://github.com/user-attachments/assets/c15a46e4-5127-42b3-aa27-551c5d960f03)

![Captura de pantalla 2025-05-08 010049](https://github.com/user-attachments/assets/c80c5e89-cfb5-4273-8f76-205795778c2a)

Para este literal se ha implementado un botón el cual tenga como función principal cargar la galería de fotos tomadas anteriormente.

4.- Implementar un botón adicional que tome las fotos al 50% de calidad (rama Cambio_4)

![Captura de pantalla 2025-05-08 012003](https://github.com/user-attachments/assets/c0b02ce9-088c-42e9-b02a-7df5f7dedb1d)

Finalmente, se ha aplicado un par de botones extra donde se le permita al usuario poder escoger entre tomar la fotografía al máximo de resolución posible o tomarla únicamente al 50% de resolución total.
Este cambio podría tener efectos como menor peso en las fotografías tomadas aunque comprometiendo su resolución y mayor rapidez al momento de trabajar con la galería de fotos.

5.- Implementar un ícono personalizado y un splash screen (rama Cambio_5)

![Imagen de WhatsApp 2025-05-17 a las 19 16 51_41a619ee](https://github.com/user-attachments/assets/b6c39aff-295d-4728-bad8-dad64e16123b)

En la pestaña 3 se ha implementado un ícono personalizado que hace referencia a un ícono de videojuegos y en este mismo apartado se ha colocado el splash screen el cual hace referencia a un espacio dedicado a videojuegos. Se ha agregado una imagen junto con texto, los cuales en conjunto tienen una duración de 5 segundos antes de desaparecer y dar paso al contenido de esa pestaña.

Una vez diseñados ambos cambios, se ha realizado la construcción y exportación del proyecto hacia Android Studio en donde se pueden ver los cambios realizados pero ahora adaptados a la resolución de pantalla de un dispositivo móvil.

![Imagen de WhatsApp 2025-05-17 a las 19 24 23_d0f8138a](https://github.com/user-attachments/assets/6be107d4-51c6-4967-9674-839c8a551d19)

![Imagen de WhatsApp 2025-05-17 a las 19 24 23_ed570e0a](https://github.com/user-attachments/assets/72898054-cbd1-4418-a239-1dc23ce0a278)

Nota: la APK generada de este apartado se encuentra en su respectiva rama.

Vale la pena mencionar que el trabajo original se encuentra en la rama principal del repositorio y que para el desarrollo de los literales propuestos, se han utilizado referencias clave de Ionic.

Referencias:

- https://ionicframework.com/docs/angular/your-first-app
- https://ionicframework.com/docs/angular/your-first-app/taking-photos
- https://ionicframework.com/docs/angular/your-first-app/saving-photos
- https://ionicframework.com/docs/angular/your-first-app/loading-photos
- https://ionicframework.com/docs/angular/your-first-app/adding-mobile



