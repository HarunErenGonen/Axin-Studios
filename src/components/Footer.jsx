export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Axin Studios</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Building tomorrow's solutions today with cutting-edge technology.</p>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-slate-800 pt-8">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">© 2025 Axin Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
