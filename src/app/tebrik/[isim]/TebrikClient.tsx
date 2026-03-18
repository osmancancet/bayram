"use client";

import GreetingHero from "@/components/GreetingHero";
import ConfettiEffect from "@/components/ConfettiEffect";
import ShareButtons from "@/components/ShareButtons";
import FloatingElements from "@/components/FloatingElements";
import CreateYourOwn from "@/components/CreateYourOwn";
import Footer from "@/components/Footer";

interface TebrikClientProps {
  name: string;
}

export default function TebrikClient({ name }: TebrikClientProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 py-10">
      <ConfettiEffect />
      <FloatingElements />
      <GreetingHero name={name} />
      <ShareButtons name={name} />
      <CreateYourOwn />
      <Footer />
    </div>
  );
}
