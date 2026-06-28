# InClient Backend

## Missing Backend Pieces

These areas are still incomplete, placeholder-based, or need follow-up implementation:

- Invoice advanced actions
    - `generateInvoicePdf` currently returns a placeholder response
    - `sendInvoice` currently returns a placeholder response
    - `duplicateInvoice` currently returns a placeholder response
    - `downloadInvoice` currently returns a placeholder response
- Payment advanced actions
    - `updatePayment` is still a placeholder and does not update a payment record
- Invitation cleanup and lifecycle
    - Invitation cancellation and resend endpoints are not exposed yet
    - The backend supports invitation acceptance/rejection by token, but there is no explicit token preview endpoint for frontend onboarding flows
- Dashboard analytics depth
    - Dashboard widgets are powered by invoices/clients/services data, but there is no dedicated activity feed model or service-usage analytics endpoint
- Client/service detail workflows
    - The API has list/detail CRUD, but there are no richer summary endpoints for client/service drilldowns
- Search and filter helpers
    - Cross-module search endpoints are not centralized; every module handles search locally
- Cleanup flows
    - Some delete operations are soft-delete/inactivate only, while related cleanup and cascading behavior is still limited

## Notes

- The core CRUD APIs for organizations, clients, services, invoices, payments, and dashboard analytics are in place.
- The remaining work is mostly around finishing placeholder controller methods, exposing a few missing endpoints, and improving analytics-specific responses.
