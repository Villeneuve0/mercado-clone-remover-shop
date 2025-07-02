import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";

const Index = () => {
  return (
    <div className="min-h-screen bg-product-bg">
      <Header />
      
      <div className="container mx-auto px-4">
        <Breadcrumb />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
          {/* Product Gallery */}
          <div className="max-w-md">
            <ProductGallery />
          </div>
          
          {/* Product Information */}
          <div>
            <ProductInfo />
          </div>
        </div>
        
        {/* Product Description */}
        <ProductDescription />
      </div>
    </div>
  );
};

export default Index;
