import { useState, useEffect } from "react";
import Logo from "../assets/confeitei.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import Champion from "../assets/champion.svg";
import Check from "../assets/check.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Profile1 from "../assets/images/profiles/perfil1.jpg";
import Profile2 from "../assets/images/profiles/perfil2.jpg";
import Profile3 from "../assets/images/profiles/perfil3.jpg";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="bg-mobile">
                <nav className="container flex items-center justify-between py-sm">
                    <img src={Logo} alt="Logo Confeitei Academy" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#">Home</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
                                        <li><a onClick={() => setShowMobileMenu(false)} className="reverse-color" href="#">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="Ícone Fechar Menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="Ícone Abrir Menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    
                    <h1>Ferramentas exclusivas e modelagem 3D para elevar o nível da sua confeitaria!</h1>
                    <p>Personalize seus doces com nossos cortadores, marcadores e stencils de alta precisão feitos a laser. Qualidade industrial para resultados impecáveis nas suas criações.</p>
                    
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>
                    <p>
                        Inovação e precisão são com a gente! A <strong>Confeitei Academy </strong>
                        já conquistou diversos clientes. Seja você mais um deles e
                        veja tudo que pode ganhar com nossos produtos.
                    </p>
                </header>
                
                <section className="even-columns">
                    <Card 
                        icon={Champion} 
                        title="Cortadores 3D" 
                        description="Produzidos com alta tecnologia, garantindo cortes precisos em diversos formatos para biscoitos e pastas americanas."
                    />
                    <Card 
                        icon={Champion} 
                        title="Marcadores a Laser" 
                        description="Detalhes perfeitos gravados a laser em acrílico, dando um toque 100% profissional e exclusivo aos seus doces."
                    />
                    <Card 
                        icon={Champion} 
                        title="Projetos Especiais" 
                        description="Desenvolvemos a sua ideia do zero em software de modelagem para criar stencils e ferramentas sob medida."
                    />
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já comprou sabe da precisão e qualidade das nossas ferramentas. Deixamos para trás a ideia de cortadores frágeis. Acompanhe abaixo os testemunhos de confeiteiros que aprovam e recomendam nossa modelagem industrial.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard 
                            image={Profile1}
                            text="Os cortadores em 3D mudaram totalmente a agilidade dos meus biscoitos decorados. O corte vem super limpo, sem rebarbas. Excelente acabamento!"
                            name="Enzo Silva"
                            role="Young Creator & Modelador 3D"
                            rating={5}
                        />
                        <TestimonialCard 
                            image={Profile2}
                            text="Encomendei stencils e ferramentas sob medida para uma coleção exclusiva de bolos estruturados. O suporte na modelagem foi impecável e preciso."
                            name="Rafael Rocha"
                            role="Chef Confeiteira e Proprietário"
                            rating={5}
                        />
                        <TestimonialCard 
                            image={Profile3}
                            text="Os marcadores de acrílico personalizados com a identidade da minha marca valorizaram demais os meus doces finos. Meus clientes adoraram os detalhes!"
                            name="Carlos Costa"
                            role="Cake Designer & Palestrante"
                            rating={4}
                        />

                        <TestimonialCard 
                            image={Profile1}
                            text="Os cortadores em 3D mudaram totalmente a agilidade dos meus biscoitos decorados. O corte vem super limpo, sem rebarbas. Excelente acabamento!"
                            name="Enzo Silva"
                            role="Young Creator & Modelador 3D"
                            rating={5}
                        />
                        <TestimonialCard 
                            image={Profile2}
                            text="Encomendei stencils e ferramentas sob medida para uma coleção exclusiva de bolos estruturados. O suporte na modelagem foi impecável e preciso."
                            name="Rafael Rocha"
                            role="Chef Confeiteira e Proprietário"
                            rating={5}
                        />
                        <TestimonialCard 
                            image={Profile3}
                            text="Os marcadores de acrílico personalizados com a identidade da minha marca valorizaram demais os meus doces finos. Meus clientes adoraram os detalhes!"
                            name="Carlos Costa"
                            role="Cake Designer & Palestrante"
                            rating={4}
                        />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos pacotes</h2>
                </header>

                <section className="even-columns gap-1.5">
                    {/* Cartão 1: Básico */}
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Amostra de Corte</h3>
                            <p>Receba uma amostra de um cortador padrão para testar nossa qualidade industrial.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>1 Cortador 3D Padrão</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retirada no ateliê</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF/CNPJ</p>
                        </span>
                    </div>

                    {/* Cartão 2: Premium (Destaque) */}
                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>FRETE GRÁTIS</p>
                        </span>
                        <span className="plan">
                            <h3>Kit Profissional</h3>
                            <p>Para ateliês que produzem em alta escala e precisam de ferramentas exclusivas.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 149,90</h2>
                            <p>/kit</p>
                        </span>
                        <Button text="Assinar agora" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>3 Projetos Sob Medida (Mensal)</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Cortadores + Marcadores a Laser</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Prioridade na fila de impressão</p>
                        </span>
                    </div>

                    {/* Cartão 3: Empresarial (Opcional) */}
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Empresarial</h3>
                            <p>Para grandes confeitarias que precisam de inovação contínua e modelagens sob demanda.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 299,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Falar com vendas" secondary />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Projetos 3D Ilimitados</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Consultoria Exclusiva</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Envio Express Gratuito</p>
                        </span>
                    </div>
                </section>
            </section>
        </>
    )
}