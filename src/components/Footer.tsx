import { Instagram, MessageCircle, Clock, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="CMC Barber Shop Logo" className="h-12 w-auto logo-shine" />
            </a>
            <p className="text-muted-foreground text-sm">
              Le barbier mobile exclusif pour les étudiants CMC Rabat. Restez stylé sans quitter le campus.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Heures d'Ouverture
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lundi - Jeudi : 17h00 - 21h00</li>
              <li>Vendredi : 14h00 - 18h00</li>
              <li>Samedi - Dimanche : Sur Rendez-vous</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Contactez-Nous
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CMC Barber Shop. Exclusivement pour les étudiants CMC Rabat.
          </p>
          <p className="text-sm text-muted-foreground">
            Conçu avec Barber pour l'étudiant occupé.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
