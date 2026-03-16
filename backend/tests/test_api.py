"""
Test suite for GFIS Platform FastAPI backend
"""

import pytest
from fastapi.testclient import TestClient
from main import app


@pytest.fixture
def client():
    """Create test client"""
    return TestClient(app)


class TestHealthEndpoint:
    """Test health check endpoint"""
    
    def test_health_status(self, client):
        """Test /health endpoint returns healthy status"""
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert "timestamp" in data
        assert data["version"] == "1.0.0"


class TestRootEndpoint:
    """Test root/info endpoint"""
    
    def test_root_endpoint(self, client):
        """Test root endpoint returns API info"""
        response = client.get("/")
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "GFIS Platform API"
        assert "version" in data
        assert data["status"] == "operational"


class TestDashboardEndpoint:
    """Test dashboard overview endpoint"""
    
    def test_dashboard_overview(self, client):
        """Test /api/v1/dashboard/overview endpoint"""
        response = client.get("/api/v1/dashboard/overview")
        assert response.status_code == 200
        data = response.json()
        assert "total_plants" in data
        assert "total_methane_production_m3" in data
        assert "carbon_credits_generated" in data
        assert "system_health" in data
        assert data["system_health"] == "operational"


class TestSensorEndpoint:
    """Test sensor data endpoint"""
    
    def test_get_sensor_data(self, client):
        """Test /api/v1/sensors/{sensor_id} endpoint"""
        response = client.get("/api/v1/sensors/sensor-001")
        assert response.status_code == 200
        data = response.json()
        assert data["sensor_id"] == "sensor-001"
        assert "temperature" in data
        assert "ph" in data
        assert "biogas_flow" in data
        assert "methane_percentage" in data
        assert "timestamp" in data


class TestAPIIntegration:
    """Integration tests for API"""
    
    def test_api_startup(self, client):
        """Test API starts and responds to basic requests"""
        response = client.get("/")
        assert response.status_code == 200
        assert response.json()["name"] == "GFIS Platform API"
    
    def test_cors_headers(self, client):
        """Test CORS headers are configured"""
        response = client.options("/health")
        assert "access-control-allow-origin" in response.headers
