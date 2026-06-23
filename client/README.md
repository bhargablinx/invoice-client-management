# Invoice & Client Management (frontend)

## Project Structure (ideal)

```
src/
│
├── app/
│   └── store.js
│
├── pages/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   │
│   ├── dashboard/
│   │   └── Dashboard.jsx
│   │
│   ├── clients/
│   │   ├── Clients.jsx
│   │   ├── ClientDetails.jsx
│   │   └── CreateClient.jsx
│   │
│   ├── services/
│   │   ├── Services.jsx
│   │   ├── ServiceDetails.jsx
│   │   └── CreateService.jsx
│   │
│   ├── invoices/
│   │   ├── Invoices.jsx
│   │   ├── InvoiceDetails.jsx
│   │   └── CreateInvoice.jsx
│   │
│   └── settings/
│       └── Settings.jsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── ProtectedLayout.jsx
│   │
│   ├── clients/
│   ├── services/
│   ├── invoices/
│   └── ui/
│
├── features/
│   ├── auth/
│   │   ├── authSlice.js
│   │   └── authApi.js
│   │
│   ├── clients/
│   ├── services/
│   └── invoices/
│
├── hooks/
│
├── lib/
│   ├── axios.js
│   └── utils.js
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx

```
