import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PricingSection from '@/components/sections/PricingSection'
import OurWorkSection from '@/components/sections/OurWorkSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <OurWorkSection />
        <HowItWorksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
