import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { PropertyCard3D } from "./components/PropertyCard3D";
import { Footer } from "./components/Footer";
import { ScheduleModal } from "./components/ScheduleModal";
import { FeaturesPage } from "./pages/FeaturesPage";
import { OutdoorPage } from "./pages/OutdoorPage";
import { LocationPage } from "./pages/LocationPage";
import { DetailsPage } from "./pages/DetailsPage";
import { ModernLivingPage } from "./pages/ModernLivingPage";
import { PropertyHighlightsPage } from "./pages/PropertyHighlightsPage";
import { PremiumFeaturesPage } from "./pages/PremiumFeaturesPage";
import { BedroomsPage } from "./pages/BedroomsPage";
import { AmenitiesPage } from "./pages/AmenitiesPage";
import {
  ModernLivingSection,
  PropertyHighlightsSection,
  PremiumFeaturesSection,
  BedroomsSection,
  AmenitiesSection,
} from "./components/HomeSections";

function HomePage({ onSchedule }: { onSchedule: () => void }) {
  return (
    <>
      <Hero onSchedule={onSchedule} />
      <Overview onSchedule={onSchedule} />
      <ModernLivingSection onSchedule={onSchedule} />
      <PropertyHighlightsSection onSchedule={onSchedule} />
      <PremiumFeaturesSection onSchedule={onSchedule} />
      <BedroomsSection onSchedule={onSchedule} />
      <AmenitiesSection onSchedule={onSchedule} />
      <PropertyCard3D onSchedule={onSchedule} />
    </>
  );
}

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);

  return (
    <BrowserRouter>
  <div
  style={{
    minHeight: "100%",
    width: "100%",
    position: "relative",
    background: "var(--np-bg)",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: "var(--np-text)",
    overflowX: "hidden",
  }}
><Navbar onSchedule={openModal} />

        <Routes>
          <Route path="/" element={<HomePage onSchedule={openModal} />} />
          <Route path="/modern-living" element={<ModernLivingPage onSchedule={openModal} />} />
          <Route path="/property-highlights" element={<PropertyHighlightsPage onSchedule={openModal} />} />
          <Route path="/premium-features" element={<PremiumFeaturesPage onSchedule={openModal} />} />
          <Route path="/bedrooms" element={<BedroomsPage onSchedule={openModal} />} />
          <Route path="/amenities" element={<AmenitiesPage onSchedule={openModal} />} />
          <Route path="/features" element={<FeaturesPage onSchedule={openModal} />} />
          <Route path="/outdoor" element={<OutdoorPage onSchedule={openModal} />} />
          <Route path="/location" element={<LocationPage onSchedule={openModal} />} />
          <Route path="/details" element={<DetailsPage onSchedule={openModal} />} />
          <Route path="*" element={<HomePage onSchedule={openModal} />} />
        </Routes>

        <Footer onSchedule={openModal} />
        <ScheduleModal open={showModal} onClose={() => setShowModal(false)} />
      </div>
    </BrowserRouter>
  );
}
