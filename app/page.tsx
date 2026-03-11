'use client';

import { useState } from 'react';
import TensesList from '@/components/TensesList';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Languages, 
  User,
  Home as HomeIcon
} from 'lucide-react';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  if (currentScreen === 'tenses') {
    return <TensesList onNavigate={handleNavigate} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center text-slate-900">MARTIVAD</h1>
          <p className="text-center text-sm text-slate-500 mt-1">English Grammar App</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Feature Cards */}
          <motion.button
            onClick={() => handleNavigate('tenses')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-xl">
                <BookOpen className="size-8" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold">დროები</h2>
                <p className="text-sm text-white/80">Learn English Tenses</p>
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-4 rounded-xl">
                <Languages className="size-8 text-orange-500" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-slate-900">ლექსიკონი</h2>
                <p className="text-sm text-slate-500">Vocabulary</p>
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-4 rounded-xl">
                <User className="size-8 text-green-500" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-slate-900">პროფილი</h2>
                <p className="text-sm text-slate-500">Progress & Settings</p>
              </div>
            </div>
          </motion.button>
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 pb-8 pt-3 max-w-md mx-auto">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-indigo-600">
            <HomeIcon className="size-6" />
            <p className="text-[10px] font-bold">მთავარი</p>
          </button>
          <button 
            onClick={() => handleNavigate('tenses')}
            className="flex flex-col items-center gap-1 text-slate-400"
          >
            <BookOpen className="size-6" />
            <p className="text-[10px] font-bold">დროები</p>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <Languages className="size-6" />
            <p className="text-[10px] font-bold">ლექსიკონი</p>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <User className="size-6" />
            <p className="text-[10px] font-bold">პროფილი</p>
          </button>
        </div>
      </footer>
    </div>
  );
}
