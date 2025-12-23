import Image from "next/image";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white">

      {/* Image de fond */}
      <Image
        src="/IMG_3630.WEBP"
        alt="Background studio"
        fill
        priority
        className="object-cover"
        // className="object-cover scale-105 blur-[1px]"
      />


      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* Logo */}
        <Image
          src="/LOGO PRIMAIRE BLANC.svg"
          alt="Logo Studio"
          width={400}
          height={160}
          className="mb-6"
        />

        <p className="text-gray-300 mb-10 text-center" style={{ fontSize: "30px" }}>
          Notre studio ouvre très bientôt.<br />
          Restez connectés.<br /><br />
          En attendant, suivez-nous sur Instagram pour rester informés :{" "}
          <a
            href="https://instagram.com/moon_lagree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-gray-200"
          >
            @moon_lagree
          </a>
        </p>

        <Countdown />

        <p className="mt-12 text-sm text-gray-500" style={{ fontSize: "20px" }}>
          © {new Date().getFullYear()} Moon Lagree Studio
        </p>
      </div>
    </main>
  );
}
