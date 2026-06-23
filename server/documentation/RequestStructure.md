# Request Structure

Base URL: `/api/v1`

This file documents the expected request shape for each mounted route in the server. It is meant as a frontend integration guide, so each endpoint is grouped by resource and includes:

- path params
- query params
- request body
- upload fields, when applicable

## Health Check

### `GET /healthcheck`

- Params: none
- Query: none
- Body: none

## Auth

### `POST /auth/signup`

- Params: none
- Query: none
- Body:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "StrongPassword123"
}
```
- Upload:
  - `avatar` as `multipart/form-data`

### `POST /auth/login`

- Params: none
- Query: none
- Body:
```json
{
  "email": "jane@example.com",
  "password": "StrongPassword123"
}
```

### `POST /auth/logout`

- Auth required
- Params: none
- Query: none
- Body: none

### `POST /auth/change-password`

- Auth required
- Params: none
- Query: none
- Body:
```json
{
  "oldPassword": "OldPassword123",
  "newPassword": "NewPassword123"
}
```

### `POST /auth/forgot-password`

- Params: none
- Query: none
- Body:
```json
{
  "email": "jane@example.com"
}
```

### `POST /auth/reset-password/:token`

- Params:
  - `token`
- Query: none
- Body:
```json
{
  "newPassword": "NewPassword123"
}
```

### `GET /auth/verify-email/:token`

- Params:
  - `token`
- Query: none
- Body: none

### `POST /auth/resend-email`

- Params: none
- Query: none
- Body:
```json
{
  "email": "jane@example.com"
}
```

### `GET /auth/me`

- Auth required
- Params: none
- Query: none
- Body: none

### `POST /auth/refresh-token`

- Params: none
- Query: none
- Body:
```json
{
  "refreshToken": "optional-if-not-sent-in-cookie"
}
```

### `DELETE /auth/delete`

- Auth required
- Params: none
- Query: none
- Body: none

## Organizations

### `POST /organizations`

- Auth required
- Params: none
- Query: none
- Body:
```json
{
  "name": "Acme Pvt Ltd",
  "email": "billing@acme.com",
  "phone": "+91-9876543210",
  "website": "https://acme.com",
  "address": "Bangalore, India",
  "taxId": "GSTIN123456",
  "currency": "INR",
  "timezone": "Asia/Kolkata"
}
```
- Upload:
  - `logo` as `multipart/form-data`

### `GET /organizations/:organizationId`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body: none

### `PATCH /organizations/:organizationId`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body:
```json
{
  "name": "Acme Pvt Ltd",
  "email": "billing@acme.com",
  "phone": "+91-9876543210",
  "website": "https://acme.com",
  "address": "Bangalore, India",
  "taxId": "GSTIN123456",
  "currency": "INR",
  "timezone": "Asia/Kolkata"
}
```
- Upload:
  - `logo` as `multipart/form-data` is optional

### `DELETE /organizations/:organizationId`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body: none

### `GET /organizations/:organizationId/members`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body: none

### `PATCH /organizations/:organizationId/members/:userId`

- Auth required
- Params:
  - `organizationId`
  - `userId`
- Query: none
- Body:
```json
{
  "role": "admin"
}
```

### `DELETE /organizations/:organizationId/members/:userId`

- Auth required
- Params:
  - `organizationId`
  - `userId`
- Query: none
- Body: none

### `POST /organizations/:organizationId/invitations`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body:
```json
{
  "email": "member@example.com",
  "role": "member"
}
```

### `GET /organizations/:organizationId/invitations`

- Auth required
- Params:
  - `organizationId`
- Query:
  - `status` optional, defaults to `pending`
- Body: none

### `POST /organizations/:organizationId/clients`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body:
```json
{
  "organizationId": "orgId",
  "name": "Client Name",
  "email": "client@example.com",
  "phone": "+91-9000000000",
  "companyName": "Client Company",
  "address": "Client Address",
  "taxId": "CLIENT-TAX-ID"
}
```
- Note: `organizationId` is required in the body by current controller code, even though it is also present in the route path.

### `GET /organizations/:organizationId/clients`

- Auth required
- Params:
  - `organizationId`
- Query:
  - `page` optional
  - `limit` optional
  - `search` optional
- Body: none

### `GET /organizations/:organizationId/clients/:clientId`

- Auth required
- Params:
  - `organizationId`
  - `clientId`
- Query: none
- Body: none

### `PATCH /organizations/:organizationId/clients/:clientId`

- Auth required
- Params:
  - `organizationId`
  - `clientId`
- Query: none
- Body:
```json
{
  "name": "Updated Client Name",
  "email": "client@example.com",
  "phone": "+91-9000000000",
  "companyName": "Updated Company",
  "address": "Updated Address",
  "taxId": "UPDATED-TAX-ID"
}
```

### `DELETE /organizations/:organizationId/clients/:clientId`

- Auth required
- Params:
  - `organizationId`
  - `clientId`
- Query: none
- Body: none

### `DELETE /organizations/:organizationId/clients/:clientId/invoices`

- Auth required
- Params:
  - `organizationId`
  - `clientId`
- Query: none
- Body: none
- Note: current controller returns a placeholder response.

### `DELETE /organizations/:organizationId/clients/:clientId/stats`

- Auth required
- Params:
  - `organizationId`
  - `clientId`
- Query: none
- Body: none
- Note: current controller returns a placeholder response.

## Invoices

### `POST /organizations/:organizationId/invoices`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body:
```json
{
  "clientId": "clientId",
  "dueDate": "2026-07-31",
  "currency": "INR",
  "taxAmount": 0,
  "discountAmount": 0,
  "items": [
    {
      "description": "Design work",
      "quantity": 2,
      "unitPrice": 1500,
      "taxRate": 18,
      "discountAmount": 0
    }
  ]
}
```

### `GET /organizations/:organizationId/invoices`

- Auth required
- Params:
  - `organizationId`
- Query:
  - `page` optional
  - `limit` optional
  - `status` optional
  - `clientId` optional
  - `search` optional
- Body: none

### `GET /organizations/:organizationId/invoices/:invoiceId`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
- Query: none
- Body: none

### `PATCH /organizations/:organizationId/invoices/:invoiceId`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
- Query: none
- Body:
```json
{
  "clientId": "clientId",
  "dueDate": "2026-07-31",
  "currency": "INR",
  "taxAmount": 0,
  "discountAmount": 0,
  "items": [
    {
      "description": "Updated design work",
      "quantity": 2,
      "unitPrice": 1800,
      "taxRate": 18,
      "discountAmount": 0
    }
  ]
}
```

### `DELETE /organizations/:organizationId/invoices/:invoiceId`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
- Query: none
- Body: none

### `PATCH /organizations/:organizationId/invoices/:invoiceId/status`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
- Query: none
- Body:
```json
{
  "status": "paid"
}
```

Allowed status values:
- `draft`
- `sent`
- `viewed`
- `partially_paid`
- `paid`
- `overdue`
- `cancelled`

### `GET /organizations/:organizationId/invoices/:invoiceId/pdf`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
- Query: none
- Body: none

### `POST /organizations/:organizationId/invoices/:invoiceId/send`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
- Query: none
- Body: none
- Note: current controller is a placeholder.

## Payments

### `POST /organizations/:organizationId/invoices/:invoiceId/payments`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
- Query: none
- Body:
```json
{
  "amount": 5000,
  "paymentDate": "2026-06-23",
  "paymentMethod": "bank_transfer",
  "referenceNumber": "UTR123456789"
}
```

### `GET /organizations/:organizationId/invoices/:invoiceId/payments`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
- Query: none
- Body: none

### `GET /organizations/:organizationId/invoices/:invoiceId/payments/:paymentId`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
  - `paymentId`
- Query: none
- Body: none

### `DELETE /organizations/:organizationId/invoices/:invoiceId/payments/:paymentId`

- Auth required
- Params:
  - `organizationId`
  - `invoiceId`
  - `paymentId`
- Query: none
- Body: none

## Services

### `POST /organizations/:organizationId/services`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body:
```json
{
  "name": "Website Design",
  "description": "Landing page and UI design",
  "unitPrice": 2500,
  "taxRate": 18,
  "unit": "project"
}
```

### `GET /organizations/:organizationId/services`

- Auth required
- Params:
  - `organizationId`
- Query:
  - `page` optional
  - `limit` optional
  - `search` optional
  - `active` optional, `"true"` or `"false"`
- Body: none

### `GET /organizations/:organizationId/services/:serviceId`

- Auth required
- Params:
  - `organizationId`
  - `serviceId`
- Query: none
- Body: none

### `PATCH /organizations/:organizationId/services/:serviceId`

- Auth required
- Params:
  - `organizationId`
  - `serviceId`
- Query: none
- Body:
```json
{
  "name": "Updated Service Name",
  "description": "Updated description",
  "unitPrice": 3000,
  "taxRate": 18,
  "unit": "hour",
  "isActive": true
}
```

### `DELETE /organizations/:organizationId/services/:serviceId`

- Auth required
- Params:
  - `organizationId`
  - `serviceId`
- Query: none
- Body: none

## Invitations

### `POST /invitations/:token/accept`

- Auth required
- Params:
  - `token`
- Query: none
- Body: none

### `POST /invitations/:token/reject`

- Auth required
- Params:
  - `token`
- Query: none
- Body: none

## Dashboard

### `GET /dashboard/:organizationId/overview`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body: none

### `GET /dashboard/:organizationId/monthly-revenue`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body: none

### `GET /dashboard/:organizationId/recent-invoices`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body: none

### `GET /dashboard/:organizationId/top-clients`

- Auth required
- Params:
  - `organizationId`
- Query: none
- Body: none

## Notes

- All protected routes rely on JWT authentication.
- Several routes also enforce role checks in middleware.
- Some controller methods currently return placeholder responses, especially:
  - `DELETE /organizations/:organizationId/clients/:clientId/invoices`
  - `DELETE /organizations/:organizationId/clients/:clientId/stats`
  - `POST /organizations/:organizationId/invoices/:invoiceId/send`
- Request/response field names come from the current controller code, so if the backend changes, this file should be updated too.
