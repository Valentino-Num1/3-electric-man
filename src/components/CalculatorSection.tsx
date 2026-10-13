/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, Shield, Clock, RotateCcw } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_RAW } from '../data/electricalData';

interface CalculatorProps {
  onApplyEstimate: (summary: string, total: number) => void;
}

export const CalculatorSection: React.FC<CalculatorProps> = ({ onApplyEstimate }) => {
  const [propertyType, setPropertyType] = useState<'novostroyka' | 'vtorichka' | 'house'>('novostroyka');
  const [roomPreset, setRoomPreset] = useState<'1k' | '2k' | '3k' | 'house' | 'custom'>('1k');
  
  // Counters
  const [outletsCount, setOutletsCount] = useState<number>(24);
  const [lightsCount, setLightsCount] = useState<number>(8);
  const [chasingMeters, setChasingMeters] = useState<number>(20);
  const [needNewPanel, setNeedNewPanel] = useState<boolean>(true);
  const [needCooktopLine, setNeedCooktopLine] = useState<boolean>(true);
  const [needUnderfloorHeat, setNeedUnderfloorHeat] = useState<boolean>(false);
  const [needCableInput, setNeedCableInput] = useState<boolean>(true);

  // Preset setter
  const applyPreset = (preset: '1k' | '2k' | '3k' | 'house' | 'custom') => {
    setRoomPreset(preset);
    if (preset === '1k') {
      setOutletsCount(24);
      setLightsCount(8);
      setChasingMeters(20);
      setNeedNewPanel(true);
      setNeedCooktopLine(true);
    } else if (preset === '2k') {
      setOutletsCount(38);
      setLightsCount(14);
      setChasingMeters(35);
      setNeedNewPanel(true);
      setNeedCooktopLine(true);
    } else if (preset === '3k') {
      setOutletsCount(52);
      setLightsCount(20);
      setChasingMeters(50);
      setNeedNewPanel(true);
      setNeedCooktopLine(true);
    } else if (preset === 'house') {
      setOutletsCount(70);
      setLightsCount(28);
      setChasingMeters(65);
      setNeedNewPanel(true);
      setNeedCooktopLine(true);
    }
  };

  // Dynamic price calculation
  const calculation = useMemo(() => {
    let base = 0;
    // Outlets & switches
    base += outletsCount * 350;
    // Lights
    base += lightsCount * 400;
    // Chasing
    const chasePricePerMeter = propertyType === 'novostroyka' ? 320 : propertyType === 'vtorichka' ? 250 : 200;
    base += chasingMeters * chasePricePerMeter;
    // Panel
    if (needNewPanel) {
      base += propertyType === 'house' ? 7500 : 4200;
    }
    // High-power cooktop
    if (needCooktopLine) {
      base += 2200;
    }
    // Underfloor heating
    if (needUnderfloorHeat) {
      base += 1500;
    }
    // Input cable
    if (needCableInput) {
      base += 2500;
    }

    // Material estimate
    const estimatedMaterials = Math.round(base * 0.85);
    const estimatedDays = Math.ceil(base / 16000);

    return {
      workCost: base,
      discountedWork: Math.round(base * 0.93), // 7% discount
      materialsEst: estimatedMaterials,
      days: Math.max(1, estimatedDays)
    };
  }, [outletsCount, lightsCount, chasingMeters, needNewPanel, needCooktopLine, needUnderfloorHeat, needCableInput, propertyType]);

  const handleBookEstimate = () => {
    const summary = `Калькулятор: ${roomPreset === '1k' ? '1-к кв' : roomPreset === '2k' ? '2-к кв' : roomPreset === '3k' ? '3-к кв' : 'Объект'}, ${outletsCount} розеток, ${lightsCount} светильников, штробление ${chasingMeters}м. Щит: ${needNewPanel ? 'Да' : 'Нет'}. Оценка работ: ~${calculation.discountedWork} ₽`;
    onApplyEstimate(summary, calculation.discountedWork);
  };

  return (
    <section id="calculator" className="bg-[#181d21] text-[#f4efe6] py-16 sm:py-24 border-b border-[#2b3238] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-10 pb-6 border-b border-[#2b3238]">
          <div className="flex items-center gap-3 font-tech text-xs tracking-widest uppercase text-[#e8a05c]">
            <span className="border border-[#4a5258] px-2 py-0.5">03</span>
            <span>Онлайн-калькулятор сметы</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
                Рассчитайте стоимость электрики за 1 минуту
              </h2>
              <p className="text-sm text-[#b9b1a4] mt-2 max-w-2xl leading-relaxed">
                Интерактивный предварительный расчет без скрытых надбавок. Выберите параметры вашего объекта и получите ориентир стоимости работ и материалов.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#e8a05c]/10 border border-[#e8a05c]/30 px-3 py-1.5 text-xs font-tech text-[#e8a05c]">
              <Sparkles className="w-4 h-4" />
              <span>Скидка 7% при расчете онлайн</span>
            </div>
          </div>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8 bg-[#14181b] border border-[#2b3238] p-6 sm:p-8">
            {/* Step 1: Type of object */}
            <div>
              <label className="font-tech text-xs uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                1. Тип стен и объекта:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'novostroyka', label: 'Новостройка (бетон/монолит)', desc: 'Твердый бетон, требуется алмаз' },
                  { id: 'vtorichka', label: 'Вторичка (кирпич/панель)', desc: 'Замена старой проводки' },
                  { id: 'house', label: 'Загородный дом / Коттедж', desc: 'Дерево, газобетон, открыто/скрыто' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPropertyType(opt.id as any)}
                    className={`p-3.5 text-left border transition-all ${
                      propertyType === opt.id
                        ? 'border-[#e8a05c] bg-[#181d21] shadow-md'
                        : 'border-[#2b3238] hover:border-slate-600 bg-transparent text-slate-400'
                    }`}
                  >
                    <div className="font-heading text-sm uppercase font-semibold text-white">{opt.label}</div>
                    <div className="font-tech text-[11px] text-slate-400 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Room Preset */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-tech text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  2. Быстрый выбор по комнатам:
                </label>
                <button
                  onClick={() => applyPreset('1k')}
                  className="font-tech text-xs text-[#e8a05c] hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Сбросить</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: '1k', label: '1-комнатная (до 42 м²)' },
                  { id: '2k', label: '2-комнатная (45–65 м²)' },
                  { id: '3k', label: '3-комнатная (70–95 м²)' },
                  { id: 'house', label: 'Дом / Коттедж (от 120 м²)' },
                ].map(preset => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => applyPreset(preset.id as any)}
                    className={`px-3 py-2 font-tech text-xs uppercase tracking-wider border transition-colors ${
                      roomPreset === preset.id
                        ? 'bg-[#e8a05c] text-[#14181b] font-bold border-[#e8a05c]'
                        : 'bg-[#181d21] border-[#2b3238] text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Sliders and Counters */}
            <div className="space-y-6 pt-4 border-t border-[#2b3238]">
              {/* Outlets counter */}
              <div>
                <div className="flex justify-between items-center mb-2 font-tech text-xs">
                  <span className="text-slate-300 font-semibold">Розетки и выключатели (точки):</span>
                  <span className="font-bold text-base text-[#e8a05c]">{outletsCount} шт.</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="1"
                  value={outletsCount}
                  onChange={(e) => {
                    setOutletsCount(Number(e.target.value));
                    setRoomPreset('custom');
                  }}
                  className="w-full accent-[#e8a05c] bg-[#2b3238] h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-tech text-slate-500 mt-1">
                  <span>5 точек</span>
                  <span>50 точек</span>
                  <span>100 точек</span>
                </div>
              </div>

              {/* Lighting points counter */}
              <div>
                <div className="flex justify-between items-center mb-2 font-tech text-xs">
                  <span className="text-slate-300 font-semibold">Точки освещения (люстры, споты, бра, ленты):</span>
                  <span className="font-bold text-base text-[#e8a05c]">{lightsCount} шт.</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  step="1"
                  value={lightsCount}
                  onChange={(e) => {
                    setLightsCount(Number(e.target.value));
                    setRoomPreset('custom');
                  }}
                  className="w-full accent-[#e8a05c] bg-[#2b3238] h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-tech text-slate-500 mt-1">
                  <span>2 точки</span>
                  <span>25 точек</span>
                  <span>50 точек</span>
                </div>
              </div>

              {/* Chasing meters */}
              <div>
                <div className="flex justify-between items-center mb-2 font-tech text-xs">
                  <span className="text-slate-300 font-semibold">Штробление стен штроборезом без пыли:</span>
                  <span className="font-bold text-base text-[#e8a05c]">{chasingMeters} м.п.</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={chasingMeters}
                  onChange={(e) => {
                    setChasingMeters(Number(e.target.value));
                    setRoomPreset('custom');
                  }}
                  className="w-full accent-[#e8a05c] bg-[#2b3238] h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-tech text-slate-500 mt-1">
                  <span>0 м (без штроб)</span>
                  <span>60 м</span>
                  <span>120 м</span>
                </div>
              </div>
            </div>

            {/* Step 4: Additional options checkboxes */}
            <div className="space-y-3 pt-4 border-t border-[#2b3238]">
              <span className="font-tech text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-2">
                Дополнительные опции:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 bg-[#181d21] border border-[#2b3238] cursor-pointer hover:border-slate-500 text-xs font-tech">
                  <input
                    type="checkbox"
                    checked={needNewPanel}
                    onChange={(e) => setNeedNewPanel(e.target.checked)}
                    className="w-4 h-4 accent-[#e8a05c]"
                  />
                  <span>Сборка и монтаж нового электрощита</span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#181d21] border border-[#2b3238] cursor-pointer hover:border-slate-500 text-xs font-tech">
                  <input
                    type="checkbox"
                    checked={needCooktopLine}
                    onChange={(e) => setNeedCooktopLine(e.target.checked)}
                    className="w-4 h-4 accent-[#e8a05c]"
                  />
                  <span>Отдельная силовая линия на варочную панель</span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#181d21] border border-[#2b3238] cursor-pointer hover:border-slate-500 text-xs font-tech">
                  <input
                    type="checkbox"
                    checked={needUnderfloorHeat}
                    onChange={(e) => setNeedUnderfloorHeat(e.target.checked)}
                    className="w-4 h-4 accent-[#e8a05c]"
                  />
                  <span>Подключение терморегулятора теплого пола</span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#181d21] border border-[#2b3238] cursor-pointer hover:border-slate-500 text-xs font-tech">
                  <input
                    type="checkbox"
                    checked={needCableInput}
                    onChange={(e) => setNeedCableInput(e.target.checked)}
                    className="w-4 h-4 accent-[#e8a05c]"
                  />
                  <span>Замена вводного кабеля от щитка в подъезде</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result Sticky Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#14181b] border-2 border-[#e8a05c] p-6 space-y-6 shadow-xl">
              <div>
                <span className="font-tech text-xs uppercase tracking-widest text-[#e8a05c] font-bold">
                  Итоговый расчет сметы
                </span>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="font-heading text-4xl sm:text-5xl font-bold text-white">
                    {calculation.discountedWork.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs font-tech">
                  <span className="line-through text-slate-500">{calculation.workCost.toLocaleString('ru-RU')} ₽</span>
                  <span className="text-emerald-400 font-semibold">Экономия 7% онлайн</span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2.5 pt-4 border-t border-[#2b3238] font-tech text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Стоимость работ:</span>
                  <span className="font-bold text-white">{calculation.discountedWork.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Ориентир материалов:</span>
                  <span className="text-slate-300">~{calculation.materialsEst.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Срок выполнения:</span>
                  <span className="text-amber-300 font-semibold">{calculation.days}–{calculation.days + 1} раб. дня</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Предоплата:</span>
                  <span className="text-emerald-400 font-bold">0 ₽ (по факту)</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4 border-t border-[#2b3238] space-y-3">
                <button
                  type="button"
                  onClick={handleBookEstimate}
                  className="w-full py-3.5 px-4 bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] font-tech text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <span>Зафиксировать цену и вызвать мастера</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] font-tech text-slate-500 text-center leading-relaxed">
                  Расчет предварительный. Мастер уточнит все детали по телефону и пришлет точную смету с обоснованием по ПУЭ.
                </p>
              </div>

              <div className="p-3 bg-[#181d21] border border-[#2b3238] text-[11px] font-tech text-slate-400 flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Гарантия на весь комплекс работ — 3 года по договору</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
