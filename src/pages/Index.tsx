import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import RatingSection from "@/components/RatingSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <Advantages />
      <RatingSection />
      <BookingSection />
      <Footer />
    </main>
  );
};

export default Index;
