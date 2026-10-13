/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES, ServiceItem, PHONE_RAW, PHONE_DISPLAY } from '../data/electricalData';
import { ArrowRight, CheckCircle, Zap, Shield, PhoneCall } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="bg-[#14181b] text-[#f4efe6] py-16 sm:py-24 border-b border-[#2b3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 pb-6 border-b border-[#2b3238]">
          <div className="flex items-center gap-3 font-tech text-xs tracking-widest uppercase text-[#e8a05c]">
            <span className="border border-[#4a5258] px-2 py-0.5">01</span>
            <span>Направления работ</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight">
              Услуги электрика в Москве и области
            </h2>
            <p className="text-sm text-[#b9b1a4] max-w-md">
              От локальной замены выключателя до комплексного монтажа электросети коттеджа по проекту.
            </p>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2b3238] border border-[#2b3238]">
          {SERVICES.map((srv) => {
            const isEmergency = srv.id === 'emergency';
            return (
              <div
                key={srv.id}
                onClick={() => setActiveModalService(srv)}
                className={`p-6 min-h-[220px] flex flex-col justify-between cursor-pointer group transition-all duration-200 ${
                  isEmergency 
                    ? 'bg-[#181d21] border border-[#e8a05c] hover:bg-[#1f252a]' 
                    : 'bg-[#181d21] hover:bg-[#1f252a]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-tech text-xs mb-4">
                    <span className={`font-bold ${isEmergency ? 'text-[#e8a05c]' : 'text-[#a85c26]'}`}>
                      {srv.number}
                    </span>
                    {srv.popular && (
                      <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 bg-[#e8a05c]/10 text-[#e8a05c] border border-[#e8a05c]/30">
                        {isEmergency ? '24/7' : 'Популярно'}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-medium uppercase tracking-wide group-hover:text-[#e8a05c] transition-colors mb-2 text-[#f4efe6]">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#b9b1a4] leading-relaxed line-clamp-3">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2b3238] flex items-center justify-between font-tech text-xs">
                  <span className={`font-semibold ${isEmergency ? 'text-[#e8a05c]' : 'text-[#e8a05c]'}`}>
                    {srv.basePrice}
                  </span>
                  <span className="text-slate-500 group-hover:text-[#e8a05c] group-hover:translate-x-1 transition-all flex items-center gap-1">
                    Подробнее →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#181d21] border-2 border-[#e8a05c] max-w-xl w-full p-6 sm:p-8 space-y-6 text-[#f4efe6] relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white font-tech text-lg p-2"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="font-tech text-xs uppercase tracking-wider text-[#e8a05c]">
                Услуга #{activeModalService.number}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl uppercase font-semibold text-white">
                {activeModalService.title}
              </h3>
              <div className="inline-block font-tech text-sm text-[#e8a05c] font-bold">
                Базовая стоимость: {activeModalService.basePrice}
              </div>
            </div>

            <p className="text-sm text-[#cfc8bb] leading-relaxed">
              {activeModalService.fullDesc}
            </p>

            <div className="p-4 bg-[#14181b] border border-[#2b3238] space-y-2 text-xs font-tech text-slate-300">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Фиксированная цена в смете без скрытых накруток</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#e8a05c]" />
                <span>Официальная гарантия до 3 лет на выполненный монтаж</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectService(activeModalService);
                  setActiveModalService(null);
                }}
                className="flex-1 py-3 px-4 bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] font-tech text-xs font-bold uppercase tracking-wider transition-colors text-center"
              >
                Заказать эту услугу
              </button>
              <a
                href={`tel:${PHONE_RAW}`}
                className="py-3 px-4 border border-[#4a5258] hover:bg-slate-800 text-slate-200 font-tech text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4 text-[#e8a05c]" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
