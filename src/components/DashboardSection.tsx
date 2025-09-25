import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Package, Heart, TrendingUp, Calendar, MapPin } from "lucide-react";

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nosso <span className="bg-gradient-hero bg-clip-text text-transparent">Impacto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe em tempo real o impacto da nossa ação social na comunidade. 
            Transparência e responsabilidade em cada passo do projeto.
          </p>
        </div>

        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-card hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Famílias Atendidas</p>
                  <p className="text-3xl font-bold text-primary">523</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-green-600">+12%</span> este mês
                  </p>
                </div>
                <Users className="h-12 w-12 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Cestas Distribuídas</p>
                  <p className="text-3xl font-bold text-secondary">1,247</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-green-600">+8%</span> este mês
                  </p>
                </div>
                <Package className="h-12 w-12 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Doadores Ativos</p>
                  <p className="text-3xl font-bold text-accent">186</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-green-600">+24%</span> este mês
                  </p>
                </div>
                <Heart className="h-12 w-12 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Voluntários</p>
                  <p className="text-3xl font-bold text-orange-500">67</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-green-600">+5</span> novos
                  </p>
                </div>
                <TrendingUp className="h-12 w-12 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progresso de Metas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-6 w-6 mr-2 text-primary" />
                Metas Mensais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Cestas Básicas</span>
                  <span className="text-sm text-muted-foreground">247/300</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Famílias Cadastradas</span>
                  <span className="text-sm text-muted-foreground">523/600</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Arrecadação (R$)</span>
                  <span className="text-sm text-muted-foreground">8.500/10.000</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-secondary" />
                Próximas Atividades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="bg-primary rounded-full w-3 h-3"></div>
                  <div>
                    <p className="text-sm font-medium">Distribuição Centro Comunitário</p>
                    <p className="text-xs text-muted-foreground">Sábado, 15/09 - 9h às 12h</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="bg-secondary rounded-full w-3 h-3"></div>
                  <div>
                    <p className="text-sm font-medium">Campanha de Arrecadação</p>
                    <p className="text-xs text-muted-foreground">Segunda, 17/09 - 8h às 17h</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="bg-accent rounded-full w-3 h-3"></div>
                  <div>
                    <p className="text-sm font-medium">Visitas Domiciliares</p>
                    <p className="text-xs text-muted-foreground">Terça, 18/09 - 14h às 18h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mapa de Atuação */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-accent" />
              Áreas de Atuação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">34</span>
                </div>
                <h4 className="font-semibold mb-1">Vila São João</h4>
                <p className="text-sm text-muted-foreground">Famílias atendidas</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-secondary">28</span>
                </div>
                <h4 className="font-semibold mb-1">Jardim Esperança</h4>
                <p className="text-sm text-muted-foreground">Famílias atendidas</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent">19</span>
                </div>
                <h4 className="font-semibold mb-1">Centro</h4>
                <p className="text-sm text-muted-foreground">Famílias atendidas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inclusão Digital */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto shadow-card bg-gradient-trust text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Inclusão Digital em Ação</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <p className="text-white/90">Beneficiários com acesso digital</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">12h</div>
                  <p className="text-white/90">Média de capacitação por pessoa</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">450+</div>
                  <p className="text-white/90">Pessoas capacitadas em tecnologia</p>
                </div>
              </div>
              <p className="mt-6 text-lg text-white/90">
                Transformando vidas através da educação digital e combatendo a exclusão tecnológica
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;