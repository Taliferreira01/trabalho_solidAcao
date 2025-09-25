import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, UserPlus, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegistrationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Em breve entraremos em contato para agendar a visita domiciliar.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="cadastro" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto shadow-warm">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Cadastro Realizado!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sua solicitação foi enviada com sucesso. Nossa equipe entrará em contato 
                em até 48 horas para agendar a visita domiciliar e validar as informações.
              </p>
              <Button 
                variant="default" 
                onClick={() => setIsSubmitted(false)}
              >
                Fazer Novo Cadastro
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="cadastro" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cadastro de Beneficiários
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Se você ou sua família estão passando por dificuldades alimentares, 
            cadastre-se aqui. Nosso objetivo é ajudar com dignidade e respeito.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-warm">
            <CardHeader className="bg-white/5 backdrop-blur-sm">
              <CardTitle className="flex items-center text-2xl">
                <UserPlus className="h-6 w-6 mr-3 text-primary" />
                Formulário de Cadastro
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados Pessoais */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Dados Pessoais
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input id="nome" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF *</Label>
                      <Input id="cpf" placeholder="000.000.000-00" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input id="telefone" placeholder="(11) 99999-9999" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                      <Input id="dataNascimento" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estadoCivil">Estado Civil</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solteiro">Solteiro(a)</SelectItem>
                          <SelectItem value="casado">Casado(a)</SelectItem>
                          <SelectItem value="divorciado">Divorciado(a)</SelectItem>
                          <SelectItem value="viuvo">Viúvo(a)</SelectItem>
                          <SelectItem value="uniao-estavel">União Estável</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Endereço</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP *</Label>
                      <Input id="cep" placeholder="00000-000" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="endereco">Endereço *</Label>
                      <Input id="endereco" placeholder="Rua, número" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bairro">Bairro *</Label>
                      <Input id="bairro" placeholder="Seu bairro" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input id="cidade" placeholder="Sua cidade" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado *</Label>
                      <Input id="estado" placeholder="SP" required />
                    </div>
                  </div>
                </div>

                {/* Situação Familiar */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Situação Familiar</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="rendaFamiliar">Renda Familiar Mensal</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a faixa" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sem-renda">Sem renda</SelectItem>
                          <SelectItem value="ate-500">Até R$ 500,00</SelectItem>
                          <SelectItem value="500-1000">R$ 500,00 - R$ 1.000,00</SelectItem>
                          <SelectItem value="1000-1500">R$ 1.000,00 - R$ 1.500,00</SelectItem>
                          <SelectItem value="acima-1500">Acima de R$ 1.500,00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pessoas">Número de pessoas na família *</Label>
                      <Input id="pessoas" type="number" placeholder="Ex: 4" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="criancas">Crianças (0-12 anos)</Label>
                      <Input id="criancas" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idosos">Idosos (60+ anos)</Label>
                      <Input id="idosos" type="number" placeholder="0" />
                    </div>
                  </div>
                </div>

                {/* Observações */}
                <div className="space-y-2">
                  <Label htmlFor="observacoes">Observações / Situação especial</Label>
                  <Textarea 
                    id="observacoes" 
                    placeholder="Descreva brevemente sua situação atual e necessidades específicas"
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Realizar Cadastro
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;