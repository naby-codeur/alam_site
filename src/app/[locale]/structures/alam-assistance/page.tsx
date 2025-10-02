import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Users, Heart, Shield, BookOpen, Phone, Mail } from 'lucide-react';

export default function AlamAssistancePage() {
  const t = useTranslations('structures');

  const services = [
    {
      icon: Heart,
      title: 'Aide sociale',
      description: 'Soutien aux membres et aux familles en difficulté.',
    },
    {
      icon: Shield,
      title: 'Soutien financier',
      description: 'Assistance financière pour les projets et les urgences.',
    },
    {
      icon: BookOpen,
      title: 'Conseil',
      description: 'Accompagnement et conseils personnalisés.',
    },
    {
      icon: Users,
      title: 'Formation',
      description: 'Programmes de formation et de développement personnel.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/logo_alam_assistance.png"
                alt="ALAM ASSISTANCE Logo"
                width={200}
                height={80}
                className="mx-auto h-16 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ALAM ASSISTANCE
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-green-100">
              Assistance et soutien aux membres et aux communautés
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
              ALAM ASSISTANCE est dédiée au soutien et à l'accompagnement des membres 
              de l'Alliance. Nous offrons une aide concrète et bienveillante pour 
              améliorer les conditions de vie et renforcer la solidarité communautaire.
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
              Découvrez nos domaines d'assistance et de soutien
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
                  <div className="inline-flex p-4 rounded-lg bg-green-100 dark:bg-green-900/20 mb-4">
                    <Icon className="h-8 w-8 text-green-600 dark:text-green-400" />
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

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Pour toute demande d'assistance ou de soutien
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:assistance@alam.org"
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                assistance@alam.org
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200"
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