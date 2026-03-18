"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
interface CreateYourOwnProps {
  senderName: string;
}

export default function CreateYourOwn({ senderName }: CreateYourOwnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length >= 2) {
      router.push(`/t/${encodeURIComponent(trimmed)}?created=1`);
    }
  };

  const isValid = name.trim().length >= 2;

  return (
    <motion.div
      className="w-full max-w-sm px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5 }}
    >
      {/* Separator */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/20" />
        <span className="text-gold/40 text-[10px] uppercase tracking-widest">bayram tebriği</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full min-h-[56px] px-5 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-deep to-emerald-600 flex items-center justify-center gap-3 transition-all duration-200 active:scale-95 border border-emerald-500/30 shadow-lg shadow-emerald-900/30"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Sparkles size={20} className="text-gold" />
        <div className="flex flex-col items-start">
          <span className="text-sm">Sen de tebrik oluştur</span>
          <span className="text-[10px] text-white/60">{senderName} gibi sen de gönder</span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-white/60" />
        </motion.span>
      </motion.button>

      {/* Inline form */}
      <AnimatePresence>
        {isOpen && (
          <motion.form
            onSubmit={handleCreate}
            className="mt-3 flex flex-col gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adını yaz..."
              maxLength={50}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/30 text-white text-center placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
              autoFocus
              autoComplete="off"
            />
            <motion.button
              type="submit"
              disabled={!isValid}
              className="w-full min-h-[44px] px-5 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-night font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              whileHover={isValid ? { scale: 1.02 } : {}}
              whileTap={isValid ? { scale: 0.95 } : {}}
            >
              <Sparkles size={18} />
              Oluştur
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
