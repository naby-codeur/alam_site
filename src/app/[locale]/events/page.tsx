import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';

export default function EventsPage() {
  const t = useTranslations('events');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Conférence internationale sur la spiritualité',
      description: 'Une conférence majeure réunissant des experts du monde entier pour discuter des enjeux spirituels contemporains.',
      date: '2024-02-15',
      time: '09:00 - 17:00',
      location: 'Centre de conférences de Paris',
      address: '123 Avenue des Champs-Élysées, 75008 Paris',
      category: 'Conférence',
      type: 'In-person',
      capacity: 500,
      registered: 342,
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 2,
      title: 'Formation AITE : Introduction à l\'IA',
      description: 'Formation pratique sur les bases de l\'intelligence artificielle et ses applications dans le monde moderne.',
      date: '2024-02-20',
      time: '14:00 - 18:00',
      location: 'ALAM Tech Center',
      address: '456 Rue de la Technologie, 75012 Paris',
      category: 'Formation',
      type: 'Hybrid',
      capacity: 50,
      registered: 23,
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 3,
      title: 'Webinaire : Les valeurs LVS dans le monde moderne',
      description: 'Discussion en ligne sur l\'application des principes LVS (Labeur, Vertu, Spiritualité) dans la société contemporaine.',
      date: '2024-02-25',
      time: '19:00 - 21:00',
      location: 'En ligne',
      address: 'Zoom Webinar',
      category: 'Webinaire',
      type: 'Online',
      capacity: 200,
      registered: 156,
      image: '/api/placeholder/400/250',
      featured: false,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Lancement des programmes d\'assistance 2024',
      description: 'Présentation des nouveaux programmes d\'assistance et de soutien aux communautés.',
      date: '2024-01-15',
      location: 'ALAM Headquarters',
      category: 'Lancement',
      attendees: 150,
    },
    {
      id: 5,
      title: 'Formation ALAM Langue : Arabe moderne',
      description: 'Session de formation intensive en arabe moderne pour les débutants.',
      date: '2024-01-10',
      location: 'ALAM Education Center',
      category: 'Formation',
      attendees: 30,
    },
  ];

  const categories = ['Tous', 'Conférence', 'Formation', 'Webinaire', 'Lancement', 'Événement social'];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'In-person':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Online':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Hybrid':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
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
              Participez à nos événements et formations
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Filtrer par :</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    category === 'Tous'
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

      {/* Featured Event */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Événement en vedette
          </h2>
          {(() => {
            const featured = upcomingEvents.find(event => event.featured);
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
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getEventTypeColor(featured.type)}`}>
                        {featured.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {featured.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featured.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="h-5 w-5 mr-3" />
                        {new Date(featured.date).toLocaleDateString('fr-FR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="h-5 w-5 mr-3" />
                        {featured.time}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="h-5 w-5 mr-3" />
                        {featured.location}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Users className="h-5 w-5 mr-3" />
                        {featured.registered} / {featured.capacity} participants
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-4">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(featured.registered / featured.capacity) * 100}%` }}
                        ></div>
                      </div>
                      <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap">
                        {t('register')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('upcoming')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full">
                      {event.category}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-1" />
                      {event.registered}/{event.capacity}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                    >
                      {t('details')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('past')}
          </h2>
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full">
                        {event.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                      <Users className="h-4 w-4 ml-4 mr-1" />
                      {event.attendees} participants
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <a
                      href="#"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                    >
                      Voir le récapitulatif
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('calendar')}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Consultez notre calendrier complet pour ne manquer aucun événement
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <Calendar className="mr-2 h-5 w-5" />
            Voir le calendrier complet
          </button>
        </div>
      </section>
    </div>
  );
}


