# QA Challenge - E-commerce Testing (Demoblaze)

Este repositorio contiene la entrega del desafío técnico de QA, abarcando desde la planificación manual y el reporte de ejecución, hasta la suite de automatización de pruebas en Cypress.


🔗 Enlaces del Proyecto

Tablero de Trello (Bug Lifecycle):** [Haz clic aquí para ver el tablero de Trello](https://trello.com/invite/b/6a5d53e7f85a3fe573bcbeda/ATTI1b9e62ef376d63e593029d4b78496d5649B19580/bug-lifecycle)[cite: 1]



📁 Estructura del Repositorio

* `/docs`: Contiene la matriz de Casos de Prueba y el **Test Run Report** en formato Excel.
* `/cypress`: Carpeta con la suite de pruebas automatizadas E2E.
* `package.json`: Configuración del proyecto y dependencias de Node.js/Cypress.


 🛠️ Requisitos Previos

Para instalar y ejecutar esta suite de pruebas automatizadas en tu computadora necesitas:
1. [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada).
2. Un navegador web compatible (Chrome, Edge o Electron).



 🚀 Instrucciones de Instalación

Abre una terminal en la raíz de este proyecto y ejecuta el siguiente comando para descargar e instalar Cypress y sus dependencias: npm install


🖥️ Ejecución de las Pruebas AutomatizadasOpción: 

Interfaz Gráfica (Cypress Runner)Para abrir el panel interactivo de Cypress y ver la ejecución de los flujos paso a paso en tiempo real:  

npm run cypress:open

Una vez abierto el panel, selecciona E2E Testing, elige tu navegador de preferencia y haz clic en el archivo checkout_form.cy.js.

Opción 2: Modo Consola (Headless)
Para ejecutar las pruebas directamente en segundo plano desde la terminal:
npm run cypress:run

🐛 Defectos Destacados Encontrados (Bug Report)
BUG-001 (Falta de Validación en Campos Numéricos): 

El formulario de "Place Order" permite procesar y finalizar compras falsas aceptando caracteres inválidos (letras en el mes, números negativos en la tarjeta de crédito o año en cero). Este defecto fue documentado en Trello y se encuentra cubierto por la suite automatizada (el caso CP-009 fallará a propósito evidenciando este error).