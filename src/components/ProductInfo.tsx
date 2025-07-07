import { useState } from "react";
import { Heart, Share2, Star, TruckIcon, Shield, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductInfo = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const treatments = [
    {
      id: 0,
      name: "Tratamento 30 dias",
      description: "1 unidade",
      originalPrice: 299.00,
      discount: 34,
      price: 197.00,
      priceEach: 197.00,
      badge: null,
      link: "https://seguro.payt.com.br/a/P8zo0012i1k9qoyV"
    },
    {
      id: 1,
      name: "Tratamento 90 dias",
      description: "3 unidades",
      originalPrice: 497.00,
      discount: 40,
      price: 297.00,
      priceEach: 99.00,
      badge: "MAIS POPULAR",
      link: "https://seguro.payt.com.br/a/2n1eDD0RhgBqxeKd"
    },
    {
      id: 2,
      name: "Tratamento 150 dias",
      description: "5 unidades",
      originalPrice: 697.00,
      discount: 43,
      price: 397.00,
      priceEach: 79.40,
      badge: "MELHOR VALOR",
      link: "https://seguro.payt.com.br/a/r93vqNPksRMpxoYg"
    },
    {
      id: 3,
      name: "Tratamento 12 meses",
      description: "12 unidades",
      originalPrice: 1188.00,
      discount: 41,
      price: 697.00,
      priceEach: 58.08,
      badge: "ECONOMIA MÁXIMA",
      link: "https://seguro.payt.com.br/a/4Lvbjqa1T7bw4vzV"
    }
  ];

  const selectedProduct = treatments[selectedTreatment];

  return (
    <div className="space-y-6">
      {/* Product status */}
      <div className="flex items-center gap-4 text-sm">
        <Badge variant="outline" className="border-success text-success">Novo</Badge>
        <span className="text-text-muted">|</span>
        <span className="text-text-muted">+1500 vendidos</span>
      </div>

      {/* Product title */}
      <div>
        <h1 className="text-2xl font-normal text-text-primary mb-2">
          Pasta Japonesa Remove Anti-rugas Pele Macia Rejuvenecida
        </h1>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-ml-orange text-ml-orange" />
            ))}
          </div>
          <span className="text-text-primary font-medium">4.8</span>
          <span className="text-ml-blue">(70 opiniões)</span>
        </div>
      </div>

      {/* Product options */}
      <div>
        <h3 className="text-text-primary font-medium mb-4">Escolha seu tratamento:</h3>
        <div className="space-y-3">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => setSelectedTreatment(treatment.id)}
              className={`relative border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                selectedTreatment === treatment.id
                  ? 'border-ml-blue bg-blue-50'
                  : 'border-product-border hover:border-ml-blue/50'
              }`}
            >
              {treatment.badge && (
                <div className={`absolute -top-2 left-4 px-2 py-1 rounded text-xs font-medium text-white ${
                  treatment.badge === "MAIS POPULAR" ? "bg-ml-orange" : 
                  treatment.badge === "MELHOR VALOR" ? "bg-ml-green" : "bg-purple-500"
                }`}>
                  {treatment.badge}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedTreatment === treatment.id 
                      ? 'border-ml-blue bg-ml-blue' 
                      : 'border-gray-300'
                  }`}>
                    {selectedTreatment === treatment.id && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{treatment.name}</div>
                    <div className="text-sm text-text-secondary">{treatment.description}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-text-muted line-through">
                      R$ {treatment.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-medium text-ml-green">
                      {treatment.discount}% OFF
                    </span>
                  </div>
                  <div className="text-xl font-light text-text-primary">
                    R$ {treatment.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-text-secondary">
                    R$ {treatment.priceEach.toFixed(2)} cada
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price section */}
      <div className="border-t border-product-border pt-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-text-muted line-through">
            R$ {selectedProduct.originalPrice.toFixed(2)}
          </span>
          <span className="text-ml-green font-medium">
            {selectedProduct.discount}% OFF
          </span>
        </div>
        
        <div className="text-3xl font-light text-text-primary mb-1">
          R$ {selectedProduct.price.toFixed(2)}
        </div>
        
        <div className="text-ml-green text-sm mb-4">
          em 12x R$ {(selectedProduct.price / 12).toFixed(2)} sem juros
        </div>
        
        <Button variant="link" className="text-ml-blue p-0 h-auto">
          Ver os meios de pagamento
        </Button>
      </div>

      {/* Shipping */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-ml-green">
          <TruckIcon className="w-5 h-5" />
          <span className="font-medium">Frete grátis</span>
        </div>
        <div className="text-ml-green text-sm font-medium">
          Chegará grátis entre {(() => {
            const today = new Date();
            const startDate = new Date(today);
            startDate.setDate(today.getDate() + 7);
            const endDate = new Date(today);
            endDate.setDate(today.getDate() + 10);
            return `${startDate.getDate()}/${(startDate.getMonth() + 1).toString().padStart(2, '0')} e ${endDate.getDate()}/${(endDate.getMonth() + 1).toString().padStart(2, '0')}`;
          })()}
        </div>
        <div className="text-text-secondary text-sm">
          Chegará entre {(() => {
            const today = new Date();
            const startDate = new Date(today);
            startDate.setDate(today.getDate() + 2);
            const endDate = new Date(today);
            endDate.setDate(today.getDate() + 3);
            return `${startDate.getDate()}/${(startDate.getMonth() + 1).toString().padStart(2, '0')} e ${endDate.getDate()}/${(endDate.getMonth() + 1).toString().padStart(2, '0')}`;
          })()}
        </div>
        <Button variant="link" className="text-ml-blue p-0 h-auto text-sm">
          Mais formas de entrega
        </Button>
      </div>

      {/* Stock */}
      <div className="text-text-primary">
        Estoque disponível
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-4">
        <span className="text-text-primary">Quantidade:</span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 p-0"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 p-0"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <span className="text-text-secondary">(+10 disponíveis)</span>
      </div>

      {/* Action buttons */}
      <div className="space-y-3">
        <Button 
          className="w-full bg-ml-blue hover:bg-ml-blue-dark text-white py-3 text-lg"
          onClick={() => window.open(selectedProduct.link, '_blank')}
        >
          Comprar agora
        </Button>
        <Button variant="outline" className="w-full border-ml-blue text-ml-blue hover:bg-blue-50 py-3">
          Adicionar ao carrinho
        </Button>
      </div>

      {/* Additional actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-product-border">
        <Button variant="link" className="text-ml-blue p-0 h-auto flex items-center gap-1">
          <Heart className="w-4 h-4" />
          Adicionar aos favoritos
        </Button>
        <Button variant="link" className="text-ml-blue p-0 h-auto flex items-center gap-1">
          <Share2 className="w-4 h-4" />
          Compartilhar
        </Button>
      </div>

      {/* Seller info */}
      <div className="bg-product-bg rounded p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-text-primary font-medium">Vendido por FARMA +</div>
            <div className="flex items-center gap-2 text-sm">
              <Badge className="bg-ml-blue text-white">MercadoLíder</Badge>
              <span className="text-text-secondary">+1000 vendas</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Shield className="w-4 h-4 text-ml-green" />
          <span className="text-text-secondary">
            Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.
          </span>
        </div>
        
        <div className="text-sm text-text-secondary">
          Garantia do vendedor: 30 dias
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;