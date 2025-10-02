import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { 
  Eye, 
  Lightbulb, 
  TrendingUp, 
  Heart, 
  Users, 
  Briefcase, 
  Play, 
  Mic, 
  GraduationCap, 
  Tv, 
  BookOpen, 
  Smartphone,
  Globe,
  Phone, 
  Mail,
  Star,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

export default function AlamTVPage() {
  const t = useTranslations('structures');

  const objectives = [
    {
      icon: Eye,
      title: 'ÉVEILLER les consciences',
      subtitle: '"Réveiller l\'âme du monde en chacun."',
      description: 'Offrir des contenus qui suscitent la réflexion intérieure et le questionnement profond. Toucher les cœurs en quête de vérité, au-delà des dogmes ou des appartenances.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      iconColor: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      icon: Lightbulb,
      title: 'ÉCLAIRER les chemins',
      subtitle: '"Diffuser une lumière qui guide, éclaire et élève."',
      description: 'Transmettre une connaissance vivante, enracinée dans la tradition mais tournée vers l\'avenir. Mettre en lumière les enseignements soufis, la mission du Mahdi, les sagesses universelles.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      iconColor: 'text-amber-600 dark:text-amber-400'
    },
    {
      icon: TrendingUp,
      title: 'ÉLEVER les individus et les communautés',
      subtitle: '"Servir une humanité en ascension."',
      description: 'Encourager une action consciente et alignée, au service du bien commun. Promouvoir un entrepreneuriat sacré, basé sur les valeurs spirituelles.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    }
  ];

  const pillars = [
    {
      icon: Sparkles,
      title: 'Spiritualité active',
      description: 'Émissions sur la voie soufie, la mission du Mahdi, les enseignements des grands maîtres. Lectures guidées, zikr collectifs, récits mystiques vivants.',
      features: ['Voie soufie et mission du Mahdi', 'Lectures guidées et zikr collectifs', 'Capsules pédagogiques']
    },
    {
      icon: Heart,
      title: 'Humanité en action',
      description: 'Documentaires et reportages sur des initiatives sociales et solidaires. Mise en lumière de parcours de bénévoles, disciples, porteurs d\'humanité.',
      features: ['Documentaires sociaux', 'Témoignages inspirants', 'Initiatives solidaires']
    },
    {
      icon: Briefcase,
      title: 'Entrepreneuriat sacré',
      description: 'Portraits d\'entrepreneurs engagés et alignés. Émissions "Business & Baraka" : créer avec l\'âme, vendre avec éthique.',
      features: ['Portraits d\'entrepreneurs', 'Business & Baraka', 'Éthique et valeurs']
    }
  ];

  const formats = [
    { icon: Play, title: 'Live spirituels', description: 'Zikr, méditations, cercles de lumière' },
    { icon: Mic, title: 'Podcasts mystiques', description: 'Récits de visions, entretiens avec maîtres' },
    { icon: GraduationCap, title: 'Cours vidéo (Alam School)', description: 'Enseignements, sagesses anciennes' },
    { icon: Tv, title: 'Séries & docus', description: 'Contenus immersifs spirituels et sociaux' },
    { icon: BookOpen, title: 'Chroniques Mahdiya', description: 'Capsules sur la mission du Mahdi' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/logo_alam_00.png"
                alt="ALAM TV Logo"
                width={200}
                height={80}
                className="mx-auto h-16 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🌐 ALAM TV
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-4 text-purple-100">
              "Éveiller, éclairer, élever."
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-blue-100">
              Triptyque simple, puissant, clair. Idéal pour branding.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🔮 Vision
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Alam TV est bien plus qu'une simple plateforme de contenu.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                C'est une fenêtre vers l'Invisible, un pont entre les mondes :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300">Entre la connaissance spirituelle et l'action concrète</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300">Entre le service à l'humanité et l'élévation intérieure</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300">Entre l'entrepreneuriat conscient et la sagesse mystique</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-8 font-semibold">
                Notre mission : Transmettre, inspirer et transformer le monde à travers l'Islam, et la mission du Mahdi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🧭 Objectif global
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div
                  key={index}
                  className={`${objective.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${objective.color} mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {index + 1}. {objective.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                      {objective.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {objective.description}
            </p>
          </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🪷 Les 3 Piliers de Alam TV
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {index + 1}. ✨ {pillar.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Star className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🧩 Formats créatifs & vivants
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 mr-4">
                      <Icon className="h-6 w-6 text-white" />
                  </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {format.title}
                  </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {format.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📲 Plateforme Web & App Mobile
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Smartphone className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Application responsive
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Web & mobile pour une expérience optimale sur tous les appareils
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Espace membre
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Accès gratuit et contenu premium pour tous les niveaux
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Intégration écosystème
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nuralink, Nurula, Sakina - Un écosystème complet
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Intégrations
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Nuralink</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Outils mystiques & communautaires</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Nurula</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Objets spirituels (chapelets, livres)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sakina</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Actions humanitaires en live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Model Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              💰 Modèle économique équilibré
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Soutien participatif
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Abonnements et dons pour soutenir la mission
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Waqf numérique
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dons réguliers pour une cause éternelle
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
              <Briefcase className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Revenus éthiques
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Boutique intégrée et programmes premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🌍 Impact attendu
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">Milliers</div>
              <p className="text-gray-600 dark:text-gray-300">d'âmes touchées à travers le monde</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">Liens</div>
              <p className="text-gray-600 dark:text-gray-300">entre spiritualité, société et économie</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">Génération</div>
              <p className="text-gray-600 dark:text-gray-300">de chercheurs, acteurs et bâtisseurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🌀 Pourquoi Alam TV maintenant ?
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-purple-100">
            Parce que le monde a besoin :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">De vérité non altérée</h3>
              <p className="text-purple-100">Contenu authentique et pur</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">D'enseignements incarnés</h3>
              <p className="text-purple-100">Sagesse vivante et pratique</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">D'une nouvelle esthétique du Sacré</h3>
              <p className="text-purple-100">Beauté spirituelle contemporaine</p>
            </div>
          </div>
          <p className="text-lg max-w-4xl mx-auto text-blue-100">
            Alam TV, c'est l'émergence d'un média de lumière, de conscience, et d'espoir, 
            enraciné dans la tradition soufie mais tourné vers l'universel.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Rejoignez notre mission d'éveil, d'éclairage et d'élévation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:tv@alam.org"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                tv@alam.org
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
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

