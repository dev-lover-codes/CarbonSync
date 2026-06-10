#!/bin/bash

# Configuration
PROJECT_ID="projects-for-deployment"
REGION="us-central1"
SERVICE_NAME="carbonsync"

echo "🚀 Starting Google Cloud Deployment for $SERVICE_NAME..."

# 1. Set project
gcloud config set project $PROJECT_ID

# 2. Enable APIs (Requires Billing)
echo "📦 Enabling required APIs..."
gcloud services enable run.googleapis.com \
    artifactregistry.googleapis.com \
    cloudbuild.googleapis.com

# 3. Create Artifact Registry repository
echo "🏗️ Creating Artifact Registry..."
gcloud artifacts repositories create $SERVICE_NAME-repo \
    --repository-format=docker \
    --location=$REGION \
    --description="Docker repository for CarbonSync" || true

# 4. Build and Push using Cloud Build
echo "🏗️ Building container image..."
gcloud builds submit --tag $REGION-docker.pkg.dev/$PROJECT_ID/$SERVICE_NAME-repo/$SERVICE_NAME .

# 5. Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
    --image $REGION-docker.pkg.dev/$PROJECT_ID/$SERVICE_NAME-repo/$SERVICE_NAME \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated

echo "✅ Deployment complete!"
gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)'
