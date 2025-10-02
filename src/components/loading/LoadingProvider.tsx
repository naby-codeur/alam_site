'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingPage from './LoadingPage';

interface LoadingProviderProps {
  children: React.ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Simuler un temps de chargement initial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000 + Math.random() * 2000); // 3-5 secondes

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Réinitialiser le loading lors du changement de page
    if (!isLoading) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000 + Math.random() * 1000); // 1-2 secondes pour les changements de page

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading && isLoading) {
    return <LoadingPage onComplete={handleLoadingComplete} />;
  }

  return <>{children}</>;
}



