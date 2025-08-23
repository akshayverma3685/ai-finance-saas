import Billing from "../models/Billing.js";
import Payment from "../models/Payment.js";
import Subscription from "../models/Subscription.js";

export const createBillingRecord = async (req, res) => {
  try {
    const { userId, subscriptionId, paymentIds, notes } = req.body;

    const invoiceNumber = `INV-${Date.now()}`;

    const billing = await Billing.create({
      user: userId,
      subscription: subscriptionId,
      payments: paymentIds,
      invoiceNumber,
      notes
    });

    res.status(201).json(billing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserBillingHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const billing = await Billing.find({ user: userId })
      .populate("subscription")
      .populate("payments");
    res.json(billing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBillingByInvoice = async (req, res) => {
  try {
    const { invoiceNumber } = req.params;
    const billing = await Billing.findOne({ invoiceNumber })
      .populate("subscription")
      .populate("payments");
    if (!billing) return res.status(404).json({ error: "Invoice not found" });
    res.json(billing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
