/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calculator,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_RAW } from '../data/electricalData';

interface HeroProps {
  onOpenBookingModal: (masterId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 6) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setPhoneNumber('');
      }, 5000);
    }
  };

  return (
    <section id="top" className="bg-[#14181b] text-[#f4efe6] border-b border-[#2b3238] relative overflow-hidden">
      {/* Subtle electric grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#e8a05c 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 font-tech text-xs tracking-widest uppercase text-[#e8a05c] bg-[#e8a05c]/10 border border-[#e8a05c]/30 px-3 py-1.5 rounded">
              <span className="w-2 h-2 rounded-full bg-[#e8a05c] animate-pulse" />
              Электрик на дом · Москва и Московская область
            </div>

            <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wide leading-[1.08] text-balance">
              Вызов электрика — <span className="text-[#e8a05c] underline decoration-[#e8a05c]/40 underline-offset-8">приедет мастер, а не оператор</span>
            </h1>

            <p className="text-base sm:text-lg text-[#cfc8bb] font-sans leading-relaxed max-w-2xl">
              Постоянная бригада из 3 профильных мастеров со стажем от 8 до 30+ лет. 
              Розетка и светильник, сборка щита с нуля, полная замена проводки в квартире или доме, 
              аварийный выезд 24/7. Цена фиксируется в договоре до начала работ, оплата строго по факту приёмки.
            </p>

            {/* Callback form */}
            <div className="p-4 sm:p-5 bg-[#181d21] border border-[#2b3238] rounded-none max-w-xl">
              {isSubmitted ? (
                <div className="flex items-center gap-3 p-3 bg-emerald-950/40 border border-emerald-600/40 text-emerald-300 font-tech text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold">Заявка принята!</span> Мастер перезвонит на номер {phoneNumber} в течение 10–15 минут.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="flex-1 bg-[#14181b] border border-[#4a5258] text-[#f4efe6] px-4 py-3 font-tech text-sm focus:outline-none focus:border-[#e8a05c] transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] px-6 py-3 font-tech font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap active:scale-95 shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Перезвоним за 15 минут</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-tech text-[#8a8378]">
                    <span>Консультация по телефону — бесплатно.</span>
                    <span className="text-[#e8a05c]/90">Работаем без предоплаты</span>
                  </div>
                </form>
              )}
            </div>

            {/* Quick interactive shortcuts */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 bg-[#2b3238] hover:bg-slate-700 text-[#f4efe6] px-4 py-2.5 border border-[#4a5258] font-tech text-xs tracking-wider uppercase transition-colors"
              >
                <Calculator className="w-4 h-4 text-[#e8a05c]" />
                <span>Рассчитать смету онлайн</span>
              </a>

              <a
                href="#masters"
                className="inline-flex items-center gap-2 bg-[#181d21] hover:bg-slate-800 text-slate-300 px-4 py-2.5 border border-[#2b3238] font-tech text-xs tracking-wider uppercase transition-colors"
              >
                <span>Выбрать мастера бригады</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 4 Trust Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#2b3238] border border-[#2b3238] pt-2">
              <div className="bg-[#181d21] p-4 sm:p-5">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#e8a05c]">30+</div>
                <div className="font-tech text-[10.5px] uppercase tracking-wider text-[#b9b1a4] mt-1.5 leading-snug">
                  лет опыта у старшего инженера
                </div>
              </div>

              <div className="bg-[#181d21] p-4 sm:p-5">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#e8a05c]">24/7</div>
                <div className="font-tech text-[10.5px] uppercase tracking-wider text-[#b9b1a4] mt-1.5 leading-snug">
                  аварийный выезд без праздников
                </div>
              </div>

              <div className="bg-[#181d21] p-4 sm:p-5">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#e8a05c]">0 ₽</div>
                <div className="font-tech text-[10.5px] uppercase tracking-wider text-[#b9b1a4] mt-1.5 leading-snug">
                  предоплата и выезд на расчет
                </div>
              </div>

              <div className="bg-[#181d21] p-4 sm:p-5">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#e8a05c]">ПУЭ-7</div>
                <div className="font-tech text-[10.5px] uppercase tracking-wider text-[#b9b1a4] mt-1.5 leading-snug">
                  смета по ГОСТ и нормам безопасности
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Sidebar Column */}
          <div className="lg:col-span-4 space-y-5">
            {/* 24/7 Emergency Card */}
            <div className="border-2 border-[#e8a05c] bg-[#181d21] p-6 relative shadow-xl shadow-amber-950/20">
              <div className="absolute -top-3 right-4 bg-[#e8a05c] text-[#14181b] font-tech text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                Круглосуточно
              </div>

              <div className="flex items-center gap-2 font-tech text-xs tracking-wider uppercase text-[#e8a05c] mb-3">
                <Flame className="w-4 h-4 text-[#e8a05c] animate-pulse" />
                <span>Аварийный выезд · 24/7</span>
              </div>

              <a
                href={`tel:${PHONE_RAW}`}
                className="block font-heading font-semibold text-2xl sm:text-3xl text-[#f4efe6] hover:text-[#e8a05c] transition-colors mb-3 tracking-wide"
              >
                {PHONE_DISPLAY}
              </a>

              <p className="text-sm text-[#b9b1a4] leading-relaxed mb-4">
                Выбило вводной автомат, искрит в щитке, пропало электричество, пахнет гарью — звоните в любое время суток. Дежурный экипаж на авто готов к выезду.
              </p>

              <div className="space-y-2 pt-3 border-t border-[#2b3238] font-tech text-xs text-[#cfc8bb]">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Дежурный мастер свободен: Марат</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Среднее время прибытия: 35 минут</span>
                </div>
              </div>

              <a
                href={`tel:${PHONE_RAW}`}
                className="mt-5 w-full block text-center bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] py-3 font-tech text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Срочный звонок мастеру
              </a>
            </div>

            {/* Quality & Safety Guarantee Card */}
            <div className="border border-[#2b3238] bg-[#181d21]/60 p-5 space-y-3">
              <div className="font-tech text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Наши гарантии и допуски:</span>
              </div>

              <ul className="font-sans text-xs text-[#b9b1a4] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#e8a05c] font-bold font-tech">•</span>
                  <span>Действующие группы допуска по электробезопасности III и IV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8a05c] font-bold font-tech">•</span>
                  <span>Официальный договор с гарантией на монтаж до 3 лет</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8a05c] font-bold font-tech">•</span>
                  <span>Работаем пылесосом Hilti M-класса — без грязи и строительной пыли</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
