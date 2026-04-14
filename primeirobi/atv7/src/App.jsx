import './App.css'
import Header from './components/Header'
import Article from './components/Article'

const Navigation = () => (
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Perfil</a></li>
      <li><a href="#">Redes</a></li>
      <li><a href="#">Configuração</a></li>
    </ul>
  </nav>
);

const Sidebar = () => (
  <aside>
    <h3>Posts Relacionados</h3>
    <ul>
      <li><a href="#">O que é um Blog</a></li>
      <li><a href="#">Blog oficial</a></li>
    </ul>
  </aside>
);

const Footer = () => (
  <footer>
    <p>&copy; 2026 - Todos os direitos reservados por Fernando.</p>
  </footer>
);

function App() {
  const postInfo = {
    titulo: "Minha Transição para React",
    data: "12/Abril/2026",
    conteudo: "Hoje estou aprendendo a componentizar interfaces. O React permite dividir o HTML em pequenas partes reutilizáveis.",
    imagem: "https://static.vecteezy.com/ti/fotos-gratis/t2/24095709-uma-pessoa-caminhando-para-a-aviao-com-uma-mochila-viajando-imagem-generativo-ai-foto.jpg",
    legenda: "Explorando novos horizontes no desenvolvimento Full Stack."
  };

  return (
    <div className="container-app">
      {}
      <Header />
      
      {}
      <Navigation />

      <main>
        {}
        <Article 
          titulo={postInfo.titulo}
          data={postInfo.data}
          conteudo={postInfo.conteudo}
          imagem={postInfo.imagem}
          legenda={postInfo.legenda}
        />
        <Sidebar />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;