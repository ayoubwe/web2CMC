import { Clock, MapPin, Shield, Wallet } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Zéro Temps de Trajet",
    description: "Pas besoin de prendre un taxi pour Rabat ou Salé. On vient directement à toi.",
  },
  {
    icon: MapPin,
    title: "Adapté à Ton Emploi du Temps",
    description: "Créneaux disponibles en soirée pour les stagiaires. Réserve autour de tes cours.",
  },
  {
    icon: Shield,
    title: "Hygiénique & Professionnel",
    description: "On apporte du matériel professionnel stérilisé à chaque session.",
  },
  {
    icon: Wallet,
    title: "Budget Étudiant Approuvé",
    description: "Prix conçus spécialement pour le portefeuille étudiant. Pas de frais cachés.",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 bg-hero-gradient">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-primary text-lg tracking-wider">L'AVANTAGE CMC</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Plutôt que d'aller en ville.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:bg-card"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
