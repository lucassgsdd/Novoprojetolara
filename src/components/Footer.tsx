import { MessageCircle, Mail, Linkedin, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              Contadora <span className="text-accent">Lara Luisa</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Contabilidade clara e estratégica para o seu negócio crescer.
              Especialista em Simples Nacional, MEI e constituição de empresas.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">CRC PR-076232/O-3</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navegação</h4>
            <nav className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Contato'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5545999360309"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                (45) 99936-0309
              </a>
              <a
                href="mailto:lkaumo@hotmail.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                lkaumo@hotmail.com
              </a>
              <a
                href="https://linkedin.com/in/lara-luisa-57448885/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Lara Luisa - Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              CNPJ: 43.848.040/0001-09
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
