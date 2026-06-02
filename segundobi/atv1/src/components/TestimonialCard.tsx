import Star from "../assets/star.svg";
import StarOuter from "../assets/starOuter.svg";

interface TestimonialCardProps {
    image: string;
    text: string;
    name: string;
    role: string;
    rating: number;
}

export default function TestimonialCard({ image, text, name, role, rating }: TestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={image} alt={`Imagem de perfil de ${name}`} />
            <span className="testimony">
                <p>{text}</p>
            </span>
            <span className="rating">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img 
                        key={index}
                        src={index < rating ? Star : StarOuter} 
                        alt="ícone estrela" 
                        width={22} 
                        height={20} 
                    />
                ))}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    );
}