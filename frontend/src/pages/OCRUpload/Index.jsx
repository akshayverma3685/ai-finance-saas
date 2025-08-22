import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { uploadReceipt } from "../../utils/api";

export default function OCRUpload() {
  const [file, setFile] = useState(null);
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true); setResp(null);
    try {
      const r = await uploadReceipt(file);
      setResp(r); // expect parsed items / extracted fields
    } catch (e) {
      alert(e?.response?.data?.message || "Upload failed");
    } finally { setLoading(false); }
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-2xl p-6 shadow-sm border max-w-xl">
        <h1 className="text-xl font-semibold mb-3">Upload Receipt (OCR)</h1>
        <form onSubmit={submit} className="space-y-3">
          <input type="file" accept="image/*,application/pdf" onChange={e=>setFile(e.target.files?.[0])}/>
          <button className="px-4 py-2 bg-black text-white rounded-lg">{loading ? "Processing..." : "Upload & Parse"}</button>
        </form>
        {resp && (
          <div className="mt-4">
            <div className="text-sm text-gray-500 mb-1">Extracted</div>
            <pre className="text-xs bg-gray-50 p-2 rounded border overflow-auto whitespace-pre-wrap">{JSON.stringify(resp, null, 2)}</pre>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
