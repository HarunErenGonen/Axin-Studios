import { Link, useLocation } from 'react-router-dom';

export default function PageNav() {
  const location = useLocation();
  const pages = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/companies', label: 'Companies' },
  ];

  return (
    <div className="w-full bg-transparent border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-6 text-sm py-3 overflow-x-auto">
          {pages.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className={`flex-shrink-0 px-2 py-1 rounded-md ${
                location.pathname === p.path
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {p.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
