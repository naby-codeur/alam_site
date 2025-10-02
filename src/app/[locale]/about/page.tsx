'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe, 
  Award, 
  Calendar,
  BookOpen,
  Building,
  Star,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Shield,
  Sparkles,
  Crown,
  Zap,
  TrendingUp,
  DollarSign,
  Factory,
  Lightbulb,
  Network,
  Scale,
  Lock,
  Home,
  Gavel,
  Handshake,
  MapPin,
  Leaf,
  Wrench,
  UserCheck,
  BookOpenCheck,
  HeartHandshake,
  Layers,
  Users2,
  Brain,
  Puzzle,
  BookOpen as BookCheck,
  RotateCcw,
  TrendingUp as Growth,
  Clock,
  Sparkles as Aura,
  BookOpen as BookIcon,
  Scroll,
  Star as StarIcon,
  Compass
} from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    {
      icon: Briefcase,
      title: 'Labeur',
      description: 'Le travail assidu constant pour l\'atteinte de nos objectifs. Le travail et l\'effort sont au cœur de notre engagement pour la cause de l\'Imam Mahdi.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Shield,
      title: 'Vertu',
      description: 'Le comportement exemplaire à l\'image de l\'Imam Al Mahdi. Nous nous efforçons de maintenir les plus hauts standards éthiques et moraux dans toutes nos actions.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Sparkles,
      title: 'Spiritualité',
      description: 'Le respect de nos obligations religieuses et spirituelles. Notre engagement spirituel guide nos décisions et oriente notre vision du monde.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Création officielle de l\'Organisation',
      description: 'Alam est créé en juin 2018 à Médina Cheikh après approbation de Seydi Mouhamed EL Cheikh.',
      icon: Building,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      year: '2019',
      title: 'Structuration et début de rédaction de la LOA',
      description: 'Structuration progressive de l\'organisation et début de rédaction du Livre d\'Or d\'ALAM.',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600'
    },
    {
      year: '2020',
      title: 'Promotion et arrimage des organismes',
      description: 'Promotion de l\'organisation et arrimage des différents organismes affiliés.',
      icon: Users,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      year: '2021',
      title: 'Organisation du cadre événementiel de Alam',
      description: 'Mise en place et organisation du cadre événementiel de l\'organisation.',
      icon: Calendar,
      color: 'from-orange-500 to-red-600'
    },
    {
      year: '2022',
      title: 'Plan de Réforme Organisationnelle',
      description: 'Élaboration et mise en œuvre du plan de réforme organisationnelle.',
      icon: Target,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      year: '2023',
      title: 'Instauration d\'un règlement intérieur et parution du livret du membre',
      description: 'Mise en place du règlement intérieur et publication du livret du membre.',
      icon: Award,
      color: 'from-emerald-500 to-teal-600'
    },
  ];

  const objectives = [
    {
      category: 'Économie et Développement',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      items: [
        {
          number: 1,
          title: 'Modèle économique transfrontalier',
          description: 'Développer un modèle économique transfrontalier adapté aux réalités géoéconomiques pour les intérêts de l\'organisation'
        },
        {
          number: 2,
          title: 'Climat d\'investissement transfrontalier',
          description: 'Développer un climat d\'investissement transfrontalier adapté à la politique de l\'organisation'
        },
        {
          number: 3,
          title: 'Secteurs d\'activités diversifiés',
          description: 'Développer tous les secteurs d\'activités suivant nos politiques afin d\'élargir et faire prospérer l\'organisation'
        },
        {
          number: 4,
          title: 'Production industrialisée globalisée',
          description: 'Veiller à une production industrialisée globalisée de pôles communautaires'
        },
        {
          number: 5,
          title: 'Promotion de l\'entreprenariat',
          description: 'Développer et promouvoir l\'entreprenariat tout secteur confondu'
        },
        {
          number: 6,
          title: 'Opportunités de travail diversifiées',
          description: 'Développer des opportunités de travail diversifiées et élargies'
        }
      ]
    },
    {
      category: 'Innovation et Administration',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      items: [
        {
          number: 7,
          title: 'Intégration des innovations',
          description: 'Intégrer les innovations et progrès propices au développement interne de l\'organisation'
        },
        {
          number: 8,
          title: 'Écosystème administratif interconnecté',
          description: 'Développer un écosystème administratif interconnecté transfrontalier en interne'
        },
        {
          number: 9,
          title: 'Système juridique adaptatif',
          description: 'Établir un système juridique conforme aux réalités internes de l\'organisation et adaptable aux juridictions externes'
        },
        {
          number: 10,
          title: 'Justice communautaire transfrontalière',
          description: 'Repenser et réadapter une justice communautaire transfrontalière'
        },
        {
          number: 11,
          title: 'Organisation de sécurité privée',
          description: 'Mettre en place une organisation de sécurité privée transfrontalière'
        }
      ]
    },
    {
      category: 'Développement Social et Culturel',
      icon: HeartHandshake,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      items: [
        {
          number: 12,
          title: 'Adaptation des mœurs',
          description: 'Aider à l\'adaptation des mœurs selon le modèle de l\'Imam Mahdi'
        },
        {
          number: 13,
          title: 'Pérennisation de l\'organisation',
          description: 'Créer, prioriser, promouvoir, assurer et pérenniser l\'organisation avec les politiques établies'
        },
        {
          number: 14,
          title: 'Valorisation des cadres et membres',
          description: 'Promouvoir et valoriser les cadres et membres de l\'organisation'
        },
        {
          number: 15,
          title: 'Patrimoine identitaire',
          description: 'Promouvoir l\'ouverture tout en valorisant, développant et restituant le patrimoine identitaire de la Dahiratoul Imane'
        },
        {
          number: 16,
          title: 'Accession aux cadres cultuels',
          description: 'Faciliter l\'accession aux cadres cultuels aux lieux propices'
        }
      ]
    },
    {
      category: 'Paix et Stabilité',
      icon: HeartHandshake,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      items: [
        {
          number: 17,
          title: 'Cultiver la paix et la stabilité',
          description: 'Cultiver la paix, la stabilité et la sécurité'
        },
        {
          number: 18,
          title: 'Réduction de la pauvreté',
          description: 'Réduire la pauvreté en général'
        }
      ]
    }
  ];

  const identityComponents = [
    {
      name: 'AURA',
      icon: Aura,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'L\'atmosphère spirituelle et distinctive qui émane de l\'organisation'
    },
    {
      name: 'VALEURS',
      icon: Heart,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      description: 'Les principes fondamentaux LVS qui guident nos actions'
    },
    {
      name: 'STRATÉGIE',
      icon: Target,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      description: 'La planification et la direction vers nos objectifs'
    },
    {
      name: 'COMPÉTENCES',
      icon: Brain,
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'L\'expertise et l\'innovation au service de la mission'
    },
    {
      name: 'SYNERGIE',
      icon: Puzzle,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      description: 'La collaboration et l\'effort combiné des membres'
    },
    {
      name: 'NORMES',
      icon: Scale,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Les règles, standards et justice organisationnelle'
    },
    {
      name: 'SYMBOLES',
      icon: RotateCcw,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'Les représentations durables et la continuité'
    },
    {
      name: 'ÉVOLUTION',
      icon: Growth,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      description: 'La croissance et le développement dans le temps'
    },
    {
      name: 'HISTOIRE',
      icon: Clock,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      description: 'Le patrimoine, les événements passés et l\'héritage'
    }
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
              Découvrez l'histoire, la mission et la vision d'ALAM
            </p>
          </div>
        </div>
      </section>

      {/* Signification Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mb-6">
              <Scroll className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📜 Signification d'ALAM
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Découvrez la profondeur symbolique et mystique du nom et du logo d'ALAM
            </p>
          </div>

          {/* Le Nom Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 mb-4">
                <BookIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                🔹 Le Nom
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Référentiel Mystique */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 mr-4">
                    <StarIcon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Référentiel Mystique
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Alam a pour fondement ésotérique les 3 lettres coraniques <strong>« Alif » « Lam » « Mim »</strong> 
                  faisant partie des lettres codées du Coran.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Elles constituent l'assise mystique de l'organisation dans la mission du Mahdi.
                </p>
              </div>

              {/* Référentiel Ordinaire */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mr-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Référentiel Ordinaire
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Alam est inspiré par translittération du nom arabe <strong>« halam »</strong> 
                  qui signifie <em>monde</em>.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Référence faite au caractère universel de l'Imam Mahdi, guide et sauveur tant attendu 
                  en cette fin des temps selon la prophétie mohammadienne.
                </p>
              </div>

              {/* Référentiel Siglé */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mr-4">
                    <Compass className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Référentiel Siglé
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Elle signifie par siglaison :
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-4">
                  <p className="text-lg font-bold text-orange-700 dark:text-orange-300 text-center">
                    Alliance des Loyaux Adeptes du Mahdi<br/>
                    <span className="text-2xl">(A.L.A.M.)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Le Logo Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                🔹 Le Logo
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Logo Display */}
              <div className="text-center">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                  <div className="mb-6">
                    <Image
                      src="/images/logo_alam_00.png"
                      alt="Logo ALAM"
                      width={600}
                      height={400}
                      className="mx-auto h-48 w-auto"
                      priority
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Structure Visuelle
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Le logo ALAM est représenté par le nom de l'organisation accolé à une feuille de myrte 
                    formée en calligraphie arabe par les 3 lettres de l'alphabet <strong>ALIF LAM MIM</strong>.
                  </p>
                </div>
              </div>

              {/* Référentiel Mystique du Logo */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 mr-4">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Référentiel Mystique
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Le <strong>« ALIF LAM MIM »</strong> présent dans le logo est aussi le phonème du nom 
                      de l'organisation <strong>« [ALM] »</strong>.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Cette connotation est très représentative car démontrant deux aspects d'un seul et unique nom, 
                      comme les deux faces d'une même pièce.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      La feuille de myrte du logo est un symbole très caractéristique dans les prédictions prophétiques, 
                      car faisant partie de la description faite par le Saint Prophète sur les traits physiques de l'Imam Mahdi : 
                      <em>une cicatrice sur la joue près de l'œil gauche ressemblant à une feuille de myrte</em>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-primary to-primary/80 mb-6">
              <Crown className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Mission et Objectif
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ALAM a pris ces symboles comme identité visuelle afin de garder bien visible le principe selon lequel 
              sa mission et l'ensemble de ses objectifs concourent à une seule et unique chose : 
              <strong> la satisfaction du guide Absolu par principe et par excellence Seydi Mouhamed El Cheikh, 
              l'Imam Al Mahdi al Mountazar ou le Qutboul Aqatboul Kabir</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="inline-flex p-3 rounded-lg bg-blue-500 mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('mission')}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  ALAM est un consortium d'organisations multisectorielles caractérisé par un système d'administration socioéconomique centralisé aux dimensions internationales.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  L'organisation œuvre pour la réalisation de toute opération se rattachant, directement ou indirectement, en tout ou en partie, à ses objectifs afin de faciliter, favoriser ou développer par ordre de priorité l'ambition principale de l'organisation en constante conformité au plan et volonté de l'Imam Mahdi.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="inline-flex p-3 rounded-lg bg-green-500 mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('vision')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Être le leader mondial dans l'administration socioéconomique centralisée, en servant de modèle pour l'expansion et la pérennité de la cause de l'Imam Mahdi à travers le monde.
              </p>
            </div>

            {/* Values */}
            <div className="text-center lg:text-left">
              <div className="inline-flex p-3 rounded-lg bg-purple-500 mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('values')}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nos valeurs fondamentales reposent sur les principes de la LVS : Labeur, Vertu et Spiritualité, qui guident notre engagement quotidien.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
                  Les membres de l'organisation se voient comme des serviteurs de l'Imam Mahdi loyaux à sa personne, sa cause et ses ambitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Les Trois Fondamentaux LVS
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les principes LVS (Labeur, Vertu, Spiritualité) constituent le fondement de notre organisation et caractérisent les trois fondamentaux dans l'organisation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`${value.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${value.color} mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Member Commitment Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              👥 Engagement des Membres
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              La vision et l'engagement de nos membres au service de l'Imam Mahdi
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Crown className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Serviteurs de l'Imam Mahdi
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Les membres de l'organisation se voient comme des serviteurs de l'Imam Mahdi loyaux à sa personne, sa cause et ses ambitions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Engagement Total
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Un engagement constant et total envers la mission de l'Imam Mahdi, guidé par les principes LVS et la volonté divine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Conformité au Plan Divin
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Toutes nos actions sont en constante conformité au plan et à la volonté de l'Imam Mahdi, dans l'accomplissement de sa mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Loyauté et Service
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  "Nous sommes les serviteurs dévoués de l'Imam Mahdi, engagés corps et âme dans l'accomplissement de sa mission divine et la réalisation de ses ambitions pour l'humanité."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Objectifs d'ALAM
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Les 18 objectifs stratégiques d'ALAM organisés par domaines d'intervention pour la réalisation de notre mission
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {objectives.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className={`${category.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                      <CategoryIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((objective, objectiveIndex) => (
                      <div
                        key={objectiveIndex}
                        className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-start">
                          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-bold mr-3 flex-shrink-0`}>
                            {objective.number}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                              {objective.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                              {objective.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vision Globale des Objectifs
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ces 18 objectifs stratégiques d'ALAM couvrent tous les aspects du développement : économique, social, culturel, 
              administratif et sécuritaire. Ils visent à créer un écosystème transfrontalier complet au service de la mission 
              de l'Imam Mahdi et de l'épanouissement des communautés.
            </p>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🆔 Identité d'ALAM
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              L'identité organisationnelle d'ALAM : un ensemble cohérent de valeurs, symboles et pratiques qui constituent son "âme" et son "ADN"
            </p>
          </div>

          {/* Identity Image */}
          <div className="mb-16 text-center">
            <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <Image
                src="/images/identite.png"
                alt="Composants de l'Identité ALAM"
                width={600}
                height={600}
                className="mx-auto rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Identity Components Grid */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Les 9 Composants de l'Identité
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {identityComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <div
                    key={index}
                    className={`${component.bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${component.color} mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {component.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Identity Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🧬 L'ADN Organisationnel
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  L'identité de l'organisation repose à la fois sur son principe, son histoire, ses projets, sa culture, son image, 
                  ce qui constitue son « âme » ou son « ADN ». Autant de dimensions qui se traduisent concrètement à travers ses valeurs, 
                  sa vision, sa stratégie économique et sociale.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🌟 Positionnement Unique
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  C'est ainsi qu'ALAM peut se positionner comme entité unique, faisant la différence sur un espace. 
                  L'organisation rassemble des individus dans un cadre commun inspirant leurs manières de penser et d'agir 
                  pour l'évolution de ses objectifs.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🤝 Sentiment d'Appartenance
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Avec d'autres conditions liées au leadership exercé, elle crée et renforce le sentiment d'appartenance, 
                  génère de l'engagement individuel et collectif et améliore, de ce fait, la stabilité du climat de travail. 
                  L'identité organisationnelle d'ALAM donne du SENS et contribue à la construction de l'identité individuelle.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🔄 Processus d'Identification
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Les identités individuelles et collectives sont imbriquées et prennent appui les unes sur les autres : 
                  la construction de l'identité organisationnelle d'ALAM passe par un processus d'identifications successives, 
                  par lequel sont progressivement intériorisées les valeurs, normes, symboles, conduites, etc.
                </p>
              </div>
            </div>
          </div>

          {/* Culture Organizationnelle */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="text-center">
              <Layers className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🏗️ Culture Organisationnelle
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Constituée de "l'empilement ou la combinaison mal jointe de pratiques et de règles qui sont de nature, 
                d'époque, d'inspiration différentes voire opposées". Cette culture organisationnelle ne présente sans doute pas 
                l'aspect d'un bloc monolithique et stable, mais constitue un moyen privilégié de régulation de son fonctionnement interne, 
                car toute organisation implique l'existence de valeurs communes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📜 Contexte de Création
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Les fondements et la genèse de l'organisation ALAM
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Building className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Création en juin 2018
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Alam est une organisation créée en juin 2018 à Médina Cheikh après approbation de Seydi Mouhamed EL Cheikh.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Mission du Mahdi
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Alam s'est configuré selon de mures réflexions menées sur la mission du Mahdi, ses réalités, ses objectifs et les probabilités mesurable de son avenir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Travail assidu des membres
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Alam s'est constitué progressivement par le travail assidue de membres engagés. Ils ont contribué à sa structuration afin de combler tout vide organisationnel constaté avec des défis ambitieux à l'image de la mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <div className="text-center">
                <Star className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Vision Fondatrice
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  "Une organisation structurée selon les réalités de la mission du Mahdi, 
                  avec des défis ambitieux et une vision claire de l'avenir."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📅 Moments Marqués
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les étapes importantes de notre développement depuis 2018
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 to-primary/60"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${milestone.color} mr-4`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-primary font-bold text-lg">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('organization')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Structure organisationnelle d'ALAM et de ses entités affiliées
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Image
                  src="/images/logo_alam_00.png"
                  alt="ALAM Logo"
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  ALAM
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Alliance des Loyaux et Adeptes de Mahdi
              </p>
              
              {/* Image de l'organigramme */}
              <div className="mb-8">
                <Image
                  src="/images/organigramme_alam.png"
                  alt="Organigramme ALAM"
                  width={800}
                  height={600}
                  className="w-[60vw] max-w-full h-auto rounded-lg shadow-md mx-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'ALAM-COM',
                'ALAM ASSISTANCE',
                'ALAM BOUTIQUE',
                'ALAM Langue',
                'ALAM ITE',
                'ALAM BUSINESS',
                'ALAM TV',
                'ALAM PROJET',
                'ALAM FINANCE'
              ].map((structure, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {structure}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez notre mission
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Découvrez comment vous pouvez contribuer à la cause de l'Imam Mahdi et participer à nos initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/structures"
              className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Users className="mr-2 h-5 w-5" />
              Découvrir nos structures
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}