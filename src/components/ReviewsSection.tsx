/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { REVIEWS, FAQS } from '../data/electricalData';
import { Star, CheckCircle, ChevronDown, MessageSquareQuote } from 'lucide-react';

export const ReviewsAndFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Reviews Section */}
      <section id="reviews" className="bg-[#14181b] text-[#f4efe6] py-16 sm:py-24 border-b border-[#2b3238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12 pb-6 border-b border-[#2b3238]">
            <div className="flex items-center gap-3 font-tech text-xs tracking-widest uppercase text-[#e8a05c]">
              <span className="border border-[#4a5258] px-2 py-0.5">08</span>
              <span>Отзывы клиентов</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
                Что говорят заказчики о нашей работе
              </h2>
              <div className="flex items-center gap-2 font-tech text-xs bg-[#181d21] p-3 border border-[#2b3238]">
                <div className="flex text-amber-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-white font-bold">4.9 / 5.0</span>
                <span className="text-slate-500">на основе 390+ отзывов</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-[#181d21] border border-[#2b3238] p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 text-sm">
                      {'★'.repeat(rev.rating)}
                    </div>
                    <span className="font-tech text-[11px] text-slate-500">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2b3238] font-tech text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{rev.author}</span>
                    {rev.verified && (
                      <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                        <CheckCircle className="w-3 h-3" /> Проверен
                      </span>
                    )}
                  </div>
                  <div className="text-slate-400 text-[11px]">{rev.location}</div>
                  <div className="text-[#e8a05c] text-[11px]">Мастер: {rev.masterName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="bg-[#ece3d2] text-[#16191c] py-16 sm:py-24 border-b border-[#dccfb8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-10 pb-6 border-b border-[#dccfb8] text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 font-tech text-xs tracking-widest uppercase text-[#a85c26]">
              <span className="border border-[#c9b498] px-2 py-0.5 bg-[#f4efe6]">09</span>
              <span>Частые вопросы</span>
            </div>
            <h2 className="font-heading font-medium text-3xl sm:text-4xl uppercase tracking-tight text-[#16191c]">
              Ответы на главные вопросы по электрике
            </h2>
          </div>

          <div className="divide-y divide-[#dccfb8] border-y border-[#dccfb8] bg-[#fffdf8]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading text-lg sm:text-xl font-medium text-[#16191c] hover:text-[#a85c26] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`font-tech text-xl text-[#a85c26] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-[#4a443c] font-sans leading-relaxed pt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
