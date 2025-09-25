import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Package, Utensils, Heart, Clock, MapPin } from "lucide-react";

const DonationSection = () => {
  return (
    <section id="doacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como <span className="bg-gradient-hero bg-clip-text text-transparent">Doar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sua doação faz a diferença na vida de famílias em situação de vulnerabilidade. 
            Conheça as diferentes formas de contribuir com nossa causa.
          </p>
        </div>

        {/* Tipos de Doação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Alimentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Doação de alimentos não perecíveis, frutas, verduras e itens básicos de higiene.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Arroz, feijão, açúcar</li>
                <li>• Óleo, macarrão, farinha</li>
                <li>• Leite em pó, achocolatado</li>
                <li>• Produtos de higiene pessoal</li>
              </ul>
              <Button variant="default" className="w-full mt-4">
                <HandHeart className="h-4 w-4 mr-2" />
                Doar Alimentos
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Dinheiro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Doações em dinheiro para compra estratégica de alimentos e suprimentos.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>R$ 20</span>
                  <span>1 cesta básica</span>
                </div>
                <div className="flex justify-between">
                  <span>R$ 50</span>
                  <span>3 cestas básicas</span>
                </div>
                <div className="flex justify-between">
                  <span>R$ 100</span>
                  <span>6 cestas básicas</span>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-4">
                <Heart className="h-4 w-4 mr-2" />
                Doar Dinheiro
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Tempo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Doe seu tempo como voluntário nas atividades de distribuição e organização.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Triagem de doações</li>
                <li>• Montagem de cestas</li>
                <li>• Distribuição de alimentos</li>
                <li>• Cadastro de beneficiários</li>
              </ul>
              <Button variant="accent" className="w-full mt-4">
                <Clock className="h-4 w-4 mr-2" />
                Ser Voluntário
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Pontos de Coleta */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8">Pontos de Coleta</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Centro Comunitário Vila São João</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Rua das Flores, 123 - Vila São João
                    </p>
                    <p className="text-sm font-medium">
                      Segunda a Sexta: 8h às 17h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Igreja São Francisco</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Av. Central, 456 - Centro
                    </p>
                    <p className="text-sm font-medium">
                      Todos os dias: 6h às 20h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Escola Municipal Esperança</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Rua da Escola, 789 - Jardim Esperança
                    </p>
                    <p className="text-sm font-medium">
                      Segunda a Sexta: 7h às 16h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Não pode ir até um ponto de coleta? Agende uma retirada em casa!
            </p>
            <Button variant="outline" size="lg">
              <Package className="h-5 w-5 mr-2" />
              Agendar Retirada
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Juntos Somos Mais Fortes</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Cada doação, por menor que seja, representa esperança para uma família.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-12 py-4">
            <HandHeart className="h-6 w-6 mr-3" />
            Fazer Minha Primeira Doação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;