# API Endpoints

Base URL: `/api/v1`

This file is a quick reference for the frontend. It lists the endpoints that are currently mounted in the server code and the main access rules that affect frontend integration.

## Health Check

- `GET /healthcheck`

## Auth

- `POST /auth/signup`
  - Public
  - Accepts avatar upload via `multipart/form-data` field: `avatar`
- `POST /auth/login`
  - Public
- `POST /auth/logout`
  - Protected
- `POST /auth/change-password`
  - Protected
- `POST /auth/forgot-password`
  - Public
- `POST /auth/reset-password/:token`
  - Public
- `GET /auth/verify-email/:token`
  - Public
- `POST /auth/resend-email`
  - Public
- `GET /auth/me`
  - Protected
- `POST /auth/refresh-token`
  - Public
- `DELETE /auth/delete`
  - Protected

## Organizations

- `POST /organizations`
  - Protected
  - Accepts logo upload via `multipart/form-data` field: `logo`
- `GET /organizations/:organizationId`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `PATCH /organizations/:organizationId`
  - Protected
  - Roles: `owner`
- `DELETE /organizations/:organizationId`
  - Protected
  - Roles: `owner`

### Members

- `GET /organizations/:organizationId/members`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `PATCH /organizations/:organizationId/members/:userId`
  - Protected
  - Roles: `owner`
- `DELETE /organizations/:organizationId/members/:userId`
  - Protected
  - Roles: `owner`

### Organization Invitations

- `POST /organizations/:organizationId/invitations`
  - Protected
  - Roles: `owner`, `admin`
- `GET /organizations/:organizationId/invitations`
  - Protected
  - Roles: `owner`, `admin`

### Clients

- `POST /organizations/:organizationId/clients`
  - Protected
- `GET /organizations/:organizationId/clients`
  - Protected
- `GET /organizations/:organizationId/clients/:clientId`
  - Protected
- `PATCH /organizations/:organizationId/clients/:clientId`
  - Protected
- `DELETE /organizations/:organizationId/clients/:clientId`
  - Protected
  - Roles: `owner`, `admin`
- `DELETE /organizations/:organizationId/clients/:clientId/invoices`
  - Protected
- `DELETE /organizations/:organizationId/clients/:clientId/stats`
  - Protected

### Invoices

- `POST /organizations/:organizationId/invoices`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `GET /organizations/:organizationId/invoices`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `GET /organizations/:organizationId/invoices/:invoiceId`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `PATCH /organizations/:organizationId/invoices/:invoiceId`
  - Protected
  - Roles: `owner`, `admin`
- `DELETE /organizations/:organizationId/invoices/:invoiceId`
  - Protected
  - Roles: `owner`, `admin`
- `PATCH /organizations/:organizationId/invoices/:invoiceId/status`
  - Protected
  - Roles: `owner`, `admin`
- `GET /organizations/:organizationId/invoices/:invoiceId/pdf`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `POST /organizations/:organizationId/invoices/:invoiceId/send`
  - Protected
  - Roles: `owner`, `admin`, `member`

### Payments

- `POST /organizations/:organizationId/invoices/:invoiceId/payments`
  - Protected
  - Roles: `owner`, `admin`
- `GET /organizations/:organizationId/invoices/:invoiceId/payments`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `GET /organizations/:organizationId/invoices/:invoiceId/payments/:paymentId`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `DELETE /organizations/:organizationId/invoices/:invoiceId/payments/:paymentId`
  - Protected
  - Roles: `owner`, `admin`

### Services

- `POST /organizations/:organizationId/services`
  - Protected
  - Roles: `owner`, `admin`
- `GET /organizations/:organizationId/services`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `GET /organizations/:organizationId/services/:serviceId`
  - Protected
  - Roles: `owner`, `admin`, `member`
- `PATCH /organizations/:organizationId/services/:serviceId`
  - Protected
  - Roles: `owner`, `admin`
- `DELETE /organizations/:organizationId/services/:serviceId`
  - Protected
  - Roles: `owner`, `admin`

## Invitations

- `POST /invitations/:token/accept`
  - Protected
- `POST /invitations/:token/reject`
  - Protected

## Dashboard

- `GET /dashboard/:organizationId/overview`
  - Protected
- `GET /dashboard/:organizationId/monthly-revenue`
  - Protected
- `GET /dashboard/:organizationId/recent-invoices`
  - Protected
- `GET /dashboard/:organizationId/top-clients`
  - Protected

## Notes

- All protected endpoints rely on JWT authentication through `verifyJWT`.
- Some endpoints also require role checks via `authorizeRoles`.
- Request/response payload shapes live in the controllers and are not repeated here.
