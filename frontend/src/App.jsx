import { Routes, Route } from "react-router-dom";

// ✅ Pages import
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Upgrade from "./pages/Upgrade";

// ✅ Pro features (agar tumne banaye hai to)
import OCRUpload from "./features/ocr/OCRUpload";
import Notifications from "./features/notifications/Notifications";
import Reports from "./features/reports/Reports";

function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* User dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Pro Upgrade */}
      <Route path="/upgrade" element={<Upgrade />} />

      {/* Pro Features */}
      <Route path="/ocr" element={<OCRUpload />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;
