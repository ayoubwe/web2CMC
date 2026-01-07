import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const RatingSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Évaluation requise",
        description: "Veuillez sélectionner une note avant de soumettre.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Merci pour votre avis !",
      description: "Votre évaluation a été enregistrée avec succès.",
    });

    setSubmitted(true);
  };

  const averageRating = 4.8;
  const totalReviews = 127;

  return (
    <section id="rating" className="py-24 bg-hero-gradient">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-display text-primary text-lg tracking-wider">AVIS CLIENTS</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">
              Votre Avis Compte
            </h2>
            <p className="text-muted-foreground text-lg">
              Partagez votre expérience avec nous.
            </p>
          </div>

          {/* Average Rating Display */}
          <div className="flex items-center justify-center gap-6 mb-12 p-6 rounded-2xl bg-card/50 border border-border">
            <div className="text-center">
              <div className="font-display text-5xl text-primary">{averageRating}</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(averageRating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {totalReviews} avis
              </div>
            </div>
          </div>

          {/* Rating Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating */}
              <div className="space-y-3">
                <label className="block text-center text-sm font-medium">
                  Notez votre expérience *
                </label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 transition-colors ${
                          star <= (hoveredRating || rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground hover:text-primary/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  {rating === 1 && "Mauvais"}
                  {rating === 2 && "Passable"}
                  {rating === 3 && "Bien"}
                  {rating === 4 && "Très bien"}
                  {rating === 5 && "Excellent !"}
                </div>
              </div>

              {/* Comment */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  Votre commentaire (optionnel)
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Partagez votre expérience avec nous..."
                  rows={4}
                  className="w-full p-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button variant="hero" size="xl" className="w-full" type="submit">
                Envoyer mon avis
              </Button>
            </form>
          ) : (
            <div className="text-center p-8 rounded-2xl bg-card/50 border border-primary/30">
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 ${
                      star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <h3 className="font-display text-2xl mb-2">Merci pour votre avis !</h3>
              <p className="text-muted-foreground">
                Votre retour nous aide à améliorer nos services.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
