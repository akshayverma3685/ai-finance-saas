export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-white">AI Finance SaaS</h2>
          <p className="mt-3 text-sm text-gray-400">
            Smarter tools for managing your finance, analytics, and growth — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
            </li>
            <li>
              <a href="/reports" className="hover:text-white transition-colors">Reports</a>
            </li>
            <li>
              <a href="/billing" className="hover:text-white transition-colors">Billing</a>
            </li>
            <li>
              <a href="/analytics" className="hover:text-white transition-colors">Analytics</a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-400">support@aifinancesaas.com</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AI Finance SaaS. All rights reserved.
      </div>
    </footer>
  );
}
