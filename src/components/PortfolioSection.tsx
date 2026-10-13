/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_CASES, PortfolioCase } from '../data/electricalData';
import { MapPin, Calendar, Clock, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<PortfolioCase>(PORTFOLIO_CASES[0]);

  return (
    <section id="portfolio" className="bg-[#14181b] text-[#f4efe6] py-16 sm:py-24 border-b border-[#2b3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 pb-6 border-b border-[#2b3238]">
          <div className="flex items-center gap-3 font-tech text-xs tracking-widest uppercase text-[#e8a05c]">
            <span className="border border-[#4a5258] px-2 py-0.5">05</span>
            <span>Примеры выполненных объектов</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
                Реальные объекты нашей бригады
              </h2>
              <p className="text-sm text-[#b9b1a4] mt-2 max-w-2xl leading-relaxed">
                Фотографируем и документируем каждый объект: расключение распределительных щитов, трассировку штроб, сварку распределительных коробок.
              </p>
            </div>
            <div className="font-tech text-xs text-[#e8a05c] bg-[#e8a05c]/10 border border-[#e8a05c]/30 px-3 py-1.5">
              Все объекты сданы по ПУЭ и ГОСТ
            </div>
          </div>
        </div>

        {/* Case selector buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {PORTFOLIO_CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className={`p-4 text-left border transition-all ${
                selectedCase.id === item.id
                  ? 'border-[#e8a05c] bg-[#181d21] shadow-lg'
                  : 'border-[#2b3238] hover:border-slate-600 bg-slate-900/40 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {item.tags.map(t => (
                  <span key={t} className="text-[10px] font-tech uppercase px-2 py-0.5 bg-[#2b3238] text-[#e8a05c]">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-lg uppercase font-semibold text-white line-clamp-1">
                {item.title}
              </h3>
              <div className="font-tech text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#e8a05c]" />
                <span className="line-clamp-1">{item.location}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Case Deep Dive */}
        <div className="bg-[#181d21] border-2 border-[#2b3238] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-tech text-xs text-[#e8a05c] uppercase tracking-wider font-bold">
                  Кейс: {selectedCase.objectType}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl uppercase font-semibold text-white mt-1">
                  {selectedCase.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-3 font-tech text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#e8a05c]" /> {selectedCase.location}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#e8a05c]" /> Срок: {selectedCase.duration}
                  </span>
                  <span className="text-emerald-400 font-bold">
                    Ответственный мастер: {selectedCase.masterName}
                  </span>
                </div>
              </div>

              {/* Before and After comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#14181b] border border-rose-900/40">
                  <div className="font-tech text-xs font-bold uppercase text-rose-400 mb-2">
                    Исходная проблема:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedCase.beforeDesc}
                  </p>
                </div>

                <div className="p-4 bg-[#14181b] border border-emerald-900/40">
                  <div className="font-tech text-xs font-bold uppercase text-emerald-400 mb-2">
                    Что было сделано:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedCase.afterDesc}
                  </p>
                </div>
              </div>

              {/* Materials used */}
              <div>
                <div className="font-tech text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Использованные сертифицированные материалы:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.materials.map((mat, i) => (
                    <span key={i} className="font-tech text-xs bg-[#14181b] border border-[#2b3238] px-3 py-1 text-slate-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#e8a05c]" />
                      <span>{mat}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Summary Sidebar */}
            <div className="lg:col-span-5 bg-[#14181b] border border-[#2b3238] p-6 space-y-5">
              <div className="space-y-1">
                <span className="font-tech text-xs uppercase tracking-wider text-slate-400">Стоимость работ под ключ:</span>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#e8a05c]">
                  {selectedCase.price.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-[11px] font-tech text-slate-500">
                  Фиксированная цена по договору без доплат
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-[#2b3238] font-tech text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Гарантия 3 года по договору</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e8a05c]" />
                  <span>Проверка тепловизором под нагрузкой</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e8a05c]" />
                  <span>Исполнительная схема трасс заказчику</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contacts"
                  className="w-full block text-center py-3 px-4 bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] font-tech text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Заказать аналогичный проект
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
