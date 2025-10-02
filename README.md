# ALAM - Alliance des Loyaux et Adeptes de Mahdi

## 📋 Description du Projet

**ALAM** est un site web officiel pour l'Alliance des Loyaux et Adeptes de Mahdi, un consortium d'organisations multisectorielles caractérisé par un système d'administration socioéconomique centralisé aux dimensions internationales. Le site présente les différentes structures de l'organisation, leurs missions, et facilite l'engagement communautaire.

## 🎯 Mission

Développer et assurer un cadre d'administration propice à l'expansion et la pérennité de la cause de l'imam mahdi, fondé sur les principes de la LVS (Labeur, Vertu, Spiritualité).

## 🏗️ Structures ALAM

Le consortium ALAM comprend sept structures spécialisées :

- **ALAM-COM** : Communication et diffusion de l'information
- **ALAM ASSISTANCE** : Assistance et soutien aux membres
- **ALAM BOUTIQUE** : Boutique officielle et commerce
- **ALAM Langue** : Enseignement et promotion des langues
- **AITE** : Informatique & Technologie Émergente
- **ALAM PROJET** : Gestion et développement de projets
- **ALAM FINANCE** : Services financiers et gestion des fonds

## 🚀 Technologies Utilisées

### Framework Principal
- **Next.js 15.5.4** - Framework React avec App Router
- **React 19.1.0** - Bibliothèque UI
- **TypeScript 5** - Typage statique

### Styling & UI
- **Tailwind CSS 4.1.13** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI modernes
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes vectorielles

### Internationalisation
- **next-intl 4.3.9** - Gestion multilingue
- **Support RTL** - Direction droite-à-gauche pour l'arabe

### Outils de Développement
- **PostCSS** - Traitement CSS
- **Autoprefixer** - Préfixes CSS automatiques
- **ESLint** - Linting du code
- **Turbopack** - Bundler rapide

## 🌍 Langues Supportées

- 🇫🇷 **Français** (par défaut)
- 🇺🇸 **English**
- 🇸🇦 **العربية** (avec support RTL)
- 🇪🇸 **Español**
- 🇮🇹 **Italiano**
- 🇩🇪 **Deutsch** (Allemand)
- 🇵🇹 **Português** (Portugais)
- 🇹🇷 **Türkçe** (Turc)
- 🇳🇱 **Nederlands** (Néerlandais)
- 🇷🇺 **Русский** (Russe)
- 🇨🇳 **中文** (Chinois)
- 🇯🇵 **日本語** (Japonais)
- 🇮🇳 **हिन्दी** (Hindi)
- 🇮🇩 **Bahasa Indonesia** (Indonésien)

## 📁 Structure du Projet

```
alam/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Pages internationalisées
│   │   │   ├── about/         # Page À propos
│   │   │   ├── contact/       # Page Contact
│   │   │   ├── events/        # Page Événements
│   │   │   ├── news/          # Page Actualités
│   │   │   ├── resources/     # Page Ressources
│   │   │   ├── structures/    # Page Structures
│   │   │   ├── layout.tsx     # Layout principal
│   │   │   ├── page.tsx       # Page d'accueil
│   │   │   └── globals.css    # Styles globaux
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx         # Layout racine
│   │   └── page.tsx           # Redirection vers /fr
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # En-tête avec navigation
│   │   │   └── Footer.tsx     # Pied de page
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx  # Gestion des thèmes
│   │   └── ui/
│   │       └── button.tsx     # Composant bouton
│   ├── i18n/
│   │   ├── messages/          # Fichiers de traduction
│   │   │   ├── fr.json
│   │   │   ├── en.json
│   │   │   ├── ar.json
│   │   │   ├── es.json
│   │   │   └── it.json
│   │   ├── routing.ts         # Configuration de routage
│   │   └── request.ts         # Configuration des requêtes
│   ├── lib/
│   │   └── utils.ts           # Utilitaires
│   └── middleware.ts          # Middleware d'internationalisation
├── public/                    # Assets statiques
├── tailwind.config.ts         # Configuration Tailwind
├── next.config.ts            # Configuration Next.js
├── tsconfig.json             # Configuration TypeScript
├── components.json           # Configuration shadcn/ui
├── postcss.config.mjs        # Configuration PostCSS
└── package.json              # Dépendances du projet
```

