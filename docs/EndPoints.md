# Endpoints

> List of all implemented endpoints

---

# Auth

## Account Management

```http
POST   /auth/signup
POST   /auth/login
POST   /auth/logout
DELETE /auth/delete
```

## Password Management

```http
POST /auth/change-password
POST /auth/forgot-password
POST /auth/reset-password/:token
```

## Email Verification

```http
GET  /auth/verify-email/:token
POST /auth/resend-email
```

## Session Management

```http
GET  /auth/me
POST /auth/refresh-token
```

---

# Organization

## Organization Management

```http
POST   /organizations
GET    /organizations/:organizationId
PATCH  /organizations/:organizationId
DELETE /organizations/:organizationId
```

## Membership Management

```http
GET    /organizations/:organizationId/members
PATCH  /organizations/:organizationId/members/:userId
DELETE /organizations/:organizationId/members/:userId
```

## Invitation Management

### Create Invitation

```http
POST /organizations/:organizationId/invitations
```

### List Invitations

Supports filtering by status.

```http
GET /organizations/:organizationId/invitations
```

Query Parameters:

```http
?status=pending
?status=accepted
?status=rejected
?status=expired
```

Examples:

```http
GET /organizations/:organizationId/invitations
GET /organizations/:organizationId/invitations?status=pending
GET /organizations/:organizationId/invitations?status=accepted
```

---

# Invitation

## Accept Invitation

```http
POST /invitations/:token/accept
```

## Reject Invitation

```http
POST /invitations/:token/reject
```

---

# Future Modules

```http
Clients
Services
Invoices
Invoice Items
Payments
```
