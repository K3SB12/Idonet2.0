# Idonet2.0

# Idonet Premium

Sistema de Gestión Académica profesional compatible con MEP Costa Rica, PNFT y exportación SEA.

## Características

- ✅ Gestión completa de usuarios y roles (Docente, Coordinador, Director, Admin)
- ✅ Configuración institucional flexible (Año lectivo, periodos, componentes)
- ✅ CRUD completo de grupos y estudiantes
- ✅ Evaluación general con cálculo ponderado automático
- ✅ Prueba de Ejecución PNFT con rúbricas editables
- ✅ Módulo NEE (Necesidades Educativas Especiales)
- ✅ Banco de indicadores con importación CSV
- ✅ Dashboard inteligente con alertas
- ✅ Reportería avanzada (PDF, Excel, CSV, DOCX, JSON)
- ✅ Exportación compatible SEA
- ✅ Funcionamiento offline con IndexedDB
- ✅ PWA instalable

## Requisitos

- Navegador moderno con soporte ES6+
- IndexedDB habilitado
- Service Workers habilitados (para modo offline)

## Instalación

1. Clonar o descargar el repositorio
2. Servir mediante HTTPS (requerido para PWA)
3. Acceder desde navegador compatible
4. Instalar como aplicación cuando se solicite

## Arquitectura

### Frontend
- HTML5 semántico
- CSS3 moderno (Grid, Flexbox, Variables CSS)
- JavaScript modular (ES6+)
- Sin frameworks pesados

### Almacenamiento
- IndexedDB para persistencia local
- Estructura normalizada
- Soporte para modo offline completo

### Seguridad
- Autenticación por roles
- Control de acceso granular
- Validación de datos en cliente y servidor (preparado)

## API REST (Preparación)

El sistema está preparado para conectar con API REST. Los servicios están modularizados para fácil migración:

```javascript
// Ejemplo de adaptación a API
class ApiService {
  async get(endpoint) {
    const response = await fetch(`/api/${endpoint}`);
    return response.json();
  }
}
