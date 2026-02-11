import { Building2, Users, TrendingUp, Globe } from 'lucide-react';

export default function Companies() {
  const companies = [
    {
      name: 'TechCorp',
      logo: '🚀',
      description: 'Leading cloud infrastructure provider',
      stats: { employees: '5,000+', founded: '2015', countries: '25' }
    },
    {
      name: 'DataFlow',
      logo: '📊',
      description: 'Enterprise analytics and intelligence',
      stats: { employees: '2,500+', founded: '2018', countries: '15' }
    },
    {
      name: 'CloudSync',
      logo: '☁️',
      description: 'Global cloud solutions and services',
      stats: { employees: '3,200+', founded: '2016', countries: '30' }
    },
    {
      name: 'SecureNet',
      logo: '🔐',
      description: 'Cybersecurity and data protection',
      stats: { employees: '1,800+', founded: '2017', countries: '20' }
    },
    {
      name: 'AIVision',
      logo: '🤖',
      description: 'Artificial intelligence and machine learning',
      stats: { employees: '4,000+', founded: '2019', countries: '28' }
    },
    {
      name: 'BlockChain+',
      logo: '⛓️',
      description: 'Blockchain and distributed ledger',
      stats: { employees: '1,500+', founded: '2020', countries: '18' }
    },
  ];

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Enterprise Partners
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver cutting-edge solutions and drive innovation across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Partner Companies' },
              { value: '500K+', label: 'Employees Worldwide' },
              { value: '85', label: 'Countries' },
              { value: '98%', label: 'Satisfaction Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{company.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {company.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  {company.description}
                </p>
                
                <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-slate-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Employees</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{company.stats.employees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Founded</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{company.stats.founded}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Countries</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{company.stats.countries}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Partnership Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Building2,
                title: 'Enterprise Scale',
                description: 'Access to enterprise-grade infrastructure and resources'
              },
              {
                icon: Users,
                title: 'Global Network',
                description: 'Connect with leading organizations worldwide'
              },
              {
                icon: TrendingUp,
                title: 'Growth Opportunities',
                description: 'Expand your market reach and revenue streams'
              },
              {
                icon: Globe,
                title: 'International Support',
                description: '24/7 support across all time zones'
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700">
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Become Our Partner
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join hundreds of companies transforming their business with Axin Studios.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
