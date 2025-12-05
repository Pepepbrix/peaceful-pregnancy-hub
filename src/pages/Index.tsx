import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Star, Shield, BookOpen, Gift, Clock, CheckCircle2, Baby, Apple, Moon, Users, Zap, AlertTriangle } from "lucide-react";
import ebookCover from "@/assets/ebook-cover-final.png";
import heroBg from "@/assets/hero-bg.jpg";
import annaPetrova from "@/assets/anna-petrova.png";
import { useEffect, useState } from "react";

const Index = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePurchase = () => {
    window.open('https://buy.stripe.com/4gMdRb3sR7Iv5aVeqneZ20i', '_blank');
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Urgency Bar - Sticky */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-accent text-accent-foreground py-2 px-4 text-center transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <span className="text-sm md:text-base font-semibold flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Limited Time: Get 50% OFF + 3 FREE Bonuses
          </span>
          <Button 
            variant="secondary" 
            size="sm"
            onClick={handlePurchase}
            className="text-xs md:text-sm"
          >
            Claim Your Copy - $49
          </Button>
        </div>
      </div>

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
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2 rounded-full text-sm">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-medium">Trusted by 2,500+ moms</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stop Googling at 2 AM. <span className="text-primary">Get Real Answers</span> for Every Stage of Your Pregnancy.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                The complete week-by-week guide that tells you <strong>exactly</strong> what's happening with your body, what symptoms are normal, and what to do about them — written by a mom of 5.
              </p>
              
              {/* Key Benefits Pills */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-primary/10 text-foreground px-3 py-1 rounded-full text-sm font-medium">✓ Morning sickness relief</span>
                <span className="bg-primary/10 text-foreground px-3 py-1 rounded-full text-sm font-medium">✓ Sleep solutions</span>
                <span className="bg-primary/10 text-foreground px-3 py-1 rounded-full text-sm font-medium">✓ Birth prep checklist</span>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={handlePurchase}
                  className="w-full md:w-auto group"
                >
                  <Gift className="w-6 h-6 group-hover:animate-pulse" />
                  Yes! I Want This Guide - Only $49
                </Button>
                <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4" /> 30-Day Guarantee
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4" /> Instant Download
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-up animate-delay-200">
              <div className="relative">
                <img 
                  src={ebookCover} 
                  alt="The Peaceful Pregnancy Blueprint eBook Cover" 
                  className="w-full max-w-md rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
                />
                {/* Price Badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-lg">
                  <span className="line-through text-sm opacity-70">$97</span>
                  <span className="text-xl ml-2">$49</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Agitation Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sound Familiar?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "You're constantly worried if what you're feeling is normal",
                "Google searches only make you more anxious",
                "You feel overwhelmed by conflicting advice from everyone",
                "You don't know what to eat, what to avoid, or how to exercise safely",
                "Sleep has become impossible and you're exhausted",
                "You're nervous about labor and don't know how to prepare",
              ].map((problem, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
            <p className="text-xl font-medium pt-4">
              You're not alone. And there's a better way. 👇
            </p>
          </div>
        </div>
      </section>

      {/* Solution/Benefits Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              What You'll Get Inside This Guide
            </h2>
            <p className="text-xl text-muted-foreground">
              Practical, actionable information you can use <strong>today</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Apple, title: "Nutrition Plans That Work", desc: "Know exactly what to eat (and avoid) each trimester for a healthy baby and more energy" },
              { icon: Moon, title: "Sleep Solutions", desc: "Proven positions and routines to finally get restful sleep, even in the third trimester" },
              { icon: Baby, title: "Week-by-Week Development", desc: "Understand what's happening with your baby's growth and why you feel the way you do" },
              { icon: Heart, title: "Morning Sickness Relief", desc: "Natural remedies and strategies that actually work for nausea and fatigue" },
              { icon: BookOpen, title: "Birth Preparation Checklist", desc: "Everything you need to pack, plan, and prepare for delivery day" },
              { icon: Users, title: "Partner Communication Guide", desc: "Help your partner understand how to support you effectively" },
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

          {/* Mid-page CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handlePurchase}
            >
              <Gift className="w-6 h-6" />
              Get The Complete Guide - $49
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Real Moms, Real Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of moms who went from anxious to confident
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Sarah Mitchell", 
                location: "Austin, TX",
                context: "First-time mom, 28 weeks",
                quote: "I was waking up at 3 AM every night googling symptoms. This guide answered EVERY question I had. Now I actually sleep through the night!", 
                result: "No more anxiety attacks",
                rating: 5 
              },
              { 
                name: "Jennifer Kim", 
                location: "Los Angeles, CA",
                context: "Mom of 2, surprise pregnancy at 38",
                quote: "Even with my second pregnancy, I learned so much. The nutrition section helped me have more energy than my first pregnancy!", 
                result: "More energy, healthier pregnancy",
                rating: 5 
              },
              { 
                name: "Maria Rodriguez", 
                location: "Miami, FL",
                context: "First-time mom, had difficult first trimester",
                quote: "The morning sickness remedies actually worked. I went from throwing up 5x a day to once. Game changer.", 
                result: "Morning sickness under control",
                rating: 5 
              },
              { 
                name: "Lisa Thompson", 
                location: "Chicago, IL",
                context: "Working mom, high-stress job",
                quote: "As a working mom, I needed practical advice fast. This guide is organized perfectly - I can find answers in seconds.", 
                result: "Less stress, more confidence",
                rating: 5 
              },
              { 
                name: "Emma Davis", 
                location: "Seattle, WA",
                context: "First-time mom, anxious about birth",
                quote: "The birth preparation chapter calmed ALL my fears. I felt so prepared walking into the hospital. Best $49 I ever spent.", 
                result: "Felt 100% prepared for delivery",
                rating: 5 
              },
              { 
                name: "Rachel Brown", 
                location: "Denver, CO",
                context: "Mom of 3, wanted a calmer pregnancy",
                quote: "Anna's personal story made me cry. She gets it. This isn't just information - it's like having a supportive friend.", 
                result: "Finally felt understood",
                rating: 5 
              },
            ].map((testimonial, idx) => (
              <Card 
                key={idx}
                className="p-6 space-y-4 bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic">"{testimonial.quote}"</p>
                <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium text-primary inline-block">
                  ✓ {testimonial.result}
                </div>
                <div className="pt-2 border-t">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.context}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              21 Comprehensive Chapters
            </h2>
            <p className="text-xl text-muted-foreground">
              240+ pages of practical guidance for every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              { num: 1, title: "Understanding Your Changing Body", desc: "What's normal, what's not, and when to call your doctor" },
              { num: 2, title: "First Trimester Survival Guide", desc: "Beat fatigue, nausea, and mood swings" },
              { num: 3, title: "Nutrition & Meal Plans", desc: "Exactly what to eat for energy and baby's development" },
              { num: 4, title: "Safe Exercise Routines", desc: "Stay fit without risking your pregnancy" },
              { num: 5, title: "Sleep & Rest Strategies", desc: "Finally get comfortable and sleep through the night" },
              { num: 6, title: "Second Trimester Guide", desc: "Navigate the 'honeymoon phase' of pregnancy" },
              { num: 7, title: "Dealing with Common Symptoms", desc: "Back pain, swelling, heartburn solutions" },
              { num: 8, title: "Third Trimester Preparation", desc: "Get ready for the home stretch" },
              { num: 9, title: "Birth Plan Creation", desc: "Know your options and make informed choices" },
              { num: 10, title: "Hospital Bag Checklist", desc: "Everything you need (nothing you don't)" },
              { num: 11, title: "Labor & Delivery Guide", desc: "What to expect and how to cope" },
              { num: 12, title: "Postpartum Recovery", desc: "Heal faster and feel like yourself again" },
            ].map((chapter, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{chapter.num}</span>
                </div>
                <div>
                  <h3 className="font-semibold">{chapter.title}</h3>
                  <p className="text-sm text-muted-foreground">{chapter.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">+ 9 more chapters covering breastfeeding, newborn care, emotional wellness, and more</p>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <div className="inline-block px-6 py-2 bg-accent/20 rounded-full">
              <p className="text-sm font-semibold uppercase tracking-wide">🎁 FREE Bonuses Included</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              $97 Worth of Bonuses — FREE Today
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="p-8 space-y-4 bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center">BONUS #1</h3>
              <h4 className="text-xl font-semibold text-center">Self-Care Rituals Checklist</h4>
              <p className="text-muted-foreground text-center">
                10-minute daily routines to reduce stress, improve sleep, and keep your energy up throughout pregnancy.
              </p>
              <p className="text-center font-semibold text-primary">Value: $37 — FREE</p>
            </Card>

            <Card className="p-8 space-y-4 bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center">BONUS #2</h3>
              <h4 className="text-xl font-semibold text-center">7-Day Emotional Reset Plan</h4>
              <p className="text-muted-foreground text-center">
                A step-by-step guide to manage pregnancy mood swings, reduce anxiety, and feel emotionally balanced.
              </p>
              <p className="text-center font-semibold text-primary">Value: $27 — FREE</p>
            </Card>
          </div>

          <Card className="p-6 md:p-10 space-y-6 max-w-3xl mx-auto bg-accent/10 border-4 border-accent shadow-lg relative overflow-visible">
            <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 md:px-6 py-2 text-xs md:text-sm font-bold uppercase shadow-xl">
              Today Only
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-10 h-10 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-center">LIMITED TIME BONUS #3</h3>
            </div>
            <h4 className="text-xl md:text-2xl font-semibold text-center">Newborn Sleep Schedule Template</h4>
            <p className="text-muted-foreground text-center">
              The exact feeding and sleeping schedule that helped Anna's 5 babies sleep through the night by 8 weeks. Worth its weight in gold for exhausted new parents.
            </p>
            <p className="text-center text-2xl font-bold text-accent">Value: $33 — FREE (Today Only)</p>
            <div className="bg-accent/20 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold">⚡ This bonus disappears at midnight. Order now to claim it!</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Author Section - Shorter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <img 
                  src={annaPetrova} 
                  alt="Anna Petrova - Author and Mother of 5" 
                  className="w-48 h-48 object-cover rounded-2xl shadow-soft mx-auto md:mx-0"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Meet Anna Petrova</h2>
                <p className="text-lg text-muted-foreground">
                  Russian-born American author and <strong>mother of 5 children</strong>.
                </p>
                <p className="text-muted-foreground">
                  "I wrote this guide because I wish I had it during my first pregnancy. I was terrified, alone in a new country, with no support system. Every doctor's visit felt confusing. Every symptom made me panic."
                </p>
                <p className="text-muted-foreground">
                  "After 5 pregnancies, I've learned what actually works. This guide is everything I know — the practical tips, the emotional support, the reassurance that you're going to be okay."
                </p>
                <p className="font-semibold text-primary">
                  "You're not alone. And you're going to be an amazing mother."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get Everything for Just $49
            </h2>
            <p className="text-xl text-muted-foreground">
              Less than a single prenatal appointment
            </p>
          </div>

          <Card className="max-w-3xl mx-auto p-8 md:p-10 space-y-8 border-4 border-primary shadow-lg">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">The Peaceful Pregnancy Blueprint</h3>
              <p className="text-muted-foreground">Complete Digital Package — Instant Access</p>
            </div>

            <div className="space-y-3">
              {[
                { item: "The Complete 21-Chapter Pregnancy Guide (240+ pages)", value: "$67" },
                { item: "BONUS: Self-Care Rituals Checklist", value: "$37" },
                { item: "BONUS: 7-Day Emotional Reset Plan", value: "$27" },
                { item: "TODAY ONLY: Newborn Sleep Schedule Template", value: "$33" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm md:text-base">{item.item}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-dashed pt-6 space-y-2">
              <div className="flex items-center justify-between px-4">
                <span className="text-lg">Total Value:</span>
                <span className="text-xl line-through text-muted-foreground">$164</span>
              </div>
              <div className="flex items-center justify-between px-4">
                <span className="text-xl font-bold">Your Price Today:</span>
                <span className="text-4xl font-bold text-primary">$49</span>
              </div>
              <p className="text-center text-sm text-muted-foreground">You save $115 (70% OFF)</p>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full text-lg"
              onClick={handlePurchase}
            >
              <Gift className="w-6 h-6" />
              Yes! Give Me Instant Access
            </Button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">30-Day Money-Back Guarantee</span>
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-medium">Instant PDF Download</span>
              </span>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              ✓ Instant access after purchase ✓ Works on any device ✓ Keep forever
            </p>
          </Card>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Shield className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              100% Risk-Free Guarantee
            </h2>
            <p className="text-lg text-muted-foreground">
              Try the guide for 30 days. If you don't feel more confident, calm, and prepared for your pregnancy journey, email us and we'll refund every penny. No questions asked. No hard feelings.
            </p>
            <p className="font-semibold text-primary">
              Your satisfaction is my priority — always.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6 mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Is this guide right for first-time moms?",
                  a: "Absolutely! This guide was written specifically with first-time moms in mind. Everything is explained clearly, without medical jargon, so you'll understand exactly what's happening with your body and baby."
                },
                {
                  q: "What format is the guide in?",
                  a: "It's a digital PDF that you can read on any device — phone, tablet, or computer. You'll get instant access after purchase and can download it immediately."
                },
                {
                  q: "How is this different from free pregnancy apps?",
                  a: "Apps give you generic, surface-level info. This guide gives you deep, practical guidance from a real mom who's been through 5 pregnancies. It's organized, comprehensive, and doesn't bombard you with ads or notifications."
                },
                {
                  q: "I'm already in my third trimester. Is it too late?",
                  a: "Not at all! The guide has specific chapters on third trimester, birth preparation, and postpartum that will be incredibly valuable. Plus you'll have it for future pregnancies too."
                },
                {
                  q: "What if I'm not satisfied?",
                  a: "You're protected by our 30-day money-back guarantee. If you don't find value in the guide, just email us and we'll refund you immediately. No questions asked."
                },
                {
                  q: "Is the information medically accurate?",
                  a: "Yes, all information follows established pregnancy guidelines. However, this guide is meant to complement — not replace — advice from your healthcare provider. Always consult your doctor for personalized medical decisions."
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
              You Deserve to Feel Confident During Your Pregnancy
            </h2>
            <p className="text-xl text-muted-foreground">
              Stop the endless googling. Stop the 2 AM anxiety. Get the answers you need, all in one place, from a mom who truly understands.
            </p>
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handlePurchase}
                className="text-lg"
              >
                <Heart className="w-6 h-6" />
                Get Instant Access — Only $49
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ Instant download ✓ 30-day guarantee ✓ All 3 bonuses included
              </p>
            </div>
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

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t shadow-lg p-4 z-50">
        <Button 
          variant="hero" 
          size="lg"
          onClick={handlePurchase}
          className="w-full"
        >
          Get Instant Access — $49
        </Button>
      </div>
    </main>
  );
};

export default Index;
