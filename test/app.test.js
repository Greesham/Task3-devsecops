# tests/test_app.py
from app import app

def test_index():
    client = app.test_client()
    resp = client.get("/")
    assert resp.status_code == 200
    assert resp.get_json() == {"status": "ok"}
