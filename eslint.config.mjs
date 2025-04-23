import reactAppConfig from 'eslint-config-react-app';

export default [
  {
    ...reactAppConfig,
    files: ['**/*.{js,jsx}'], // Aplica la configuración de React App a archivos .js y .jsx
    // Puedes añadir o modificar reglas específicas de tu proyecto aquí
    rules: {
      // Ejemplo: Sobreescribir una regla de react-app si es necesario
      // 'react/jsx-indent': ['error', 2],
    },
  },
  {
    files: ['**/*.js'], // Aplica estas reglas solo a archivos .js (si tienes reglas específicas)
    languageOptions: {
      globals: {
        // Define tus variables globales aquí (si las tienes)
        // Por ejemplo: window: "readonly", document: "readonly"
      },
      sourceType: 'module', // Si usas módulos ES
    },
    rules: {
      'semi': ['error', 'always'], // Ejemplo de regla: requiere punto y coma al final de las líneas
      'quotes': ['error', 'single'], // Ejemplo de regla: requiere comillas simples
      'no-unused-vars': 'warn', // Ejemplo de regla: advierte sobre variables no utilizadas
      // Añade o modifica las reglas específicas para archivos .js aquí
    },
  },
];
// // /*import { defineConfig } from "eslint/config";
// // import js from "@eslint/js";
// // import globals from "globals";
// // import pluginReact from "eslint-plugin-react";


// // export default defineConfig([
// //   { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
// //   { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
// //   pluginReact.configs.flat.recommended,
// // ]);
// import eslint from 'eslint';

// export default [
//   {
//     files: ['**/*.js'], // Aplica las reglas a todos los archivos .js
//     languageOptions: {
//       globals: {
//         // Define tus variables globales aquí (si las tienes)
//         // Por ejemplo: window: "readonly", document: "readonly"
//       },
//       sourceType: 'module', // Si usas módulos ES
//     },
//     rules: {
//       'semi': ['error', 'always'], // Ejemplo de regla: requiere punto y coma al final de las líneas
//       'quotes': ['error', 'single'], // Ejemplo de regla: requiere comillas simples
//       'no-unused-vars': 'warn' // Ejemplo de regla: advierte sobre variables no utilizadas
//       // Añade o modifica las reglas según tus preferencias
//     },
//   },
// ];