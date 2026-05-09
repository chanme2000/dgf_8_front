import { HeroSection } from "@/components/sections/HeroSection"
import { IntroSection } from "@/components/sections/IntroSection"
import { CoreValuesSection } from "@/components/sections/CoreValuesSection"
import { IncomeSystemSection } from "@/components/sections/IncomeSystemSection"
import { InterviewSection } from "@/components/sections/InterviewSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { MapFooterSection } from "@/components/sections/MapFooterSection"
import { FloatingButton } from "@/components/ui/FloatingButton"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <IntroSection />
      <CoreValuesSection />
      <IncomeSystemSection />
      <InterviewSection />
      <ContactSection />
      <MapFooterSection />
      
      <FloatingButton />
      <Toaster position="top-center" richColors />
    </main>
  )
}

export default App
