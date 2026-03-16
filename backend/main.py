from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from datetime import datetime
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("GFIS Platform API starting...")
    yield
    logger.info("GFIS Platform API shutting down...")

app = FastAPI(
    title="GFIS Platform API",
    description="Green Fuel Intelligence System - Enterprise API",
    version="1.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "name": "GFIS Platform API",
        "version": "1.0.0",
        "status": "operational",
        "timestamp": datetime.utcnow().isoformat()
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0"
    }

@app.get("/api/v1/dashboard/overview")
async def dashboard_overview():
    return {
        "total_plants": 12,
        "total_methane_production_m3": 450000,
        "carbon_credits_generated": 2250,
        "system_health": "operational",
        "active_sensors": 144,
        "ml_predictions_accuracy": 0.945
    }

@app.get("/api/v1/sensors/{sensor_id}")
async def get_sensor_data(sensor_id: str):
    return {
        "sensor_id": sensor_id,
        "temperature": 37.5,
        "ph": 7.2,
        "biogas_flow": 12.3,
        "methane_percentage": 65.4,
        "timestamp": datetime.utcnow().isoformat()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
