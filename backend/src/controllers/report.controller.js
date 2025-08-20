import PDFDocument from "pdfkit";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import Expense from "../models/Expense.js";

function ensureDir(d){ if(!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

export async function monthlySummary(userId, monthISO){
  const start = dayjs(`${monthISO}-01`).startOf("month").toDate();
  const end = dayjs(start).endOf("month").toDate();
  const expenses = await Expense.find({ userId, date: { $gte:start, $lte:end } }).sort({ date:1 }).lean();
  const totalsByCat = expenses.reduce((acc,e)=>{ acc[e.category||"Other"]=(acc[e.category||"Other"]||0)+(e.amount||0); return acc; },{});
  const total = expenses.reduce((a,e)=> a+(e.amount||0), 0);
  return { expenses, totalsByCat, total, label: dayjs(start).format("MMM YYYY") };
}

export async function downloadPdf(req,res){
  const month = req.query.month || dayjs().format("YYYY-MM");
  const outDir = "backend/storage/reports";
  ensureDir(outDir);
  const { expenses, totalsByCat, total, label } = await monthlySummary(req.user._id, month);
  const file = path.join(outDir, `report-${req.user._id}-${month}.pdf`);

  const doc = new PDFDocument({ margin: 36 });
  doc.pipe(fs.createWriteStream(file));
  doc.fontSize(20).text(`${process.env.APP_NAME || "AI Finance"} — ${label} Report`, { align:"center" });
  doc.moveDown().fontSize(12).text(`Total Spent: ${total.toFixed(2)}`);
  doc.moveDown().text("By Category:");
  Object.entries(totalsByCat).forEach(([k,v])=> doc.text(`• ${k}: ${v.toFixed(2)}`));
  doc.moveDown().text("Items:");
  expenses.forEach(e=> doc.text(`${dayjs(e.date).format("YYYY-MM-DD")} | ${e.title} | ${e.category} | ${Number(e.amount).toFixed(2)}`));
  doc.end();
  await new Promise(r=>doc.on("end", r));

  res.setHeader("Content-Type","application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename="report-${month}.pdf"`);
  fs.createReadStream(file).pipe(res);
}

export async function downloadExcel(req,res){
  const month = req.query.month || dayjs().format("YYYY-MM");
  const outDir = "backend/storage/reports";
  ensureDir(outDir);
  const { expenses, totalsByCat, total, label } = await monthlySummary(req.user._id, month);
  const file = path.join(outDir, `report-${req.user._id}-${month}.xlsx`);

  const wb = new ExcelJS.Workbook();
  const ws1 = wb.addWorksheet("Summary");
  ws1.addRow([`${process.env.APP_NAME || "AI Finance"} — ${label} Report`]);
  ws1.addRow(["Total", total]);
  ws1.addRow([]);
  ws1.addRow(["Category","Amount"]);
  Object.entries(totalsByCat).forEach(([k,v]) => ws1.addRow([k,v]));

  const ws2 = wb.addWorksheet("Items");
  ws2.addRow(["Date","Title","Category","Amount","Notes"]);
  expenses.forEach(e=> ws2.addRow([dayjs(e.date).format("YYYY-MM-DD"), e.title, e.category, e.amount, e.notes||""]));

  await wb.xlsx.writeFile(file);
  res.download(file);
                                      }
