import { Button } from "@/components/ui/button";
import { Heart, Users, Database, HandHeart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              SolidAção
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#cadastro" className="text-foreground hover:text-primary transition-colors">
              Cadastro
            </a>
            <a href="#doacoes" className="text-foreground hover:text-primary transition-colors">
              Doações
            </a>
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-2" />
              Voluntário
            </Button>
            <Button variant="hero" size="sm">
              <HandHeart className="h-4 w-4 mr-2" />
              Doar Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;