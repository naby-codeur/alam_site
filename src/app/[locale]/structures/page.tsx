'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight, Users, Globe, ShoppingBag, BookOpen, Laptop, Briefcase, DollarSign } from 'lucide-react';

export default function StructuresPage() {
  const t = useTranslations('structures');

  const structures = [
    {
      id: 'alam-com',
      name: 'ALAM-COM',
      description: 'Chargé de la communication et de la diffusion de l\'information',
      logo: '/images/logo_alam_com.png',
      icon: Globe,
      color: 'bg-blue-500',
      href: '/structures/alam-com',
      features: ['Communication digitale', 'Relations presse', 'Réseaux sociaux', 'Organisation d\'événements'],
    },
    {
      id: 'alam-assistance',
      name: 'ALAM ASSISTANCE',
      description: 'Assistance et soutien aux membres et aux communautés',
      logo: '/images/logo_alam_assistance.png',
      icon: Users,
      color: 'bg-green-500',
      href: '/structures/alam-assistance',
      features: ['Aide sociale', 'Soutien financier', 'Accompagnement', 'Formation'],
    },
    {
      id: 'alam-boutique',
      name: 'ALAM BOUTIQUE',
      description: 'Boutique officielle et commerce',
      logo: '/images/logo_alam_00.png',
      icon: ShoppingBag,
      color: 'bg-purple-500',
      href: '/structures/alam-boutique',
      features: ['Produits officiels', 'Livres spirituels', 'Médailles commémoratives', 'Accessoires religieux'],
    },
    {
      id: 'alam-langue',
      name: 'ALAM Langue',
      description: 'Enseignement et promotion des langues',
      logo: '/images/logo_alam_00.png',
      icon: BookOpen,
      color: 'bg-orange-500',
      href: '/structures/alam-langue',
      features: ['Enseignement des langues', 'Services de traduction', 'Interprétation', 'Formation linguistique'],
    },
    {
      id: 'aite',
      name: 'ALAM ITE',
      description: 'Informatique et Technologie Emergente',
      logo: '/images/logo_alam_00.png',
      icon: Laptop,
      color: 'bg-indigo-500',
      href: '/structures/aite',
      features: ['Développement logiciel', 'Technologies cloud', 'Intelligence artificielle', 'Sécurité informatique'],
    },
    {
      id: 'alam-projet',
      name: 'ALAM PROJET',
      description: 'Gestion et développement de projets',
      logo: '/images/logo_alam_00.png',
      icon: Briefcase,
      color: 'bg-red-500',
      href: '/structures/alam-projet',
      features: ['Gestion de projet', 'Consulting', 'Formation', 'Accompagnement'],
    },
    {
      id: 'alam-finance',
      name: 'ALAM FINANCE',
      description: 'Services financiers et gestion des fonds',
      logo: '/images/logo_alam_00.png',
      icon: DollarSign,
      color: 'bg-emerald-500',
      href: '/structures/alam-finance',
      features: ['Gestion financière', 'Investissement', 'Microcrédit', 'Assurance'],
    },
    {
      id: 'alambusiness',
      name: 'ALAM BUSINESS',
      description: 'Innovation et recherche avancée',
      logo: '/images/logo_alam_00.png',
      icon: Laptop,
      color: 'bg-purple-500',
      href: '/structures/alambusiness',
      features: ['Innovation', 'R&D', 'Formation avancée', 'Conseil stratégique'],
    },
    {
      id: 'alamtv',
      name: 'ALAM TV',
      description: 'Coordination et expansion internationale',
      logo: '/images/logo_alam_00.png',
      icon: Globe,
      color: 'bg-indigo-500',
      href: '/structures/alamtv',
      features: ['Expansion internationale', 'Coordination régionale', 'Gestion des données', 'Sécurité'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100">
              Découvrez les différentes entités qui composent l'Alliance ALAM
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ALAM est composé de plusieurs structures spécialisées, chacune ayant un rôle spécifique dans la réalisation de notre mission commune. 
              Ces entités travaillent en synergie pour assurer le développement et la pérennité de la cause de l'Imam Mahdi.
            </p>
          </div>
        </div>
      </section>

      {/* Organigramme Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Structure Organisationnelle
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'organisation de l'Alliance ALAM et les relations entre nos différentes structures
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-lg mb-6 w-full">
                <Image
                  src="/images/organigramme_alam.png"
                  alt="Organigramme ALAM"
                  width={800}
                  height={600}
                  className="w-[70vw] max-w-5xl h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                Organigramme de l'Alliance des Loyaux et Adeptes de Mahdi (ALAM)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structures Grid */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {structures.map((structure) => {
              const Icon = structure.icon;
              return (
                <div
                  key={structure.id}
                  className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${structure.color} mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Image
                        src={structure.logo}
                        alt={`${structure.name} Logo`}
                        width={60}
                        height={40}
                        className="h-8 w-auto"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
                    {structure.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {structure.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Services principaux :
                    </h4>
                    <ul className="space-y-1">
                      {structure.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={structure.href as any}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Synergie et Collaboration
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Toutes nos structures travaillent en étroite collaboration pour offrir des services complets et cohérents. 
              Cette approche intégrée nous permet de maximiser notre impact et de mieux servir nos communautés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-4">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Approche collaborative
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nos équipes travaillent ensemble pour offrir des solutions intégrées et cohérentes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
                <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Vision globale
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Chaque structure contribue à notre vision internationale et à notre mission commune.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-purple-100 dark:bg-purple-900/20 mb-4">
                <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Excellence professionnelle
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous maintenons les plus hauts standards de qualité dans tous nos services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Intégrez-vous à notre réseau
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Découvrez comment vous pouvez collaborer avec nos structures et contribuer à notre mission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Nous contacter
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              En savoir plus sur ALAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


