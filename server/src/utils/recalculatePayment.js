import Invoice from "../models/invoice.model.js";
import Payment from "../models/payment.model.js";

const recalculateInvoicePaymentStatus = async (invoiceId, session = null) => {
    const payments = await Payment.find({
        invoice: invoiceId,
    }).session(session);

    const amountPaid = payments.reduce(
        (sum, payment) => sum + payment.amount,
        0
    );

    const invoice = await Invoice.findById(invoiceId).session(session);

    if (!invoice) {
        throw new Error("Invoice not found");
    }

    invoice.amountPaid = amountPaid;
    invoice.balanceDue = Math.max(0, invoice.totalAmount - amountPaid);

    if (invoice.balanceDue <= 0) {
        invoice.status = "paid";
    } else if (invoice.amountPaid > 0) {
        invoice.status = "partially_paid";
    } else {
        invoice.status = "sent";
    }

    await invoice.save({ session });

    return invoice;
};

export default recalculateInvoicePaymentStatus;
