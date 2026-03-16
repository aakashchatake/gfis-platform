# 🌱 GFIS - Green Fuel Intelligence System

**AI-powered biogas optimization platform for India's SATAT initiative**

![Status](https://img.shields.io/badge/status-production--ready-green)
![Python](https://img.shields.io/badge/python-3.11+-blue)
![Node.js](https://img.shields.io/badge/node.js-18+-blue)
![License](https://img.shields.io/badge/license-proprietary-red)

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/aakashchatake/gfis-platform.git
cd gfis-platform

# Start all services
docker-compose up -d

# Access services
# Website: http://localhost:3000
# API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

## 🏗️ Architecture

- **Frontend**: Next.js 14 + React 18 (TypeScript)
- **Backend**: FastAPI + Python 3.11
- **Database**: PostgreSQL 15 + Redis 7
- **DevOps**: Docker, GitHub Actions, AWS
- **ML**: XGBoost + LSTM ensemble models

## 📁 Project Structure

```
gfis-platform/
├── website/               # Next.js frontend
├── backend/               # FastAPI backend
├── ml/                   # Machine learning models
├── infrastructure/       # Docker, K8s, AWS configs
├── database/             # SQL schemas & migrations
├── docs/                # API & deployment guides
├── tests/               # Unit, integration, e2e tests
├── scripts/             # Deployment scripts
└── .github/workflows/   # CI/CD automation
```

## 🔗 Important Links

- **Live Dashboard**: https://gfis-v2-dashboard.streamlit.app
- **API Documentation**: http://localhost:8000/docs (local)
- **Repository**: https://github.com/aakashchatake/gfis-platform
- **Issue Tracker**: https://github.com/aakashchatake/gfis-platform/issues

## 📚 Documentation

- [Deployment Guide](./docs/deployment/README.md)
- [API Reference](./docs/api/README.md)
- [Architecture Guide](./docs/architecture/README.md)
- [ML Models Guide](./ml/README.md)

## 🔐 Security

- DPDP Act 2023 compliant
- ISO 27001 ready
- End-to-end encryption
- AWS security best practices

## 📞 Support

- **Email**: engineering@chatakeinnoworks.com
- **Phone**: +91-8600182228
- **GitHub Issues**: [Report Issues](https://github.com/aakashchatake/gfis-platform/issues)

## 📄 License

Proprietary - Chatake Innoworks Pvt. Ltd.

---

**Version**: 1.0.0 | **Status**: Production Ready ✅
