import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, User, Phone, MapPin, Scissors } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const services = [
  { id: "quick-fade", name: "Le Quick Fade", price: "50 DH" },
  { id: "full-combo", name: "Le Combo CMC Complet", price: "60 DH" },
  { id: "beard-sculpt", name: "La Sculpture Barbe", price: "30 DH" },
];

const timeSlots = [
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    studentId: "",
    phone: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service || !formData.date || !formData.time || !formData.name || !formData.phone) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Réservation confirmée !",
      description: `On vous attend le ${formData.date} à ${formData.time}. Vérifiez votre WhatsApp pour la confirmation.`,
    });

    setFormData({
      service: "",
      date: "",
      time: "",
      name: "",
      studentId: "",
      phone: "",
      location: "",
    });
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-display text-primary text-lg tracking-wider">RÉSERVER</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">
              Réservez Votre Créneau
            </h2>
            <p className="text-muted-foreground text-lg">
              Choisissez votre service, sélectionnez une heure, et on s'occupe du reste.
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Scissors className="w-4 h-4 text-primary" />
                Sélectionnez un Service *
              </label>
              <div className="grid gap-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.service === service.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.service === service.id ? "border-primary" : "border-muted-foreground"
                        }`}
                      >
                        {formData.service === service.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </div>
                      <span>{service.name}</span>
                    </div>
                    <span className="text-primary font-semibold">{service.price}</span>
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={formData.service === service.id}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 text-primary" />
                  Sélectionnez une Date *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 text-primary" />
                  Sélectionnez une Heure *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full p-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors appearance-none"
                >
                  <option value="">Choisissez un créneau</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <User className="w-4 h-4 text-primary" />
                  Nom Complet *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Votre nom"
                  className="w-full p-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <User className="w-4 h-4 text-primary" />
                  Numéro Stagiaire
                </label>
                <input
                  type="text"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  placeholder="ID Stagiaire CMC"
                  className="w-full p-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>

            {/* Contact & Location */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Phone className="w-4 h-4 text-primary" />
                  Numéro WhatsApp *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+212 6XX XXX XXX"
                  className="w-full p-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-primary" />
                  Lieu de Rendez-vous
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="ex: Hall Bâtiment A"
                  className="w-full p-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button variant="hero" size="xl" className="w-full mt-8" type="submit">
              Confirmer la Réservation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
