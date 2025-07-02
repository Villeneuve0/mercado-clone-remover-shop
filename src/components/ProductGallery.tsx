import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import productMain from "@/assets/product-main.jpg";
import productLogo from "@/assets/product-logo.jpg";

const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "/lovable-uploads/2d5d64fb-2c3d-4b27-89f3-ffa45513eff7.png",
    productLogo,
    productMain,
    productLogo
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative bg-white rounded border border-product-border overflow-hidden">
        <div className="aspect-square relative">
          <img 
            src={images[currentImage]} 
            alt="Pasta japonesa remove anti rugas"
            className="w-full h-full object-cover"
          />
          
          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Zoom button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute bottom-2 right-2 bg-white/80 hover:bg-white shadow-md"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
            {currentImage + 1}/{images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail images */}
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-16 h-16 border-2 rounded overflow-hidden ${
              currentImage === index 
                ? 'border-ml-blue' 
                : 'border-product-border hover:border-ml-blue/50'
            }`}
          >
            <img 
              src={image} 
              alt={`Produto ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;