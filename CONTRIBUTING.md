# Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto MCP Weather Server! Esta guía te ayudará a comenzar.

## 🚀 Cómo Contribuir

### Reportar Bugs

1. **Revisa los issues existentes** para asegurarte de que el bug no haya sido reportado
2. **Crea un nuevo issue** con la plantilla de bug report
3. **Incluye información detallada**:
   - Descripción clara del problema
   - Pasos para reproducir el error
   - Comportamiento esperado vs actual
   - Información del entorno (OS, versión de Bun/Node, etc.)

### Sugerir Mejoras

1. **Abre un issue** con la etiqueta "enhancement"
2. **Describe la mejora** que te gustaría ver
3. **Explica por qué** sería útil para el proyecto
4. **Proporciona ejemplos** si es posible

### Enviar Pull Requests

1. **Fork el repositorio**
2. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/nombre-de-tu-feature
   ```
3. **Realiza tus cambios**
4. **Asegúrate de que el código funcione**:
   ```bash
   bun run start:dev
   ```
5. **Commit tus cambios** con mensajes descriptivos
6. **Push a tu fork**
7. **Abre un Pull Request**

## 📋 Estándares de Código

### TypeScript
- Usa tipos explícitos cuando sea necesario
- Evita `any` - prefiere tipos específicos
- Sigue las convenciones de nomenclatura:
  - `camelCase` para variables y funciones
  - `PascalCase` para tipos e interfaces
  - `UPPER_SNAKE_CASE` para constantes

### Linting
- El proyecto usa ESLint con reglas específicas para TypeScript
- Ejecuta el linter antes de hacer commit:
  ```bash
  npx eslint . --ext .ts
  ```

### Commits
- Usa mensajes de commit descriptivos
- Sigue el formato convencional:
  ```
  tipo(scope): descripción breve
  
  Descripción más detallada si es necesaria
  ```
- Tipos válidos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🧪 Testing

Actualmente el proyecto no tiene tests automatizados, pero puedes probar manualmente:

1. **Instala las dependencias**:
   ```bash
   bun install
   ```

2. **Ejecuta el servidor**:
   ```bash
   bun run start:dev
   ```

3. **Prueba la herramienta** con el inspector MCP

## 📝 Documentación

- Mantén la documentación actualizada
- Documenta nuevas características en el README.md
- Incluye ejemplos de uso cuando sea apropiado
- Usa comentarios en el código para explicar lógica compleja

## 🔧 Configuración de Desarrollo

### Prerrequisitos
- Bun v1.2.14 o superior
- Git
- Editor con soporte para TypeScript (recomendado: VS Code)

### Configuración del Editor
Para VS Code, las extensiones recomendadas son:
- TypeScript and JavaScript Language Features
- ESLint
- Prettier

### Variables de Entorno
Este proyecto no requiere variables de entorno especiales, ya que usa APIs públicas gratuitas.

## 🤝 Código de Conducta

- **Sé respetuoso** con otros contributores
- **Sé constructivo** en tus comentarios y feedback
- **Ayuda a otros** cuando puedan tener preguntas
- **Mantén un ambiente positivo** de colaboración

## 📞 Obtener Ayuda

Si necesitas ayuda:

1. **Revisa la documentación** en el README.md
2. **Busca en los issues** existentes
3. **Abre un nuevo issue** con la etiqueta "question"
4. **Contacta al mantenedor** directamente si es necesario

## 📋 Checklist para Pull Requests

Antes de enviar tu PR, asegúrate de:

- [ ] El código compila sin errores
- [ ] Has probado los cambios localmente
- [ ] El linter pasa sin errores
- [ ] La documentación está actualizada
- [ ] Los commits tienen mensajes descriptivos
- [ ] Has incluido una descripción clara del PR

¡Gracias por contribuir! 🎉