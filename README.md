# Mejorando la Arquitectura de una Aplicación React

La empresa Pragma necesita mejorar la mantenibilidad y escalabilidad de una aplicación frontend construida con React. La aplicación actual tiene problemas de estructura y gestión de estado que dificultan el mantenimiento y la incorporación de nuevas funcionalidades. Tu tarea es refactorizar y mejorar la arquitectura de la aplicación para que sea más robusta y mantenible.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Arquitectura de Componentes React |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4-6 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis del Sistema Actual

**Objetivo:** Identificar las debilidades en la estructura y gestión de estado de la aplicación.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Revisar el código actual y documentar las áreas que necesitan mejoras en términos de arquitectura y gestión de estado.

**Entregable:** Documento con las áreas identificadas que requieren mejoras.

<details>
<summary>Pistas de conocimiento</summary>

- Busca patrones de código que dificulten el mantenimiento.
- Identifica componentes que podrían ser reutilizados o separados.

</details>

### Fase 2: Refactorización de Componentes

**Objetivo:** Separar y reutilizar componentes para mejorar la estructura del código.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Refactorizar los componentes para que sean más pequeños, reutilizables y fáciles de mantener.

**Entregable:** Código refactorizado con componentes más pequeños y reutilizables.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza componentes funcionales y hooks para mejorar la reutilización.
- Aplica principios de SOLID en la arquitectura de componentes.

</details>

### Fase 3: Gestión de Estado Centralizada

**Objetivo:** Implementar una gestión de estado centralizada para mejorar la mantenibilidad.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementar una solución de gestión de estado centralizada (como Context API o Redux) para manejar el estado de la aplicación de manera más eficiente.

**Entregable:** Código con gestión de estado centralizada implementada.

<details>
<summary>Pistas de conocimiento</summary>

- Evalúa las ventajas y desventajas de diferentes soluciones de gestión de estado.
- Diseña un esquema de estado que sea escalable y fácil de mantener.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente reutilizable en React y por qué es importante?
- **paraQueSirve**: ¿Para qué sirve la gestión de estado centralizada en una aplicación React?
- **comoSeUsa**: ¿Cómo se usa la Context API para gestionar el estado en React?
- **erroresComunes**: ¿Cuáles son los errores comunes al refactorizar componentes en React?
- **queDecisionesImplica**: ¿Qué decisiones implica elegir entre Context API y Redux para la gestión de estado?

## Criterios de Evaluacion

- Identificación de áreas de mejora en la estructura y gestión de estado.
- Refactorización de componentes para ser más pequeños y reutilizables.
- Implementación de una solución de gestión de estado centralizada.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
