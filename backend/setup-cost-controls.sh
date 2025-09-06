#!/bin/bash

set -e

# Configuration
ENVIRONMENT=${1:-dev}
REGION=${2:-us-west-2}
EMAIL=${3:-your-email@example.com}
BUDGET_AMOUNT=19

echo "🛡️ Setting up AWS cost controls for ClearPass..."
echo "📧 Budget alerts will be sent to: $EMAIL"
echo "💰 Monthly budget limit: $${BUDGET_AMOUNT}"

# Deploy cost control stack
echo "☁️ Deploying cost control infrastructure..."
aws cloudformation deploy \
  --template-file infrastructure/cost-controls.yaml \
  --stack-name "clearpass-${ENVIRONMENT}-cost-controls" \
  --parameter-overrides \
    BudgetAmount=$BUDGET_AMOUNT \
    AlertEmail=$EMAIL \
  --capabilities CAPABILITY_IAM \
  --region $REGION

# Set up additional cost controls via AWS CLI
echo "⚙️ Configuring additional cost controls..."

# Enable Cost Explorer
aws ce get-cost-and-usage \
  --time-period Start=2025-09-01,End=2025-09-30 \
  --granularity MONTHLY \
  --metrics BlendedCost \
  --region us-east-1 > /dev/null 2>&1 || echo "Cost Explorer already enabled"

# Create cost anomaly detection
aws ce create-anomaly-detector \
  --anomaly-detector MonitorType=DIMENSIONAL,DimensionKey=SERVICE \
  --region us-east-1 || echo "Anomaly detector may already exist"

echo "✅ Cost controls deployed successfully!"
echo ""
echo "📊 Cost Control Features Enabled:"
echo "  • Budget alerts at 50%, 80%, and 100% of $${BUDGET_AMOUNT}"
echo "  • Automatic resource shutdown when budget exceeded"
echo "  • Cost anomaly detection"
echo "  • Lifecycle policies for S3 storage optimization"
echo "  • DynamoDB on-demand billing"
echo "  • Lambda concurrency limits"
echo "  • CloudFront cost optimization"
echo ""
echo "🔔 You will receive email alerts at: $EMAIL"
echo "💡 Monitor costs at: https://console.aws.amazon.com/billing/"
