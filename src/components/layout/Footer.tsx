'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'X', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'TikTok', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Structures', href: '/structures' },
    { name: 'Actualités', href: '/news' },
    { name: 'Événements', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const structures = [
    { name: 'ALAM-COM', href: '/contact' },
    { name: 'ALAM ASSISTANCE', href: '/contact' },
    { name: 'ALAM BOUTIQUE', href: '/contact' },
    { name: 'ALAM Langue', href: '/contact' },
    { name: 'AITE', href: '/contact' },
    { name: 'ALAM PROJET', href: '/contact' },
    { name: 'ALAM FINANCE', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo_alam_00.png"
                alt="ALAM Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Alliance des Loyaux et Adeptes de Mahdi - Consortium d'organisations multisectorielles caractérisé par un système d'administration socioéconomique centralisé aux dimensions internationales.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href as "/" | "/about" | "/structures" | "/news" | "/events" | "/contact"}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Structures */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Structures</h3>
            <ul className="space-y-2">
              {structures.map((structure) => (
                <li key={structure.name}>
                  <Link
                    href={structure.href as "/contact"}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {structure.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations de Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Adresse ALAM
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  contact@alam.org
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-300 text-sm">
                Restez informé de nos dernières actualités et événements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors duration-200">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Barre Inférieure */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 ALAM. {t('rights')}.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


