# Satellite Image Classifier

A full-stack application for identifying terrain types from satellite imagery. This project uses a FastAPI (PyTorch) backend and a React frontend, orchestrated with Docker and Nginx for a seamless, zero-config setup.

---

## Getting Started (Instant Launch)

You do not need to install Python, Node.js, or any dependencies manually. You only need Docker.

### 1. Prerequisites

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop) (includes Docker Compose)

---

### 2. Run the Application

Open your terminal in the project root folder and run:

```bash
docker-compose up --build
```

---

### 3. Access the Project

| Service | URL |
|---------|-----|
| **Web Interface** | [http://localhost](http://localhost) |
| **API Documentation (Swagger)** | [http://localhost/api/docs](http://localhost/api/docs) |
| **Health / Prediction Endpoint** | [http://localhost/api/predict](http://localhost/api/predict) (POST) |

---

## Architecture & Networking

This project uses a **Reverse Proxy (Nginx)** to handle all traffic. This allows the frontend and backend to communicate using relative paths, making the app fully portable across different machines or cloud environments.

| Component | Technology | Port |
|-----------|------------|------|
| Frontend | React | 3000 (internal) |
| Backend | FastAPI (PyTorch) | 8000 (internal) |
| Proxy | Nginx | 80 (external) |

---

## Project Structure

```
├── backend/
│   ├── app.py                      # FastAPI entry point
│   ├── satellite_classifier.pth    # Pre-trained PyTorch model
│   ├── Dockerfile                  # Backend container config
│   └── .dockerignore               # Prevents massive image sizes
│
├── satellite-image-ui/
│   ├── src/                        # React source code
│   ├── Dockerfile                  # Frontend container config
│   └── .dockerignore
│
├── nginx.conf                      # Nginx routing configuration
└── docker-compose.yml              # Orchestrator for all services
```

---

## Management Commands

| Action | Command |
|--------|---------|
| Start Services (Foreground) | `docker-compose up` |
| Start Services (Background) | `docker-compose up -d` |
| View Live Logs | `docker-compose logs -f` |
| Stop and Remove Containers | `docker-compose down` |
| Force Rebuild (after code changes) | `docker-compose up --build` |
| Clean up Disk Space | `docker system prune -f` |

---

## Troubleshooting

### Memory Usage

If the backend image becomes too large, ensure the `.dockerignore` file excludes:

```
venv/
data/
__pycache__/
```

### Port 80 Already in Use

If port 80 is occupied on your machine, edit the `nginx` service in `docker-compose.yml`:

```yaml
ports:
  - "8080:80"
```

Then access the app at: [http://localhost:8080](http://localhost:8080)

### CORS Issues

The backend allows all origins using `CORSMiddleware`. Ensure this remains in `app.py` for cross-device or external access.

---

## Tech Stack

- **Frontend:** React
- **Backend:** FastAPI + PyTorch
- **Model:** CNN Terrain Classifier
- **Containerization:** Docker & Docker Compose
- **Reverse Proxy:** Nginx

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.