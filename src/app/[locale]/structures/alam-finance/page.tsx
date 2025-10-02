import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { DollarSign, TrendingUp, Shield, PieChart, CreditCard, Building } from 'lucide-react';

export default function AlamFinancePage() {
  const t = useTranslations('structures');

  const services = [
    {
      icon: DollarSign,
      title: 'Gestion Financière',
      description: 'Optimisation et gestion des ressources financières.',
    },
    {
      icon: TrendingUp,
      title: 'Investissements',
      description: 'Conseils et gestion des investissements stratégiques.',
    },
    {
      icon: Shield,
      title: 'Sécurité Financière',
      description: 'Protection et sécurisation des actifs.',
    },
    {
      icon: PieChart,
      title: 'Analyse Financière',
      description: 'Études et analyses des performances financières.',
    },
  ];

  const features = [
    'Gestion de portefeuille d\'investissements',
    'Conseils en finance islamique',
    'Analyse de risques financiers',
    'Planification financière personnalisée',
    'Services de comptabilité et audit',
    'Gestion de trésorerie',
    'Financement de projets',
    'Formation en éducation financière'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <DollarSign className="mx-auto h-24 w-24 text-emerald-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ALAM FINANCE
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-emerald-100">
              Services financiers et gestion d'actifs
            </p>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-emerald-200">
              Excellence financière et conformité islamique
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ALAM FINANCE est la division financière de l'Alliance, spécialisée dans la gestion 
              des actifs, l'investissement éthique et les services financiers conformes aux principes 
              islamiques. Nous offrons des solutions financières innovantes et sécurisées.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez nos domaines d'expertise financière
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="inline-flex p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 mb-4">
                    <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Spécialités
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explorez nos domaines d'expertise financière
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <CreditCard className="h-6 w-6 text-emerald-600 mr-4 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les principes qui guident notre approche financière
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 mb-4">
                <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Transparence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Communication claire et transparente sur tous nos services financiers.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 mb-4">
                <Building className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Éthique
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Respect des principes islamiques dans toutes nos activités financières.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 mb-4">
                <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Recherche constante de l'excellence dans nos services financiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Pour toute consultation financière ou information sur nos services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:finance@alam.org"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                finance@alam.org
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-200"
              >
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

