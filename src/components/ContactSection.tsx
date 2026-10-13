/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  PHONE_DISPLAY, 
  PHONE_RAW, 
  EMAIL_DISPLAY, 
  EMAIL_RAW,
  MASTERS 
} from '../data/electricalData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  Flame, 
  ShieldCheck,
  FileCheck2,
  Calendar
} from 'lucide-react';

interface ContactSectionProps {
  prefilledTask?: string;
  preselectedMasterId?: string;
  onOpenAuditModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  prefilledTask = '', 
  preselectedMasterId = '',
  onOpenAuditModal 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [masterId, setMasterId] = useState(preselectedMasterId);
  const [taskDesc, setTaskDesc] = useState(prefilledTask);
  const [isEmergency, setIsEmergency] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      const ticketNum = 'ЭС-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedTicket(ticketNum);
    }
  };

  return (
    <footer id="contacts" className="bg-[#101417] text-[#f4efe6] pt-16 pb-12 border-t border-[#2b3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#2b3238]">
          {/* Direct Contacts Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="font-tech text-xs tracking-widest uppercase text-[#e8a05c] mb-2 font-bold">
                Связь с бригадой без посредников
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl uppercase font-semibold text-white tracking-wide">
                Контакты и вызов электрика
              </h2>
              <p className="text-sm text-[#b9b1a4] mt-2 leading-relaxed">
                Вы говорите напрямую с инженером или дежурным мастером, а не с колл-центром. 
                Работаем по всей Москве и Московской области.
              </p>
            </div>

            {/* Contacts cards */}
            <div className="space-y-4">
              {/* Primary Phone */}
              <div className="p-4 bg-[#181d21] border border-[#2b3238] flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#e8a05c]/10 border border-[#e8a05c]/30 flex items-center justify-center text-[#e8a05c] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-tech text-xs text-slate-400 uppercase tracking-wider">
                    Единый диспетчер и консультации (8:00–21:00)
                  </div>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="font-heading text-2xl sm:text-3xl font-semibold text-white hover:text-[#e8a05c] transition-colors block mt-0.5"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <div className="font-tech text-[11px] text-slate-400 mt-1">
                    Звонок бесплатный · Консультация мастера 0 ₽
                  </div>
                </div>
              </div>

              {/* 24/7 Emergency Phone */}
              <div className="p-4 bg-[#181d21] border border-[#e8a05c]/60 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#e8a05c] text-[#14181b] flex items-center justify-center font-bold shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-tech text-xs text-[#e8a05c] uppercase tracking-wider font-semibold">
                    Круглосуточный аварийный вызов 24/7
                  </div>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="font-heading text-2xl sm:text-3xl font-semibold text-[#e8a05c] hover:underline block mt-0.5"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <div className="font-tech text-[11px] text-amber-300/80 mt-1">
                    Искрение, запах гари, обесточивание — выезд за 30–45 минут
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-[#181d21] border border-[#2b3238] flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#2b3238] flex items-center justify-center text-slate-300 shrink-0">
                  <Mail className="w-5 h-5 text-[#e8a05c]" />
                </div>
                <div>
                  <div className="font-tech text-xs text-slate-400 uppercase tracking-wider">
                    Электронная почта для смет и проектов:
                  </div>
                  <a
                    href={EMAIL_RAW}
                    className="font-tech text-base sm:text-lg font-semibold text-[#f4efe6] hover:text-[#e8a05c] transition-colors block mt-0.5"
                  >
                    {EMAIL_DISPLAY}
                  </a>
                  <div className="font-tech text-[11px] text-slate-400 mt-1">
                    Присылайте проекты, схемы щитов и ТЗ на расчет
                  </div>
                </div>
              </div>

              {/* Work territory */}
              <div className="p-4 bg-[#181d21] border border-[#2b3238] flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#2b3238] flex items-center justify-center text-slate-300 shrink-0">
                  <MapPin className="w-5 h-5 text-[#e8a05c]" />
                </div>
                <div>
                  <div className="font-tech text-xs text-slate-400 uppercase tracking-wider">
                    Зона выезда мастеров:
                  </div>
                  <div className="font-sans text-sm text-slate-200 mt-1">
                    Москва в пределах МКАД, Новая Москва, города Московской области (Одинцово, Красногорск, Мытищи, Химки, Балашиха, Люберцы, Видное и др. до 50 км).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#181d21] border-2 border-[#2b3238] p-6 sm:p-8">
            {submittedTicket ? (
              <div className="space-y-6 text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="font-tech text-xs text-emerald-400 uppercase tracking-widest font-bold">
                    Заявка успешно зарегистрирована
                  </span>
                  <h3 className="font-heading text-3xl font-semibold uppercase text-white">
                    Номер обращения: {submittedTicket}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Мастер бригады уже получил уведомление и свяжется с вами по указанному телефону <strong>{phone}</strong> в течение 10–15 минут.
                  </p>
                </div>
                <div className="p-4 bg-[#14181b] border border-[#2b3238] text-xs font-tech text-slate-400 max-w-md mx-auto">
                  Если у вас срочная аварийная ситуация, пожалуйста, продублируйте звонком на <a href={`tel:${PHONE_RAW}`} className="text-[#e8a05c] font-bold">{PHONE_DISPLAY}</a>.
                </div>
                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    setPhone('');
                    setName('');
                  }}
                  className="px-6 py-2.5 bg-[#2b3238] hover:bg-slate-700 font-tech text-xs uppercase tracking-wider text-slate-200"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-heading text-2xl uppercase font-semibold text-white">
                    Оставить заявку на выезд или расчет
                  </h3>
                  <p className="text-xs text-slate-400 font-tech mt-1">
                    Заполните форму, и дежурный мастер перезвонит вам с расчетом цены и времени прибытия.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-tech text-xs text-slate-400 block mb-1">
                      Ваше имя:
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван"
                      className="w-full bg-[#14181b] border border-[#4a5258] text-white px-3.5 py-2.5 font-tech text-sm focus:outline-none focus:border-[#e8a05c]"
                    />
                  </div>

                  <div>
                    <label className="font-tech text-xs text-slate-400 block mb-1">
                      Телефон для связи <span className="text-[#e8a05c]">*</span>:
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-[#14181b] border border-[#4a5258] text-white px-3.5 py-2.5 font-tech text-sm focus:outline-none focus:border-[#e8a05c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-tech text-xs text-slate-400 block mb-1">
                      Адрес или район (Москва/МО):
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="м. Сокол / г. Красногорск"
                      className="w-full bg-[#14181b] border border-[#4a5258] text-white px-3.5 py-2.5 font-tech text-sm focus:outline-none focus:border-[#e8a05c]"
                    />
                  </div>

                  <div>
                    <label className="font-tech text-xs text-slate-400 block mb-1">
                      Желаемый мастер бригады:
                    </label>
                    <select
                      value={masterId}
                      onChange={(e) => setMasterId(e.target.value)}
                      className="w-full bg-[#14181b] border border-[#4a5258] text-white px-3.5 py-2.5 font-tech text-xs focus:outline-none focus:border-[#e8a05c]"
                    >
                      <option value="">Любой свободный мастер (быстрее)</option>
                      {MASTERS.map(m => (
                        <option key={m.id} value={m.id}>
                          {m.name} ({m.badge})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-tech text-xs text-slate-400 block mb-1">
                    Что требуется сделать / Описание задачи:
                  </label>
                  <textarea
                    rows={3}
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    placeholder="Например: сборка нового щитка в новостройке, перенос 4 розеток на кухне или замена выбивающего автомата..."
                    className="w-full bg-[#14181b] border border-[#4a5258] text-white p-3 font-tech text-sm focus:outline-none focus:border-[#e8a05c] resize-none"
                  />
                </div>

                {/* Emergency checkbox */}
                <label className="flex items-center gap-3 p-3 bg-[#14181b] border border-[#e8a05c]/40 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEmergency}
                    onChange={(e) => setIsEmergency(e.target.checked)}
                    className="w-4 h-4 accent-[#e8a05c]"
                  />
                  <div className="font-tech text-xs">
                    <span className="text-[#e8a05c] font-bold">Срочный / Аварийный выезд</span>
                    <span className="text-slate-400 block text-[11px]">Искрит, запах гари, пропал свет — выехать немедленно (дежурный экипаж)</span>
                  </div>
                </label>

                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] font-tech text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Отправить заявку мастеру</span>
                  </button>

                  <div className="flex flex-wrap items-center justify-between text-[11px] font-tech text-slate-400">
                    <span>Работаем без предоплаты</span>
                    <span>Консультация бесплатная</span>
                    <span>Гарантия до 3 лет</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-tech text-xs text-slate-500">
          <div>
            © 2026 «Электрики со стажем» · Москва и Московская область.
            <div className="text-[11px] text-slate-600 mt-0.5">
              Телефон: <a href={`tel:${PHONE_RAW}`} className="text-slate-400 hover:text-[#e8a05c]">{PHONE_DISPLAY}</a> · E-mail: <a href={EMAIL_RAW} className="text-slate-400 hover:text-[#e8a05c]">{EMAIL_DISPLAY}</a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenAuditModal}
              className="text-[#e8a05c] hover:underline flex items-center gap-1.5"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Отчет об исправленных ошибках сайта</span>
            </button>
            <a href="#top" className="text-slate-400 hover:text-white">Наверх ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
