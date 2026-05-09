import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-meritz-red text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-colors flex items-center justify-center"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="sr-only">상담 신청하기</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
