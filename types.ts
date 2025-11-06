
export interface NavLink {
    href: string;
    label: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface GalleryImage {
    src: string;
    alt: string;
    className: string;
    type?: 'image' | 'video';
    videoId?: string;
}

export interface Speaker {
    imgSrc: string;
    name: string;
    title: string;
    description: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    features: string[];
    isPopular: boolean;
    buttonText?: string;
}

export interface Testimonial {
    quote: string;
    author: {
        imgSrc: string;
        name: string;
        title: string;
    };
}

export interface FaqItem {
    question: string;
    answer: string;
    defaultOpen?: boolean;
}