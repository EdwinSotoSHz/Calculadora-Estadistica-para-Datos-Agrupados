![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

# Calculadora Estadística para Datos Agrupados

Calculadora web que calcula medidas de dispersión (desviación media, varianza, desviación estándar) y medidas de posición (cuartiles, deciles, percentiles) para datos agrupados en intervalos.

## 🎯 Características

- **Interfaz moderna** con fondo animado de partículas
- **Entrada dinámica** de intervalos y frecuencias
- **Cálculos completos** de estadística descriptiva
- **Resultados detallados** con fórmulas MathML
- **Responsive** y optimizado para dispositivos móviles
- **Diseño oscuro** con tema azul/amarillo

## 📊 Medidas Calculadas

### Dispersión
- **Media (X̅)**: `Σ(x*f)/n`
- **Desviación Media (DM)**: `Σf*|x-x̄|/n`
- **Varianza (S²)**: `Σf*(|x-x̄|)²/n`
- **Desviación Estándar (S)**: `√(S²)`

### Posición (Opcional)
- **Cuartiles (Qk)**: División en 4 partes iguales
- **Deciles (Dk)**: División en 10 partes iguales  
- **Percentiles (Pk)**: División en 100 partes iguales

## 🚀 Uso Rápido

1. **Configurar** número de clases
2. **Ingresar** límites y frecuencias en la tabla generada
3. **Especificar** total de datos (n)
4. **Opcional**: Activar medidas de posición y configurar valores k
5. **Calcular** para obtener resultados

## 🛠️ Estructura

```
src/
├── index.html          # Página principal
├── css/style.css       # Estilos principales
└── js/
    ├── medidasDispersionPosicion.js        # Lógica de cálculo estadístico
    └── js-style.js                         # Animación canvas de fondo
```

## 🔧 Tecnologías

- HTML5, CSS3 (con variables CSS)
- JavaScript Vanilla
- Canvas API para animaciones
- MathML para fórmulas
- Font Awesome para iconos

## 📱 Compatibilidad

- Navegadores modernos (Chrome, Firefox, Edge, Safari)
- Mobile-first design
- Soporte para touch devices
- Carga optimizada

## 👤 Autor

**Edwin Soto** - Calculadora desarrollada para fines educativos y estadísticos.

---

*Nota: Proyecto diseñado para el cálculo de estadística descriptiva con datos agrupados en intervalos de clase.*