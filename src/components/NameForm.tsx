"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageSquare, ChevronDown } from "lucide-react";

export default function NameForm() {
  const t = useTranslations("home");
  const tRoot = useTranslations();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();

  const defaultMessages = tRoot.raw("defaultMessages") as string[];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length >= 2 && trimmed.length <= 50) {
      const msg = message.trim();
      const params = msg ? `?m=${encodeURIComponent(msg)}&created=1` : `?created=1`;
      router.push(`/t/${encodeURIComponent(trimmed)}${params}` as never);
    }
  };

  const isValid = name.trim().length >= 2 && name.trim().length <= 50;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 w-full max-w-md px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 15, stiffness: 100 }}
    >
      <label htmlFor="name-input" className="text-white/70 text-sm font-medium text-center">
        {t("nameLabel")}
      </label>

      <motion.input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("namePlaceholder")}
        maxLength={50}
        className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-gold/30 text-white text-lg text-center placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
        autoFocus
        autoComplete="off"
        whileFocus={{ borderColor: "#f59e0b", scale: 1.01 }}
      />

      {/* Toggle message section */}
      <motion.button
        type="button"
        onClick={() => setShowMessage(!showMessage)}
        className="flex items-center gap-2 text-white/50 hover:text-gold/80 text-sm transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare size={14} />
        {t("addMessage")}
        <motion.span
          animate={{ rotate: showMessage ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="w-full flex flex-col gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("messagePlaceholder")}
              maxLength={200}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all duration-200 resize-none"
            />
            {/* Quick message templates */}
            <div className="flex flex-wrap gap-2">
              {defaultMessages.map((msg: string, i: number) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => setMessage(msg)}
                  className="text-xs px-3 py-1.5 rounded-full bg-gold/10 text-gold/70 hover:bg-gold/20 hover:text-gold border border-gold/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {msg.slice(0, 35)}...
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={!isValid}
        className="w-full min-h-[44px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-night font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 shadow-lg shadow-gold/20"
        whileHover={isValid ? { scale: 1.02, boxShadow: "0 10px 40px rgba(245,158,11,0.3)" } : {}}
        whileTap={isValid ? { scale: 0.95 } : {}}
      >
        <Sparkles size={20} />
        {t("createButton")}
      </motion.button>
    </motion.form>
  );
}
