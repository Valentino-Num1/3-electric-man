/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MASTERS, 
  Master, 
  PHONE_DISPLAY, 
  PHONE_RAW 
} from '../data/electricalData';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Wrench, 
  Star, 
  ArrowRight, 
  PhoneCall, 
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';

interface MastersSectionProps {
  onSelectMaster: (master: Master) => void;
}

export const MastersSection: React.FC<MastersSectionProps> = ({ onSelectMaster }) => {
  const [selectedMasterId, setSelectedMasterId] = useState<string>('yuri');
  const [showCertModal, setShowCertModal] = useState<boolean>(false);

  const activeMaster = MASTERS.find(m => m.id === selectedMasterId) || MASTERS[0];

  return (
    <section id="masters" className="bg-[#f4efe6] text-[#16191c] border-t border-[#dccfb8] border-b border-[#dccfb8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#dccfb8]">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-tech text-xs tracking-widest uppercase text-[#a85c26]">
              <span className="border border-[#c9b498] px-2 py-0.5 bg-[#ece3d2]">04</span>
              <span>Постоянная бригада</span>
            </div>
            <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#16191c]">
              Мастера со стажем — <span className="text-[#a85c26]">без субподряда</span>
            </h2>
            <p className="text-base text-[#4a443c] max-w-2xl leading-relaxed">
              Мы не агрегатор и не биржа заявок. У нас работают три штатных специалиста с подтвержденными допусками Ростехнадзора. 
              Вы заранее знаете, кто именно приедет на ваш объект и с кого спросить за качество.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => setShowCertModal(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#ece3d2] hover:bg-[#e3d8c2] border border-[#c9b498] font-tech text-xs tracking-wider uppercase text-[#16191c] transition-colors"
            >
              <Award className="w-4 h-4 text-[#a85c26]" />
              <span>Допуски и аттестация</span>
            </button>
          </div>
        </div>

        {/* Master Cards Grid (3 masters) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {MASTERS.map((master) => {
            const isSelected = selectedMasterId === master.id;
            return (
              <article
                key={master.id}
                onClick={() => setSelectedMasterId(master.id)}
                className={`relative bg-[#fffdf8] border cursor-pointer transition-all duration-200 flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#a85c26] shadow-xl ring-2 ring-[#a85c26]/20'
                    : 'border-[#16191c]/80 hover:border-[#a85c26]/80 hover:shadow-md'
                }`}
              >
                {/* Status banner */}
                <div className="absolute top-3 left-3 z-20">
                  <span className={`inline-flex items-center gap-1.5 font-tech text-[10px] tracking-wider uppercase px-2.5 py-1 font-semibold shadow-sm ${
                    master.status === 'emergency' 
                      ? 'bg-rose-900 text-rose-100 border border-rose-700'
                      : 'bg-[#16191c] text-[#f4efe6]'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${master.status === 'emergency' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                    {master.badge}
                  </span>
                </div>

                {/* Rating badge */}
                <div className="absolute top-3 right-3 z-20">
                  <div className="flex items-center gap-1 bg-[#16191c]/90 text-amber-300 px-2 py-0.5 text-xs font-tech font-bold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{master.rating.toFixed(1)}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({master.reviewCount})</span>
                  </div>
                </div>

                {/* Photo or Portrait Area (Replacing the original broken placeholder 'фото - план') */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3.5] bg-slate-900 overflow-hidden border-b border-[#16191c]/80">
                  <img
                    src={master.photoUrl}
                    alt={master.name}
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16191c] via-[#16191c]/30 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="font-tech text-[10px] text-amber-300 uppercase tracking-widest mb-0.5">
                      {master.admissionGroup}
                    </div>
                    <h3 className="font-heading font-semibold text-2xl uppercase tracking-wide leading-none text-[#f4efe6]">
                      {master.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="font-tech text-xs tracking-wider uppercase text-[#a85c26] font-semibold mb-2">
                      {master.role}
                    </div>
                    
                    <p className="text-sm text-[#4a443c] leading-relaxed mb-4 line-clamp-3">
                      {master.bio}
                    </p>

                    {/* Specialized tags */}
                    <div className="space-y-1.5 pt-2 border-t border-[#e2d9c9]">
                      <span className="text-[11px] font-tech text-[#736a5e] uppercase tracking-wider block">
                        Ключевые направления:
                      </span>
                      <ul className="space-y-1 text-xs text-[#2b2723]">
                        {master.specialization.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#a85c26] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Master Card Action */}
                  <div className="pt-4 border-t border-[#e2d9c9] space-y-2">
                    <div className="text-[11px] font-tech text-[#5e5549] flex items-center justify-between">
                      <span>Объектов сдано:</span>
                      <span className="font-bold text-[#16191c]">{master.completedCount}+</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectMaster(master);
                      }}
                      className="w-full py-2.5 px-3 bg-[#16191c] hover:bg-[#a85c26] text-[#f4efe6] font-tech text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group-hover:bg-[#a85c26]"
                    >
                      <span>Выбрать {master.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Selected Master Detail Dossier */}
        <div className="bg-[#fffdf8] border-2 border-[#16191c] p-6 sm:p-8 relative">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/3 space-y-4">
              <div className="aspect-[4/3] rounded bg-slate-900 overflow-hidden relative border border-[#16191c]">
                <img
                  src={activeMaster.photoUrl}
                  alt={activeMaster.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#16191c]/90 text-white p-2 font-tech text-xs flex justify-between items-center">
                  <span>Статус:</span>
                  <span className="text-emerald-400 font-semibold">{activeMaster.statusText}</span>
                </div>
              </div>

              <div className="p-3 bg-[#ece3d2] border border-[#dccfb8] text-xs font-tech space-y-1 text-[#4a443c]">
                <div><strong className="text-[#16191c]">Образование:</strong> {activeMaster.education}</div>
                <div><strong className="text-[#16191c]">Квалификация:</strong> {activeMaster.admissionGroup}</div>
                <div><strong className="text-[#16191c]">Стаж в профессии:</strong> {activeMaster.experienceYears} лет</div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-6">
              <div>
                <div className="inline-block font-tech text-xs text-[#a85c26] uppercase tracking-widest font-bold mb-1">
                  Подробное досье мастера
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl uppercase font-semibold text-[#16191c]">
                  {activeMaster.name} — {activeMaster.role}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#4a443c] leading-relaxed">
                  {activeMaster.bio}
                </p>
              </div>

              {/* Specializations & Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#dccfb8]">
                <div>
                  <h4 className="font-tech text-xs font-bold uppercase tracking-wider text-[#16191c] mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#a85c26]" />
                    <span>Специализация:</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#4a443c]">
                    {activeMaster.specialization.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#a85c26] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-tech text-xs font-bold uppercase tracking-wider text-[#16191c] mb-3 flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-[#a85c26]" />
                    <span>Используемый инструмент:</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#4a443c]">
                    {activeMaster.tools.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#a85c26] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 border-t border-[#dccfb8] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-tech text-[#6e6355]">
                  <span>Прямая связь с бригадой: </span>
                  <a href={`tel:${PHONE_RAW}`} className="text-[#a85c26] font-bold hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => onSelectMaster(activeMaster)}
                    className="px-6 py-3 bg-[#a85c26] hover:bg-[#8f4e1f] text-white font-tech text-xs uppercase font-bold tracking-wider shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Вызвать {activeMaster.name.split(' ')[0]} на объект</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification & Admission Modal */}
      {showCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#fffdf8] border-2 border-[#16191c] max-w-xl w-full p-6 sm:p-8 space-y-5 text-[#16191c]">
            <div className="flex items-center justify-between border-b border-[#dccfb8] pb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#a85c26]" />
                <h4 className="font-heading text-xl uppercase font-semibold">
                  Допуски и регламенты безопасности
                </h4>
              </div>
              <button
                onClick={() => setShowCertModal(false)}
                className="text-[#6e6355] hover:text-black font-tech text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-[#4a443c] leading-relaxed">
              <p>
                Все мастера бригады имеют подтвержденные группы допуска по электробезопасности, ежегодно подтверждаемые в комиссии Ростехнадзора:
              </p>
              <ul className="space-y-2 text-xs font-tech bg-[#ece3d2] p-4 border border-[#dccfb8]">
                <li>• <strong>IV группа (до 1000В)</strong>: право организации и инспектирования работ, проектирование распределительных систем.</li>
                <li>• <strong>III группа (до 1000В)</strong>: право единоличного производства электромонтажных работ в электроустановках жилых и общественных зданий.</li>
                <li>• <strong>Поверка приборов</strong>: измерители сопротивления изоляции и тепловизоры внесены в Госреестр СИ и имеют действующие свидетельства поверки.</li>
              </ul>
              <p className="text-xs text-[#736a5e]">
                Все работы строго соответствуют требованиям ПУЭ 7-го издания, СНиП 3.05.06-85, ГОСТ Р 50571.5.52-2011 и СП 256.1325800.2016.
              </p>
            </div>

            <div className="pt-3 border-t border-[#dccfb8] flex justify-end">
              <button
                onClick={() => setShowCertModal(false)}
                className="px-5 py-2.5 bg-[#16191c] text-[#f4efe6] font-tech text-xs uppercase tracking-wider hover:bg-[#a85c26]"
              >
                Понятно, закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
