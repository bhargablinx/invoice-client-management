const recalculateInvoicePaymentStatus = async (invoiceId) => {
    const payments = await Payment.find({ invoice: invoiceId });

    const amountPaid = payments.reduce(
        (sum, payment) => sum + payment.amount,
        0
    );

    const invoice = await Invoice.findById(invoiceId);

    invoice.amountPaid = amountPaid;
    invoice.balanceDue = invoice.totalAmount - amountPaid;

    if (invoice.balanceDue <= 0) {
        invoice.status = "paid";
    } else if (amountPaid > 0) {
        invoice.status = "partially_paid";
    } else {
        invoice.status = "sent";
    }

    await invoice.save();
};

export { recalculateInvoicePaymentStatus };
