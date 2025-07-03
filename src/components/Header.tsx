import { useState, useEffect } from "react";
import { Search, MapPin, ShoppingCart, User, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import handshakeLogo from "@/assets/handshake-logo.png";

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
        {/* Top section with logo */}
        <div className="flex items-center justify-center py-3">
          <img 
            src="/lovable-uploads/7643d3a1-5fbc-4237-988d-59fdd2b256f7.png"
            alt="Logo" 
            className="h-16 w-auto"
          />
        </div>

        {/* Location info */}
        <div className="flex items-center justify-center py-2 text-sm border-b border-black/10">
          <div className="flex items-center gap-1 text-text-secondary font-bold">
            <MapPin className="w-4 h-4" />
            <span>
              {isLoadingLocation 
                ? 'Localizando...' 
                : `Enviar para ${location?.city} ${location?.postal}`
              }
            </span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center gap-6 py-3">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                className="w-full pl-4 pr-12 py-2.5 rounded border border-product-border bg-white focus:ring-2 focus:ring-ml-blue focus:border-ml-blue text-base"
              />
              <Button 
                variant="ghost" 
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text-primary p-2"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
              meli+ R$ 8,90 <span className="text-xs opacity-90">MÊS</span>
            </div>
            <div className="text-xs text-text-secondary font-bold whitespace-nowrap">
              COM CASHBACK<br/>E DESCONTOS EXCLUSIVOS
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm font-bold">
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-text-primary p-1">
              Favoritos
            </Button>
            <Button variant="ghost" size="sm" className="relative text-text-secondary hover:text-text-primary p-1">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 py-2 text-sm border-t border-black/10 font-bold">
          <a href="#" className="text-text-secondary hover:text-text-primary">Categorias</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Ofertas</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Cupons</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Supermercado</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Moda</a>
          <a href="#" className="text-text-secondary hover:text-text-primary flex items-center gap-1">
            Mercado Play
            <span className="bg-blue-600 text-white text-xs px-1 rounded font-bold">NOVO</span>
          </a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Vender</a>
          <a href="#" className="text-text-secondary hover:text-text-primary">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;