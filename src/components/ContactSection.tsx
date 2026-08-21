import { MessageCircle, Mail, Instagram, Shield, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '(45) 99936-0309',
      href: 'https://wa.me/5545999360309',
      color: 'bg-green-500/10 text-green-600',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'lkaumo@hotmail.com',
      href: 'mailto:lkaumo@hotmail.com',
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@laraluisak',
      href: 'https://www.instagram.com/laraluisak',
      color: 'bg-pink-500/10 text-pink-600',
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
            Contato
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos Falar sobre o seu{' '}
            <span className="text-primary">Negócio?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estou pronta para ajudar você a alcançar seus objetivos empresariais.
            Entre em contato e agende uma consulta inicial sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Credentials */}
          <div>
            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all group"
                >
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Professional Credentials Box */}
            <div className="bg-primary text-primary-foreground rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg">Garantia Profissional</h3>
              </div>

              <div className="space-y-3 text-primary-foreground/90">
                <div className="flex justify-between items-center py-2 border-b border-primary-foreground/10">
                  <span className="text-sm">Nome Completo</span>
                  <span className="font-medium text-sm">Lara Luisa S. K. Q. da Silva</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-foreground/10">
                  <span className="text-sm">CRC/Contadora nº</span>
                  <span className="font-bold text-accent">PR-076232/O-3</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">CNPJ</span>
                  <span className="font-medium text-sm">43.848.040/0001-09</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">
              Agende uma Consulta Inicial
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas.
            </p>

            <form action="https://formsubmit.co/lkaumo@hotmail.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="Nova mensagem do site - Contadora Lara Luisa" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  maxLength={100}
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  maxLength={255}
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Telefone / WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  maxLength={20}
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Como posso ajudar você?"
                  rows={4}
                  required
                  maxLength={1000}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
