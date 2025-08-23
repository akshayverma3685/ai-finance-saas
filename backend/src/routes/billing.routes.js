import express from "express";
import { createBillingRecord, getUserBillingHistory, getBillingByInvoice } from "../controllers/billing.controller.js";

const router = express.Router();

router.post("/", createBillingRecord);              // नया billing record बनाना
router.get("/user/:userId", getUserBillingHistory); // user का पूरा billing history
router.get("/invoice/:invoiceNumber", getBillingByInvoice); // invoice से fetch करना

export default router;
