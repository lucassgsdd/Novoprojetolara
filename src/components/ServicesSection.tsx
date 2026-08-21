import { Building2, FileText, Calculator, TrendingUp, Star, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Constituição & Legalização',
      description: 'Do nascimento à evolução do seu negócio',
      features: [
        'Abertura de Empresas (MEI, ME, LTDA)',
        'Alterações Contratuais',
        'Encerramento de Empresas',
        'Enquadramento e Desenquadramento Tributário',
      ],
      highlighted: false,
    },
    {
      icon: FileText,
      title: 'Contabilidade & Obrigações',
      description: 'Mantenha suas obrigações em dia',
      features: [
        'Escrituração Contábil Completa',
        'Emissão de Livros Fiscais',
        'Relatórios Gerenciais Mensais',
        'Balancetes e Demonstrativos',
      ],
      highlighted: false,
    },
    {
      icon: Calculator,
      title: 'Consultoria Tributária',
      description: 'Pague menos impostos legalmente',
      features: [
        'Planejamento Tributário Estratégico',
        'Especialidade no Simples Nacional',
        'Revisão e Recuperação de Impostos',
        'Análise de Regime Tributário',
      ],
      highlighted: true,
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Empresarial',
      description: 'Decisões baseadas em dados',
      features: [
        'Análise de Performance Financeira',
        'Indicadores de Gestão',
        'Apoio para Tomada de Decisão',
        'Planejamento Financeiro',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
            Serviços Estratégicos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções para{' '}
            <span className="text-primary">Proteger e Escalar</span> seu Patrimônio
          </h2>
          <p className="text-muted-foreground text-lg">
            Serviços especializados para cada fase do seu negócio, com foco em
            segurança jurídica e crescimento sustentável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-xl transition-all duration-300 border-2 ${
                service.highlighted
                  ? 'border-accent bg-primary text-primary-foreground'
                  : 'border-transparent hover:border-accent/30 bg-card'
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Destaque
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    service.highlighted
                      ? 'bg-accent/20'
                      : 'bg-primary/10 group-hover:bg-accent/20'
                  } transition-colors`}
                >
                  <service.icon
                    className={`w-7 h-7 ${
                      service.highlighted ? 'text-accent' : 'text-primary group-hover:text-accent'
                    } transition-colors`}
                  />
                </div>
                <CardTitle
                  className={`font-heading text-xl ${
                    service.highlighted ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {service.title}
                </CardTitle>
                <CardDescription
                  className={service.highlighted ? 'text-primary-foreground/80' : ''}
                >
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          service.highlighted ? 'text-accent' : 'text-accent'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          service.highlighted
                            ? 'text-primary-foreground/90'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
