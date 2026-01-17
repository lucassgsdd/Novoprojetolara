import { GraduationCap, Calendar, Target, Award, Eye, TrendingUp, Users } from 'lucide-react';
import laraAbout from '@/assets/lara-about.jpeg';

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      text: 'Formada em Ciências Contábeis pela FAG – Toledo/PR (2022)',
    },
    {
      icon: Calendar,
      text: 'Atua na área contábil desde 2018, começando no setor de constituição empresarial',
    },
    {
      icon: Target,
      text: 'Especialista em regime do Simples Nacional, com foco em MEI e empresas de pequeno a grande porte',
    },
    {
      icon: Award,
      text: 'Soma mais de 40 cursos de especialização, mantendo-se em constante evolução',
    },
  ];

  const commitments = [
    {
      icon: Eye,
      title: 'Transparência',
      description: 'Comunicação clara e honesta em todas as etapas',
    },
    {
      icon: TrendingUp,
      title: 'Atualização Constante',
      description: 'Sempre à frente das mudanças tributárias',
    },
    {
      icon: Users,
      title: 'Parceria de Longo Prazo',
      description: 'Crescemos junto com seu negócio',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
              
              <img
                src={laraAbout}
                alt="Lara Luisa - Contadora"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-cover"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-xl">
                <div className="text-center">
                  <span className="text-3xl font-bold font-heading text-accent">+6</span>
                  <p className="text-xs uppercase tracking-wide">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              Sobre
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Lara Luisa, sua{' '}
              <span className="text-primary">Contadora Estratégica</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Atuação sólida em consultoria fiscal e contábil, oferecendo soluções
              estratégicas, seguras e alinhadas à realidade de cada negócio.
            </p>

            {/* Credentials List */}
            <div className="space-y-4 mb-10">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80 pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Commitment Box */}
            <div className="bg-secondary rounded-xl p-6 border border-border">
              <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                Meu Compromisso
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {commitments.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
