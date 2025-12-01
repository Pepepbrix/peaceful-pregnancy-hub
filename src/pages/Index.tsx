import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Star, Shield, BookOpen, Gift, Clock, CheckCircle2 } from "lucide-react";
import ebookCover from "@/assets/ebook-cover-final.png";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* ... otras secciones ... */}

      {/* Author Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold">My Story</h2>
            <p className="text-xl text-muted-foreground italic">By Anna Petrova</p>
          </div>
          <Card className="p-8 md:p-12 space-y-6 text-lg leading-relaxed border-0 shadow-card">
              <p>
                I never imagined I'd be writing this book. But life has a way of taking you where you need to go, even when the path is terrifying.
              </p>
              <p>
                I was born in Russia, in a small town where opportunities felt like distant dreams. When I finally had the chance to come to America, I thought everything would change. I thought I'd feel safe, free, finally able to breathe. But the truth? I felt more lost than ever.
              </p>
              <p>
                {/* ...resto de la historia... */}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ...otras secciones... */}
    </main>
  );
};

export default Index;