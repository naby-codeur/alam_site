import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { BookOpen, Globe, Users, Award, Languages, MessageCircle } from 'lucide-react';

export default function AlamLanguePage() {
  const t = useTranslations('structures');

  const programs = [
    {
      icon: BookOpen,
      title: 'Formation Linguistique',
      description: 'Apprentissage et perfectionnement des langues.',
    },
    {
      icon: Globe,
      title: 'Traduction',
      description: 'Services de traduction professionnelle multilingue.',
    },
    {
      icon: Users,
      title: 'Interprétation',
      description: 'Services d\'interprétation simultanée et consécutive.',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Certification et validation des compétences linguistiques.',
    },
  ];

  const languages = [
    { name: 'Français', flag: '🇫🇷', level: 'Natif' },
    { name: 'Arabe', flag: '🇸🇦', level: 'Courant' },
    { name: 'Anglais', flag: '🇺🇸', level: 'Courant' },
    { name: 'Espagnol', flag: '🇪🇸', level: 'Intermédiaire' },
    { name: 'Italien', flag: '🇮🇹', level: 'Intermédiaire' },
    { name: 'Allemand', flag: '🇩🇪', level: 'Débutant' },
    { name: 'Chinois', flag: '🇨🇳', level: 'Débutant' },
    { name: 'Japonais', flag: '🇯🇵', level: 'Débutant' }
  ];

  const courses = [
    'Français pour étrangers (FLE)',
    'Arabe classique et dialectal',
    'Anglais des affaires',
    'Espagnol conversationnel',
    'Traduction technique et juridique',
    'Interprétation de conférence',
    'Préparation aux examens de langue',
    'Formation en ligne personnalisée'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <Languages className="mx-auto h-24 w-24 text-indigo-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ALAM LANGUE
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-indigo-100">
              Centre de formation linguistique et services de traduction
            </p>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-indigo-200">
              Maîtrisez les langues, connectez-vous au monde
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
              ALAM LANGUE est le centre de formation linguistique de l'Alliance, dédié à 
              l'enseignement des langues et aux services de traduction. Nous facilitons la 
              communication interculturelle et l'intégration linguistique de nos membres.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Programmes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez nos domaines d'expertise linguistique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="inline-flex p-4 rounded-lg bg-indigo-100 dark:bg-indigo-900/20 mb-4">
                    <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
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

      {/* Languages Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Langues Disponibles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nos spécialités linguistiques et niveaux d'expertise
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="text-4xl mb-3">{language.flag}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {language.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Formations Disponibles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explorez notre catalogue de formations linguistiques
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg"
              >
                <MessageCircle className="h-6 w-6 text-indigo-600 mr-4 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white">{course}</span>
              </div>
            ))}
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
              Pour toute information sur nos formations linguistiques et services de traduction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:langue@alam.org"
                className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                <Languages className="mr-2 h-5 w-5" />
                langue@alam.org
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200"
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

