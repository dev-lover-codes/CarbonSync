# Build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

# Pass build arguments to environment variables for Vite
# These can be overridden at build time via --build-arg, or fall back to defaults
ARG VITE_FIREBASE_API_KEY=AIzaSyA1pCSQmnwk6bkag8umYtvniBke4FjaTE4
ARG VITE_FIREBASE_AUTH_DOMAIN=carbonsync-minimal-2026.firebaseapp.com
ARG VITE_FIREBASE_PROJECT_ID=carbonsync-minimal-2026
ARG VITE_FIREBASE_STORAGE_BUCKET=carbonsync-minimal-2026.firebasestorage.app
ARG VITE_FIREBASE_MESSAGING_SENDER_ID=55276868443
ARG VITE_FIREBASE_APP_ID=1:55276868443:web:ae3d97f5a35eb4bfefc07e

ENV VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY
ENV VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN
ENV VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID
ENV VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET
ENV VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID
ENV VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID

RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
