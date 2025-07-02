import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDescription = () => {
  return (
    <div className="mt-8 bg-white rounded border border-product-border">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4 rounded-none border-b border-product-border bg-transparent">
          <TabsTrigger 
            value="description" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-ml-blue data-[state=active]:bg-transparent rounded-none"
          >
            Descrição
          </TabsTrigger>
          <TabsTrigger 
            value="characteristics"
            className="data-[state=active]:border-b-2 data-[state=active]:border-ml-blue data-[state=active]:bg-transparent rounded-none"
          >
            Características
          </TabsTrigger>
          <TabsTrigger 
            value="reviews"
            className="data-[state=active]:border-b-2 data-[state=active]:border-ml-blue data-[state=active]:bg-transparent rounded-none"
          >
            Opiniões sobre o produto
          </TabsTrigger>
          <TabsTrigger 
            value="questions"
            className="data-[state=active]:border-b-2 data-[state=active]:border-ml-blue data-[state=active]:bg-transparent rounded-none"
          >
            Perguntas e respostas
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-4">Descrição</h3>
              <div className="prose prose-sm max-w-none text-text-secondary">
                <p>
                  A <strong>Pasta Japonesa Remove Anti Rugas</strong> é um produto revolucionário desenvolvido com 
                  tecnologia japonesa avançada para combater os sinais do envelhecimento e proporcionar uma 
                  pele mais macia e rejuvenescida.
                </p>
                <p>
                  Formulada com ingredientes naturais e ativos poderosos, esta pasta oferece resultados 
                  visíveis em poucas semanas de uso, reduzindo rugas, linhas de expressão e melhorando 
                  a textura da pele.
                </p>
                
                <h4 className="text-md font-medium text-text-primary mt-6 mb-3">Principais benefícios:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reduz rugas e linhas de expressão</li>
                  <li>Melhora a textura e elasticidade da pele</li>
                  <li>Hidrata profundamente</li>
                  <li>Promove regeneração celular</li>
                  <li>Resultados visíveis em 4 semanas</li>
                  <li>Fórmula com ingredientes naturais</li>
                  <li>Tecnologia japonesa avançada</li>
                </ul>
                
                <h4 className="text-md font-medium text-text-primary mt-6 mb-3">Como usar:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Limpe bem o rosto com água morna</li>
                  <li>Aplique uma pequena quantidade da pasta</li>
                  <li>Massageie suavemente em movimentos circulares</li>
                  <li>Deixe agir por 20-30 minutos</li>
                  <li>Enxágue com água morna</li>
                  <li>Use 2-3 vezes por semana para melhores resultados</li>
                </ol>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="characteristics" className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text-primary mb-4">Características do produto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-product-border">
                  <span className="text-text-secondary">Marca</span>
                  <span className="text-text-primary font-medium">Remove</span>
                </div>
                <div className="flex justify-between py-2 border-b border-product-border">
                  <span className="text-text-secondary">Tipo de pele</span>
                  <span className="text-text-primary font-medium">Todos os tipos</span>
                </div>
                <div className="flex justify-between py-2 border-b border-product-border">
                  <span className="text-text-secondary">Idade recomendada</span>
                  <span className="text-text-primary font-medium">25+ anos</span>
                </div>
                <div className="flex justify-between py-2 border-b border-product-border">
                  <span className="text-text-secondary">Conteúdo</span>
                  <span className="text-text-primary font-medium">50g</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-product-border">
                  <span className="text-text-secondary">Origem</span>
                  <span className="text-text-primary font-medium">Japão</span>
                </div>
                <div className="flex justify-between py-2 border-b border-product-border">
                  <span className="text-text-secondary">Dermatologicamente testado</span>
                  <span className="text-text-primary font-medium">Sim</span>
                </div>
                <div className="flex justify-between py-2 border-b border-product-border">
                  <span className="text-text-secondary">Cruelty free</span>
                  <span className="text-text-primary font-medium">Sim</span>
                </div>
                <div className="flex justify-between py-2 border-b border-product-border">
                  <span className="text-text-secondary">Validade</span>
                  <span className="text-text-primary font-medium">24 meses</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="p-6">
          <div className="text-center py-8">
            <p className="text-text-muted">Opiniões dos clientes em breve...</p>
          </div>
        </TabsContent>
        
        <TabsContent value="questions" className="p-6">
          <div className="text-center py-8">
            <p className="text-text-muted">Perguntas e respostas em breve...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDescription;