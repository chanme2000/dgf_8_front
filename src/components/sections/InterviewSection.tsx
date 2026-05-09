import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"

const interviews = [
  {
    id: 1,
    name: "김민수 팀장",
    role: "입사 3년차",
    quote: "이직을 고민하던 중 둔산 8지점의 투명한 비전을 보고 합류했습니다. 든든한 멘토링 덕분에 지금은 억대 연봉자가 되었습니다.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "이영희 사원",
    role: "입사 1년차",
    quote: "경력 단절로 고민이 많았지만, 이곳에서 새로운 꿈을 꾸게 되었습니다. 누구나 도전할 수 있다는 말이 사실이더군요.",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "박준호 지점장",
    role: "입사 5년차",
    quote: "가족 같은 분위기 속에서 서로 끌어주고 밀어주는 문화가 둔산 8지점만의 강력한 원동력입니다.",
    image: "https://i.pravatar.cc/150?img=12"
  }
]

export function InterviewSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-meritz-red tracking-wider uppercase mb-3">Interviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold">근무자들의 생생한 이야기</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto px-12"
        >
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {interviews.map((interview) => (
                <CarouselItem key={interview.id} className="md:basis-1/2 p-4">
                  <Card className="bg-slate-800 border-none h-full shadow-lg rounded-2xl">
                    <CardContent className="p-8 h-full flex flex-col justify-between text-white">
                      <div>
                        <Quote className="w-10 h-10 text-slate-500 mb-4" />
                        <p className="text-lg text-slate-300 mb-8 italic font-light leading-relaxed">
                          "{interview.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <img 
                          src={interview.image} 
                          alt={interview.name} 
                          className="w-14 h-14 rounded-full border-2 border-meritz-red object-cover"
                        />
                        <div>
                          <p className="font-bold text-white">{interview.name}</p>
                          <p className="text-sm text-slate-400">{interview.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-slate-700 text-white border-none hover:bg-slate-600 -left-4 md:-left-12" />
            <CarouselNext className="bg-slate-700 text-white border-none hover:bg-slate-600 -right-4 md:-right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
