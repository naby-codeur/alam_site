import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { 
  Lightbulb, 
  Target, 
  Users, 
  TrendingUp, 
  Phone, 
  Mail,
  Briefcase,
  Globe,
  Handshake,
  Zap,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function AlamBusinessPage() {
  const t = useTranslations('structures');

  const services = [
    {
      icon: Briefcase,
      title: 'Développement Commercial',
      description: 'Identification et développement des opportunités commerciales.',
    },
    {
      icon: Handshake,
      title: 'Partenariats Stratégiques',
      description: 'Mise en place de partenariats locaux et internationaux.',
    },
    {
      icon: Target,
      title: 'Projets Commerciaux',
      description: 'Création et gestion de nouvelles initiatives commerciales.',
    },
    {
      icon: TrendingUp,
      title: 'Optimisation des Revenus',
      description: 'Stratégies pour maximiser les revenus et la viabilité.',
    },
  ];

  const commercialOpportunities = [
    {
      icon: Lightbulb,
      title: 'Identification des opportunités commerciales',
      description: 'Recherche et évaluation des secteurs économiques porteurs et des tendances du marché susceptibles de générer des revenus durables.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Handshake,
      title: 'Développement de partenariats stratégiques',
      description: 'Mise en place de partenariats avec des entreprises, des investisseurs et des institutions pour favoriser la croissance économique et commerciale d\'Alam.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Briefcase,
      title: 'Lancement de projets commerciaux',
      description: 'Création et gestion de nouvelles initiatives commerciales alignées avec les objectifs sociaux d\'Alam.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: TrendingUp,
      title: 'Optimisation des revenus',
      description: 'Mise en place de stratégies pour maximiser les revenus issus des initiatives commerciales tout en assurant leur viabilité à long terme.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const partnerships = [
    {
      icon: Globe,
      title: 'Partenariats locaux et internationaux',
      description: 'Recherche et négociation de partenariats avec des acteurs économiques locaux et mondiaux pour favoriser le développement commercial d\'Alam.',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Users,
      title: 'Stratégies de collaboration',
      description: 'Développement de modèles de collaboration qui profitent à la fois à Alam et à ses partenaires, en assurant des bénéfices réciproques.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      icon: Star,
      title: 'Réseau commercial',
      description: 'Développement d\'un réseau solide d\'entreprises, d\'institutions financières et d\'acteurs économiques qui soutiennent les initiatives d\'Alam.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/logo_alam_00.png"
                alt="Alam Business Logo"
                width={200}
                height={80}
                className="mx-auto h-16 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              💼 ALAM Business
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-purple-100">
              Opportunités commerciales et partenariats stratégiques
            </p>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-purple-200">
              Développement économique durable pour soutenir notre mission sociale
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
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Alam Business est l'organe stratégique de l'organisation Alam dédié à la gestion des opportunités commerciales, 
                des partenariats et des initiatives économiques.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Sa mission est de développer des activités génératrices de revenus pour soutenir les projets et objectifs sociaux 
                d'Alam tout en créant un impact économique durable.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
                L'objectif principal d'Alam Business est de stimuler la croissance économique de l'organisation en développant 
                des projets rentables et en optimisant les partenariats stratégiques.
              </p>
            </div>
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
              Découvrez nos domaines d'innovation et de recherche
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
                  <div className="inline-flex p-4 rounded-lg bg-purple-100 dark:bg-purple-900/20 mb-4">
                    <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
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

      {/* Commercial Opportunities Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              💼 Développement des Opportunités Commerciales
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Alam Business est responsable de l'identification et du développement des opportunités commerciales 
              qui peuvent soutenir la mission d'Alam tout en générant des ressources financières pour l'organisation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {commercialOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div
                  key={index}
                  className={`${opportunity.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${opportunity.color} mr-4 flex-shrink-0`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {opportunity.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🛠 Objectif
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Favoriser l'expansion économique de l'organisation à travers des projets commerciaux cohérents et rentables, 
              tout en contribuant à la mission sociale et communautaire d'Alam.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🌍 Partenariats et Réseaux Commerciaux
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Le pôle Alam Business joue un rôle clé dans la mise en place et la gestion des partenariats commerciaux 
              qui permettent à l'organisation de bénéficier de ressources, d'expertises et de réseaux élargis.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {partnerships.map((partnership, index) => {
              const Icon = partnership.icon;
              return (
                <div
                  key={index}
                  className={`${partnership.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${partnership.color} mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {partnership.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {partnership.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
            <Handshake className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🛠 Objectif
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Établir des partenariats stratégiques et durables qui assurent la croissance de l'organisation et renforcent 
              sa position sur le marché, tout en favorisant un impact social positif.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Vision Globale et Croissance Durable
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Alam Business est un pilier central pour le développement économique durable de l'organisation. 
              Il œuvre pour garantir que les initiatives commerciales ne soient pas seulement rentables, 
              mais qu'elles contribuent également à l'accomplissement de la mission sociale d'Alam.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center">
            <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🛠 Objectif
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Assurer une croissance économique durable, équilibrant rentabilité et impact social, 
              pour permettre à l'organisation d'accomplir sa mission avec les ressources nécessaires à long terme.
            </p>
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ✨ Notre Slogan
          </h2>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto text-purple-100">
            "Rentabilité et responsabilité, main dans la main."
          </p>
          <p className="text-lg mt-6 max-w-3xl mx-auto text-blue-100">
            Une approche équilibrée entre performance économique et impact social positif
          </p>
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
              Pour toute demande d'innovation ou de recherche
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:business@alam.org"
                className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                business@alam.org
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
