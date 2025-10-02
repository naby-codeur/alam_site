import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { 
  GraduationCap, 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Laptop,
  Shield,
  Users,
  Globe,
  Target,
  Zap,
  Phone, 
  Mail,
  Lightbulb,
  Cpu
} from 'lucide-react';

export default function AlamITEPage() {
  const t = useTranslations('structures');

  const programs = [
    {
      icon: Code,
      title: 'Développement Logiciel',
      description: 'Formation en programmation et développement d\'applications.',
    },
    {
      icon: Database,
      title: 'Base de Données',
      description: 'Gestion et administration des systèmes de données.',
    },
    {
      icon: Cloud,
      title: 'Technologies Cloud',
      description: 'Formation aux technologies cloud et virtualisation.',
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description: 'Développement et intégration de solutions IA.',
    },
  ];

  const courses = [
    'Programmation Web (HTML, CSS, JavaScript)',
    'Développement Backend (Node.js, Python)',
    'Bases de données (MySQL, PostgreSQL)',
    'Cloud Computing (AWS, Azure)',
    'Intelligence Artificielle et Machine Learning',
    'Cybersécurité et protection des données',
    'Développement Mobile (React Native, Flutter)',
    'DevOps et déploiement continu'
  ];

  const organizationActions = [
    {
      icon: Code,
      title: 'Développement de solutions numériques adaptées',
      description: 'Création d\'outils internes pour améliorer la gestion des données et l\'optimisation des processus.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Shield,
      title: 'Sécurisation des données',
      description: 'Mise en place de protocoles de sécurité pour protéger les informations sensibles d\'Alam.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400'
    }
  ];

  const communityActions = [
    {
      icon: Globe,
      title: 'Accès aux services numériques',
      description: 'Création de solutions qui permettent aux communautés d\'accéder facilement aux services d\'Alam à travers des plateformes numériques.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Users,
      title: 'Formation numérique et sensibilisation',
      description: 'Développer des programmes pour former les populations locales à l\'utilisation des technologies et à l\'inclusion numérique.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconColor: 'text-orange-600 dark:text-orange-400'
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
              <GraduationCap className="mx-auto h-24 w-24 text-purple-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              💻 ALAM ITE
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-purple-100">
              Informatique et Technologies Émergentes
            </p>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-purple-200">
              Solutions innovantes pour l'organisation et les communautés
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
                Alam ITE est l'organisation d'Alam dédiée à l'informatique et aux technologies émergentes, 
                avec pour mission d'apporter des solutions innovantes à la fois pour l'organisation elle-même 
                et pour les communautés qu'Alam sert.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Ce secteur agit comme catalyseur pour la transformation numérique d'Alam, en développant 
                des technologies avancées et en facilitant l'accès à des services numériques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Actions Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              💻 Actions pour l'Organisation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Alam ITE soutient l'organisation en développant des solutions numériques qui améliorent 
              l'efficacité interne d'Alam et optimisent la gestion des projets.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {organizationActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div
                  key={index}
                  className={`${action.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${action.color} mr-4 flex-shrink-0`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
            <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🛠 Objectif
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Optimiser les opérations internes d'Alam grâce à des technologies avancées, 
              tout en garantissant la protection des données et l'efficacité des processus.
            </p>
          </div>
        </div>
      </section>

      {/* Community Actions Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🌐 Actions pour la Communauté
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Alam ITE contribue également à l'impact d'Alam sur la communauté en facilitant 
              l'accès à des technologies numériques qui répondent aux besoins des populations locales.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {communityActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div
                  key={index}
                  className={`${action.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${action.color} mr-4 flex-shrink-0`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
            <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🛠 Objectif
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Faciliter l'inclusion numérique et renforcer l'impact des projets d'Alam en fournissant 
              aux communautés des outils technologiques simples et accessibles.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎓 Nos Programmes de Formation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Des formations complètes et pratiques pour maîtriser les technologies émergentes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="inline-flex p-4 rounded-lg bg-purple-100 dark:bg-purple-900/20 mb-4">
                    <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📚 Cours Disponibles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez notre catalogue complet de formations technologiques
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🚀 Technologies & Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les domaines technologiques que nous maîtrisons
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="inline-flex p-4 rounded-lg bg-purple-100 dark:bg-purple-900/20 mb-4">
                    <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects & Achievements Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🏆 Projets & Réalisations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez nos projets phares et nos réalisations technologiques
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-500 mr-4">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Plateforme de Gestion ALAM
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Développement d'une plateforme intégrée de gestion des membres, des projets et des ressources d'ALAM.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Interface utilisateur moderne et responsive
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Base de données sécurisée et optimisée
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Système de notifications en temps réel
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-green-500 mr-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Système de Sécurité Avancé
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Mise en place d'un système de cybersécurité robuste pour protéger les données sensibles d'ALAM.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Chiffrement de bout en bout
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Authentification multi-facteurs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Surveillance continue des menaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              👥 Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des experts passionnés par l'innovation technologique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Développeurs Full-Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Spécialistes en développement web et mobile
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Experts IA & Data
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Spécialistes en intelligence artificielle et analyse de données
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Spécialistes Cybersécurité
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experts en sécurité informatique et protection des données
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lightbulb className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ✨ Notre Slogan
          </h2>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto text-indigo-100">
            "Innover aujourd'hui, transformer demain."
          </p>
          <p className="text-lg mt-6 max-w-3xl mx-auto text-blue-100">
            Une vision tournée vers l'avenir, ancrée dans l'innovation et la transformation numérique
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
              Pour toute information sur nos solutions technologiques et projets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ite@alam.org"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                ite@alam.org
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
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

