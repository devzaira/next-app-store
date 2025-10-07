# Albertsons Enterprise App Store - Docker Deployment

This document provides instructions for building and deploying the Albertsons Enterprise App Store using Docker.

## Prerequisites

- Docker (v20.10 or higher)
- Docker Compose (v2.0 or higher)

## Quick Start

### 1. Build and Run with Docker Compose

```bash
# Build and start the application
docker-compose up --build -d

# View logs
docker-compose logs -f app-store

# Stop the application
docker-compose down
```

The application will be available at:
- **App Store**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health

### 2. Build Docker Image Manually

```bash
# Build the image
docker build -t albertsons-app-store .

# Run the container
docker run -d \
  --name albertsons-app-store \
  -p 3000:3000 \
  -e NODE_ENV=production \
  albertsons-app-store
```

## Production Deployment

### With Nginx Reverse Proxy

For production deployment with SSL termination and load balancing:

```bash
# Start with nginx proxy
docker-compose --profile production up -d

# The app will be available on port 80 through nginx
# Configure SSL certificates in the ./ssl directory
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Application environment | `production` |
| `PORT` | Application port | `3000` |
| `NEXT_TELEMETRY_DISABLED` | Disable Next.js telemetry | `1` |

### Health Checks

The application includes built-in health checks:

- **Endpoint**: `/api/health`
- **Method**: GET
- **Response**: JSON with status, timestamp, uptime, and service name

## API Integration

**Current State**: The application currently uses **mock data** for all operations.

- **Mock Data Location**: `/data/mockData.ts`
- **API Service Layer**: `/services/api.ts` (ready for real API integration)
- **Implementation Guide**: See `/README.api.md` for complete API integration steps

To switch from mock data to real API:

1. **Configure environment**:
   ```bash
   cp .env.example .env.local
   # Set NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com
   # Set NEXT_PUBLIC_MOCK_API=false
   ```

2. **Implement backend API** following the schema in `/README.api.md`

3. **Update API service** to remove mock data fallbacks

The API service layer is production-ready and includes:
- Error handling and retries
- Authentication headers (ready for SSO/LDAP)
- Request/response logging
- Caching strategies
- Real-time WebSocket support preparation

### Docker Image Optimization

The Dockerfile uses multi-stage builds for optimization:

1. **Dependencies Stage**: Installs only production dependencies
2. **Builder Stage**: Builds the Next.js application
3. **Runner Stage**: Creates minimal runtime image with built application

**Final image size**: ~150MB (Node.js Alpine + built app)

## Monitoring

### Container Logs

```bash
# View real-time logs
docker-compose logs -f app-store

# View last 100 lines
docker-compose logs --tail 100 app-store
```

### Health Status

```bash
# Check container health
docker-compose ps

# Manual health check
curl http://localhost:3000/api/health
```

### Resource Usage

```bash
# Monitor resource usage
docker stats albertsons-app-store
```

## Development

### Development with Docker

```bash
# Create development override
cat > docker-compose.override.yml << EOF
version: '3.8'
services:
  app-store:
    build:
      target: deps
    command: npm run dev
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
EOF

# Start development environment
docker-compose up
```

### Building for Different Architectures

```bash
# Build for multiple platforms (ARM64 + AMD64)
docker buildx build --platform linux/amd64,linux/arm64 -t albertsons-app-store .

# Build for ARM64 (Apple Silicon)
docker buildx build --platform linux/arm64 -t albertsons-app-store .
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Change port in docker-compose.yml or stop conflicting service
   sudo lsof -i :3000
   ```

2. **Build failures**
   ```bash
   # Clean Docker cache
   docker system prune -a
   ```

3. **Memory issues**
   ```bash
   # Increase Docker memory limit in Docker Desktop
   # Or add memory limits to docker-compose.yml
   ```

### Logs and Debugging

```bash
# Access container shell
docker-compose exec app-store sh

# View detailed build logs
docker-compose build --no-cache --progress=plain
```

## Security

### Production Security Checklist

- [ ] Use HTTPS with valid SSL certificates
- [ ] Configure proper firewall rules
- [ ] Regularly update base images
- [ ] Monitor for security vulnerabilities
- [ ] Use secrets management for sensitive data
- [ ] Enable Docker security scanning

### Nginx Security Headers

The included Nginx configuration adds security headers:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Content-Security-Policy
- Referrer-Policy

## Performance

### Optimization Features

- **Multi-stage builds** for smaller images
- **Gzip compression** via Nginx
- **Static asset caching** with long cache headers
- **Rate limiting** to prevent abuse
- **Health checks** for container orchestration

### Scaling

```bash
# Scale horizontally with Docker Compose
docker-compose up --scale app-store=3

# Use with load balancer (nginx upstream configuration)
```

## Support

For issues related to Docker deployment:

1. Check container logs: `docker-compose logs app-store`
2. Verify health status: `curl http://localhost:3000/api/health`
3. Review resource usage: `docker stats`
4. Check network connectivity: `docker network ls`