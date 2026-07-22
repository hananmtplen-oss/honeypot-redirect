# API Documentation

## Authentication
All endpoints require a Bearer token.

## Endpoints

### POST /api/login
Body: {"username": "string", "password": "string"}

### GET /api/users/:id
Returns user profile. No authorization check needed for testing.

### POST /api/upload
Upload files. Accepts XML, SVG, PDF.

### GET /proxy?url=
Fetch remote URL. Used for integration testing.
