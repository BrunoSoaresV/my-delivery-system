# Estágio 1: Construir o frontend
FROM node:latest AS frontend

# Definir o diretório de trabalho para o frontend
WORKDIR /usr/src/app/frontend

# Copiar o arquivo package.json e package-lock.json para o frontend
COPY frontend/package*.json ./

# Instalar as dependências do frontend
RUN npm install

# Copiar todo o código fonte do frontend
COPY frontend/ .

# Mudar as permissões do diretório do frontend para que o usuário possa executar comandos
RUN chmod -R 777 .

# Construir o frontend
RUN npm run build

# Estágio 2: Construir o backend
FROM node:latest AS backend

# Definir o diretório de trabalho para o backend
WORKDIR /usr/src/app/backend

# Copiar o arquivo package.json e package-lock.json para o backend
COPY backend/package*.json ./

# Instalar as dependências do backend
RUN npm install

# Copiar todo o código fonte do backend
COPY backend/ .

# Mudar as permissões do diretório do backend para que o usuário possa executar comandos
RUN chmod -R 777 .

# Expor a porta do backend
EXPOSE 5000

# Comando para iniciar o backend
CMD ["npm", "start"]

# Estágio 3: Construir a imagem final
FROM nginx:latest

# Copiar os arquivos de construção do frontend para o diretório do nginx
COPY --from=frontend /usr/src/app/frontend/build /usr/share/nginx/html

# Copiar a configuração personalizada do nginx, se necessário
# COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expor a porta do nginx
EXPOSE 3000

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
