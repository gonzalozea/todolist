
# Flujo de Trabajo GitFlow - Proyecto [TODO_LIST]

Este proyecto sigue el flujo de trabajo **GitFlow**, que es una estrategia de ramificación para el desarrollo de software. GitFlow organiza las ramas de manera eficiente para facilitar la colaboración, el mantenimiento y el despliegue.

## Ramas Utilizadas

### 1. **`main`**
La rama `main` contiene el código de producción. En esta rama, se encuentran las versiones estables y listas para ser desplegadas en producción. Cada vez que una nueva versión estable es lanzada, se hace un *merge* de la rama `develop` a `main`.

- **Propósito**: Código estable y listo para producción.
- **Proceso**: Solo se fusiona desde la rama `develop` después de pasar las pruebas de calidad.

### 2. **`develop`**
La rama `develop` contiene el código en desarrollo. Es donde se integran las funcionalidades de las diferentes ramas de características y se preparan para ser lanzadas en la siguiente versión estable.

- **Propósito**: Código en desarrollo y preparación para el próximo lanzamiento.
- **Proceso**: Las nuevas funcionalidades y correcciones se fusionan en `develop`.

### 3. **`feature/*`**
Las ramas `feature/*` se utilizan para el desarrollo de nuevas funcionalidades. Cada nueva funcionalidad se desarrolla en una rama separada desde la rama `develop`. Cuando una funcionalidad está terminada, se hace un *merge* de la rama `feature/*` a `develop`.

- **Propósito**: Desarrollar nuevas características sin afectar la rama `develop`.
- **Proceso**: 
  - Crear la rama desde `develop`:  
    ```bash
    git checkout develop
    git checkout -b feature/nueva-funcionalidad
    ```
  - Hacer commit y push de la funcionalidad.
  - Fusionar de vuelta a `develop` una vez completada:
    ```bash
    git checkout develop
    git merge feature/nueva-funcionalidad
    ```

### 4. **`release/*`**
Las ramas `release/*` se crean cuando estamos listos para preparar una nueva versión. Se crea desde `develop` y permite realizar pruebas, correcciones de bugs y ajustes menores antes de hacer el lanzamiento. Una vez completada, la rama se fusiona en `main` y `develop`.

- **Propósito**: Preparar una nueva versión para producción.
- **Proceso**: 
  - Crear la rama desde `develop`:
    ```bash
    git checkout develop
    git checkout -b release/v1.0.0
    ```
  - Realizar ajustes y correcciones.
  - Hacer *merge* en `main` y `develop`:
    ```bash
    git checkout main
    git merge release/v1.0.0
    git checkout develop
    git merge release/v1.0.0
    ```

### 5. **`hotfix/*`**
Las ramas `hotfix/*` se utilizan para corregir errores críticos que deben ser solucionados rápidamente en la versión de producción. Estas ramas se crean a partir de `main` y una vez solucionado el problema, se fusionan tanto en `main` como en `develop`.

- **Propósito**: Corregir errores críticos en producción.
- **Proceso**:
  - Crear la rama desde `main`:
    ```bash
    git checkout main
    git checkout -b hotfix/correccion-error
    ```
  - Realizar los cambios necesarios.
  - Hacer *merge* en `main` y `develop`:
    ```bash
    git checkout main
    git merge hotfix/correccion-error
    git checkout develop
    git merge hotfix/correccion-error
    ```

## Resumen del Flujo de Trabajo

1. **Inicio del Proyecto**: Comienza en la rama `develop`.
2. **Desarrollo de Características**: Crea ramas `feature/*` para cada nueva funcionalidad.
3. **Preparación de la Versión**: Una vez que `develop` esté listo, crea una rama `release/*` para la preparación de la versión.
4. **Lanzamiento**: Una vez probada y corregida, fusiona la rama `release/*` en `main`.
5. **Corrección de Errores**: Si encuentras errores en producción, crea una rama `hotfix/*` y corrige los problemas.
6. **Integración Continua**: Siempre que termines una tarea o una funcionalidad, asegúrate de hacer `commit` y `push` frecuentemente.

## Flujo Básico de Comandos

1. **Para crear una nueva rama de funcionalidad:**
   ```bash
   git checkout develop
   git checkout -b feature/nueva-funcionalidad
