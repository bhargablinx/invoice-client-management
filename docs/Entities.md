# Entities Info

Entities list

- User
- Organization
- Membership
- Invitation
- Client
- ServiceCatalog
- Invoice
- InvoiceItem
- Payment

## The Flow

## User signs up

A user account is created.

Then the user can either:

### Option 1: Create an organization

- Add clients
- Create invoices
- Track payments
- Invite team members (with different roles)

The creator automatically becomes Owner.

### Option 2: Joining an organization

A user cannot directly join.

**The typical flow is:** Owner/Admin -> `sends invitation` -> User -> `if user accepts` -> Member (of that organization)

After joining, they can perform actions according to their role.

- Add clients
- Create invoices
- Track payments
- And other action as per role

## Roles

### Owner

> The user who created the organization.

- Invite users
- Remove users
- Promote/Demote users
- Add clients
- Create invoices
- Track payments
- Manage organization settings

### Admin

> Appointed by the Owner.

- Invite users
- Add clients
- Create invoices
- Track payments
- Manage clients

### Member

> Default role assigned when a user joins an organization.

- View clients
- Create invoices
- Record payments
- Add clients

| Action              | Owner | Admin | Member |
| ------------------- | ----- | ----- | ------ |
| Invite users        | ✓     | ✓     | ✗      |
| Remove users        | ✓     | ✗     | ✗      |
| Add clients         | ✓     | ✓     | ✓      |
| Edit clients        | ✓     | ✓     | -      |
| Create invoices     | ✓     | ✓     | ✓      |
| Track payments      | ✓     | ✓     | ✓      |
| Delete organization | ✓     | ✗     | ✗      |

## Note to myself

- Everything belongs to the Organization. (Not User)
- A user is not directly attached to an organization.

    ```
    User: Bhargab

    Membership:
    - organizationId: BB
    - role: Admin
    ```

- A user can join one or more organization
