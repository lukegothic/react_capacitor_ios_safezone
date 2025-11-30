import { useState } from 'react';
import { Menu, Home, Search, User, Settings } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 app-container">
      {/* Barra superior */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <button className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors">
          <Menu size={24} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Mi App</h1>
        <button className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors">
          <Settings size={24} className="text-gray-700" />
        </button>
      </header>

      {/* Contenido con scroll */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-4">
          {/* Contenido de ejemplo */}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 active:shadow-md transition-shadow">
              <h3 className="font-medium text-gray-900 mb-2">Elemento {i + 1}</h3>
              <p className="text-sm text-gray-600">
                Este es un contenido de ejemplo que puedes reemplazar con tus propios componentes.
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Barra de navegación inferior */}
      <nav className="bg-white border-t border-gray-200 px-2 py-2 shadow-lg">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg flex-1 transition-colors ${
              activeTab === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 active:bg-gray-100'
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1 font-medium">Inicio</span>
          </button>
          
          <button
            onClick={() => setActiveTab('search')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg flex-1 transition-colors ${
              activeTab === 'search' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 active:bg-gray-100'
            }`}
          >
            <Search size={24} />
            <span className="text-xs mt-1 font-medium">Buscar</span>
          </button>
          
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg flex-1 transition-colors ${
              activeTab === 'profile' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 active:bg-gray-100'
            }`}
          >
            <User size={24} />
            <span className="text-xs mt-1 font-medium">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}