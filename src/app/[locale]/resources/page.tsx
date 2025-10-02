import { useTranslations } from 'next-intl';
import { Download, FileText, BookOpen, Presentation, Video, Search, Filter } from 'lucide-react';

export default function ResourcesPage() {
  const t = useTranslations('resources');

  const resources = [
    {
      id: 1,
      title: 'Rapport annuel ALAM 2023',
      description: 'Rapport complet sur les activités, réalisations et perspectives d\'ALAM pour l\'année 2023.',
      type: 'PDF',
      category: 'Rapports',
      size: '2.4 MB',
      downloads: 1250,
      date: '2024-01-15',
      featured: true,
    },
    {
      id: 2,
      title: 'Guide des structures ALAM',
      description: 'Document complet présentant toutes les structures d\'ALAM et leurs missions respectives.',
      type: 'PDF',
      category: 'Guides',
      size: '1.8 MB',
      downloads: 890,
      date: '2024-01-10',
      featured: false,
    },
    {
      id: 3,
      title: 'Les valeurs LVS : Fondements spirituels',
      description: 'Étude approfondie sur les principes de Labeur, Vertu et Spiritualité dans la doctrine d\'ALAM.',
      type: 'PDF',
      category: 'Publications',
      size: '3.2 MB',
      downloads: 2100,
      date: '2024-01-08',
      featured: false,
    },
    {
      id: 4,
      title: 'Formation AITE : Introduction aux technologies émergentes',
      description: 'Support de cours pour la formation sur les technologies émergentes et l\'intelligence artificielle.',
      type: 'PDF',
      category: 'Formation',
      size: '4.1 MB',
      downloads: 650,
      date: '2024-01-05',
      featured: false,
    },
    {
      id: 5,
      title: 'Manuel de communication ALAM-COM',
      description: 'Guide pratique pour la communication institutionnelle et les relations publiques.',
      type: 'PDF',
      category: 'Guides',
      size: '2.8 MB',
      downloads: 720,
      date: '2024-01-03',
      featured: false,
    },
    {
      id: 6,
      title: 'Vidéo : Présentation d\'ALAM',
      description: 'Vidéo de présentation générale de l\'Alliance des Loyaux et Adeptes de Mahdi.',
      type: 'Vidéo',
      category: 'Médias',
      size: '45.2 MB',
      downloads: 1850,
      date: '2024-01-01',
      featured: false,
    },
  ];

  const featured = resources.find(r => r.featured);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="h-6 w-6 text-white" />;
      case 'Vidéo':
        return <Video className="h-6 w-6 text-white" />;
      case 'Présentation':
        return <Presentation className="h-6 w-6 text-white" />;
      default:
        return <BookOpen className="h-6 w-6 text-white" />;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-500';
      case 'Vidéo':
        return 'bg-blue-500';
      case 'Présentation':
        return 'bg-green-500';
      default:
        return 'bg-purple-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'Vidéo':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Présentation':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
    }
  };

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
              Accédez à nos publications, rapports et documents officiels
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une ressource..."
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                Filtrer
                  </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      {featured && (
        <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex items-center mb-6 md:mb-0 md:mr-8">
                    <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/20 mr-4">
                      <FileText className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          {featured.category}
                        </span>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(featured.type)}`}>
                          {featured.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {featured.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{featured.size}</span>
                        <span>•</span>
                        <span>{featured.downloads} téléchargements</span>
                        <span>•</span>
                        <span>{new Date(featured.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featured.description}
                    </p>
                  <button className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <Download className="mr-2 h-5 w-5" />
                      {t('download')}
                    </button>
                  </div>
                </div>
              </div>
        </div>
      </section>
      )}

      {/* Resources Grid */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Toutes les ressources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
                <div
                  key={resource.id}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${getResourceColor(resource.type)}`}>
                    {getResourceIcon(resource.type)}
                    </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(resource.type)}`}>
                          {resource.type}
                        </span>
                      </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {resource.title}
                      </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{resource.size}</span>
                    <span>{resource.downloads} téléchargements</span>
                  </div>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200">
                  <Download className="mr-2 h-4 w-4" />
                      {t('download')}
                    </button>
                  </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Restez informé
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Recevez une notification par email à chaque nouvelle publication
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