import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Briefcase, Target, Users, Calendar, CheckCircle, TrendingUp, Lightbulb, Settings } from 'lucide-react';

export default function AlamProjetPage() {
  const t = useTranslations('structures');

  const services = [
    {
      icon: Target,
      title: 'Planification Stratégique',
      description: 'Définition et planification des projets stratégiques.',
    },
    {
      icon: Users,
      title: 'Gestion d\'Équipe',
      description: 'Coordination et management des équipes projet.',
    },
    {
      icon: Calendar,
      title: 'Suivi et Reporting',
      description: 'Monitoring et rapports de progression des projets.',
    },
    {
      icon: CheckCircle,
      title: 'Contrôle Qualité',
      description: 'Assurance qualité et validation des livrables.',
    },
  ];

  const methodologies = [
    'Gestion de projet Agile',
    'Méthodologie Scrum',
    'Planification PRINCE2',
    'Gestion des risques projet',
    'Suivi budgétaire et financier',
    'Communication projet',
    'Gestion des parties prenantes',
    'Évaluation et capitalisation'
  ];

  const projectTypes = [
    { name: 'Projets Sociaux', icon: Users, color: 'blue' },
    { name: 'Projets Économiques', icon: TrendingUp, color: 'green' },
    { name: 'Projets Culturels', icon: Lightbulb, color: 'purple' },
    { name: 'Projets Techniques', icon: Settings, color: 'orange' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <Briefcase className="mx-auto h-24 w-24 text-orange-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ALAM PROJET
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-orange-100">
              Gestion et coordination de projets
            </p>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-orange-200">
              De l'idée à la réalisation, nous accompagnons vos projets
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
              ALAM PROJET est la division de gestion de projets de l'Alliance, spécialisée dans 
              la coordination, la planification et l'exécution de projets stratégiques. Nous 
              transformons les idées en réalisations concrètes avec efficacité et professionnalisme.
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
              Découvrez nos domaines d'expertise en gestion de projets
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
                  <div className="inline-flex p-4 rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-4">
                    <Icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
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

      {/* Project Types Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Types de Projets
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nos domaines d'intervention et d'expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((type, index) => {
              const Icon = type.icon;
              const colorClasses = {
                blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
                green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
                purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
                orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
              };
              
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
                >
                  <div className={`inline-flex p-4 rounded-lg ${colorClasses[type.color as keyof typeof colorClasses]} mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {type.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Méthodologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nos approches et méthodes de gestion de projet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodologies.map((methodology, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg"
              >
                <CheckCircle className="h-6 w-6 text-orange-600 mr-4 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white">{methodology}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Processus
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comment nous transformons vos idées en projets réussis
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                1. Conception
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Analyse et définition des objectifs du projet
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-4">
                <Target className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2. Planification
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Élaboration du plan détaillé et des ressources
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-4">
                <Settings className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                3. Exécution
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Mise en œuvre et suivi des activités
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4. Livraison
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Finalisation et remise des livrables
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Pour toute demande de gestion de projet ou consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:projet@alam.org"
                className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                projet@alam.org
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200"
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

