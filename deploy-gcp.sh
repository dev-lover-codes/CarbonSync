#!/bin/bash
export $(grep -v '^#' .env | xargs)

PROJECT="projects-for-deployment"
REGION="europe-west1"
SERVICE="third-project-promptwar"

echo "Submitting build..."
gcloud builds submit \
  --project=$PROJECT \
  --config=cloudbuild.yaml \
  --substitutions=_PROJECT_ID=$PROJECT,_SERVICE_NAME=$SERVICE,_VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY,_VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN,_VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID,_VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET,_VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID,_VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID

echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE \
  --image=gcr.io/$PROJECT/$SERVICE \
  --project=$PROJECT \
  --region=$REGION \
  --allow-unauthenticated
