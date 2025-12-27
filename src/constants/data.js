import { Shield, Banknote, HeartPulse, Layers, Zap, FileSearch } from 'lucide-react';
import licenseCard from '../assets/license_card.png';
import invoiceDoc from '../assets/invoice_document.png';
import docsimImg from '../assets/docsim.png';
import doxtractImg from '../assets/doxtract.png';
import docpilotImg from '../assets/docpilot.png';

export const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Industries', href: '#industries' },
    { name: 'Products', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'About Us', href: '#about' },
];

export const heroDocuments = [
    { id: 1, src: licenseCard, alt: "Driving License", type: "card" },
    { id: 2, src: invoiceDoc, alt: "Invoice", type: "doc" },
    { id: 3, src: invoiceDoc, alt: "Growth Document", type: "doc" },
];

export const industriesData = [
    {
        id: 'insurance',
        title: 'Insurance',
        description: 'Automate claims processing with accurate document validation.',
        icon: Shield,
        offset: 'mt-24 lg:mt-48'
    },
    {
        id: 'lending',
        title: 'Lending',
        description: 'Ensure faster loan approvals with fraud detection and instant verification.',
        icon: Banknote,
        offset: 'mt-12 lg:mt-24'
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        description: 'Streamline patient record management and ensure compliance with HIPAA standards.',
        icon: HeartPulse,
        offset: 'mt-0'
    }
];

export const productsData = [
    {
        id: 'docsim',
        badge: 'DocSim',
        title: 'AI-Powered Document Similarity Engine',
        features: [
            'Detects near-duplicates and tampered documents.',
            'Identifies fraudulent patterns across large repositories.',
            'Multi-language support for global adaptability.'
        ],
        benefits: [
            'Save 30% time on manual checks.',
            'Reduce document fraud by up to 40%.'
        ],
        icon: Layers,
        layout: 'left',
        visualColor: 'from-blue-600 to-cyan-500',
        image: docsimImg
    },
    {
        id: 'doxtract',
        badge: 'Doxtract',
        title: 'Extract, Validate, and Process Documents with Ease',
        features: [
            'OCR and NLP-based data extraction.',
            'Handles unstructured documents across industries.',
            'Validates fields using external data sources.'
        ],
        benefits: [
            'Process 10,000+ documents in minutes.',
            'Achieve 99% data accuracy with AI-driven validation.'
        ],
        icon: FileSearch,
        layout: 'left',
        visualColor: 'from-orange-500 to-red-500',
        image: doxtractImg
    },
    {
        id: 'docpilot',
        badge: 'DocPilot',
        title: 'Streamline Document Workflows with Automation',
        features: [
            'Automates document collection, routing, and task assignments.',
            'Real-time tracking with advanced dashboards.',
            'Seamless integration with enterprise systems via APIs.'
        ],
        benefits: [
            'Reduce turnaround times by 50%.',
            'Improve operational efficiency with minimal manual effort.'
        ],
        icon: Zap,
        layout: 'right',
        visualColor: 'from-purple-600 to-blue-600',
        image: docpilotImg
    }
];

export const teamMembers = [
    {
        id: 1,
        name: "MANSI SHUKLA",
        role: "CEO FutureSphere",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make banking not feel out of place."
    },
    {
        id: 2,
        name: "ALEX RIVERA",
        role: "CTO & Co-Founder",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "Innovation isn't just about new technology, it's about solving old problems in new, efficient ways."
    },
    {
        id: 3,
        name: "SARAH CHEN",
        role: "Head of AI Research",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "Our AI models are designed to understand context, not just process data. This is the future of intelligent automation."
    }
];

export const blogPosts = [
    {
        id: 1,
        title: "How AI is Revolutionizing Document Management for Enterprises",
        date: "24 July, 2023",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    },
    {
        id: 2,
        title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
        date: "24 July, 2023",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    },
    {
        id: 3,
        title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
        date: "24 July, 2023",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    }
];
