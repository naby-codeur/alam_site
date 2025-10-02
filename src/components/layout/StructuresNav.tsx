'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import { Building2, Users, BookOpen, Briefcase, GraduationCap, Store, DollarSign, Lightbulb, Globe } from 'lucide-react';

export default function StructuresNav() {
  const t = useTranslations('structures');
  const pathname = usePathname();

  const structures = [
    {
      name: 'ALAM BUSINESS',
      href: '/structures/alambusiness',
      icon: Lightbulb,
      description: 'Innovation et recherche'
    },
    {
      name: 'ALAM TV',
      href: '/structures/alamtv',
      icon: Globe,
      description: 'Coordination internationale'
    },
    {
      name: 'ALAM-COM',
      href: '/structures/alam-com',
      icon: Building2,
      description: 'Communication et médias'
    },
    {
      name: 'ALAM ASSISTANCE',
      href: '/structures/alam-assistance',
      icon: Users,
      description: 'Services d\'assistance'
    },
    {
      name: 'ALAM BOUTIQUE',
      href: '/structures/alam-boutique',
      icon: Store,
      description: 'Commerce et vente'
    },
    {
      name: 'ALAM Langue',
      href: '/structures/alam-langue',
      icon: BookOpen,
      description: 'Formation linguistique'
    },
    {
      name: 'ALAM ITE',
      href: '/structures/aite',
      icon: GraduationCap,
      description: 'Informatique et Technologie Emergente'
    },
    {
      name: 'ALAM PROJET',
      href: '/structures/alam-projet',
      icon: Briefcase,
      description: 'Gestion de projets'
    },
    {
      name: 'ALAM FINANCE',
      href: '/structures/alam-finance',
      icon: DollarSign,
      description: 'Services financiers'
    }
  ];

  return (
    <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="py-4">
        {/* Animation de défilement horizontal continu */}
        <div className="flex animate-scroll">
          {/* Premier set de structures */}
          {structures.map((structure) => {
            const Icon = structure.icon;
            const isActive = pathname === structure.href;
            
            return (
              <Link
                key={`first-${structure.name}`}
                href={structure.href as any}
                className={`
                  group flex flex-col items-center p-3 rounded-lg transition-all duration-200 flex-shrink-0 mx-2
                  ${isActive 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white hover:shadow-md'
                  }
                `}
              >
                <Icon className={`h-6 w-6 mb-2 transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-primary group-hover:text-white'
                }`} />
                <span className="text-xs font-medium text-center leading-tight whitespace-nowrap">
                  {structure.name}
                </span>
              </Link>
            );
          })}
          
          {/* Deuxième set de structures pour l'effet de boucle */}
          {structures.map((structure) => {
            const Icon = structure.icon;
            const isActive = pathname === structure.href;
            
            return (
              <Link
                key={`second-${structure.name}`}
                href={structure.href as any}
                className={`
                  group flex flex-col items-center p-3 rounded-lg transition-all duration-200 flex-shrink-0 mx-2
                  ${isActive 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white hover:shadow-md'
                  }
                `}
              >
                <Icon className={`h-6 w-6 mb-2 transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-primary group-hover:text-white'
                }`} />
                <span className="text-xs font-medium text-center leading-tight whitespace-nowrap">
                  {structure.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
