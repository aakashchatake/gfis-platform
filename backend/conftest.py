import pytest

@pytest.fixture
def api_client():
    from fastapi.testclient import TestClient
    from main import app
    return TestClient(app)
