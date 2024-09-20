// scripts/post-generate.js

const fs = require('fs');
const path = require('path');

// Ruta al archivo OpenAPI.ts generado
const openAPIPath = path.resolve(__dirname, '../src/api/core/OpenAPI.ts');

// Lee el archivo generado
let openAPIContent = fs.readFileSync(openAPIPath, 'utf-8');

// Reemplaza la URL base con la configuración que desees
openAPIContent = openAPIContent.replace(
  /BASE: '.*'/,
  "BASE: 'http://localhost:4000'" // La URL base que desees
);

// Sobrescribe el archivo con la nueva configuración
fs.writeFileSync(openAPIPath, openAPIContent, 'utf-8');

console.log('Archivo OpenAPI.ts actualizado con la URL base personalizada.');
