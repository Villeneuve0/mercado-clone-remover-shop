import { CreditCard, FileText, Shield, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-product-border mt-12">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-8">
        {/* Three main sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Payment methods */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 border border-product-border rounded-lg flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-ml-blue" />
              </div>
            </div>
            <h3 className="text-text-primary font-medium mb-3">Escolha como pagar</h3>
            <p className="text-text-secondary text-sm mb-3">
              Com Mercado Pago, você paga com cartão, 
              boleto ou Pix. Você também pode pagar em até 
              12x sem juros no cartão com a Linha de Crédito.
            </p>
            <Button variant="link" className="text-ml-blue p-0 h-auto text-sm">
              Como pagar com Mercado Pago
            </Button>
          </div>

          {/* Free shipping */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 border border-product-border rounded-lg flex items-center justify-center">
                <FileText className="w-8 h-8 text-ml-blue" />
              </div>
            </div>
            <h3 className="text-text-primary font-medium mb-3">Frete grátis a partir de R$ 19</h3>
            <p className="text-text-secondary text-sm">
              Ao se cadastrar no Mercado Livre, você tem frete 
              grátis em milhares de produtos.
            </p>
          </div>

          {/* Security */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 border border-product-border rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-ml-blue" />
              </div>
            </div>
            <h3 className="text-text-primary font-medium mb-3">Segurança, do início ao fim</h3>
            <p className="text-text-secondary text-sm mb-3">
              Você não gostou do que comprou? Devolva! No 
              Mercado Livre não há nada que você não possa 
              fazer, porque você está sempre protegido.
            </p>
            <Button variant="link" className="text-ml-blue p-0 h-auto text-sm">
              Como te protegemos
            </Button>
          </div>
        </div>

        {/* More information section */}
        <div className="text-center border-t border-product-border pt-6">
          <Button variant="link" className="text-text-secondary p-0 h-auto text-sm flex items-center gap-1 mx-auto">
            Mais informações
            <ChevronUp className="w-4 h-4" />
          </Button>
        </div>

        {/* Footer links */}
        <div className="border-t border-product-border pt-6 mt-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-text-secondary mb-4">
            <a href="#" className="hover:text-ml-blue">Trabalhe conosco</a>
            <a href="#" className="hover:text-ml-blue">Termos e condições</a>
            <a href="#" className="hover:text-ml-blue">Promoções</a>
            <a href="#" className="hover:text-ml-blue">Como cuidamos da sua privacidade</a>
            <a href="#" className="hover:text-ml-blue">Acessibilidade</a>
            <a href="#" className="hover:text-ml-blue">Contato</a>
            <a href="#" className="hover:text-ml-blue">Informações sobre seguros</a>
            <a href="#" className="hover:text-ml-blue">Programa de Afiliados</a>
            <a href="#" className="hover:text-ml-blue">Lista de presentes</a>
          </div>
          
          <div className="text-xs text-text-muted text-center">
            <p className="mb-1">Copyright © 1999-2025 Ebazar.com.br LTDA.</p>
            <p>CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;