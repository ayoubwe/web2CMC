import { Calendar, MapPin, Scissors } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Réservez en Ligne",
    description: "Choisissez votre service et sélectionnez un créneau qui convient à votre pause entre les cours ou le soir.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "On S'installe",
    description: "On arrive à l'endroit désigné sur le campus (Hall du dortoir / Salle commune). Pas besoin de se déplacer.",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Soyez Stylé",
    description: "Profitez d'une coupe premium en 20-30 minutes et reprenez votre journée avec un look frais.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-hero-gradient">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-primary text-lg tracking-wider">LE PROCESSUS</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">
            Du Désordre au Style en 3 Étapes
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Sans jamais quitter le campus.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative bg-card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 group-hover:translate-y-[-4px] card-shadow">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 font-display text-6xl text-primary/20">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
