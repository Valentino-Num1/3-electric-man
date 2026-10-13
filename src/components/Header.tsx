/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldAlert, 
  Menu, 
  X, 
  Flame, 
  CheckCircle,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_RAW, EMAIL_DISPLAY, EMAIL_RAW } from '../data/electricalData';

interface HeaderProps {
  onOpenAuditModal: () => void;
  onOpenBookingModal: (preselectedMaster?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuditModal, onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top emergency & contact strip */}
      <div className="bg-[#101417] text-[#e9e3d8] font-tech text-xs tracking-wider border-b border-[#2b3238] py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Москва и область · выезд в день обращения · без выходных</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-[#e8a05c]" />
              <a href={EMAIL_RAW} className="text-[#e8a05c] hover:underline hover:text-amber-400 transition-colors">
                {EMAIL_DISPLAY}
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Диспетчер 8:00–21:00:</span>
              <a href={`tel:${PHONE_RAW}`} className="text-[#e8a05c] font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex items-center gap-1.5 bg-[#e8a05c]/10 px-2 py-0.5 rounded border border-[#e8a05c]/30">
              <Flame className="w-3.5 h-3.5 text-[#e8a05c] animate-bounce" />
              <span className="text-amber-300 font-semibold">Аварийный 24/7:</span>
              <a href={`tel:${PHONE_RAW}`} className="text-amber-400 font-bold hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header className="sticky top-0 z-40 bg-[#14181b]/95 backdrop-blur-md border-b border-[#2b3238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3.5 group text-[#f4efe6] no-underline">
            <div className="w-11 h-11 border border-[#e8a05c] text-[#e8a05c] font-tech font-bold text-base flex items-center justify-center bg-[#181d21] group-hover:bg-[#e8a05c] group-hover:text-[#14181b] transition-all shadow-md">
              ЭС
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-xl tracking-wider uppercase leading-tight text-white group-hover:text-[#e8a05c] transition-colors">
                Электрики со стажем
              </span>
              <span className="font-tech text-[10px] tracking-widest uppercase text-[#a09889] leading-none">
                монтаж · ремонт · щитки · 24/7
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 font-tech text-xs tracking-wider text-[#d6cfc2]">
            <a href="#services" className="hover:text-[#e8a05c] transition-colors py-1 border-b border-transparent hover:border-[#e8a05c]">Услуги</a>
            <a href="#price" className="hover:text-[#e8a05c] transition-colors py-1 border-b border-transparent hover:border-[#e8a05c]">Прайс</a>
            <a href="#calculator" className="hover:text-[#e8a05c] text-amber-300 transition-colors py-1 border-b border-transparent hover:border-[#e8a05c] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#e8a05c]" />
              Калькулятор
            </a>
            <a href="#masters" className="hover:text-[#e8a05c] font-semibold text-white transition-colors py-1 border-b border-transparent hover:border-[#e8a05c]">
              Мастера
            </a>
            <a href="#process" className="hover:text-[#e8a05c] transition-colors py-1 border-b border-transparent hover:border-[#e8a05c]">Как работаем</a>
            <a href="#portfolio" className="hover:text-[#e8a05c] transition-colors py-1 border-b border-transparent hover:border-[#e8a05c]">Работы</a>
            <a href="#handbook" className="hover:text-[#e8a05c] transition-colors py-1 border-b border-transparent hover:border-[#e8a05c]">База знаний</a>
            <a href="#contacts" className="hover:text-[#e8a05c] transition-colors py-1 border-b border-transparent hover:border-[#e8a05c]">Контакты</a>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Audit Differences badge button */}
            <button
              onClick={onOpenAuditModal}
              title="Посмотреть отчет об исправленных ошибках исходного сайта"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 bg-slate-800/80 hover:bg-slate-700 text-xs font-tech text-slate-300 border border-slate-700 rounded transition-all"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Отчет доработок</span>
            </button>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${PHONE_RAW}`}
              className="hidden sm:inline-flex items-center gap-2 bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] border border-[#e8a05c] px-4 py-2.5 font-tech text-xs tracking-wider uppercase font-semibold transition-all shadow-md active:translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Вызвать электрика</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-300 hover:text-white bg-[#181d21] border border-[#2b3238] rounded"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#181d21] border-b border-[#2b3238] px-5 py-4 space-y-3 font-tech text-sm">
            <div className="grid grid-cols-2 gap-2 text-slate-200">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#2b3238] rounded text-[#d6cfc2]"
              >
                Услуги
              </a>
              <a 
                href="#price" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#2b3238] rounded text-[#d6cfc2]"
              >
                Прайс
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#2b3238] rounded text-amber-300 font-semibold"
              >
                ⚡ Калькулятор сметы
              </a>
              <a 
                href="#masters" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#2b3238] rounded text-white font-semibold"
              >
                Бригада мастеров
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#2b3238] rounded text-[#d6cfc2]"
              >
                Примеры работ
              </a>
              <a 
                href="#handbook" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#2b3238] rounded text-[#d6cfc2]"
              >
                Справочник кабеля
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#2b3238] rounded text-[#d6cfc2]"
              >
                Вопросы (FAQ)
              </a>
              <a 
                href="#contacts" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#2b3238] rounded text-[#d6cfc2]"
              >
                Контакты
              </a>
            </div>

            <div className="pt-3 border-t border-[#2b3238] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full text-left p-2 text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 rounded flex items-center gap-2"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Список исправлений исходного сайта am108-net</span>
              </button>

              <a
                href={`tel:${PHONE_RAW}`}
                className="w-full text-center bg-[#e8a05c] text-[#14181b] py-3 font-semibold uppercase text-xs tracking-wider"
              >
                Позвонить мастеру: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
