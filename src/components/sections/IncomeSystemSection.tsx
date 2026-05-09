import { motion } from "framer-motion"
import { TrendingUp, Award, Gift } from "lucide-react"

const benefits = [
  {
    title: "업계 최고 수준 수수료",
    description: "성과에 비례하는 확실하고 투명한 수수료 체계를 통해 높은 소득을 창출할 수 있습니다.",
    icon: TrendingUp
  },
  {
    title: "정착 지원금",
    description: "초기 안정적인 정착을 위해 업적 달성 시 추가 지원금을 지급합니다.",
    icon: Gift
  },
  {
    title: "장기 근속 보상",
    description: "오랜 기간 함께 성장한 우수 사원에게 특별 보너스와 승진 기회를 부여합니다.",
    icon: Award
  }
]

export function IncomeSystemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-meritz-red tracking-wider uppercase mb-3">Income & System</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">투명하고 확실한 보상 시스템</h3>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Infographic Area */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-800 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-meritz-red/20 to-transparent" />
              <div className="relative z-10 text-center w-full flex flex-col items-center justify-end h-full">
                <div className="flex items-end justify-center gap-4 h-48 w-full border-b border-slate-600/50 pb-2">
                  <div className="w-16 bg-slate-600 rounded-t-sm h-1/4" />
                  <div className="w-16 bg-slate-400 rounded-t-sm h-2/4" />
                  <div className="w-16 bg-meritz-red rounded-t-sm h-3/4 relative shadow-[0_0_20px_rgba(211,17,69,0.5)]">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-white font-bold whitespace-nowrap">High Return</span>
                  </div>
                </div>
                <p className="text-slate-300 mt-6 font-medium">시간이 지날수록, 성과가 쌓일수록 성장하는 구조</p>
              </div>
            </div>
          </motion.div>

          {/* Benefits Text Area */}
          <div className="flex-1 space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-red-50 p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-meritz-red" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
