"use client";

import { useState } from "react";
import EntryAnimation from "@/components/EntryAnimation";
import NameForm from "@/components/NameForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 py-10">
      <EntryAnimation onComplete={() => setShowForm(true)} />
      {showForm && <NameForm />}
    </div>
  );
}
