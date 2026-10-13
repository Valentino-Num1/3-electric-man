/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, ShieldAlert, Award, FileText } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Заявка',
      desc: 'Звонок на +7 495 123-4567, онлайн-форма или фото/видео щитка в мессенджер'
    },
    {
      num: '02',
      title: 'Оценка',
      desc: 'Точный ориентир сметы за 15 минут по фото или бесплатный выезд мастера на замер'
    },
    {
      num: '03',
      title: 'Смета и договор',
      desc: 'Детальный расчет по работам и материалам, нормативное обоснование по ПУЭ и ГОСТ'
    },
    {
      num: '04',
      title: 'Чистый монтаж',
      desc: 'Без предоплаты за работу. Штробление без пыли, лазерный уровень, качественный инструмент'
    },
    {
      num: '05',
      title: 'Приемка и гарантия',
      desc: 'Проверка линий под нагрузкой, тепловизионный замер контактов, оплата по факту, гарантия 3 года'
    }
  ];

  return (
    <section id="process" className="bg-[#14181b] text-[#f4efe6] py-16 sm:py-24 border-b border-[#2b3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-12 pb-6 border-b border-[#2b3238]">
          <div className="flex items-center gap-3 font-tech text-xs tracking-widest uppercase text-[#e8a05c]">
            <span className="border border-[#4a5258] px-2 py-0.5">07</span>
            <span>Регламент работы</span>
          </div>
          <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            Как проходит заказ от звонка до сдачи
          </h2>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#2b3238] border border-[#2b3238] mb-12">
          {steps.map((st) => (
            <div key={st.num} className="bg-[#181d21] p-6 flex flex-col justify-between min-h-[200px]">
              <div className="font-heading font-semibold text-4xl text-[#e8a05c] mb-4">
                {st.num}
              </div>
              <div>
                <h3 className="font-tech text-sm font-semibold uppercase tracking-wider text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#b9b1a4] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Discounts & Social Benefit Banner */}
        <div id="discounts" className="bg-[#181d21] border border-[#2b3238] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-[#2b3238] pb-4 md:pb-0 md:pr-6">
              <div className="font-heading text-2xl text-[#e8a05c] font-bold">Скидка 10%</div>
              <h4 className="font-tech text-xs uppercase tracking-wider text-white font-semibold">Пенсионерам и ветеранам</h4>
              <p className="text-xs text-slate-400">Предоставляем постоянную скидку на все виды электромонтажных работ при наличии удостоверения.</p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-[#2b3238] pb-4 md:pb-0 md:pr-6">
              <div className="font-heading text-2xl text-[#e8a05c] font-bold">Скидка 7%</div>
              <h4 className="font-tech text-xs uppercase tracking-wider text-white font-semibold">Новоселам новостроек</h4>
              <p className="text-xs text-slate-400">Действует в течение 12 месяцев с момента подписания акта приема-передачи квартиры в ЖК.</p>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-2xl text-[#e8a05c] font-bold">0 ₽</div>
              <h4 className="font-tech text-xs uppercase tracking-wider text-white font-semibold">Схема щита и проект трасс</h4>
              <p className="text-xs text-slate-400">Бесплатно при заказе комплексной замены электропроводки под ключ от 28 000 ₽.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
