import { useState, useEffect } from "react";
import { Search, MapPin, ShoppingCart, User, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import mercadoLivreLogo from "@/assets/mercadolivre-logo.png";

interface LocationData {
  city: string;
  region: string;
  postal: string;
  country: string;
}

const Header = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Usando ipapi.co - API gratuita que não requer chave
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        setLocation({
          city: data.city || 'São Paulo',
          region: data.region || 'SP',
          postal: data.postal || '01310-100',
          country: data.country_name || 'Brasil'
        });
      } catch (error) {
        console.error('Erro ao buscar localização:', error);
        // Fallback para localização padrão
        setLocation({
          city: 'São Paulo',
          region: 'SP', 
          postal: '01310-100',
          country: 'Brasil'
        });
      } finally {
        setIsLoadingLocation(false);
      }
    };

    fetchLocation();
  }, []);
  return (
    <header className="bg-ml-yellow border-b border-product-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-text-secondary">
              <MapPin className="w-4 h-4" />
              <span>
                {isLoadingLocation 
                  ? 'Localizando...' 
                  : `Enviar para ${location?.city} ${location?.postal}`
                }
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-text-secondary">
            <a href="#" className="hover:text-text-primary">Vender</a>
            <a href="#" className="hover:text-text-primary">Ajuda</a>
            <a href="#" className="hover:text-text-primary">Contato</a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center gap-4 py-3">
          <img 
            src={mercadoLivreLogo} 
            alt="Mercado Livre" 
            className="h-10 w-auto"
          />
          
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                className="w-full pl-4 pr-12 py-3 rounded border border-product-border bg-white focus:ring-2 focus:ring-ml-blue focus:border-ml-blue"
              />
              <Button 
                variant="ghost" 
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text-primary"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded text-sm font-medium">
              meli+ R$ 9,90 MDS
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-text-primary">
              Crie a sua conta
            </Button>
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-text-primary">
              Entre
            </Button>
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-text-primary">
              Compras
            </Button>
            <Button variant="ghost" size="sm" className="relative text-text-secondary hover:text-text-primary">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 py-2 text-sm">
          <a href="#" className="text-text-secondary hover:text-text-primary">Categorias</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Ofertas</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Histórico</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Supermercado</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Moda</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Mercado Play</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Vender</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;