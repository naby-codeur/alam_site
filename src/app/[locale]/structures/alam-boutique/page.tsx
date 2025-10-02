import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ShoppingBag, BookOpen, Award, Gift, Phone, Mail } from 'lucide-react';

export default function AlamBoutiquePage() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Produits officiels',
      description: 'Vente de produits officiels de l\'Alliance ALAM.',
    },
    {
      icon: BookOpen,
      title: 'Livres & Publications',
      description: 'Collection de livres et publications spirituelles.',
    },
    {
      icon: Award,
      title: 'Médailles & Accessoires',
      description: 'Médailles commémoratives et accessoires religieux.',
    },
    {
      icon: Gift,
      title: 'Cadeaux',
      description: 'Articles cadeaux et souvenirs de l\'Alliance.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/logo_alam_00.png"
                alt="ALAM BOUTIQUE Logo"
                width={200}
                height={80}
                className="mx-auto h-16 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ALAM BOUTIQUE</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-purple-100">
              Boutique officielle et commerce
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ALAM BOUTIQUE est la boutique officielle de l'Alliance, proposant une sélection 
              soigneusement choisie de produits, livres et accessoires liés à notre mission spirituelle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Produits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
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

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contactez-nous
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:boutique@alam.org"
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              boutique@alam.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

