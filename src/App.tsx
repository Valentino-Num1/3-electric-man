/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PriceSection } from './components/PriceSection';
import { CalculatorSection } from './components/CalculatorSection';
import { MastersSection } from './components/MastersSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CableGuideSection } from './components/CableGuideSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsAndFaqSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { AuditSummaryModal } from './components/AuditSummaryModal';
import { Master, ServiceItem, PriceItem, PHONE_DISPLAY, PHONE_RAW } from './data/electricalData';
import { Phone, Flame, Sparkles } from 'lucide-react';

export default function App() {
  const [showAuditModal, setShowAuditModal] = useState<boolean>(false);
  const [prefilledTask, setPrefilledTask] = useState<string>('');
  const [preselectedMasterId, setPreselectedMasterId] = useState<string>('');

  // Handler when user selects a specific master from #masters
  const handleSelectMaster = (master: Master) => {
    setPreselectedMasterId(master.id);
    setPrefilledTask(`Заказ для мастера: ${master.name} (${master.role}).`);
    // Scroll smoothly to contact section
    const contactElem = document.getElementById('contacts');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler when user selects a service
  const handleSelectService = (service: ServiceItem) => {
    setPrefilledTask(`Услуга: ${service.title} (${service.basePrice}).`);
    const contactElem = document.getElementById('contacts');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler when user applies calculation from online calculator
  const handleApplyEstimate = (summary: string) => {
    setPrefilledTask(summary);
    const contactElem = document.getElementById('contacts');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler when user clicks order on price item
  const handleOpenBooking = (info: string) => {
    setPrefilledTask(info);
    const contactElem = document.getElementById('contacts');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#14181b] text-[#f4efe6] antialiased selection:bg-[#e8a05c] selection:text-[#14181b] flex flex-col font-sans">
      {/* Header */}
      <Header
        onOpenAuditModal={() => setShowAuditModal(true)}
        onOpenBookingModal={(masterId) => {
          if (masterId) setPreselectedMasterId(masterId);
          handleOpenBooking('Заявка с шапки сайта');
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section (#top) */}
        <Hero
          onOpenBookingModal={(masterId) => {
            if (masterId) setPreselectedMasterId(masterId);
            handleOpenBooking('Заявка из главного экрана');
          }}
        />

        {/* 01. Services Section (#services) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 02. Price Section (#price) */}
        <PriceSection
          onOpenBooking={handleOpenBooking}
          onAddToEstimate={(item) => {
            setPrefilledTask(prev => prev ? `${prev} + ${item.title}` : `Услуга: ${item.title}`);
          }}
        />

        {/* 03. Calculator Section (#calculator) */}
        <CalculatorSection onApplyEstimate={handleApplyEstimate} />

        {/* 04. Masters Section (#masters) - Core focus requested by user */}
        <MastersSection onSelectMaster={handleSelectMaster} />

        {/* 05. Portfolio Section (#portfolio) */}
        <PortfolioSection />

        {/* 06. Cable & Safety Handbook (#handbook) - Replacing broken articles */}
        <CableGuideSection />

        {/* 07. Process & Discounts Section (#process & #discounts) */}
        <ProcessSection />

        {/* 08 & 09. Reviews & FAQ (#reviews & #faq) */}
        <ReviewsAndFaqSection />

        {/* 10. Contact Section (#contacts) */}
        <ContactSection
          prefilledTask={prefilledTask}
          preselectedMasterId={preselectedMasterId}
          onOpenAuditModal={() => setShowAuditModal(true)}
        />
      </main>

      {/* Floating Emergency Action Pill on Mobile & Desktop */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2">
        <button
          onClick={() => setShowAuditModal(true)}
          className="bg-[#181d21] text-emerald-400 border border-emerald-600/50 hover:bg-[#20272c] px-3.5 py-2 font-tech text-xs tracking-wider uppercase shadow-xl flex items-center gap-2 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Отчет доработок сайта</span>
          <span className="sm:hidden">Аудит</span>
        </button>

        <a
          href={`tel:${PHONE_RAW}`}
          className="bg-[#e8a05c] hover:bg-amber-400 text-[#14181b] border-2 border-[#14181b] px-4 py-2.5 font-tech text-xs font-bold tracking-wider uppercase shadow-2xl flex items-center gap-2 transition-transform active:scale-95"
        >
          <Flame className="w-4 h-4 text-[#14181b] animate-pulse" />
          <span>Вызвать: {PHONE_DISPLAY}</span>
        </a>
      </div>

      {/* Audit Modal */}
      {showAuditModal && (
        <AuditSummaryModal onClose={() => setShowAuditModal(false)} />
      )}
    </div>
  );
}
