import { Shield, Lock, Eye, Database, UserCheck, FileText, CheckCircle, AlertTriangle, Info, Heart } from 'lucide-react';

export default function PrivacyPage() {
  const privacyFeatures = [
    {
      icon: Shield,
      title: 'Protection des données',
      description: 'Vos informations personnelles sont protégées par des mesures de sécurité avancées.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Lock,
      title: 'Chiffrement sécurisé',
      description: 'Toutes les communications sont chiffrées pour garantir votre confidentialité.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Eye,
      title: 'Transparence totale',
      description: 'Nous vous informons clairement de l\'utilisation de vos données.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: UserCheck,
      title: 'Contrôle utilisateur',
      description: 'Vous gardez le contrôle total sur vos données personnelles.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const privacyPrinciples = [
    {
      icon: CheckCircle,
      title: 'Collecte minimale',
      description: 'Nous collectons uniquement les données nécessaires à nos services.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: CheckCircle,
      title: 'Utilisation limitée',
      description: 'Vos données ne sont utilisées que dans le cadre de nos services.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: CheckCircle,
      title: 'Stockage sécurisé',
      description: 'Vos informations sont stockées dans des serveurs sécurisés.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: CheckCircle,
      title: 'Accès restreint',
      description: 'Seuls les employés autorisés peuvent accéder à vos données.',
      color: 'text-green-600 dark:text-green-400'
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
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100">
              Votre vie privée est notre priorité absolue
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🛡️ Notre Engagement en Matière de Confidentialité
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Chez ALAM, nous prenons votre vie privée très au sérieux. Découvrez comment nous protégeons vos données.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyFeatures.map((feature, index) => {
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

      {/* Privacy Principles */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📋 Nos Principes de Confidentialité
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous respectons ces principes fondamentaux dans le traitement de vos données personnelles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
      <section className="py-16 bg-white dark:bg-gray-900">
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
                  Notre politique de confidentialité complète est actuellement en cours de rédaction. 
                  Nous travaillons avec des experts juridiques pour vous fournir un document complet et conforme aux réglementations en vigueur.
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
            Questions sur la Confidentialité ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Notre équipe est là pour répondre à toutes vos questions concernant la protection de vos données
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
              href="mailto:privacy@alam.org"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <Database className="mr-2 h-5 w-5" />
              privacy@alam.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
