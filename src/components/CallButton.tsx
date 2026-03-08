import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:9768010603"
      className="fixed bottom-28 right-8 z-50 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition-transform animate-bounce-slow"
    >
      <Phone size={32} className="text-black fill-black" />
    </a>
  );
}
