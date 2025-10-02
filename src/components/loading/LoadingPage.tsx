'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingPageProps {
  onComplete?: () => void;
}

export default function LoadingPage({ onComplete }: LoadingPageProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  const messages = [
    "Chargement de la sagesse d'ALAM...",
    "Préparation de votre voyage spirituel...",
    "Connexion aux valeurs LVS...",
    "Initialisation de la mission du Mahdi...",
    "Préparation de l'Alliance des Loyaux...",
    "Chargement des structures ALAM...",
    "Bienvenue dans l'univers ALAM !"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);

    // Durée de chargement entre 3s et 7s
    const minDuration = 3000; // 3 secondes
    const maxDuration = 7000; // 7 secondes
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(() => {
            onComplete?.();
          }, 500);
          return 100;
        }
        // Ajuster la vitesse pour respecter la durée
        const increment = (100 / duration) * 200; // 200ms = interval
        return prev + increment;
      });
    }, 200);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete, messages.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center z-50">
      <div className="text-center">
        <Image
          src="/images/logo_alam_00.png"
          alt="ALAM Logo"
          width={300}
          height={300}
          className="h-48 w-auto mx-auto animate-pulse"
          priority
        />
      </div>
    </div>
  );
}

