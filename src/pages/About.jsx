import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <main className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">About Axin Studios</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pioneering data intelligence solutions since 2020, we've helped hundreds of organizations unlock the power of their data.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Democratizing Data Intelligence</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                We believe that powerful data analytics shouldn't be limited to tech giants. Our mission is to make enterprise-grade intelligence accessible to organizations of all sizes.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Through innovation and customer-centric design, we're transforming how businesses understand and leverage their data to drive growth and innovation.
              </p>
            </div>
            <div>
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-sm font-semibold">Our Vision</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Shaping The Future</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                We envision a world where data-driven decisions are the norm, not the exception. Every organization, from startups to enterprises, should have access to the tools to compete intelligently.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Our vision guides every product decision, partnership, and innovation we pursue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Excellence',
                description: 'We pursue perfection in every detail, from code quality to customer support.'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Great solutions come from diverse perspectives and open communication.'
              },
              {
                icon: Award,
                title: 'Innovation',
                description: 'We constantly push boundaries and challenge the status quo in data analytics.'
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                  <Icon className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Enterprise Clients' },
              { number: '2.5B+', label: 'Data Points Daily' },
              { number: '99.99%', label: 'Uptime SLA' },
              { number: '24/7', label: 'Global Support' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Led by industry veterans passionate about data intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Johnson', role: 'CEO & Co-founder', bio: '15+ years in enterprise analytics' },
              { name: 'Sarah Chen', role: 'CTO & Co-founder', bio: 'Former lead engineer at major tech company' },
              { name: 'Michael Torres', role: 'VP of Product', bio: 'Specialized in enterprise solutions' }
            ].map((member, idx) => (
              <div key={idx} className="p-8 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 hover:shadow-blue-500/10 transition-all duration-300 text-center hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
