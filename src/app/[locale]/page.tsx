'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight, Users, Globe, BookOpen, Calendar, FileText, Mail, DollarSign, Heart, Cross, Trophy, GraduationCap, Stethoscope, Building, Vote } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');

  const secondaryNavSections = [
    {
      name: 'ÉCONOMIE',
      icon: DollarSign,
      href: '/economie',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      name: 'CULTURE',
      icon: Heart,
      href: '/culture',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      name: 'RELIGION',
      icon: Cross,
      href: '/religion',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      name: 'SPORT',
      icon: Trophy,
      href: '/sport',
      color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      name: 'ÉDUCATION',
      icon: GraduationCap,
      href: '/education',
      color: 'bg-indigo-500 hover:bg-indigo-600',
    },
    {
      name: 'SANTÉ',
      icon: Stethoscope,
      href: '/sante',
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      name: 'ADMINISTRATION',
      icon: Building,
      href: '/administration',
      color: 'bg-gray-500 hover:bg-gray-600',
    },
    {
      name: 'POLITIQUE',
      icon: Vote,
      href: '/politique',
      color: 'bg-yellow-500 hover:bg-yellow-600',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Nos Structures',
      description: 'Découvrez les différentes entités qui composent ALAM',
      href: '/structures',
      color: 'bg-blue-500',
    },
    {
      icon: BookOpen,
      title: 'À propos',
      description: 'Notre mission, vision et valeurs',
      href: '/about',
      color: 'bg-green-500',
    },
    {
      icon: Calendar,
      title: 'Événements',
      description: 'Participez à nos événements et activités',
      href: '/events',
      color: 'bg-purple-500',
    },
    {
      icon: FileText,
      title: 'Ressources',
      description: 'Publications, rapports et documents',
      href: '/resources',
      color: 'bg-orange-500',
    },
  ];

  const structures = [
    {
      name: 'ALAM-COM',
      description: 'Chargé de la communication',
      logo: '/images/logo_alam_com.png',
      href: '/structures',
    },
    {
      name: 'ALAM ASSISTANCE',
      description: 'Assistance et soutien',
      logo: '/images/logo_alam_assistance.png',
      href: '/structures',
    },
    {
      name: 'ALAM BOUTIQUE',
      description: 'Boutique officielle',
      logo: '/images/logo_alam_00.png',
      href: '/structures',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/logo_alam_00.png"
                alt="ALAM Logo"
                width={200}
                height={80}
                className="mx-auto h-16 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              {t('subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-blue-50">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/structures"
                className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {t('cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Navigation */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Domaines d'Intervention
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Découvrez nos secteurs d'activité
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {secondaryNavSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link
                  key={index}
                  href={section.href}
                  className={`group flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${section.color} text-white hover:shadow-lg transform hover:-translate-y-1`}
                >
                  <div className="mb-2">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold text-center leading-tight">
                    {section.name}
                  </span>
                </Link>
              );
            })}
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
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {t('mission')}
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Labeur
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Le travail assidu constant pour l'atteinte de nos objectifs
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Vertu
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Le comportement exemplaire à l'image de l'Imam Al Mahdi
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-purple-100 dark:bg-purple-900/20 mb-4">
                <span className="text-2xl">🕊️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Spiritualité
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Le respect de nos obligations religieuses et spirituelles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Découvrez ALAM
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explorez les différents aspects de notre organisation et nos services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  href={feature.href as "/structures" | "/about" | "/events" | "/resources"}
                  className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structures Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Structures
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les différentes entités qui composent l'Alliance ALAM
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {structures.map((structure, index) => (
              <Link
                key={index}
                href={structure.href as "/structures"}
                className="group bg-gray-100 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src={structure.logo}
                      alt={`${structure.name} Logo`}
                      width={80}
                      height={80}
                      className="mx-auto h-16 w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {structure.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {structure.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/structures"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Voir toutes les structures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📊 ALAM en Chiffres
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez l'impact et la portée de notre organisation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">9</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Structures</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Entités spécialisées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">18</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Objectifs</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Stratégiques définis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">14</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Langues</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Supportées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2018</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Année</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">De création</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('latestNews')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Restez informé de nos dernières actualités et développements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40"></div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">
                    Actualité • {new Date().toLocaleDateString('fr-FR')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Titre de l'actualité {item}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Description de l'actualité qui donne un aperçu du contenu...
                  </p>
                  <Link
                    href="/news"
                    className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                  >
                    Lire la suite →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez-nous
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Découvrez comment vous pouvez contribuer à notre mission et participer à nos activités
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Nous contacter
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Nos événements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


