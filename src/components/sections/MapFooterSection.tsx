import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export function MapFooterSection() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-meritz-red">메리츠화재 둔산8지점</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              최고의 전문가들이 모여있는 곳. 당신의 새로운 도전을 항상 응원합니다.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-meritz-red flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  대전광역시 서구 둔산로 123<br />
                  메리츠화재 빌딩 8층
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-meritz-red flex-shrink-0" />
                <p className="text-slate-300">042-123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-meritz-red flex-shrink-0" />
                <p className="text-slate-300">dunsan8@meritz.co.kr</p>
              </div>
            </div>
          </div>

          {/* Map Link Button & Preview */}
          <div className="h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-700 relative bg-slate-800 group">
            {/* Google Map Iframe Preview */}
            <iframe 
              src="https://maps.google.com/maps?q=대전광역시%20서구%20둔산로%20123&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="지도 미리보기"
            ></iframe>
            
            {/* Overlay UI */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500">
              <a 
                href="https://maps.app.goo.gl/152yH9Lzvfh9zbpA7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 bg-meritz-red hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-2xl hover:scale-105 hover:shadow-red-900/50"
              >
                <MapPin className="w-5 h-5" />
                <span>구글 지도 앱/웹으로 열기</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 메리츠화재 둔산8지점. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
