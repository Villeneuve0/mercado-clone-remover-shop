import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: "Casa e Jardim", href: "#" },
    { label: "Limpeza", href: "#" },
    { label: "Produtos de Limpeza", href: "#" },
    { label: "Pasta japonesa remove anti rugas pele macia rejuvenecida", href: "#", active: true }
  ];

  return (
    <nav className="flex items-center gap-2 py-4 text-sm">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-3 h-3 text-text-muted" />}
          {item.active ? (
            <span className="text-text-primary">{item.label}</span>
          ) : (
            <a 
              href={item.href} 
              className="text-breadcrumb hover:underline"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;