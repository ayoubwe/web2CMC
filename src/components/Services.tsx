import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Le Quick Fade",
    price: "50",
    description: "Dégradé, taper ou coupe classique. Rapide et efficace.",
    features: ["Dégradé propre", "Contours nets", "Session de 20 min"],
    popular: false,
  },
  {
    name: "Le Combo CMC Complet",
    price: "60",
    description: "Coupe + Barbe + Finition Serviette Chaude.",
    features: ["Coupe premium", "Sculpture barbe", "Serviette chaude", "Session de 30 min"],
    popular: true,
  },
  {
    name: "La Sculpture Barbe",
    price: "30",
    description: "Contours, taille et forme. Finition au rasoir.",
    features: ["Taille barbe", "Contours rasoir", "Session de 15 min"],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-primary text-lg tracking-wider">TARIFS</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">
            Prix Adaptés aux Étudiants
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Qualité premium sans casser la tirelire.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-8px] ${
                service.popular
                  ? "bg-primary/10 border-2 border-primary glow-red"
                  : "bg-card border border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-primary rounded-full">
                  <Star className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                  <span className="text-sm font-semibold text-primary-foreground">Meilleure Offre</span>
                </div>
              )}

              {/* Service Name */}
              <h3 className="font-display text-2xl mb-2">{service.name}</h3>
              
              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-5xl text-primary">{service.price}</span>
                <span className="text-muted-foreground">DH</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={service.popular ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#booking">Réserver</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
