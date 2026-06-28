# InClient Frontend

## Pending Frontend Features

The following frontend features are still incomplete or only partially wired:

- Quick Actions shortcuts
    - New Invoice
    - Add Client
    - New Service
    - Send Reminder
- Client and service detail pages
    - No dedicated detail view routes are exposed yet
- Dashboard micro-actions
    - Recent activity items are derived from invoice data only
    - Top Services is still based on service catalog data rather than true service usage analytics

## Notes

- The app is already wired to the existing backend for organization, client, invoice, payment, and dashboard data.
- Remaining frontend work is mostly interaction polish, action handlers, and detail views rather than core CRUD plumbing.
