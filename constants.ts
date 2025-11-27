import { NavLink, Feature, GalleryImage, Speaker, PricingPlan, Testimonial, FaqItem } from './types';

export const navLinks: NavLink[] = [
    { href: "/evento", label: "O Evento" },
    { href: "/palestrantes", label: "Palestrantes" },
    { href: "/local", label: "Local" },
    { href: "/ingressos", label: "Ingressos" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/faq", label: "FAQ" },
];

export const features: Feature[] = [
    {
        icon: "checklist",
        title: "Plano de Ação de 90 Dias",
        description: "Saia com um plano de ação para turbinar sua carreira, conquistar uma promoção e gerar resultados em tempo recorde.",
    },
    {
        icon: "groups",
        title: "Conexões de Milhões",
        description: "Conecte-se com nomes que decidem o futuro do setor. Em minutos, você estará em contato direto com quem pode transformar sua trajetória.",
    },
    {
        icon: "map",
        title: "Mapa de Oportunidades",
        description: "Receba o mapa dos cargos e áreas mais desejados para 2026 e saia na frente da concorrência.",
    },
    {
        icon: "model_training",
        title: "Estratégias de Gigantes",
        description: "Aprenda os métodos e estudos de caso de quem movimenta bilhões no mercado e lidera as maiores instituições financeiras.",
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
    { src: "/img/foto-shark-exp-8.jpg", alt: "Lucas Silva no Shark Experience", className: "" },
];

export const speakers: Speaker[] = [
    {
        imgSrc: "/img/speakers/lucas-site-1.jpg",
        name: "Lucas Silva, CFP®",
        title: "Co-fundador, LS Educação",
        description: "Referência em educação financeira com mais de 100.000 alunos e anfitrião do Shark Experience.",
    },
    {
        imgSrc: "/img/speakers/fernanda-site-1.jpg",
        name: "Fernanda de Morais",
        title: "Especialista em Autoridade Digital",
        description: "Ajuda profissionais do mercado financeiro a construir uma presença digital que atrai clientes de alta renda.",
    },
    {
        imgSrc: "/img/speakers/isa-site-1.jpg",
        name: "Isabela Schnorr",
        title: "Fundadora, TalentBox",
        description: "Headhunter especialista em mercado financeiro, conectando os melhores talentos às maiores instituições.",
    },
    {
        imgSrc: "/img/speakers/tati-site-1.jpg",
        name: "Tati Grecco",
        title: "Sócia e Diretora, Itaú",
        description: "Líder com vasta experiência em gestão de ativos e negócios, comandando equipes de alta performance.",
    },
    {
        imgSrc: "/img/speakers/germano-site-1.jpg",
        name: "Germano Silva, CFP®",
        title: "Mentor e Advisor",
        description: "Ex-líder no Itaú e mentor de executivos, especialista em carreira e liderança no mercado financeiro.",
    },
     {
        imgSrc: "/img/speakers/liao-site-1.jpg",
        name: "Liao Yu Chieh, CFP®",
        title: "Diretor Executivo, BTG Pactual",
        description: "Educador financeiro, ex-C6 Bank e professor, com ampla experiência executiva nos maiores bancos do país.",
    },
];

export const pricingPlans: PricingPlan[] = [
    {
        name: "INGRESSO SHARK",
        price: "R$ 347",
        features: [
            "Acesso completo ao evento presencial",
            "Assento garantido em setor premium",
            "Kit de boas-vindas exclusivo",
            "Certificado de participação digital",
            "Acesso ao lounge de networking"
        ],
        isPopular: true,
        buttonText: "QUERO ME TORNAR UM TUBARÃO",
    },
];

export const testimonials: Testimonial[] = [
    {
        quote: "\"Em 30 dias com o Lucas, não só tive clareza, mas fui promovida com 30% de aumento. Nunca mais fui ignorada no mercado. É um divisor de águas!\"",
        author: {
            imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop",
            name: "Ana Clara Leite",
            title: "Gerente Uniclass, Itaú",
        },
    },
    {
        quote: "\"O networking no SharkPRO abriu as portas para minha transição de carreira. O conteúdo foi decisivo para a aprovação no CFP® e para conquistar meu cargo na XP Inc. hoje.\"",
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
        answer: "O evento acontecerá no dia 29 de Novembro de 2025, em São Paulo - SP. O local será na Fundação Casper Libero, no coração da Avenida Paulista, um dos endereços mais icônicos do país.",
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
        question: "O evento será gravado?",
        answer: "Não! O evento será presencial e não haverá gravação disponível posteriormente.",
    },
    {
        question: "Haverá atividades pós palestras?",
        answer: "Sim! Teremos happy hour exclusivo para networking e troca de experiências. É uma oportunidade única para ampliar sua rede de contatos no mercado financeiro.",
    },

];