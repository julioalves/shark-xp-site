import { NavLink, Feature, GalleryImage, Speaker, PricingPlan, Testimonial, FaqItem } from './types';

export const navLinks: NavLink[] = [
    { href: "#what-is-it", label: "O Evento" },
    { href: "#speakers", label: "Palestrantes" },
    { href: "#location", label: "Local" },
    { href: "#pricing", label: "Ingressos" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
];

export const features: Feature[] = [
    {
        icon: "checklist",
        title: "Plano de Ação de 90 Dias",
        description: "Saia com um plano de ação claro para sua carreira e certificações, pronto para executar e gerar resultados em tempo recorde.",
    },
    {
        icon: "groups",
        title: "Networking de Alto Nível",
        description: "Participe de dinâmicas de networking guiado e receba um checklist prático para construir conexões valiosas com os tubarões do mercado.",
    },
    {
        icon: "map",
        title: "Mapa de Oportunidades",
        description: "Receba um mapa completo com os cargos, áreas e trilhas de carreira em alta no mercado financeiro para 2025 e 2026.",
    },
    {
        icon: "model_training",
        title: "Conteúdo Prático e Real",
        description: "Aprenda com estudos de caso reais de quem atua e gera resultados diários em grandes bancos e corretoras.",
    },
];

export const galleryImages: GalleryImage[] = [
    { 
        src: "https://img.youtube.com/vi/_bKQXc_tS8s/maxresdefault.jpg", 
        alt: "Aftermovie do evento Shark Experience", 
        className: "col-span-2 row-span-2",
        type: 'video',
        videoId: '_bKQXc_tS8s'
    },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop", alt: "Participantes interagindo e fazendo networking", className: "" },
    { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop", alt: "Participantes interagindo e fazendo networking", className: "" },
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2662&auto=format&fit=crop", alt: "Vista aérea da plateia lotada no evento", className: "" },
    { src: "https://images.unsplash.com/photo-1529070412935-6b59d57a44d4?q=80&w=2670&auto=format&fit=crop", alt: "Participantes em um workshop interativo", className: "" },
];

export const speakers: Speaker[] = [
    {
        imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        name: "Lucas Silva, CFP®",
        title: "Co-fundador, LS Educação",
        description: "Referência em educação financeira com mais de 100.000 alunos e anfitrião do Shark Experience.",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
        name: "Fernanda de Morais",
        title: "Especialista em Autoridade Digital",
        description: "Ajuda profissionais do mercado financeiro a construir uma presença digital que atrai clientes de alta renda.",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop",
        name: "Isabela Schnorr",
        title: "Fundadora, TalentBox",
        description: "Headhunter especialista em mercado financeiro, conectando os melhores talentos às maiores instituições.",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        name: "Tati Grecco",
        title: "Sócia e Diretora, Itaú",
        description: "Líder com vasta experiência em gestão de ativos e negócios, comandando equipes de alta performance.",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=2574&auto=format&fit=crop",
        name: "Germano Silva, CFP®",
        title: "Mentor e Advisor",
        description: "Ex-líder no Itaú e mentor de executivos, especialista em carreira e liderança no mercado financeiro.",
    },
     {
        imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop",
        name: "Liao Yu Chieh, CFP®",
        title: "Diretor Executivo, BTG Pactual",
        description: "Educador financeiro, ex-C6 Bank e professor, com ampla experiência executiva nos maiores bancos do país.",
    },
];

export const pricingPlans: PricingPlan[] = [
    {
        name: "INGRESSO SHARK",
        price: "R$ 497",
        features: [
            "Acesso completo ao evento presencial",
            "Assento garantido em setor premium",
            "Kit de boas-vindas exclusivo",
            "Acesso à gravação completa por 1 ano",
            "Certificado de participação digital",
            "Acesso ao lounge de networking",
            "Almoço VIP com palestrantes"
        ],
        isPopular: true,
        buttonText: "QUERO GARANTIR MINHA VAGA",
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
        question: "Terei acesso às gravações?",
        answer: "Sim, o ingresso dá acesso à gravação completa do evento por 1 ano, para você rever todo o conteúdo quando quiser.",
    },
];
