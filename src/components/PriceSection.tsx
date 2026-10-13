/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { PRICE_LIST, PriceItem, PHONE_RAW, PHONE_DISPLAY } from '../data/electricalData';
import { Search, Plus, Check, Filter, Info, ShieldCheck } from 'lucide-react';

interface PriceSectionProps {
  onAddToEstimate?: (item: PriceItem) => void;
  onOpenBooking: (prefillInfo: string) => void;
}

export const PriceSection: React.FC<PriceSectionProps> = ({ onAddToEstimate, onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = ['Все', 'Розетки и свет', 'Электрощиты', 'Штробление и кабель', 'Техника и ввод', 'Комплекс под ключ'];

  const filteredItems = useMemo(() => {
    return PRICE_LIST.filter(item => {
      const matchCategory = selectedCategory === 'Все' || item.category === selectedCategory;
      const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleAdd = (item: PriceItem) => {
    setAddedIds(prev => ({ ...prev, [item.id]: true }));
    if (onAddToEstimate) {
      onAddToEstimate(item);
    }
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="price" className="bg-[#ece3d2] text-[#16191c] border-t border-[#dccfb8] border-b border-[#dccfb8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-10 pb-6 border-b border-[#dccfb8]">
          <div className="flex items-center gap-3 font-tech text-xs tracking-widest uppercase text-[#a85c26]">
            <span className="border border-[#c9b498] px-2 py-0.5 bg-[#f4efe6]">02</span>
            <span>Честный прайс-лист</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#16191c]">
                Цены на основные электромонтажные работы
              </h2>
              <p className="text-sm text-[#4a443c] mt-2 max-w-2xl leading-relaxed">
                Стоимость фиксируется в смете и договоре до начала работ. Никаких непредвиденных доплат в процессе. Черновые материалы покупаются строго по чекам со скидкой электрика (до 20% в ЭТМ / Русский Свет).
              </p>
            </div>
            <div className="text-xs font-tech bg-[#fffdf8] p-3 border border-[#c9b498] text-[#5c5244] shrink-0">
              <span className="font-bold text-[#16191c]">✓ Минимальный заказ:</span> 1 500 ₽<br />
              <span className="font-bold text-[#16191c]">✓ Выезд на оценку:</span> 0 ₽
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-tech text-xs uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#16191c] text-[#f4efe6] font-bold shadow-sm'
                    : 'bg-[#fffdf8] hover:bg-[#e3d8c2] text-[#4a443c] border border-[#dccfb8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#7e7364] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск услуги (щит, штроба, розетка)..."
              className="w-full bg-[#fffdf8] border border-[#c9b498] text-[#16191c] pl-9 pr-4 py-2 font-tech text-xs placeholder-[#968b7b] focus:outline-none focus:border-[#a85c26]"
            />
          </div>
        </div>

        {/* Price Table / Grid */}
        <div className="bg-[#fffdf8] border-2 border-[#16191c] overflow-hidden shadow-lg">
          <div className="divide-y divide-[#dccfb8]">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-sm font-tech text-[#736a5e]">
                По запросу "{searchQuery}" ничего не найдено. Попробуйте другой запрос или позвоните на {PHONE_DISPLAY}.
              </div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#faf6ee] transition-colors"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-lg font-medium text-[#16191c]">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-tech text-[#a85c26] bg-[#ece3d2] px-2 py-0.5 border border-[#dccfb8]">
                        {item.category}
                      </span>
                    </div>
                    {item.note && (
                      <p className="text-xs text-[#6e6355]">{item.note}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0">
                    <div className="text-right">
                      <div className="font-tech text-base font-bold text-[#16191c] whitespace-nowrap">
                        от {item.price.toLocaleString('ru-RU')} ₽
                      </div>
                      <div className="text-[11px] font-tech text-[#7a7061]">
                        за {item.unit}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenBooking(`Интересует услуга: ${item.title} (от ${item.price} ₽)`)}
                        className="px-3 py-1.5 bg-[#16191c] hover:bg-[#a85c26] text-[#f4efe6] font-tech text-xs uppercase tracking-wider transition-colors"
                      >
                        Заказать
                      </button>

                      <button
                        onClick={() => handleAdd(item)}
                        title="Добавить в расчет"
                        className={`p-1.5 border font-tech text-xs transition-colors flex items-center justify-center ${
                          addedIds[item.id]
                            ? 'bg-emerald-700 text-white border-emerald-700'
                            : 'border-[#c9b498] hover:bg-[#e3d8c2] text-[#16191c]'
                        }`}
                      >
                        {addedIds[item.id] ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Price Notes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 font-tech text-xs text-[#52493e]">
          <div className="bg-[#fffdf8] p-4 border border-[#dccfb8] flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#a85c26] shrink-0 mt-0.5" />
            <span><strong>Фиксация сметы:</strong> после осмотра цена утверждается и не повышается ни при каких обстоятельствах.</span>
          </div>
          <div className="bg-[#fffdf8] p-4 border border-[#dccfb8] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#a85c26] shrink-0 mt-0.5" />
            <span><strong>Скидки пенсионерам и новоселам:</strong> 7–10% от стоимости работ при предъявлении удостоверения/акта.</span>
          </div>
          <div className="bg-[#fffdf8] p-4 border border-[#dccfb8] flex items-start gap-2.5">
            <span className="font-bold text-[#a85c26] text-sm shrink-0">ГОСТ</span>
            <span><strong>Сертификаты кабеля:</strong> работаем исключительно с кабелями ГОСТ ВВГнг(А)-LS заводов Кольчугино и Конкорд.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
