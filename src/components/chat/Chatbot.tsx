'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Assalamu alaikum ! Je suis Alamiste, votre assistant virtuel ALAM. Comment puis-je vous aider aujourd'hui ?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const responses = {
    greeting: [
      "Wa alaikum salam ! Bienvenue sur le site d'ALAM.",
      "Salam ! Je suis là pour vous accompagner dans votre découverte d'ALAM.",
      "Assalamu alaikum ! Comment puis-je vous aider à mieux connaître ALAM ?"
    ],
    structures: [
      "ALAM compte 9 structures spécialisées : ALAM-COM, ALAM ASSISTANCE, ALAM BOUTIQUE, ALAM Langue, ALAM ITE, ALAM PROJET, ALAM FINANCE, ALAM BUSINESS, et ALAM TV.",
      "Chaque structure d'ALAM a un rôle spécifique dans notre mission. Voulez-vous en savoir plus sur une structure particulière ?",
      "Nos structures travaillent en synergie pour réaliser les 18 objectifs stratégiques d'ALAM."
    ],
    mission: [
      "ALAM est un consortium d'organisations multisectorielles caractérisé par un système d'administration socioéconomique centralisé aux dimensions internationales.",
      "Notre mission est de servir la cause de l'Imam Mahdi à travers nos valeurs LVS : Labeur, Vertu et Spiritualité.",
      "ALAM œuvre pour la réalisation de toute opération se rattachant à ses objectifs en conformité avec le plan de l'Imam Mahdi."
    ],
    values: [
      "Nos valeurs fondamentales reposent sur les principes LVS : Labeur (travail assidu), Vertu (comportement exemplaire), et Spiritualité (respect des obligations religieuses).",
      "Les membres d'ALAM se voient comme des serviteurs de l'Imam Mahdi, loyaux à sa personne, sa cause et ses ambitions.",
      "Ces valeurs guident notre engagement quotidien et orientent toutes nos actions."
    ],
    contact: [
      "Vous pouvez nous contacter via notre page contact ou par email. Nos équipes sont là pour répondre à vos questions.",
      "Pour toute information spécifique, n'hésitez pas à consulter nos différentes structures selon vos besoins.",
      "ALAM est présent sur plusieurs plateformes pour vous accompagner dans vos démarches."
    ],
    default: [
      "Je comprends votre question. Pouvez-vous être plus spécifique ? Je peux vous aider avec des informations sur nos structures, notre mission, nos valeurs, ou vous orienter vers nos services.",
      "Intéressant ! Pourriez-vous me donner plus de détails ? Je suis là pour vous guider dans votre découverte d'ALAM.",
      "Je suis là pour vous aider ! Vous pouvez me poser des questions sur ALAM, nos structures, notre mission, ou nos services."
    ]
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('salam') || message.includes('bonjour') || message.includes('hello')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    }
    if (message.includes('structure') || message.includes('entité') || message.includes('organisation')) {
      return responses.structures[Math.floor(Math.random() * responses.structures.length)];
    }
    if (message.includes('mission') || message.includes('objectif') || message.includes('but')) {
      return responses.mission[Math.floor(Math.random() * responses.mission.length)];
    }
    if (message.includes('valeur') || message.includes('principe') || message.includes('lvs')) {
      return responses.values[Math.floor(Math.random() * responses.values.length)];
    }
    if (message.includes('contact') || message.includes('joindre') || message.includes('contacter')) {
      return responses.contact[Math.floor(Math.random() * responses.contact.length)];
    }
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simuler une réponse après un délai
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Avatar Zahra */}
              <div className="relative">
                {/* Cercle de fond avec effet de glow */}
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center border-3 border-white shadow-lg relative overflow-hidden">
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-full"></div>
                  
                  {/* Visage de Zahra */}
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full relative z-10">
                    {/* Yeux expressifs */}
                    <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-white rounded-full shadow-sm"></div>
                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full shadow-sm"></div>
                    {/* Pupilles */}
                    <div className="absolute top-1.5 left-1.5 w-0.5 h-0.5 bg-amber-900 rounded-full"></div>
                    <div className="absolute top-1.5 right-1.5 w-0.5 h-0.5 bg-amber-900 rounded-full"></div>
                    
                    {/* Sourire chaleureux */}
                    <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-2.5 h-1 border-b-2 border-white rounded-full"></div>
                    
                    {/* Touche de rouge à lèvres */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-amber-300 rounded-full opacity-60"></div>
                  </div>
                </div>
                
                {/* Voile élégant avec plis */}
                <div className="absolute -top-2 -left-2 w-14 h-10 bg-gradient-to-b from-white/95 to-white/80 rounded-full opacity-90 shadow-sm">
                  {/* Plis du voile */}
                  <div className="absolute top-1 left-2 w-1 h-6 bg-white/60 rounded-full"></div>
                  <div className="absolute top-1 right-2 w-1 h-6 bg-white/60 rounded-full"></div>
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-white/40 rounded-full"></div>
                </div>
                
                {/* Petite étoile dorée (symbole ALAM) */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Zahra</h3>
                <p className="text-xs text-green-100">Alamiste • Assistant ALAM</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


