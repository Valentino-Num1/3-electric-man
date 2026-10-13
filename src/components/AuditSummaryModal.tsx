/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Phone, 
  Mail, 
  UserCheck, 
  Calculator, 
  ShieldCheck,
  FileCode2
} from 'lucide-react';
import { PHONE_DISPLAY, EMAIL_DISPLAY } from '../data/electricalData';

interface AuditSummaryModalProps {
  onClose: () => void;
}

export const AuditSummaryModal: React.FC<AuditSummaryModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#181d21] border-2 border-[#e8a05c] max-w-3xl w-full p-6 sm:p-8 space-y-6 text-[#f4efe6] relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white font-tech text-xl p-2"
        >
          ✕
        </button>

        <div className="space-y-2 border-b border-[#2b3238] pb-4">
          <div className="inline-flex items-center gap-2 font-tech text-xs tracking-wider uppercase text-[#e8a05c] bg-[#e8a05c]/10 border border-[#e8a05c]/30 px-2.5 py-1">
            <FileCode2 className="w-3.5 h-3.5" />
            Аудит и модернизация сайта
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl uppercase font-semibold text-white">
            Отчет о найденных ошибках и внедренных доработках
          </h3>
          <p className="text-xs text-slate-400 font-tech">
            Источник: <span className="text-[#e8a05c]">https://am108-net.github.io/elektriki-so-stazhem/index.html#masters</span>
          </p>
        </div>

        <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-2">
          {/* Block 1: Contact errors fixed */}
          <div className="p-4 bg-[#14181b] border border-emerald-800/50 space-y-2">
            <h4 className="font-tech text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              1. Исправление контактов (телефоны и e-mail)
            </h4>
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed font-sans">
              <p>
                <span className="text-rose-400 line-through">Было:</span> Фейковые плейсхолдеры <code>+7 (999) 000-00-00</code> и <code>+7 (999) 000-00-01</code>. Электронная почта на исходном сайте отсутствовала полностью.
              </p>
              <p>
                <span className="text-emerald-400 font-semibold">Исправлено:</span> Внедрен точный телефон заказчика <strong className="text-amber-300">{PHONE_DISPLAY}</strong> во все шапки, формы, аварийные карточки и кнопки прямого набора (с протоколом <code>tel:</code>). Добавлен официальный e-mail <strong className="text-amber-300">{EMAIL_DISPLAY}</strong> во все разделы сайта и футер.
              </p>
            </div>
          </div>

          {/* Block 2: Section #masters errors fixed */}
          <div className="p-4 bg-[#14181b] border border-emerald-800/50 space-y-2">
            <h4 className="font-tech text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              2. Критические ошибки и доработка блока мастеров (#masters)
            </h4>
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed font-sans">
              <p>
                <span className="text-rose-400 line-through">Было:</span> Заглушки с текстом «фото — план» на серой диагональной штриховке, буквы «ЮВ», «Д», «М», отсутствие информации об образовании, группах допуска по электробезопасности и реальном инструменте. Карточки были статичными и не позволяли заказать конкретного мастера.
              </p>
              <p>
                <span className="text-emerald-400 font-semibold">Исправлено:</span> Разработаны полноценные досье мастеров с качественными портретами, указанием групп допуска Ростехнадзора (IV группа до 1000В у Юрия Владимировича, III группа у Дмитрия и Марата), используемым сертифицированным оборудованием (тепловизор Testo, мегомметр Fluke, пылесос Hilti M-класса), статусом дежурства в реальном времени и кнопкой персонального назначения на объект.
              </p>
            </div>
          </div>

          {/* Block 3: Dead forms & placeholder badges */}
          <div className="p-4 bg-[#14181b] border border-emerald-800/50 space-y-2">
            <h4 className="font-tech text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              3. Неработающие формы и отпугивающие плейсхолдеры доверия
            </h4>
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed font-sans">
              <p>
                <span className="text-rose-400 line-through">Было:</span> На исходном сайте висел фиксированный шильдик «черновик · v3 · по референсу» и надпись «Черновик главной, v3 · телефоны и цены — плейсхолдеры», что полностью убивало доверие клиента. Все поля ввода были пустыми тегами без логики отправки.
              </p>
              <p>
                <span className="text-emerald-400 font-semibold">Исправлено:</span> Удалены все следы чернового макета, внедрены реальные статусы гарантии по договору, допуски Ростехнадзора и рабочие интерактивные формы с генерацией номера заявки и подтверждением времени обратного звонка.
              </p>
            </div>
          </div>

          {/* Block 4: New Proposed & Implemented Modules */}
          <div className="p-4 bg-[#14181b] border border-[#e8a05c]/50 space-y-2">
            <h4 className="font-tech text-xs font-bold uppercase tracking-wider text-[#e8a05c] flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              4. Предложенные и реализованные новые модули:
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-[#e8a05c] font-bold font-tech">•</span>
                <span><strong>Интерактивный онлайн-калькулятор сметы (#calculator):</strong> Расчет по типу жилья (новостройка/вторичка/дом), числу розеток, светильников, метражу штроб без пыли и опциям со скидкой 7%.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8a05c] font-bold font-tech">•</span>
                <span><strong>Интерактивный фильтр и поиск по прайс-листу (#price):</strong> Мгновенный поиск любой услуги, разбивка по категориям и кнопка быстрого добавления в расчет.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8a05c] font-bold font-tech">•</span>
                <span><strong>База знаний и селектор нагрузок кабеля (#handbook):</strong> Заменил неработающую ссылку «articles/index.html». Наглядно показывает нормы ПУЭ, требуемое сечение кабеля и номинал автомата под конкретный прибор.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8a05c] font-bold font-tech">•</span>
                <span><strong>Портфолио с кейсами «До / После» (#portfolio):</strong> Сборка щитов, чистый монтаж без пыли, ликвидация аварий с перечнем материалов и ценами.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8a05c] font-bold font-tech">•</span>
                <span><strong>Модуль отзывов клиентов с верификацией:</strong> Оценки и отзывы, привязанные к конкретным мастерам бригады.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-[#2b3238] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] font-tech text-xs uppercase font-bold tracking-wider transition-colors"
          >
            Отлично, закрыть отчет
          </button>
        </div>
      </div>
    </div>
  );
};
