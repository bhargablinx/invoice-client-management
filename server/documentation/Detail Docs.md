# Invoice & Client Management Platform

## Overview

A multi-tenant SaaS-style invoice and client management system where organizations can manage clients, services, invoices, memberships, and team collaboration.

The platform supports:

- User Authentication
- Organization Management
- Team Management
- Client Management
- Service Catalog
- Invoice Management (planned)
- Role-Based Access Control (RBAC)
- Invitation System

---

# Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication

- JWT Access Token
- JWT Refresh Token
- HTTP Only Cookies

## File Storage

- Cloudinary (Organization Logo Uploads)

---

# Authentication Module

## Features Implemented

### User Registration

```http
POST /api/v1/auth/signup
```

Features:

- Create new account
- Password hashing
- Email verification token generation
- Send verification email

---

### User Login

```http
POST /api/v1/auth/login
```

Features:

- Email/password authentication
- Access token generation
- Refresh token generation
- Store refresh token
- Set secure cookies

---

### Logout

```http
POST /api/v1/auth/logout
```

Features:

- Clear refresh token
- Clear cookies

---

### Delete Account

```http
DELETE /api/v1/auth/delete
```

Features:

- Soft delete account
- Set:

```js
isDeleted: true;
deletedAt: Date;
```

- Remove active session

---

### Email Verification

```http
GET /api/v1/auth/verify-email/:token
```

Features:

- Verify user email
- Activate account

---

### Resend Verification Email

```http
POST /api/v1/auth/resend-email
```

Features:

- Generate new token
- Send verification email

---

### Change Password

```http
POST /api/v1/auth/change-password
```

Features:

- Validate current password
- Update password securely

---

### Forgot Password

```http
POST /api/v1/auth/forgot-password
```

Features:

- Generate reset token
- Send reset email

---

### Reset Password

```http
POST /api/v1/auth/reset-password/:token
```

Features:

- Verify reset token
- Update password

---

# Authorization System

## Roles

```js
owner;
admin;
member;
```

Implemented through Membership model.

---

## Role Permissions

### Owner

Can:

- Manage organization
- Manage members
- Send invitations
- Promote/Demote users
- Delete organization
- Manage services
- Manage clients
- Manage invoices

---

### Admin

Can:

- Manage clients
- Manage services
- Manage invoices
- View organization members

Cannot:

- Delete organization
- Change ownership

---

### Member

Can:

- View organization data
- Create invoices (if permitted later)

Cannot:

- Manage members
- Modify organization settings

---

# Organization Module

Represents a company/business.

---

## Create Organization

```http
POST /api/v1/organizations
```

Features:

- Create organization
- Upload logo
- Automatically create owner membership

---

## Get Organization

```http
GET /api/v1/organizations/:organizationId
```

Features:

- Fetch organization details

---

## Update Organization

```http
PATCH /api/v1/organizations/:organizationId
```

Features:

Update:

- Name
- Email
- Phone
- Website
- Address
- Tax ID
- Currency
- Timezone
- Logo

---

## Delete Organization

```http
DELETE /api/v1/organizations/:organizationId
```

Features:

- Remove organization
- Cleanup related data (planned)

---

## Organization Fields

```js
{
    (name, email, phone, website, logo, address, taxId, currency, timezone);
}
```

---

# Membership Module

Connects users with organizations.

---

## Membership Schema

```js
{
    (user, organization, role);
}
```

Role:

```js
owner;
admin;
member;
```

---

## Features

### Get Members

```http
GET /api/v1/memberships
```

Returns:

- Member details
- Role
- Join information

---

### Update Member Role

```http
PATCH /api/v1/memberships/:membershipId
```

Features:

- Promote member
- Demote member

---

### Remove Member

```http
DELETE /api/v1/memberships/:membershipId
```

Features:

- Remove user from organization

Restrictions:

- Cannot remove organization owner

---

# Invitation Module

Used to onboard organization members.

---

## Send Invitation

```http
POST /api/v1/invitations
```

Features:

