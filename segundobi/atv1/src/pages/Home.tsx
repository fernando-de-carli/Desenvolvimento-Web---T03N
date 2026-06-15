import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import "../styles/footer.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    
    const [isChallengeCompleted, setChallengeCompleted] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    function handleCompleteChallenge(token: string | null) {
        if (!token) {
            setChallengeCompleted(false);
            return;
        }
        setChallengeCompleted(true);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isChallengeCompleted) {
            toast.warning("Por favor, confirme que você não é um robô!");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error ?? "Erro ao enviar a mensagem.");
            }

            toast.success("Mensagem enviada com sucesso! Responderemos em breve.");
            
            setEmail("");
            setMessage("");
            setChallengeCompleted(false);
            recaptchaRef.current?.reset();

        } catch (error: any) {
            toast.error(error.message ?? "Falha ao enviar. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer position="bottom-right" />

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
                            name="Carlos Costa"
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
                            name="Enzo Silva"
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

            <section id="contact" className="container" style={{ paddingBlock: "4rem" }}>
                <header style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                    <h2>Orçamentos e Projetos</h2>
                    <p style={{ textAlign: "center" }}>Tem uma ideia de cortador, stencil ou marcador personalizado? Envie sua mensagem e desenvolvemos para você!</p>
                </header>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "500px", margin: "0 auto", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label htmlFor="email" style={{ fontWeight: "bold" }}>Seu E-mail:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            placeholder="exemplo@gmail.com"
                            style={{ padding: "0.8rem", borderRadius: "0.5rem", border: "1px solid var(--primary-color)", width: "100%" }}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label htmlFor="message" style={{ fontWeight: "bold" }}>Sua Mensagem (Descreva o projeto):</label>
                        <textarea 
                            id="message" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required 
                            placeholder="Olá! Preciso de um cortador personalizado com a logo da minha marca de doces..."
                            rows={5}
                            style={{ padding: "0.8rem", borderRadius: "0.5rem", border: "1px solid var(--primary-color)", width: "100%", resize: "vertical" }}
                        />
                    </div>

                    {siteKey && (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={siteKey}
                                onChange={handleCompleteChallenge}
                            />
                        </div>
                    )}

                    <Button text={loading ? "Enviando..." : "Enviar Solicitação"} />
                </form>
            </section>

            {}
            <footer className="footer-section container">
                <div className="footer-grid">
                    {}
                    <div className="footer-col">
                        <h3>Confeitei</h3>
                        <div className="social-icons">
                            {}
                            <svg viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            {}
                            <svg viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            {}
                            <svg viewBox="0 0 24 24">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </div>
                    </div>

                    {}
                    <div className="footer-col">
                        <h3>Empresa</h3>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    {}
                    <div className="footer-col">
                        <h3>Funcionalidades</h3>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Análise de dados</a></li>
                            <li><a href="#">Boot discord</a></li>
                        </ul>
                    </div>

                    {}
                    <div className="footer-col">
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="#">IOS & Android</a></li>
                            <li><a href="#">Teste a Demo</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

            {}
            <div className="footer-bottom">
                <p>Feito por Fernando ©2026 Confeitei Academy - Todos os direitos reservados.</p>
            </div>
            {}
        </>
    )
}