const nodemailer = require("nodemailer");
const Expense = require("../models/Expense");

async function checkOverspending(user) {
  const expenses = await Expense.find({ user: user._id });
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  if (total > user.monthlyBudget) {
    await sendEmail(
      user.email,
      "⚠️ Budget Alert",
      `You have overspent your monthly budget of $${user.monthlyBudget}.`
    );
    return true;
  }
  return false;
}

async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"AI Finance SaaS" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
}

module.exports = { checkOverspending, sendEmail };
