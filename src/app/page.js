import Image from "next/image";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Image de fond */}
      <Image
        src="/IMG_3630.WEBP"
        alt="Background studio"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Logo */}
        <Image
          src="/LOGO PRIMAIRE BLANC.svg"
          alt="Logo Studio"
          width={400}
          height={160}
          className="
            mb-6
            w-48 sm:w-64 md:w-72 lg:w-96
            h-auto
          "
        />

        {/* Texte principal */}
        <p
          className="
            text-gray-300
            mb-8
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            leading-relaxed
          "
        >
          Notre studio ouvre très bientôt.<br />
          Restez connectés.<br /><br />
          En attendant, suivez-nous sur Instagram pour rester informés :
          <br />
          <a
            href="https://instagram.com/moon_lagree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-gray-200"
          >
            @moon_lagree
          </a>
        </p>

        {/* Countdown */}
        <div className="my-6 sm:my-8">
          <Countdown />
        </div>

        {/* Footer */}
        <p
          className="
            mt-10
            text-xs
            sm:text-sm
            md:text-base
            text-gray-500
          "
        >
          © {new Date().getFullYear()} Moon Lagree Studio
        </p>
      </div>
    </main>
  );
}
