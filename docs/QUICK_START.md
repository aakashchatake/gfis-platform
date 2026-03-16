# Quick Start Guide - 10 Minutes

## 1. Local Development (5 minutes)

```bash
# Start all services
docker-compose up -d

# Wait 30 seconds for services to initialize
sleep 30

# Verify health
curl http://localhost:8000/health
curl http://localhost:3000
```

## 2. Test Services (3 minutes)

```bash
# Test API
curl http://localhost:8000/api/v1/dashboard/overview

# View API documentation
# Open: http://localhost:8000/docs
```

## 3. Next Steps (2 minutes)

- Edit `website/src/pages/index.tsx` for homepage
- Edit `backend/main.py` for API endpoints
- Check logs: `docker-compose logs -f`
- Stop services: `docker-compose down`

## Common Commands

```bash
# View logs
docker-compose logs -f backend      # Backend logs
docker-compose logs -f website      # Website logs

# Rebuild images
docker-compose build

# Clean up
docker-compose down -v              # Remove volumes too

# Database access
docker-compose exec postgres psql -U gfis -d gfis
```

---

**Ready to deploy?** See [Deployment Guide](./DEPLOYMENT.md)
