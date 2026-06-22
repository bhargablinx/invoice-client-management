For the v1 of your Invoice & Client Management Platform, I would separate controllers into **Organization Management** and **Organization Membership Management**.

### Organization Controllers

#### 1. Create Organization

```js
POST / organizations;
```

Creates a new organization and automatically makes the creator the owner.

---

#### 2. Get Organization Details

```js
GET /organizations/:organizationId
```

Returns organization info such as:

- Name
- Logo
- Description
- Created date
- Owner
- Member count

---

#### 3. Update Organization

```js
PATCH /organizations/:organizationId
```

Allows owner/admin to update:

- Name
- Logo
- Address
- Tax information
- Business details

---

#### 4. Delete Organization (Soft Delete)

```js
DELETE /organizations/:organizationId
```

Instead of deleting:

```js
isDeleted: true,
deletedAt: Date
```

This prevents accidental data loss because invoices, payments, and clients belong to the organization.

---

### Membership Controllers

Since users can collaborate inside an organization:

#### 5. Get Organization Members

```js
GET /organizations/:organizationId/members
```

Returns all members and their roles.

---

#### 6. Change Member Role

```js
PATCH /organizations/:organizationId/members/:userId
```

Example:

- Owner → Admin
- Admin → Staff

---

#### 7. Remove Member

```js
DELETE /organizations/:organizationId/members/:userId
```

Removes a member from the organization.

---

### Invitation Controllers

#### 8. Invite User

```js
POST /organizations/:organizationId/invitations
```

Sends invitation email.

---

#### 9. Accept Invitation

```js
POST /invitations/:token/accept
```

Creates Membership document.

---

#### 10. Reject Invitation

```js
POST /invitations/:token/reject
```

---

#### 11. List Pending Invitations

```js
GET /organizations/:organizationId/invitations
```

Useful for admins.

---

### Suggested v1 Minimum

If you're building incrementally, start with only:

```txt
Organization
├── createOrganization
├── getOrganization
├── updateOrganization
└── deleteOrganization (soft delete)

Membership
├── getMembers
└── removeMember

Invitation
├── inviteUser
└── acceptInvitation
```

These are enough to support:

- Creating a company/workspace
- Inviting team members
- Managing roles
- Collaborating on clients and invoices

After this, move to **Client controllers**, then **Invoice controllers**, because those are the core business features of the SaaS.

## INVOICE

## Create Invoice

Expected request structure:

```json
{
    "clientId": "...",
    "dueDate": "2026-07-15",
    "currency": "INR",
    "taxAmount": 100,
    "discountAmount": 50,
    "items": [
        {
            "description": "Website Development",
            "quantity": 10,
            "unitPrice": 500,
            "taxRate": 18
        }
    ]
}
```

## Getting all invoices

```
GET /:organizationId/invoices

?page=1
&limit=10
&status=paid
&clientId=...
&search=INV-0001
```

## PAYMENT

- Payments are usually a child resource of invoices, so I'd nest the routes under invoices.

```
POST   /organizations/:organizationId/invoices/:invoiceId/payments
GET    /organizations/:organizationId/invoices/:invoiceId/payments

GET    /organizations/:organizationId/invoices/:invoiceId/payments/:paymentId
PATCH  /organizations/:organizationId/invoices/:invoiceId/payments/:paymentId
DELETE /organizations/:organizationId/invoices/:invoiceId/payments/:paymentId
```

## Service Catalog

## Getting service:

```
?page=1
&limit=10
&search=website
&active=true
```
