import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Star, Shield, BookOpen, Gift, Clock, CheckCircle2 } from "lucide-react";
import ebookCover from "@/assets/ebook-cover-final.png";
import heroBg from "@/assets/hero-bg.jpg";
import annaPetrova from "@/assets/anna-petrova.png";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Feel confident, calm, and fully prepared throughout your pregnancy.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                A complete guide for every mom-to-be who wants clarity, peace, and support during one of the most important journeys of her life.
              </p>
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => window.open('https://buy.stripe.com/4gMdRb3sR7Iv5aVeqneZ20i', '_blank')}
                  className="w-full md:w-auto"
                >
                  <Gift className="w-6 h-6" />
                  Get Instant Access
                </Button>
                <p className="text-sm font-medium flex items-center justify-center md:justify-start gap-2">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  Includes 2 Bonuses + 1 Extra Bonus Only If You Buy Today
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Written by Russian-born American author and mom of 5, Anna Petrova.
                </p>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-up animate-delay-200">
              <img 
                src={ebookCover} 
                alt="The Peaceful Pregnancy Blueprint eBook Cover" 
                className="w-full max-w-md rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Journey to a Peaceful Pregnancy Starts Here
            </h2>
            <p className="text-xl text-muted-foreground">
              This isn't just another pregnancy book. It's your companion, your guide, and your support system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: "Reduce Fear & Uncertainty", desc: "Navigate your pregnancy with confidence instead of worry" },
              { icon: BookOpen, title: "Understand Every Stage", desc: "Know exactly what's happening with your body at each phase" },
              { icon: Shield, title: "Feel Truly Supported", desc: "Never feel alone or overwhelmed during this journey" },
              { icon: Star, title: "Build Motherhood Confidence", desc: "Step into motherhood feeling empowered and ready" },
              { icon: Heart, title: "Prepare Body & Mind", desc: "Holistic guidance for physical and emotional wellness" },
              { icon: CheckCircle2, title: "Proven & Practical", desc: "Real advice from a mom of 5 who's been there" },
            ].map((benefit, idx) => (
              <Card 
                key={idx} 
                className="p-8 text-center space-y-4 bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              What's Inside: 21 Comprehensive Chapters
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know, organized beautifully for easy reading
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { num: 1, title: "Welcome / Introduction", desc: "Begin your journey with warmth and clarity" },
              { num: 2, title: "Understanding Pregnancy", desc: "The science made simple and beautiful" },
              { num: 3, title: "First Trimester Guide", desc: "Navigate the early weeks with confidence" },
              { num: 4, title: "Managing Morning Sickness", desc: "Practical relief for the toughest days" },
              { num: 5, title: "Nutrition for Two", desc: "Nourish your body and baby properly" },
              { num: 6, title: "Second Trimester Bliss", desc: "Enjoy the sweetest phase of pregnancy" },
              { num: 7, title: "Movement & Exercise", desc: "Stay active safely throughout pregnancy" },
              { num: 8, title: "Sleep & Rest", desc: "Get the quality rest you deserve" },
              { num: 9, title: "Third Trimester Preparation", desc: "Get ready for the final stretch" },
              { num: 10, title: "Understanding Labor", desc: "Know what to expect when the time comes" },
              { num: 11, title: "Pain Management Options", desc: "Make informed choices about your birth" },
              { num: 12, title: "Birth Plan Creation", desc: "Design the birth experience you want" },
              { num: 13, title: "Hospital Bag Essentials", desc: "Pack smart and feel prepared" },
              { num: 14, title: "Partner Support Guide", desc: "Help your partner help you better" },
              { num: 15, title: "Postpartum Preparation", desc: "Set yourself up for recovery success" },
              { num: 16, title: "Breastfeeding Basics", desc: "Start your feeding journey with confidence" },
              { num: 17, title: "Newborn Care", desc: "Learn the essentials before baby arrives" },
              { num: 18, title: "Emotional Wellness", desc: "Protect your mental health throughout" },
              { num: 19, title: "Common Concerns Addressed", desc: "Get answers to all your questions" },
              { num: 20, title: "Resources & Support", desc: "Know where to turn when you need help" },
              { num: 21, title: "Bonus: Self-Care Rituals", desc: "Nurture yourself as you grow your baby" },
            ].map((chapter, idx) => (
              <Card 
                key={idx}
                className="p-6 border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{chapter.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{chapter.title}</h3>
                    <p className="text-sm text-muted-foreground">{chapter.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <div className="inline-block px-6 py-2 bg-accent/20 rounded-full">
              <p className="text-sm font-semibold uppercase tracking-wide">Exclusive Bonuses</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              You Also Get These Valuable Bonuses
            </h2>
            <p className="text-xl text-muted-foreground">
              Worth over $97 - Yours FREE with your purchase today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="p-8 space-y-4 bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center">BONUS #1</h3>
              <h4 className="text-xl font-semibold text-center">Self-Care Rituals for a Peaceful Motherhood</h4>
              <p className="text-muted-foreground text-center">
                Daily practices to cultivate calm and emotional balance. Simple, gentle rituals that help you stay centered throughout your pregnancy and beyond.
              </p>
              <p className="text-center font-semibold text-primary">Value: $37</p>
            </Card>

            <Card className="p-8 space-y-4 bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center">BONUS #2</h3>
              <h4 className="text-xl font-semibold text-center">The 7-Day Emotional Reset for New Moms</h4>
              <p className="text-muted-foreground text-center">
                A gentle emotional detox to reduce stress and reconnect with yourself. Perfect for when you're feeling overwhelmed or disconnected.
              </p>
              <p className="text-center font-semibold text-primary">Value: $27</p>
            </Card>
          </div>

          <Card className="p-6 md:p-10 space-y-6 max-w-3xl mx-auto bg-accent/10 border-4 border-accent shadow-lg relative overflow-visible">
            <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 md:px-6 py-2 text-xs md:text-sm font-bold uppercase shadow-xl">
              Today Only
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-10 h-10 text-accent" />
              <h3 className="text-3xl font-bold text-center">LIMITED TIME BONUS #3</h3>
            </div>
            <h4 className="text-2xl font-semibold text-center">The Peaceful Baby Routine Blueprint</h4>
            <p className="text-lg text-muted-foreground text-center">
              A loving, flexible routine to help your baby (and you) feel calmer and more connected. Create peaceful days and restful nights from the start.
            </p>
            <p className="text-center text-2xl font-bold text-accent">Value: $33</p>
            <div className="bg-accent/20 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold">⚡ Grab it while the offer is active - This bonus disappears at midnight!</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Author Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold">My Story</h2>
              <p className="text-xl text-muted-foreground italic">By Anna Petrova</p>
              <div className="flex justify-center mt-8">
                <img 
                  src={annaPetrova} 
                  alt="Anna Petrova - Author and Mother of 5" 
                  className="w-64 h-64 object-cover rounded-2xl shadow-soft"
                />
              </div>
            </div>

            <Card className="p-8 md:p-12 space-y-6 text-lg leading-relaxed border-0 shadow-card">
              <p>
                I never imagined I'd be writing this book. But life has a way of taking you where you need to go, even when the path is terrifying.
              </p>
              <p>
                I was born in Russia, in a small town where opportunities felt like distant dreams. When I finally had the chance to come to America, I thought everything would change. I thought I'd feel safe, free, finally able to breathe. But the truth? I felt more lost than ever.
              </p>
              <p>
                I didn't speak the language well. I didn't know the culture. I worked long hours at jobs that exhausted me, just to survive. And then, I became pregnant with my first child.
              </p>
              <p>
                I should have been excited. I should have felt joy. But instead, I felt terrified. I had no family nearby, no real support system, and I had no idea what to expect. Every doctor's visit felt confusing. Every symptom made me panic. I read everything I could find online, but it only made things worse—too much conflicting advice, too many horror stories, too much fear.
              </p>
              <p>
                I felt completely alone.
              </p>
              <p>
                And the guilt? Oh, the guilt was suffocating. I thought I should be glowing with happiness, but I was anxious, exhausted, and scared. I felt like I was failing before my baby was even born.
              </p>
              <p>
                Then my son arrived. And I fell in love in a way I'd never experienced. But the fear didn't go away. It transformed into new worries—am I doing this right? Is he okay? Why is he crying? Am I enough?
              </p>
              <p>
                With each of my five children, I learned more. I healed more. I discovered that motherhood isn't about perfection—it's about presence. It's about trusting yourself. It's about finding peace in the chaos.
              </p>
              <p>
                But I wish—God, how I wish—I'd had someone to guide me through that first pregnancy. Someone who understood the fear, the loneliness, the confusion. Someone who could tell me: "You're not alone. You're not broken. You're going to be okay."
              </p>
              <p className="font-semibold text-xl">
                That's why I wrote this guide.
              </p>
              <p>
                Not as an expert with all the answers, but as a mom who's been in the darkness and found her way to the light. I wrote this for every woman who feels scared, overwhelmed, or unsure. For every woman who needs a hand to hold, a voice that says, "I see you. I understand. And you're going to be an amazing mother."
              </p>
              <p>
                This book is the friend I needed. The guide I searched for. The reassurance I craved.
              </p>
              <p className="italic text-muted-foreground">
                And now, it's here for you. 💛
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Moms Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from real mothers who found peace and confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Sarah M.", quote: "This guide made me feel calm for the first time during pregnancy. I finally felt like someone understood what I was going through.", rating: 5 },
              { name: "Jennifer K.", quote: "I finally understood my body and what was happening. No more confusing Google searches at 2 AM!", rating: 5 },
              { name: "Maria R.", quote: "I wish I had this during my first pregnancy! It would have saved me so much anxiety and worry.", rating: 5 },
              { name: "Lisa T.", quote: "It felt like a supportive friend holding my hand through every stage. Anna's story really touched my heart.", rating: 5 },
              { name: "Emma L.", quote: "The bonuses alone are worth the entire price. The self-care rituals have become my daily sanctuary.", rating: 5 },
              { name: "Rachel B.", quote: "Anna's story touched my heart. I trusted her immediately and this guide exceeded all my expectations.", rating: 5 },
            ].map((testimonial, idx) => (
              <Card 
                key={idx}
                className="p-8 space-y-4 bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-center">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Complete Peaceful Pregnancy Package
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to feel confident, calm, and supported
            </p>
          </div>

          <Card className="max-w-3xl mx-auto p-10 space-y-8 border-4 border-primary shadow-lg">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">The Peaceful Pregnancy Blueprint</h3>
              <p className="text-lg text-muted-foreground">Complete Digital Package</p>
            </div>

            <div className="space-y-4">
              {[
                "✨ The Complete 21-Chapter Pregnancy Guide (Digital PDF)",
                "🎁 BONUS #1: Self-Care Rituals for Peaceful Motherhood ($37 value)",
                "💝 BONUS #2: 7-Day Emotional Reset for New Moms ($27 value)",
                "⚡ TODAY ONLY: The Peaceful Baby Routine Blueprint ($33 value)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-dashed pt-6 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl text-muted-foreground line-through">$97</span>
                <span className="text-5xl font-bold text-primary">$49</span>
              </div>
              <p className="text-center text-muted-foreground">One-time payment · Instant digital access</p>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full"
              onClick={() => window.open('https://buy.stripe.com/4gMdRb3sR7Iv5aVeqneZ20i', '_blank')}
            >
              <Gift className="w-6 h-6" />
              Get Instant Access Now
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold">30-Day Money-Back Guarantee</span>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              If this guide doesn't bring you peace and clarity, we'll refund every penny. No questions asked.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6 mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold">
                Your Questions Answered
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Is this ebook for first-time moms?",
                  a: "Absolutely! This guide is perfect for first-time moms who want clarity and support. But it's also valuable for experienced moms who want a more peaceful approach to pregnancy."
                },
                {
                  q: "Is the information safe and reliable?",
                  a: "Yes! All information is based on established pregnancy guidelines and real experiences from a mother of 5. However, always consult with your healthcare provider for personalized medical advice."
                },
                {
                  q: "Does it include postpartum help?",
                  a: "Yes! The guide covers postpartum preparation, breastfeeding basics, newborn care, and emotional wellness for the postpartum period."
                },
                {
                  q: "How do I receive the bonuses?",
                  a: "All bonuses are included in your instant digital download. You'll receive immediate access to everything after purchase."
                },
                {
                  q: "Is it useful if I'm early in pregnancy?",
                  a: "Perfect timing! The earlier you start, the more supported you'll feel throughout your entire journey. The guide covers every trimester in detail."
                },
                {
                  q: "What if I'm not satisfied?",
                  a: "We offer a 30-day money-back guarantee. If this guide doesn't bring you the peace and clarity you deserve, we'll refund every penny. No questions asked."
                },
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border-0 shadow-card rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              You Deserve a Peaceful, Confident Pregnancy Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              No more confusion. No more fear. No more feeling alone. Let this guide be the supportive friend who walks beside you every step of the way.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://buy.stripe.com/4gMdRb3sR7Iv5aVeqneZ20i', '_blank')}
            >
              <Heart className="w-6 h-6" />
              Download Your Pregnancy Guide
            </Button>
            <p className="text-sm text-muted-foreground">
              Instant digital access · 30-day guarantee · All bonuses included
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-muted-foreground">
            © 2024 The Peaceful Pregnancy Blueprint. Written with love by Anna Petrova.
          </p>
          <p className="text-sm text-muted-foreground">
            All rights reserved. This content is for informational purposes only and does not replace professional medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
