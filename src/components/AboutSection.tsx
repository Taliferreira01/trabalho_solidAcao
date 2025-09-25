import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Lightbulb } from "lucide-react";
import iconDoacao from "@/assets/icon-doacao.jpg";
import inclusaoDigital from "@/assets/inclusao-digital.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa <span className="bg-gradient-hero bg-clip-text text-transparent">Missão</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combater a vulnerabilidade alimentar através da tecnologia, promovendo 
            inclusão social e construindo uma rede solidária de apoio mútuo na comunidade.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Solidariedade</h3>
              <p className="text-muted-foreground">
                Promovendo o cuidado mútuo e a união da comunidade
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="bg-gradient-trust rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eficiência</h3>
              <p className="text-muted-foreground">
                Gestão inteligente de recursos e doações
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusão</h3>
              <p className="text-muted-foreground">
                Garantindo acesso igualitário para todos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
              <p className="text-muted-foreground">
                Tecnologia a serviço do bem social
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Impacto Social</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-2 mt-1">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Combate à Fome</h4>
                  <p className="text-muted-foreground">
                    Identificação e atendimento de famílias em situação de vulnerabilidade alimentar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary rounded-full p-2 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Fortalecimento Comunitário</h4>
                  <p className="text-muted-foreground">
                    Criação de redes de apoio e desenvolvimento do senso de comunidade
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-full p-2 mt-1">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Inclusão Digital</h4>
                  <p className="text-muted-foreground">
                    Democratização do acesso à tecnologia como ferramenta de transformação social
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="overflow-hidden shadow-card">
              <CardContent className="p-0">
                <img 
                  src={iconDoacao} 
                  alt="Doações solidárias"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Gestão de Doações</h4>
                  <p className="text-sm text-muted-foreground">
                    Sistema inteligente para conectar doadores e beneficiários
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card">
              <CardContent className="p-0">
                <img 
                  src={inclusaoDigital} 
                  alt="Inclusão digital"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Tecnologia Social</h4>
                  <p className="text-sm text-muted-foreground">
                    Ferramentas digitais para o desenvolvimento comunitário
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;