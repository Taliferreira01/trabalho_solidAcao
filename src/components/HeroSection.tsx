import { Button } from "@/components/ui/button";
import { ArrowRight, Users, HandHeart, Target } from "lucide-react";
import heroImage from "@/assets/hero-solidariedade.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Comunidade unida contra a fome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Juntos Contra a 
            <span className="block bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent">
              Vulnerabilidade
            </span>
            <span className="block text-4xl md:text-5xl">Alimentar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Uma plataforma digital que conecta comunidades, facilita doações e promove a 
            inclusão social através da tecnologia. Transformando vidas com solidariedade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              <Users className="h-5 w-5 mr-2" />
              Cadastrar Beneficiário
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <HandHeart className="h-5 w-5 mr-2" />
              Fazer Doação
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Famílias Cadastradas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">1,200</div>
              <div className="text-white/80">Refeições Distribuídas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Voluntários Ativos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;