import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 2글자 이상 입력해주세요.",
  }),
  phone: z.string().regex(/^010-\d{3,4}-\d{4}$/, {
    message: "올바른 연락처 형식을 입력해주세요 (예: 010-1234-5678)",
  }),
  agreePrivacy: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해야 합니다.",
  }),
})

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      agreePrivacy: undefined as unknown as true, // to force checking initially
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "API request failed");
      }

      toast.success("상담 신청이 완료되었습니다. 곧 연락드리겠습니다.")
      form.reset({ name: "", phone: "", agreePrivacy: undefined as unknown as true })
    } catch (error) {
      const message = error instanceof Error ? error.message : "오류가 발생했습니다."
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-meritz-red tracking-wider uppercase mb-3">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">새로운 시작, 지금 상담받아보세요</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-bold">이름</FormLabel>
                          <FormControl>
                            <Input placeholder="홍길동" className="h-12 bg-slate-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-bold">연락처</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="010-0000-0000" 
                              className="h-12 bg-slate-50" 
                              {...field} 
                              onChange={(e) => {
                                // Auto hyphen formatting
                                const value = e.target.value.replace(/[^0-9]/g, '');
                                let formattedValue = value;
                                if (value.length > 3 && value.length <= 7) {
                                  formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`;
                                } else if (value.length > 7) {
                                  formattedValue = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
                                }
                                field.onChange(formattedValue);
                              }}
                              maxLength={13}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="agreePrivacy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-slate-200 p-4 bg-white">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="mt-1 w-4 h-4 text-meritz-red rounded border-slate-300 focus:ring-meritz-red"
                              checked={field.value === true}
                              onChange={(e) => field.onChange(e.target.checked)}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium text-slate-700 cursor-pointer" onClick={() => field.onChange(!field.value)}>
                              개인정보 수집 및 이용에 동의합니다. (필수)
                            </FormLabel>
                            <p className="text-xs text-slate-500 mt-2">
                              수집된 연락처는 상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg font-bold bg-meritz-red hover:bg-red-700 text-white rounded-xl shadow-lg transition-all hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "접수 중..." : "상담 신청하기"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
