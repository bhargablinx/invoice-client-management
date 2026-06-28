# InClient Frontend

## Pending Frontend Features

The following frontend features are still incomplete or only partially wired:

- Invoice row actions in Manage Invoices
    - View invoice details
    - Edit invoice
    - Duplicate invoice
    - Download PDF
    - Send invoice
    - Mark as paid
    - Delete invoice
- Payment row actions in Payments
    - View payment details
    - Download receipt
    - Delete payment
- Quick Actions shortcuts
    - New Invoice
    - Add Client
    - New Service
    - Send Reminder
- Client and service detail pages
    - No dedicated detail view routes are exposed yet
- Invitation management polish
    - No explicit resend/cancel invitation actions are wired to backend endpoints yet
- Dashboard micro-actions
    - Recent activity items are derived from invoice data only
    - Top Services is still based on service catalog data rather than true service usage analytics

## Notes

- The app is already wired to the existing backend for organization, client, invoice, payment, and dashboard data.
- Remaining frontend work is mostly interaction polish, action handlers, and detail views rather than core CRUD plumbing.
