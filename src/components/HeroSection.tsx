import { MessageCircle, ChevronDown, Award, BookOpen, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import laraHero from '@/assets/lara-hero.jpeg';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicos');
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
          alt="Contadora Lara Luisa"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">CRC PR-076232/O-3</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Contabilidade Clara e Estratégica para o seu{' '}
            <span className="text-accent">Negócio Crescer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 font-heading">
            Com a especialista <strong>Lara Luisa</strong> | CRC PR-076232/O-3
          </p>

          {/* Description */}
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            Especialista em Simples Nacional, MEI e constituição de empresas. Oferecemos
            soluções fiscais e contábeis seguras, descomplicadas e alinhadas à sua realidade.
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
                Fale com a Especialista
              </a>
            </Button>
            <Button
              onClick={scrollToServices}
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
            >
              Conheça Nossos Serviços
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;