## 🛠️ Installation et Configuration

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation

1. **Cloner le repository**
```bash
git clone <url-du-repository>
cd alam
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📜 Scripts Disponibles

```bash
# Développement avec Turbopack
npm run dev

# Build de production avec Turbopack
npm run build

# Démarrer le serveur de production
npm run start
```

## 🎨 Fonctionnalités

### Interface Utilisateur
- ✅ **Design Responsive** - Optimisé pour tous les appareils
- ✅ **Mode Sombre/Clair** - Basculement de thème
- ✅ **Animations Fluides** - Transitions avec Framer Motion
- ✅ **Accessibilité** - Conforme aux standards WCAG

### Internationalisation
- ✅ **5 Langues** - Français, Anglais, Arabe, Espagnol, Italien
- ✅ **Support RTL** - Direction droite-à-gauche pour l'arabe
- ✅ **Routage Intelligent** - URLs localisées automatiquement
- ✅ **Détection de Langue** - Redirection automatique

### Performance
- ✅ **Optimisation Next.js** - Images, fonts, et code optimisés
- ✅ **Turbopack** - Bundling ultra-rapide
- ✅ **SEO Optimisé** - Métadonnées et structure sémantique
- ✅ **Lazy Loading** - Chargement différé des composants

## 🔧 Configuration

### Variables d'Environnement
Créer un fichier `.env.local` :
```env
# Configuration de base
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=ALAM

# Configuration email (optionnel)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Configuration analytics (optionnel)
NEXT_PUBLIC_GA_ID=
```

### Personnalisation des Couleurs
Modifier `src/app/[locale]/globals.css` pour ajuster la palette ALAM :
```css
:root {
  --alam-blue: #1e40af;
  --alam-light-blue: #3b82f6;
  --alam-green: #059669;
  /* ... autres couleurs */
}
```

## 📱 Pages Disponibles

- **/** - Page d'accueil avec présentation générale
- **/about** - À propos d'ALAM (mission, vision, valeurs)
- **/structures** - Présentation des 7 structures
- **/news** - Actualités et communiqués
- **/events** - Événements et activités
- **/resources** - Publications et documents
- **/contact** - Formulaire de contact

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Autres Plateformes
- **Netlify** - Compatible avec Next.js
- **AWS Amplify** - Déploiement automatique
- **Railway** - Déploiement simple
- **DigitalOcean App Platform** - Infrastructure gérée

## 🤝 Contribution

### Guidelines de Développement
1. **Code Style** - Utiliser Prettier et ESLint
2. **Commits** - Messages en français, format conventionnel
3. **Branches** - `feature/nom-fonctionnalite`
4. **Tests** - Tester sur toutes les langues supportées

### Ajout d'une Nouvelle Langue
1. Créer `src/i18n/messages/[code].json`
2. Ajouter la locale dans `src/i18n/routing.ts`
3. Mettre à jour `src/middleware.ts`
4. Tester la traduction complète

### Ajout d'une Nouvelle Page
1. Créer le dossier dans `src/app/[locale]/`
2. Ajouter `page.tsx` avec les métadonnées
3. Mettre à jour les traductions
4. Ajouter la navigation dans `Header.tsx`

## 📞 Support

- **Email** : contact@alam.org
- **Documentation** : [Lien vers la documentation]
- **Issues** : [Lien vers le système de tickets]

## 📄 Licence

© 2024 ALAM. Tous droits réservés.

---

**Développé avec ❤️ pour la cause de l'Imam Mahdi**