# Spark-E



<div align="center">

[![css3-badge-sm]][css3-web]
[![figma-badge-sm]][figma-web]
[![git-badge-sm]][git-web]
[![github-badge-sm]][github-web]
[![html5-badge-sm]][html5-web]
[![js-badge-sm]][js-web]
[![vscode-badge-sm]][vscode-web]    

[![ios-development-badge-sm]][ios-development-web] [![android-development-badge-sm]][android-development-web]

</div>

## Integrantes

<ul>
    <li>Joseph Donoso</li>
    <li>Jorge Villarreal</li>
    <li>Sebastián Yáñez</li>
</ul>

## Descripción

Es una aplicación móvil contra incendios que conectará con un robot en terreno. Por lo que esta será capaz de evaluar temperaturas, medir
gases y determinar el comportamiento del fuego a través del robot.


### Funcionalidades

La aplicación contará con las siguientes funcionalidades:
<div>
    <ol>
        <li><strong>Inicio de sesión:</strong> un usuario ya registrado puede entrar a su cuenta al ingresar su nombre de usuario y contraseña.</li>
        <li><strong>Registro de usuario:</strong> un usuario puede registrarse en la aplicación ingresando un nombre de usuario, contraseña, RUT, correo electrónico, región y comuna en donde vive.</li>
        <li><strong>Cambio de contraseña:</strong> si un usuario quiere cambiar su contraseña, puede hacerlo al ingresar su correo electrónico y la nueva contraseña que desea. Para efectuar el cambio, deberá ingresar un código enviado al correo ingresado.</li>
        <li><strong>Medición de temperatura y humedad ambiental:</strong> el usuario puede ver la temperatura actual, además de visualizar un gráfico que muestra los cambios de temperatura y humedad ambiental con el paso de las horas. El usuario puede decidir si quiere ver los datos de temperatura en grados celsius o fahrenheit.</li>
        <li><strong>Medición de gases:</strong> el usuario puede visualizar gráficos que miden los niveles de dióxido de carbono (CO2), monóxido de carbono (CO), metano (CH4) y óxidos de nitrógeno (NOX). También puede ver datos útiles como cuáles son los niveles normales de estos gases en el ambiente.</li>
        <li><strong>Registro de notificaciones:</strong> el usuario puede acceder a una pestaña con el historial de notificaciones que ha recibido de la aplicación, las cuales tienen una fecha, hora y descripción.</li>
        <li><strong>Visualización de una notificación específica:</strong> el usuario puede presionar una notificación específica del historial para ver datos más detallados de esta.</li>
        <li><strong>Visualización del comportamiento del fuego:</strong> el usuario puede visualizar un mapeo de la zona que está siendo medida, en la que puede ver los focos de incendio.</li>
    </ol>

</div>

### Estructura de Datos

La aplicación almacenará usuarios, regiones, comunas y notificaciones.

<div>
    <ul>
        <li><strong>Usuario:</strong> Los usuarios se componen de un nombre, correo electrónico, comuna de residencia, región de residencia y contraseña.</li>
        <li><strong>Región:</strong> Las regiones contarán con un código de región y su nombre.</li>
        <li><strong>Comuna:</strong> Las comunas, al igual que las regiones, tendrán un código comuna y su nombre.</li>
        <li><strong>Notificación:</strong> Las notificaciones se componen de un identificador único, la fecha de creación, un título y la descripción de la misma.</li>
    <ul>
</div>

<strong>Relaciones:</strong> Cada usuario estará asociado a un código de comuna y cada comuna a un código de región. Por otra parte las notificaciones serán globales, independientes del usuario que las visualice.

<strong>Base de Datos:</strong> Para almacenar los datos de la aplicación se utilizará una base de datos relacional, para aprovechar las características y beneficios que suponen su uso. Debido a lo anterior y sumado a la familiaridad que el grupo tiene con el motor de base de datos, se ha optado por utilizar <strong>MySQL</strong>.


### Patrones de Diseño

Los patrones de diseño utilizados para la aplicación son los siguientes:

<div>
    <ul>
        <li><strong>Back button (Navegación histórica):</strong> Es un “atrás” histórico dentro de la app en donde se encuentra el usuario. Se encuentra en el Header de todas las páginas, y se activa en cuanto el usuario navega a otra a través de las interacciones (Se implementa utilizando el useHistory hook de React).</li>
        <li><strong>Inline Validation:</strong> Proporciona retroalimentación inmediata al usuario mientras completa formularios, indicando errores y validaciones en tiempo real. Se encuentra en los formularios de inicio sesión, registro y cambio de contraseña, y se implementa a través de validadores personalizados que se actualizan al momento de presionar continuar (realizar un submit).</li>
        <li><strong>Toggle Switch Pattern (Patrón de Alternancia):</strong> El patrón de alternancia utiliza un interruptor (toggle switch) para permitir a los usuarios seleccionar entre dos opciones distintas. Se encuentra en la página de "Temperatura" para permitir al usuario cambiar entre una lectura de temperatura de celsius a fahrenheit.</li>
        <li><strong>Notification List:</strong> Una lista que muestra notificaciones o mensajes ordenados cronológicamente, permitiendo a los usuarios ver, interactuar y gestionar sus notificaciones de manera eficiente. Se encuentra en la página de "Notificaciones" como una lista de alertas que pueden ser marcadas como leídas o no.</li>
    <ul>
</div>

## Prototipo

<div align="center">

[![figma-prot-badge]][figma-prot-url] [![figma-dis-badge]][figma-dis-url]

</div>

[js-badge-sm]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat
[js-web]: https://developer.mozilla.org/es/docs/Web/JavaScript

[html5-badge-sm]: https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat
[html5-web]: https://developer.mozilla.org/es/docs/Web/HTML

[css3-badge-sm]: https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat
[css3-web]: https://developer.mozilla.org/es/docs/Web/CSS

[git-badge-sm]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat
[git-web]: https://git-scm.com/

[github-badge-sm]: https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat
[github-web]: https://github.com

[vscode-badge-sm]: https://img.shields.io/badge/Visual_Studio_Code-007ACC?logo=visual-studio-code&logoColor=fff&style=flat
[vscode-web]: https://code.visualstudio.com/

[figma-badge-sm]: https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-web]: https://www.figma.com/

[ios-development-badge-sm]: https://img.shields.io/badge/iOS_Development-000000?logo=ios&logoColor=fff&style=flat
[ios-development-web]: https://developer.apple.com/ios/

[android-development-badge-sm]: https://img.shields.io/badge/Android_Development-3DDC84?logo=android&logoColor=fff&style=flat
[android-development-web]: https://developer.android.com/

[figma-prot-badge]: https://img.shields.io/badge/Ver%20prototipo%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-prot-url]: https://www.figma.com/proto/krZhYfUssLbpTnOeafrROC/Untitled?type=design&node-id=1-3393&t=f8BW1F2jc4cwoQrT-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3393&mode=design

[figma-dis-badge]: https://img.shields.io/badge/Ver%20diseño%20UI%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-dis-url]: https://www.figma.com/file/krZhYfUssLbpTnOeafrROC/Untitled?type=design&node-id=0%3A1&mode=design&t=XRdykLS5deHCnw6R-1