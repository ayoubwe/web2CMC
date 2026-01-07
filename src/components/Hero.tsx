import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Service de barbier professionnel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Exclusif pour les étudiants CMC Rabat</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-4">
            Too Busy Studying
            <br />
            <span className="text-gradient">To Stay Sharp?</span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 animate-fade-up delay-200">
            Le barbier mobile exclusif pour les étudiants CMC Rabat. 
            On vient sur le campus pour que tu n'aies pas à partir.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#booking">Réserver – Créneaux de 15 Min</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#how-it-works">Comment ça marche</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
