import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Liste de toutes les locales supportées
  locales: ['fr', 'en', 'ar', 'es', 'it', 'de', 'pt', 'tr', 'nl', 'ru', 'zh', 'ja', 'hi', 'id'],

  // Utilisée quand aucune locale ne correspond
  defaultLocale: 'fr',

  // L'objet `pathnames` contient des paires de chemins internes et
  // externes. Basé sur la locale, les chemins externes
  // sont réécrits vers les chemins internes partagés.
  pathnames: {
    // Si toutes les locales utilisent le même chemin,
    // un seul chemin externe peut être fourni.
    '/': '/',
    '/about': '/about',
    '/structures': '/structures',
    '/structures/alam-com': '/structures/alam-com',
    '/structures/alam-assistance': '/structures/alam-assistance',
    '/structures/alam-boutique': '/structures/alam-boutique',
    '/structures/alam-langue': '/structures/alam-langue',
    '/structures/aite': '/structures/aite',
    '/structures/alam-projet': '/structures/alam-projet',
    '/structures/alam-finance': '/structures/alam-finance',
    '/structures/alambusiness': '/structures/alambusiness',
    '/structures/alamtv': '/structures/alamtv',
    '/news': '/news',
    '/events': '/events',
    '/resources': '/resources',
    '/contact': '/contact',
    '/privacy': '/privacy',
    '/terms': '/terms'
  }
});

// Enveloppes légères autour des APIs de navigation de Next.js
// qui prendront en compte la configuration de routage
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);


