"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  mesajlar,
  CATEGORY_LABELS,
  CATEGORY_EMOJIS,
  type Category,
} from "@/lib/bayram-mesajlari";
import MessageCard from "@/components/MessageCard";
import AdSlot from "@/components/AdSlot";

const categories: Category[] = ["genel", "aile", "resmi", "komik", "dua"];

export default function MesajlarClient() {
  const [active, setActive] = useState<Category>("genel");

  const filtered = mesajlar.filter((m) => m.category === active);

  return (
    <>
      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
              active === cat
                ? "bg-gold/20 border-gold/40 text-gold"
                : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white/70"
            }`}
          >
            <span>{CATEGORY_EMOJIS[cat]}</span>
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <AdSlot slotId="mesajlar-top-1" format="horizontal" className="mb-4" />

      {/* Messages grid */}
      <motion.div
        className="grid gap-3"
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {filtered.map((mesaj, i) => (
          <MessageCard key={mesaj.id} mesaj={mesaj} index={i} />
        ))}
      </motion.div>
    </>
  );
}
