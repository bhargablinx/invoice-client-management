# EndPoints

> List of all implemented endpoints

## Auth

### Account Management

```
POST /auth/signup
POST /auth/login
POST /auth/logout
DELETE /auth/delete
```

### Password Management

```
POST /auth/change-password
POST /auth/forgot-password
POST /auth/reset-password/:token
```

### Email Verification

```
GET  /auth/verify-email/:token
POST /auth/resend-email
```

### Session Management

```
GET /auth/me
POST /auth/refresh-token
```
