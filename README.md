# Satellite Image Application

This repository contains a simple satellite image classification web application with a Python FastAPI backend and a React frontend.

Folders
- `backend/` — FastAPI app, model loading and inference code.
- `satellite-image-ui/` — React frontend.

Prerequisites
- Python 3.9+ (or compatible) for the backend.
- Node.js 14+ / npm for the frontend.

Backend (local development)

1. Create and activate a virtual environment inside the `backend` folder:

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

2. Install Python dependencies (run from repository root or `backend` if you prefer):

```bash
pip install -r requirements.txt
```

3. Run the backend server (from `backend`):

```bash
uvicorn app:app --reload
```

The FastAPI app will be available at `http://127.0.0.1:8000` by default.

Notes
- The model file is `backend/satellite_classifier.pth`. Ensure it remains in the `backend` folder or update the path in `backend/model.py`.
- If you use a different Python executable, replace `python3` with the appropriate command.

Frontend

1. Install dependencies and start the development server:

```bash
cd satellite-image-ui
npm install
npm start
```

The React app will open at `http://localhost:3000` by default and should interact with the backend endpoints.

Development tips
- If the frontend cannot reach the backend, confirm both servers are running and that any CORS settings in `backend/app.py` allow requests from the frontend origin.
- To run linting or tests, use the existing scripts in `satellite-image-ui/package.json` (for frontend) and add test tooling for the backend as needed.

Troubleshooting
- "Module not found" or dependency errors: verify the virtual environment is activated and `pip install -r requirements.txt` completed successfully.
- Permission issues on macOS when creating the venv: try using `python3 -m venv venv` and ensure your Python installation is working.