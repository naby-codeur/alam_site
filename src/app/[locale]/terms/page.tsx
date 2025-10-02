import { FileText, Scale, Users, Shield, CheckCircle, AlertTriangle, Info, Heart, BookOpen, Gavel, Handshake, Globe } from 'lucide-react';

export default function TermsPage() {
  const termsFeatures = [
    {
      icon: Scale,
      title: 'Équité et Justice',
      description: 'Nos conditions sont conçues pour être équitables et justes pour tous nos utilisateurs.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Users,
      title: 'Respect mutuel',
      description: 'Nous nous engageons à respecter nos utilisateurs et attendons la même chose en retour.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Shield,
      title: 'Protection des droits',
      description: 'Vos droits et libertés sont protégés dans le cadre de nos services.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Globe,
      title: 'Conformité internationale',
      description: 'Nos conditions respectent les standards internationaux et les réglementations locales.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const termsPrinciples = [
    {
      icon: CheckCircle,
      title: 'Transparence',
      description: 'Toutes nos conditions sont claires et facilement compréhensibles.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: CheckCircle,
      title: 'Équité',
      description: 'Nos conditions sont équilibrées et respectent les intérêts de toutes les parties.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: CheckCircle,
      title: 'Conformité légale',
      description: 'Nous respectons toutes les lois et réglementations applicables.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: CheckCircle,
      title: 'Évolution continue',
      description: 'Nos conditions évoluent avec nos services et les besoins de nos utilisateurs.',
      color: 'text-green-600 dark:text-green-400'
    }
  ];

  const keySections = [
    {
      icon: BookOpen,
      title: 'Utilisation des Services',
      description: 'Règles et bonnes pratiques pour l\'utilisation de nos plateformes et services.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Handshake,
      title: 'Engagements Réciproques',
      description: 'Les obligations et responsabilités de chaque partie dans notre relation.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Gavel,
      title: 'Résolution des Conflits',
      description: 'Procédures de médiation et de résolution des différends.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Propriété Intellectuelle',
      description: 'Protection et utilisation de nos contenus et marques.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
              <FileText className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conditions d'Utilisation
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100">
              Nos règles et engagements pour une collaboration harmonieuse
            </p>
          </div>
        </div>
      </section>

      {/* Terms Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ⚖️ Nos Principes Fondamentaux
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nos conditions d'utilisation sont basées sur des principes de respect, d'équité et de transparence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${feature.bgColor} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Sections Preview */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📚 Sections Principales
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les principales sections qui composeront nos conditions d'utilisation complètes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${section.color} mr-4 flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Principles */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Nos Engagements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous nous engageons à respecter ces principes dans toutes nos interactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {termsPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <Icon className={`h-6 w-6 mr-4 mt-1 flex-shrink-0 ${principle.color}`} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Notice */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  🚧 Page en Développement
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Nos conditions d'utilisation complètes sont actuellement en cours de rédaction par notre équipe juridique. 
                  Nous travaillons pour vous fournir un document complet, clair et conforme aux réglementations en vigueur.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Info className="h-4 w-4 mr-2" />
                  <span>Cette page sera mise à jour prochainement avec le contenu complet.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions sur nos Conditions ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Notre équipe juridique est disponible pour clarifier tous les aspects de nos conditions d'utilisation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FileText className="mr-2 h-5 w-5" />
              Nous contacter
            </a>
            <a
              href="mailto:legal@alam.org"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <Scale className="mr-2 h-5 w-5" />
              legal@alam.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
