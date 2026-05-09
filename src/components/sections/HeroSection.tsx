import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            언제나 열린, 누구나 도전하고<br className="hidden md:block" /> 성장할 수 있는 공정한 기회의 장
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
            메리츠화재 둔산8지점과 함께 당신의 새로운 커리어를 시작하세요.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-meritz-red text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-red-700 transition-colors"
          >
            상담 신청하기
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
