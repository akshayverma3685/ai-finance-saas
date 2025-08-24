import { useState } from "react";
import { uploadReceipt } from "@/utils/api";

export default function OCRPage() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    try {
      const result = await uploadReceipt(file);
      alert("Receipt uploaded: " + JSON.stringify(result));
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">OCR Upload</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-3"
      />
      <button
        onClick={handleUpload}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}
