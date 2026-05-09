import { motion } from "framer-motion"
import { ShieldCheck, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    title: "공정한 기회",
    description: "배경이나 스펙과 무관하게 오직 노력과 성과로 인정받는 투명한 시스템을 운영합니다.",
    icon: ShieldCheck
  },
  {
    title: "체계적인 지원",
    description: "초보자도 전문가로 성장할 수 있도록 1:1 멘토링과 차별화된 교육 프로그램을 제공합니다.",
    icon: TrendingUp
  },
  {
    title: "동반 성장 비전",
    description: "개인의 성공이 곧 지점의 성공입니다. 서로 돕고 끌어주는 긍정적인 조직 문화를 자랑합니다.",
    icon: Users
  }
]

export function CoreValuesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-meritz-red tracking-wider uppercase mb-3">Core Values</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">우리가 추구하는 핵심 가치</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full pt-6">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-meritz-red" />
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-600">
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
