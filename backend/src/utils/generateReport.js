// backend/src/utils/generateReport.js
import PDFDocument from "pdfkit";
import ExcelJS from "exceljs";
import fs from "fs";

export const generatePDFReport = async (expenses, filePath) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(18).text("Expense Report", { align: "center" });
  doc.moveDown();

  expenses.forEach((exp) => {
    doc.fontSize(12).text(`${exp.date} - ${exp.category}: $${exp.amount}`);
  });

  doc.end();
  return filePath;
};

export const generateExcelReport = async (expenses, filePath) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Expenses");

  sheet.columns = [
    { header: "Date", key: "date" },
    { header: "Category", key: "category" },
    { header: "Amount", key: "amount" }
  ];

  expenses.forEach((exp) => {
    sheet.addRow({ date: exp.date, category: exp.category, amount: exp.amount });
  });

  await workbook.xlsx.writeFile(filePath);
  return filePath;
};
