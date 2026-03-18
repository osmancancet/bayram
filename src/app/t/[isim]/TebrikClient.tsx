"use client";

import { useSearchParams } from "next/navigation";

import GreetingHero from "@/components/GreetingHero";
import ConfettiEffect from "@/components/ConfettiEffect";
import ShareButtons from "@/components/ShareButtons";
import FloatingElements from "@/components/FloatingElements";
import CreateYourOwn from "@/components/CreateYourOwn";
import Footer from "@/components/Footer";

interface TebrikClientProps {
  name: string;
  message?: string;
}

export default function TebrikClient({ name, message }: TebrikClientProps) {
  const searchParams = useSearchParams();
  const isCreator = searchParams.get("created") === "1";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 py-10">
      <ConfettiEffect />
      <FloatingElements />
      <GreetingHero name={name} message={message} />
      {isCreator && <ShareButtons name={name} message={message} />}
      {!isCreator && <CreateYourOwn senderName={name} />}

      <Footer />
    </div>
  );
}
