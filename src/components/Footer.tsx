import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Missão */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">SolidAção</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Projeto de extensão universitária dedicado ao combate à vulnerabilidade alimentar 
              através da tecnologia e inclusão digital. Construindo pontes entre comunidades 
              e promovendo a solidariedade.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-white/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/80 hover:text-primary transition-colors">
                  Sobre o Projeto
                </a>
              </li>
              <li>
                <a href="#cadastro" className="text-white/80 hover:text-primary transition-colors">
                  Cadastro de Beneficiários
                </a>
              </li>
              <li>
                <a href="#doacoes" className="text-white/80 hover:text-primary transition-colors">
                  Como Doar
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-white/80 hover:text-primary transition-colors">
                  Nosso Impacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-white/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-white/80">contato@solidacao.org</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-white/80">
                  Universidade - Campus Central<br />
                  Rua da Extensão, 123<br />
                  São Paulo - SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 SolidAção - Projeto de Extensão Universitária. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              <strong>Atividade Extensionista:</strong> Inclusão Digital e Combate às Desigualdades Sociais
            </p>
            <p className="text-white/50 text-xs mt-2">
              Desenvolvido como projeto final da disciplina de Inclusão Digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;