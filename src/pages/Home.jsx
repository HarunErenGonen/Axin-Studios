import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Infinity } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Data Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Intelligent Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Axin Studios delivers enterprise-grade analytics and intelligence solutions that empower organizations to make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/companies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Explore Partners <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">Why Choose Axin Studios</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Comprehensive solutions designed for enterprise success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Process millions of data points in seconds with our optimized infrastructure.'
              },
              {
                icon: Shield,
                title: 'Enterprise Secure',
                description: 'Military-grade encryption and compliance with all major regulatory standards.'
              },
              {
                icon: Infinity,
                title: 'Infinite Scale',
                description: 'Grow without limits. Our systems scale seamlessly with your organization.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 hover:shadow-blue-500/10 transition-all duration-300 border border-gray-200 dark:border-slate-700 group hover:-translate-y-1">
                  <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-lg w-fit mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join leading organizations using Axin Studios to power their decision-making.
          </p>
          <Link
            to="/companies"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            Explore Our Partners <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
