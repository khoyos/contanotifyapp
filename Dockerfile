# ----------------------------------------
# FASE 1: CONSTRUCCIÓN (BUILD)
# Actualizado a 'node:20-slim' (LTS) para resolver el error 'crypto.hash is not a function'
# causado por incompatibilidad entre la versión de Node 18 y Vite 7.1.2.
# ----------------------------------------
FROM node:20-slim AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env .env

# Compila la app. La salida de VITE por defecto es la carpeta 'dist'.
RUN npm run build

# ----------------------------------------
# FASE 2: EJECUCIÓN (Serve with Nginx)
# Usamos 'nginx:stable-alpine' para ser ligeros.
# ----------------------------------------
FROM nginx:stable-alpine as production-stage

# Copiar la carpeta 'dist' (salida de Vite).
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copiar la configuración personalizada de Nginx
# Asumo que tienes un archivo 'default.conf' en la raíz de tu despliegue o en 'nginx-conf/'
# Si no usas uno, Nginx servirá el index.html por defecto, lo cual suele ser suficiente.
# Si tu configuración está en el path superior (docker-compose.yml context), ajusta la ruta.
# COPY ../nginx-conf/default.conf /etc/nginx/conf.d/default.conf 

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]