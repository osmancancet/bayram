"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, Link } from "lucide-react";
import { getWhatsAppUrl, copyToClipboard } from "@/lib/share";
import { MESSAGES } from "@/lib/constants";
import Toast from "./Toast";

interface ShareButtonsProps {
  name: string;
  message?: string;
}

export default function ShareButtons({ name, message }: ShareButtonsProps) {
  const [showToast, setShowToast] = useState(false);

  const getShareUrl = () => {
    if (typeof window === "undefined") return "";
    const base = window.location.origin + window.location.pathname;
    if (message) return `${base}?m=${encodeURIComponent(message)}`;
    return base;
  };
  const url = getShareUrl();

  const handleShare = () => {
    const msg = message
      ? MESSAGES.custom(name, url, message)
      : MESSAGES.general(name, url);
    const whatsappUrl = getWhatsAppUrl(msg);
    window.open(whatsappUrl, "_blank");
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(url);
    if (success) {
      setShowToast(true);
    }
  };

  const handleCloseToast = useCallback(() => setShowToast(false), []);

  return (
    <>
      <div className="flex flex-col items-center gap-3 w-full max-w-sm px-4">
        <motion.button
          onClick={handleShare}
          className="w-full min-h-[52px] px-5 py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-200 active:scale-95 bg-[#25D366] hover:bg-[#22c55e] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, type: "spring" as const, damping: 15 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send size={20} />
          WhatsApp ile paylaş
        </motion.button>

        <motion.button
          onClick={handleCopy}
          className="w-full min-h-[44px] px-4 py-2.5 rounded-xl font-medium text-white/70 bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 border border-white/10 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, type: "spring" as const, damping: 15 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link size={16} />
          Linki kopyala
        </motion.button>
      </div>

      <Toast
        message="Link kopyalandı!"
        isVisible={showToast}
        onClose={handleCloseToast}
      />
    </>
  );
}
