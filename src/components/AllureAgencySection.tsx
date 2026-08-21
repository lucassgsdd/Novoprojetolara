import { ArrowUpRight, Building2, Shield, TrendingUp } from 'lucide-react';

const AllureAgencySection = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Blindagem Jurídica',
      description: 'Proteção estrutural para operar com segurança.',
    },
    {
      icon: Building2,
      title: 'Estruturação',
      description: 'Base sólida para crescer de forma sustentável.',
    },
    {
      icon: TrendingUp,
      title: 'Escala Estratégica',
      description: 'Planejamento inteligente para multiplicar resultados.',
    },
  ];

  return (
    <section
      id="allure-agency"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#081220' }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Posicionamento Executivo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            CEO & Co-Fundadora da{' '}
            <span className="text-accent">Allure Agency</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            À frente de uma assessoria executiva focada em{' '}
            <span className="text-accent font-semibold">blindagem jurídica</span>,{' '}
            <span className="text-accent font-semibold">estruturação</span> e{' '}
            <span className="text-accent font-semibold">escala estratégica</span>{' '}
            para o mercado de criação de conteúdo de alto valor.
          </p>

          <a
            href="https://novaallure.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Conheça a Allure Agency
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary-foreground text-base mb-2">
                {item.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllureAgencySection;
