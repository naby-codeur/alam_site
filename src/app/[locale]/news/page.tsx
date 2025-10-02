import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

export default function NewsPage() {
  const t = useTranslations('news');

  const newsItems = [
    {
      id: 1,
      title: 'ALAM lance de nouveaux programmes d\'assistance',
      excerpt: 'L\'Alliance des Loyaux et Adeptes de Mahdi annonce le lancement de nouveaux programmes d\'assistance destinés à soutenir les communautés locales.',
      date: '2024-01-15',
      author: 'ALAM Communication',
      category: 'Actualités',
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 2,
      title: 'Conférence internationale sur la spiritualité',
      excerpt: 'Une conférence majeure se tiendra prochainement pour discuter des enjeux spirituels contemporains et de l\'enseignement de l\'Imam Mahdi.',
      date: '2024-01-12',
      author: 'ALAM Education',
      category: 'Événements',
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 3,
      title: 'Nouveau partenariat avec les organisations locales',
      excerpt: 'ALAM signe un partenariat stratégique avec plusieurs organisations locales pour renforcer son impact dans la région.',
      date: '2024-01-10',
      author: 'ALAM Projets',
      category: 'Partenariats',
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 4,
      title: 'Rapport annuel 2023 disponible',
      excerpt: 'Le rapport annuel 2023 d\'ALAM est maintenant disponible, présentant les réalisations et les perspectives d\'avenir.',
      date: '2024-01-08',
      author: 'ALAM Administration',
      category: 'Publications',
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 5,
      title: 'Formation en technologie pour les jeunes',
      excerpt: 'AITE lance un nouveau programme de formation en technologie destiné aux jeunes de la communauté.',
      date: '2024-01-05',
      author: 'AITE',
      category: 'Formation',
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 6,
      title: 'ALAM Boutique : nouveaux produits disponibles',
      excerpt: 'Découvrez la nouvelle collection de produits officiels ALAM, incluant livres, médailles et accessoires.',
      date: '2024-01-03',
      author: 'ALAM Boutique',
      category: 'Produits',
      image: '/api/placeholder/400/250',
      featured: false,
    },
  ];

  const categories = ['Toutes', 'Actualités', 'Événements', 'Partenariats', 'Publications', 'Formation', 'Produits'];

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
              Restez informé de nos dernières actualités et développements
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('search')}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    category === 'Toutes'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Article en vedette
          </h2>
          {(() => {
            const featured = newsItems.find(item => item.featured);
            return featured ? (
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-primary/40"></div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        {featured.category}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featured.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {featured.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <User className="h-4 w-4 mr-1" />
                        {featured.author}
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                      >
                        Lire la suite
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Toutes les actualités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <article
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <User className="h-4 w-4 mr-1" />
                      {item.author}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                    >
                      {t('readMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Charger plus d'articles
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Restez informé
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Abonnez-vous à notre newsletter pour recevoir nos dernières actualités directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


