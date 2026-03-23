import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/971523872791"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
