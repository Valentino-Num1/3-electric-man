/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CABLE_CALCULATOR_DATA } from '../data/electricalData';
import { BookOpen, Zap, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

export const CableGuideSection: React.FC = () => {
  const [selectedAppliance, setSelectedAppliance] = useState<number>(0);
  const current = CABLE_CALCULATOR_DATA[selectedAppliance];

  return (
    <section id="handbook" className="bg-[#ece3d2] text-[#16191c] border-b border-[#dccfb8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 pb-6 border-b border-[#dccfb8]">
          <div className="flex items-center gap-3 font-tech text-xs tracking-widest uppercase text-[#a85c26]">
            <span className="border border-[#c9b498] px-2 py-0.5 bg-[#f4efe6]">06</span>
            <span>База знаний и нормы ПУЭ</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#16191c]">
                Интерактивный справочник кабеля и нагрузок
              </h2>
              <p className="text-sm text-[#4a443c] mt-2 max-w-2xl leading-relaxed">
                Знание нормативов — главная защита от пожара. Узнайте, какой кабель и автоматический выключатель требует ваш бытовой прибор по ПУЭ-7.
              </p>
            </div>
            <div className="text-xs font-tech text-[#a85c26] bg-[#fffdf8] border border-[#c9b498] p-2.5">
              Стандарты: ГОСТ 31565-2012 / ПУЭ-7
            </div>
          </div>
        </div>

        {/* Interactive Selector and Specs Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Appliances List (5 cols) */}
          <div className="lg:col-span-5 bg-[#fffdf8] border-2 border-[#16191c] p-4 space-y-2">
            <span className="font-tech text-xs uppercase tracking-wider text-[#736a5e] block px-2 py-1 font-bold">
              Выберите бытовой прибор для проверки:
            </span>
            <div className="space-y-1">
              {CABLE_CALCULATOR_DATA.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedAppliance(idx)}
                  className={`w-full text-left px-3 py-2.5 font-tech text-xs transition-all flex items-center justify-between ${
                    selectedAppliance === idx
                      ? 'bg-[#16191c] text-[#f4efe6] font-bold'
                      : 'hover:bg-[#f0e8d9] text-[#2b2723]'
                  }`}
                >
                  <span className="line-clamp-1">{item.appliance}</span>
                  <span className="text-[11px] font-mono text-amber-600 shrink-0 ml-2">
                    {item.powerKw} кВт
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Technical Requirements Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#fffdf8] border-2 border-[#a85c26] p-6 sm:p-8 space-y-6 shadow-md">
            <div>
              <span className="font-tech text-xs uppercase tracking-wider text-[#a85c26] font-bold">
                Нормативные требования для подключения:
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl uppercase font-semibold text-[#16191c] mt-1">
                {current.appliance}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#ece3d2] border border-[#dccfb8] font-tech text-xs">
              <div>
                <span className="text-[#736a5e] block">Мощность:</span>
                <span className="text-base font-bold text-[#16191c]">{current.powerKw} кВт</span>
              </div>
              <div>
                <span className="text-[#736a5e] block">Рабочий ток:</span>
                <span className="text-base font-bold text-[#a85c26]">~{current.currentA} А</span>
              </div>
              <div>
                <span className="text-[#736a5e] block">Сечение кабеля:</span>
                <span className="text-base font-bold text-[#16191c]">{current.cable}</span>
              </div>
              <div>
                <span className="text-[#736a5e] block">Защита в щите:</span>
                <span className="text-base font-bold text-emerald-800">{current.breaker}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#4a443c] leading-relaxed">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Требование ПУЭ:</strong> Кабель должен быть исключительно медным моножильным с индексом <em>нг-LS</em> (не распространяющий горение, с пониженным дымогазовыделением).
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Частая ошибка неквалифицированных мастеров:</strong> Установка автомата на 25А на кабель сечением 2.5 мм². При перегрузке розетка и кабель расплавятся раньше, чем сработает защита!
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#dccfb8] flex flex-wrap items-center justify-between gap-4 font-tech text-xs">
              <span className="text-[#6e6355]">
                Нужна прокладка отдельной линии для этого прибора?
              </span>
              <a
                href="#contacts"
                className="px-4 py-2 bg-[#a85c26] hover:bg-[#8f4e1f] text-white uppercase font-bold tracking-wider transition-colors"
              >
                Вызвать мастера на монтаж
              </a>
            </div>
          </div>
        </div>

        {/* 3 Safety Knowledge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fffdf8] border border-[#dccfb8] p-5 space-y-3">
            <div className="w-8 h-8 bg-rose-100 border border-rose-300 text-rose-700 flex items-center justify-center font-bold font-tech text-sm">
              !
            </div>
            <h4 className="font-heading text-lg uppercase font-semibold text-[#16191c]">
              Чем опасен старый алюминий?
            </h4>
            <p className="text-xs text-[#52493e] leading-relaxed">
              Алюминиевая проводка советского образца рассчитана на нагрузки до 1.5 кВт на квартиру. Стиралка + чайник создают 4 кВт — алюминий течет в клеммах, искрит и вызывает до 65% бытовых пожаров.
            </p>
          </div>

          <div className="bg-[#fffdf8] border border-[#dccfb8] p-5 space-y-3">
            <div className="w-8 h-8 bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center font-bold font-tech text-sm">
              ⚡
            </div>
            <h4 className="font-heading text-lg uppercase font-semibold text-[#16191c]">
              Зачем нужно реле напряжения?
            </h4>
            <p className="text-xs text-[#52493e] leading-relaxed">
              При отгорании нуля в подъездном стояке напряжение в розетках подскакивает до 380 вольт. Реле напряжения моментально отключает питание и спасает технику стоимостью сотни тысяч рублей.
            </p>
          </div>

          <div className="bg-[#fffdf8] border border-[#dccfb8] p-5 space-y-3">
            <div className="w-8 h-8 bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center font-bold font-tech text-sm">
              🛡
            </div>
            <h4 className="font-heading text-lg uppercase font-semibold text-[#16191c]">
              УЗО типа А vs тип АС
            </h4>
            <p className="text-xs text-[#52493e] leading-relaxed">
              Вся современная электроника (стиральные машины с инвертором, компьютеры) имеет импульсные блоки питания. Дешевое УЗО типа АС не видит утечек постоянного пульсирующего тока, поэтому мы ставим надежный тип А.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
