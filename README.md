# MCP Weather Server

Un servidor MCP (Model Context Protocol) desarrollado en TypeScript que proporciona información meteorológica en tiempo real utilizando las APIs de Open-Meteo.

## 🌟 Características

- **Búsqueda de ubicaciones**: Obtiene coordenadas geográficas de ciudades utilizando la API de geocodificación de Open-Meteo
- **Datos meteorológicos**: Proporciona información meteorológica actual y pronósticos utilizando la API de Open-Meteo
- **Integración MCP**: Compatible con el protocolo MCP para interacción con modelos de lenguaje
- **TypeScript**: Desarrollado completamente en TypeScript para mayor seguridad de tipos
- **Validación de datos**: Utiliza Zod para validación robusta de parámetros de entrada

## 🛠️ Tecnologías Utilizadas

- **TypeScript 5+**: Lenguaje principal
- **Bun**: Runtime JavaScript rápido
- **@modelcontextprotocol/sdk**: SDK oficial del protocolo MCP
- **Zod**: Biblioteca de validación y esquemas TypeScript-first
- **Open-Meteo APIs**: APIs gratuitas para geocodificación y datos meteorológicos

## 📋 Prerrequisitos

- [Bun](https://bun.sh) v1.2.14 o superior
- Node.js 16+ (como alternativa a Bun)

## 🚀 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/rubentanahara/mcp_ts.git
   cd mcp_ts
   ```

2. **Instala las dependencias**:
   ```bash
   bun install
   ```

   O si prefieres npm:
   ```bash
   npm install
   ```

## 🎯 Uso

### Modo de Desarrollo
Para ejecutar el servidor en modo de desarrollo con recarga automática:

```bash
bun run start:dev
```

Este comando ejecuta concurrentemente el servidor MCP y el inspector MCP para debugging.

### Solo Servidor
Para ejecutar únicamente el servidor:

```bash
bun run start:server
```

### Solo Inspector
Para ejecutar únicamente el inspector MCP:

```bash
bun run start:inspector
```

## 🔧 API y Herramientas

### Herramienta: fetch-weather

Obtiene datos meteorológicos para una ciudad específica.

**Parámetros:**
- `city` (string): Nombre de la ciudad para la cual se solicitan los datos meteorológicos

**Ejemplo de uso:**
```typescript
// La herramienta puede ser llamada a través del protocolo MCP
// con el parámetro city: "Madrid"
```

**Respuesta:**
La herramienta retorna datos meteorológicos en formato JSON que incluyen:
- Temperatura actual
- Precipitación
- Estado del día/noche
- Lluvia
- Datos horarios de temperatura

## 📁 Estructura del Proyecto

```
mcp_ts/
├── src/
│   ├── constants.ts      # URLs de APIs y parámetros por defecto
│   ├── types.ts          # Definiciones de tipos TypeScript
│   └── weatherhelper.ts  # Funciones helper para APIs meteorológicas
├── index.ts              # Punto de entrada del servidor MCP
├── package.json          # Configuración del proyecto y dependencias
├── tsconfig.json         # Configuración de TypeScript
├── .eslintrc.json        # Configuración de ESLint
└── README.md             # Este archivo
```

### Descripción de Archivos

#### `index.ts`
Archivo principal que:
- Define el servidor MCP
- Registra la herramienta `fetch-weather`
- Configura el transporte stdio para comunicación local
- Maneja la conexión del servidor

#### `src/weatherhelper.ts`
Contiene las funciones principales:
- `fetchCityData()`: Obtiene coordenadas geográficas de una ciudad
- `fetchWeather()`: Obtiene datos meteorológicos basados en coordenadas

#### `src/types.ts`
Define las interfaces TypeScript:
- `LocationResult`: Estructura de datos de ubicación
- `GeocodingApiResponse`: Respuesta de la API de geocodificación
- `WeatherResponse`: Respuesta de la API meteorológica

#### `src/constants.ts`
Define constantes:
- URLs base de las APIs
- Parámetros por defecto para las consultas

## 🌐 APIs Utilizadas

### Open-Meteo Geocoding API
- **URL**: `https://geocoding-api.open-meteo.com/v1/search`
- **Propósito**: Convertir nombres de ciudades en coordenadas geográficas
- **Documentación**: [Open-Meteo Geocoding](https://open-meteo.com/en/docs/geocoding-api)

### Open-Meteo Weather API
- **URL**: `https://api.open-meteo.com/v1/forecast`
- **Propósito**: Obtener datos meteorológicos actuales y pronósticos
- **Documentación**: [Open-Meteo Weather](https://open-meteo.com/en/docs)

## 🧪 Desarrollo y Testing

### Linting
El proyecto incluye configuración de ESLint para mantener calidad del código:

```bash
npx eslint . --ext .ts
```

### Estructura de Desarrollo
- **Lenguaje**: TypeScript 5+
- **Linter**: ESLint con reglas específicas para TypeScript
- **Runtime**: Bun (con soporte para Node.js)
- **Gestión de dependencias**: Bun/npm

## 🤝 Protocolo MCP

Este servidor implementa el [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), que permite a los modelos de lenguaje interactuar con herramientas externas de manera estandarizada.

### Características MCP:
- **Comunicación stdio**: Para uso local y debugging
- **Herramientas tipadas**: Definidas con esquemas Zod
- **Manejo de errores**: Respuestas estructuradas para casos de error
- **Inspección**: Compatible con el inspector MCP oficial

## 📝 Licencia

Este proyecto es de uso privado. Para más información sobre licencias, contacta al autor.

## 👤 Autor

**Rubén Tanahara** - [@rubentanahara](https://github.com/rubentanahara)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes alguna pregunta o problema:

1. Revisa la documentación del [MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)
2. Consulta la documentación de [Open-Meteo](https://open-meteo.com/en/docs)
3. Abre un issue en este repositorio

---

⭐ Si este proyecto te fue útil, ¡no olvides darle una estrella!
