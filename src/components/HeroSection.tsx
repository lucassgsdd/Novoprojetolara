import { MessageCircle, Award, BookOpen, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import laraHero from '@/assets/lara-hero.jpeg';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={laraHero}
          alt="Lara Luisa - Estrategista de Negócios & CEO"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">CRC PR-076232/O-3</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8">
            Gestão Contábil,{' '}
            <span className="text-accent">Proteção Patrimonial</span>{' '}
            e Visão de Negócios.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-4 font-heading leading-relaxed">
            Especialista em Simples Nacional, MEI e constituição de empresas. Oferecemos soluções fiscais e contábeis seguras, descomplicadas e alinhadas à sua realidade.
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
            <span className="text-accent font-bold">Lara Luisa</span> |{' '}
            <span className="font-bold">Estrategista de Negócios & CEO Allure Agency</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8"
            >
              <a
                href="https://wa.me/5545999360309"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Lara
              </a>
            </Button>
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8"
            >
              Conhecer Trajetória
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium">CRC Ativo</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium">Especialista Simples Nacional</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium">+40 Cursos</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
