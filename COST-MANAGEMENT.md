# ClearPass Cost Management Guide

## 🛡️ $19/Month Budget Protection

This guide ensures your AWS costs stay within the $19/month developer budget.

## 🚀 Quick Setup

```bash
cd backend
./setup-cost-controls.sh dev us-west-2 your-email@example.com
```

## 💰 Cost Breakdown (Estimated Monthly)

| Service | Usage | Cost |
|---------|-------|------|
| Lambda | 1M requests, 512MB | $2-4 |
| S3 | 10GB storage, 1000 requests | $1-2 |
| DynamoDB | On-demand, light usage | $1-3 |
| API Gateway | 100K requests | $1-2 |
| CloudFront | 10GB transfer | $1-2 |
| Secrets Manager | 1 secret | $0.40 |
| CloudWatch Logs | 1GB | $0.50 |
| **Total Estimated** | | **$7-15/month** |

## 🔔 Budget Alerts

Automatic email alerts at:
- **50%** ($9.50) - Warning
- **80%** ($15.20) - Critical  
- **100%** ($19.00) - Emergency shutdown

## ⚙️ Cost Optimization Features

### ✅ Enabled Automatically
- **S3 Lifecycle**: Auto-delete temp files after 1 day
- **DynamoDB**: On-demand billing (pay per request)
- **Lambda**: 512MB memory, 30s timeout, 5 concurrent limit
- **CloudFront**: PriceClass_100 (North America + Europe only)
- **Logs**: 7-day retention

### 🛑 Emergency Shutdown
When budget hits 100%:
- Stop all EC2 instances
- Disable API Gateway endpoints
- Block new Lambda invocations

## 📊 Monitoring Commands

```bash
# Check current month costs
aws ce get-cost-and-usage \
  --time-period Start=2025-09-01,End=2025-09-30 \
  --granularity MONTHLY \
  --metrics BlendedCost

# View budget status
aws budgets describe-budgets --account-id YOUR_ACCOUNT_ID

# Check Lambda costs
aws ce get-cost-and-usage \
  --time-period Start=2025-09-01,End=2025-09-30 \
  --granularity MONTHLY \
  --metrics BlendedCost \
  --group-by Type=DIMENSION,Key=SERVICE \
  --filter '{"Dimensions":{"Key":"SERVICE","Values":["AWS Lambda"]}}'
```

## 🚨 Manual Cost Controls

### Immediate Actions if Costs Spike:
```bash
# Stop all Lambda functions
aws lambda list-functions --query 'Functions[?contains(FunctionName, `clearpass`)].FunctionName' --output text | xargs -I {} aws lambda put-function-concurrency --function-name {} --reserved-concurrent-executions 0

# Delete CloudFront distribution
aws cloudfront list-distributions --query 'DistributionList.Items[?contains(Comment, `clearpass`)].Id' --output text | xargs -I {} aws cloudfront delete-distribution --id {}

# Empty and delete S3 bucket
aws s3 rm s3://clearpass-dev-photos --recursive
aws s3 rb s3://clearpass-dev-photos
```

## 📈 Free Tier Limits (First 12 months)

- **Lambda**: 1M requests/month, 400,000 GB-seconds
- **S3**: 5GB storage, 20,000 GET requests, 2,000 PUT requests
- **DynamoDB**: 25GB storage, 25 read/write capacity units
- **API Gateway**: 1M API calls
- **CloudFront**: 50GB data transfer out

## 🔧 Additional Savings Tips

1. **Use AWS Free Tier**: Maximize free tier usage
2. **Reserved Instances**: For predictable workloads (not needed for dev)
3. **Spot Instances**: For batch processing (if needed)
4. **S3 Intelligent Tiering**: Automatic cost optimization
5. **CloudWatch Logs**: Use shorter retention periods

## 📞 Support

If costs exceed budget:
1. Check AWS Billing Dashboard
2. Review CloudWatch metrics
3. Run emergency shutdown commands
4. Contact AWS Support (included in free tier)

## 🎯 Production Scaling

When ready for production:
- Increase budget limits
- Add Reserved Instances
- Enable auto-scaling
- Add monitoring dashboards
