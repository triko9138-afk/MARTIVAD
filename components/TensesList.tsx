'use client';

import { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Clock, 
  RefreshCw, 
  CheckCircle2, 
  History, 
  Zap, 
  Lightbulb,
  Home as HomeIcon,
  BookOpen,
  Languages,
  User
} from 'lucide-react';
import { motion } from 'motion/react';

interface TensesListProps {
  onNavigate: (screen: string) => void;
}

const TENSES = [
  {
    id: 'present-simple',
    name: 'Present Simple',
    description: 'გამოიყენება რეგულარული მოქმედებების გამოსახატავად.',
    formula: 'V / V-s',
    example: '"I read every day" → "მე ყოველდღე ვკითხულობ"',
    icon: Clock,
    color: 'primary'
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    description: 'გამოიყენება ამ მომენტში მიმდინარე მოქმედებისთვის.',
    formula: 'am/is/are + V-ing',
    example: '"I am reading" → "მე ახლა ვკითხულობ"',
    icon: RefreshCw,
    color: 'primary'
  },
  {
    id: 'present-perfect',
    name: 'Present Perfect',
    description: 'გამოიყენება დასრულებული მოქმედებისთვის, რომელსაც კავშირი აქვს აწმყოსთან.',
    formula: 'have/has + V3',
    example: '"I have read the book" → "მე წავიკითხე წიგნი"',
    icon: CheckCircle2,
    color: 'primary'
  },
  {
    id: 'present-perfect-continuous',
    name: 'Perfect Continuous',
    description: 'გამოიყენება მოქმედებისთვის, რომელიც დაიწყო წარსულში და ახლაც გრძელდება.',
    formula: 'have/has + been + V-ing',
    example: '"I have been reading for 2 hours" → "2 საათია ვკითხულობ"',
    icon: History,
    color: 'primary'
  }
];

export default function TensesList({ onNavigate }: TensesListProps) {
  const [activeTab, setActiveTab] = useState('Present');

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft className="text-slate-900 size-6" />
        </button>
        <h1 className="text-xl font-bold tracking-tight text-center flex-1">დროები</h1>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 transition-colors">
          <Search className="text-slate-900 size-6" />
        </button>
      </header>

      {/* Category Tabs */}
      <nav className="bg-white border-b border-slate-200 overflow-x-auto no-scrollbar">
        <div className="flex px-4 gap-6 min-w-max">
          {['Present', 'Past', 'Future', 'Mixed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex flex-col items-center justify-center border-b-2 py-4 px-2 transition-colors ${
                activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-slate-500'
              }`}
            >
              <span className="text-sm font-bold">{tab}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content: Tenses List */}
      <main className="flex-1 p-4 space-y-4 max-w-md mx-auto w-full">
        {TENSES.map((tense, index) => (
          <motion.div 
            key={tense.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
          >
            <div className="w-full bg-primary/10 flex items-center justify-center p-6">
              <div className="text-center">
                <tense.icon className="text-primary size-12 mb-2 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">{tense.name}</h3>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
              <div>
                <p className="text-slate-600 text-sm mb-3">{tense.description}</p>
                <div className="bg-slate-50 rounded-xl p-3 mb-3">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">ფორმულა</p>
                  <p className="text-primary font-mono font-bold text-lg">{tense.formula}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="text-accent size-4 mt-0.5 shrink-0" />
                  <p className="text-sm italic text-slate-500">{tense.example}</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('detail')}
                className="w-full py-3 bg-accent hover:bg-yellow-500 text-slate-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 active:scale-95 shadow-sm"
              >
                <span>ივარჯიშე</span>
                <Zap className="size-4 fill-slate-900" />
              </button>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Bottom Navigation Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 pb-8 pt-3 max-w-md mx-auto">
        <div className="flex items-center justify-around">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1 text-slate-400">
            <HomeIcon className="size-6" />
            <p className="text-[10px] font-bold">მთავარი</p>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <BookOpen className="size-6 fill-primary/20" />
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
