// frontend/src/components/OcrUploader.jsx
import { useState } from "react";

export default function OcrUploader({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file && onUpload) {
      onUpload(file);
      setFile(null);
    }
  };

  return (
    <div className="p-4 border rounded bg-gray-50">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="ml-2 bg-blue-600 text-white px-3 py-1 rounded">
        Upload
      </button>
    </div>
  );
}
