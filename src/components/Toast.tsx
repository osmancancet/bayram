"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-deep/90 backdrop-blur-md border border-gold/30 text-white shadow-lg shadow-gold/10"
        >
          <Check size={18} className="text-gold" />
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
