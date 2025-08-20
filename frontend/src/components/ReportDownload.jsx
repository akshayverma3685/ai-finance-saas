// frontend/src/components/ReportDownload.jsx
export default function ReportDownload({ reports }) {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="font-bold text-lg mb-2">Download Reports</h2>
      {reports.length === 0 ? (
        <p className="text-gray-500">No reports available</p>
      ) : (
        reports.map((r) => (
          <a
            key={r._id}
            href={r.fileUrl}
            target="_blank"
            rel="noreferrer"
            className="block text-blue-600 hover:underline"
          >
            {r.type.toUpperCase()} Report - {new Date(r.generatedAt).toLocaleString()}
          </a>
        ))
      )}
    </div>
  );
}
