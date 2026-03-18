"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, Send, Check } from "lucide-react";
import { openWhatsApp, copyToClipboard } from "@/lib/share";
import type { BayramMesaj } from "@/lib/bayram-mesajlari";

interface MessageCardProps {
  mesaj: BayramMesaj;
  index: number;
}

export default function MessageCard({ mesaj, index }: MessageCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const success = await copyToClipboard(mesaj.text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [mesaj.text]);

  const handleWhatsApp = useCallback(() => {
    openWhatsApp(mesaj.text);
  }, [mesaj.text]);

  return (
    <motion.div
      className="group relative rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/[0.08] hover:border-gold/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <p className="text-white/80 text-sm leading-relaxed mb-4">{mesaj.text}</p>

      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 border border-white/10 transition-all duration-200 active:scale-95"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? "Kopyalandı" : "Kopyala"}
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 transition-all duration-200 active:scale-95"
        >
          <Send size={14} />
          Gönder
        </button>
      </div>
    </motion.div>
  );
}