- Invite via email
- Select role
- Generate invitation token

---

## Accept Invitation

```http
POST /api/v1/invitation/:token/accept
```

Features:

- Create membership
- Join organization

---

## Reject Invitation

```http
POST /api/v1/invitation/:token/reject
```

Features:

- Mark invitation as rejected

---

## Get Invitations

```http
GET /api/v1/invitations
```

Features:

- List pending invitations

---

## Cancel Invitation

```http
DELETE /api/v1/invitations/:invitationId
```

Features:

- Revoke invitation

---

# Client Module

Stores customer information.

---

## Client Fields

```js
{
    (organization, name, email, phone, company, address, notes);
}
```

---

## Features

### Create Client

```http
POST /api/v1/clients
```

---

### Get Clients

```http
GET /api/v1/clients
```

Features:

- Pagination
- Search
- Filtering

---

### Get Client

```http
GET /api/v1/clients/:clientId
```

---

### Update Client

```http
PATCH /api/v1/clients/:clientId
```

---

### Delete Client

```http
DELETE /api/v1/clients/:clientId
```

---

# Service Catalog Module

Stores reusable services offered by an organization.

---

## Service Fields

```js
{
    (organization, name, description, unit, unitPrice, taxRate, isActive);
}
```

---

## Features

### Create Service

```http
POST /api/v1/services
```

Create reusable service.

Examples:

- Website Development
- SEO Audit
- UI Design
- Maintenance

---

### Get Services

```http
GET /api/v1/services
```

Features:

- Pagination
- Search
- Filtering

---

### Get Service

```http
GET /api/v1/services/:serviceId
```

---

### Update Service

```http
PATCH /api/v1/services/:serviceId
```

---

### Delete Service

```http
DELETE /api/v1/services/:serviceId
```

---

# Middleware Implemented

## verifyJWT

Responsibilities:

- Read access token
- Verify JWT
- Load authenticated user
- Attach:

```js
req.user;
```

---

## authorizeRoles

Responsibilities:

```js
authorizeRoles("owner");
authorizeRoles("owner", "admin");
```

Checks:

- Membership role
- Organization access

---

## upload

Multer middleware.

Used for:

- Organization logo upload

---

## asyncHandler

Responsibilities:

- Catch async errors
- Forward to error handler

---

# Utility Classes

## ApiResponse

Standardized success response.

Example:

```json
{
    "statusCode": 200,
    "data": {},
    "message": "Success"
}
```

---

## ApiError

Standardized error handling.

Example:

```json
{
    "statusCode": 400,
    "message": "Invalid request"
}
```

---

# Current Database Models

Implemented:

```txt
User
Organization
Membership
Invitation
Client
ServiceCatalog
```

---

# Planned Modules (Not Yet Implemented)

## Invoice Module

Core billing system.

Planned Features:

- Create invoice
- Draft invoices
- Send invoice
- Invoice status tracking
- Tax calculation
- Discounts
- Due dates

Status:

🚧 Not Implemented

---

## Invoice Items

Planned Features:

- Multiple line items
- Service references
- Quantity
- Unit price
- Tax

Status:

🚧 Not Implemented

---

## Payments

Planned Features:

- Record payments
- Partial payments
- Outstanding balance tracking

Status:

🚧 Not Implemented

---

## Dashboard Analytics

Planned Features:

- Revenue overview
- Invoice statistics
- Client statistics

Status:

🚧 Not Implemented

---

# Current Development Progress

| Module                  | Status      |
| ----------------------- | ----------- |
| Authentication          | ✅ Complete |
| Email Verification      | ✅ Complete |
| Password Reset          | ✅ Complete |
| Organization Management | ✅ Complete |
| Membership Management   | ✅ Complete |
| Invitation System       | ✅ Complete |
| Client Management       | ✅ Complete |
| Service Catalog         | ✅ Complete |
| RBAC                    | ✅ Complete |
| Invoice Management      | 🚧 Pending  |
| Payments                | 🚧 Pending  |
| Dashboard Analytics     | 🚧 Pending  |
