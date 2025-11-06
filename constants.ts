import { NavLink, Feature, GalleryImage, Speaker, PricingPlan, Testimonial, FaqItem } from './types';

export const navLinks: NavLink[] = [
    { href: "#what-is-it", label: "O Evento" },
    { href: "#speakers", label: "Palestrantes" },
    { href: "#pricing", label: "Ingressos" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
];

export const features: Feature[] = [
    {
        icon: "checklist",
        title: "Plano de Ação de 90 Dias",
        description: "Saia com um plano de carreira e certificações claro e prático para executar e ter resultados em tempo recorde.",
    },
    {
        icon: "groups",
        title: "Networking de Alto Nível",
        description: "Participe de dinâmicas de networking guiado para construir conexões valiosas com os tubarões do mercado.",
    },
    {
        icon: "map",
        title: "Mapa de Oportunidades",
        description: "Receba um mapa completo com cargos, áreas e trilhas de carreira em alta no mercado financeiro para 2025 e 2026.",
    },
    {
        icon: "model_training",
        title: "Conteúdo Prático e Real",
        description: "Aprenda com estudos de caso reais de quem atua e gera resultados diários em grandes bancos e corretoras.",
    },
];

export const galleryImages: GalleryImage[] = [
    { 
        src: "https://img.youtube.com/vi/Q1VBylpQYYA/maxresdefault.jpg", 
        alt: "Aftermovie do evento Shark Experience", 
        className: "col-span-2 row-span-2",
        type: 'video',
        videoId: 'Q1VBylpQYYA'
    },
    { src: "/img/foto-shark-exp-1.jpg", alt: "Momento do evento Shark Experience", className: "" },
    { src: "/img/foto-shark-exp-3.jpg", alt: "Participantes do evento Shark Experience", className: "" },
    { src: "/img/foto-shark-exp-4.jpg", alt: "Palestra no evento Shark Experience", className: "" },
    { src: "/img/foto-shark-exp-6.jpg", alt: "Networking no evento Shark Experience", className: "" },
    { src: "/img/foto-shark-exp-7.jpg", alt: "Momento especial do evento Shark Experience", className: "" },
];

export const speakers: Speaker[] = [
    {
        imgSrc: "/img/speakers/lucas-silva.jpg",
        name: "Lucas Silva, CFP®",
        title: "Co-fundador, LS Educação",
        description: "Referência em educação financeira com mais de 100.000 alunos e anfitrião do Shark Experience.",
    },
    {
        imgSrc: "/img/speakers/fernanda-morais.jpg",
        name: "Fernanda de Morais",
        title: "Especialista em Autoridade Digital",
        description: "Ajuda profissionais do mercado financeiro a construir uma presença digital que atrai clientes de alta renda.",
    },
    {
        imgSrc: "/img/speakers/isabela-schnorr.jpg",
        name: "Isabela Schnorr",
        title: "Fundadora, TalentBox",
        description: "Headhunter especialista em mercado financeiro, conectando os melhores talentos às maiores instituições.",
    },
    {
        imgSrc: "/img/speakers/tati-grecco.jpg",
        name: "Tati Grecco",
        title: "Sócia e Diretora, Itaú",
        description: "Líder com vasta experiência em gestão de ativos e negócios, comandando equipes de alta performance.",
    },
    {
        imgSrc: "/img/speakers/germano-silva.jpg",
        name: "Germano Silva, CFP®",
        title: "Mentor e Advisor",
        description: "Ex-líder no Itaú e mentor de executivos, especialista em carreira e liderança no mercado financeiro.",
    },
     {
        imgSrc: "/img/speakers/liao-yu-chieh.jpg",
        name: "Liao Yu Chieh, CFP®",
        title: "Diretor Executivo, BTG Pactual",
        description: "Educador financeiro, ex-C6 Bank e professor, com ampla experiência executiva nos maiores bancos do país.",
    },
];

export const pricingPlans: PricingPlan[] = [
    {
        name: "SILVER",
        price: "R$1.997",
        features: [
            "Acesso ao evento presencial",
            "Assento no setor Silver",
            "Acesso à gravação por 1 ano",
            "Acesso à feira de negócios",
        ],
        isPopular: false,
    },
    {
        name: "GOLD",
        price: "R$2.497",
        features: [
            "Todos os benefícios do Silver",
            "Assento no setor Gold",
            "Kit de boas-vindas",
            "Entrada antecipada no evento",
        ],
        isPopular: true,
    },
    {
        name: "DIAMOND",
        price: "R$3.497",
        features: [
            "Todos os benefícios do Gold",
            "Assento no setor Diamond",
            "Almoço com palestrantes e convidados",
            "Acesso ao Lounge Diamond",
        ],
        isPopular: false,
    },
];

export const testimonials: Testimonial[] = [
    {
        quote: "\"Em 30 dias de mentoria com o Lucas, fui promovida e recebi um aumento de 30% no meu salário. É um divisor de águas, você começa a enxergar o que ninguém vê e se posicionar de forma única.\"",
        author: {
            imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop",
            name: "Ana Clara Leite",
            title: "Gerente Uniclass, Itaú",
        },
    },
    {
        quote: "\"O SharkPRO foi fundamental para minha aprovação no CFP® e para a minha transição de carreira. As aulas e o networking com a comunidade foram essenciais para alcançar meu cargo atual na XP.\"",
        author: {
            imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
            name: "Rafael Bittencourt",
            title: "Assessor de Investimentos, XP Inc.",
        },
    },
];

export const faqItems: FaqItem[] = [
    {
        question: "Quando e onde será o Shark Experience?",
        answer: "O evento acontecerá no dia 29 de Novembro de 2025, em São Paulo - SP. O local exato será o WTC Events Center, um dos espaços mais prestigiados da cidade.",
        defaultOpen: true,
    },
    {
        question: "Para quem é este evento?",
        answer: "É para profissionais do mercado financeiro que buscam aceleração de carreira, seja através de uma promoção, transição de área ou preparação para certificações (CPA-10, CPA-20, CEA, CFP®). Se você quer se destacar, este evento é para você.",
    },
    {
        question: "Posso parcelar o valor do ingresso?",
        answer: "Sim! Você pode parcelar sua inscrição em até 12x no cartão de crédito. Também aceitamos PIX como forma de pagamento.",
    },
    {
        question: "Terei acesso às gravações?",
        answer: "Sim, todos os ingressos (Silver, Gold e Diamond) dão acesso à gravação completa do evento por 1 ano, para você rever todo o conteúdo quando quiser.",
    },
];