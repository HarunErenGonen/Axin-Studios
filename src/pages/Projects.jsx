export default function Projects() {
  const projects = [
    { title: 'Intelligent Insights', desc: 'Real-time analytics platform', tag: 'AI' },
    { title: 'CloudScale', desc: 'Scalable cloud infrastructure', tag: 'Cloud' },
    { title: 'SecureLayer', desc: 'Enterprise security suite', tag: 'Security' },
  ];

  return (
    <main className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Selected projects that showcase our capabilities.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">{p.tag}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
