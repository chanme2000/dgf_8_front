import { motion } from "framer-motion"

export function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold text-meritz-red tracking-wider uppercase mb-3">
            Introduction
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
            새로운 시작을 두려워하지 마세요.<br />
            둔산 8지점이 당신의 성공을 돕겠습니다.
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            나이나 경력 단절 등은 걸림돌이 아닙니다. 열정과 의지만 있다면 누구나 최고의 보험 전문가로 성장할 수 있는 체계적인 교육과 투명한 보상 시스템을 제공합니다. 
            혼자 고민하지 말고 둔산 8지점과 함께 한계를 넘어보세요.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
