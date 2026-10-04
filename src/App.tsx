/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import MethodSteps from './components/MethodSteps';
import SessionTopics from './components/SessionTopics';
import FaqSection from './components/FaqSection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#f6f4ef] flex flex-col font-sans selection:bg-[#caa775] selection:text-[#0b0d10]">
      <Navbar />
      
      <main id="inicio" className="flex-1">
        <Hero />
        <ProblemSection />
        <MethodSteps />
        <SessionTopics />
        <FaqSection />
        <ClosingSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
