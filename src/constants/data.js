import { Shield, Banknote, HeartPulse, Layers, Zap, FileSearch } from 'lucide-react';
import licenseCard from '../assets/license_card.png';
import invoiceDoc from '../assets/invoice_document.png';

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
        description: [
            'Detects near-duplicates and tampered documents with high precision.',
            'Identifies fraudulent patterns across large repositories instantly.',
            'Multi-language support for global adaptability.'
        ],
        icon: Layers,
        layout: 'left',
        visualColor: 'from-blue-600 to-cyan-500'
    },
    {
        id: 'workflows',
        badge: 'DocFlow',
        title: 'Streamline Document Workflows with Automation',
        description: [
            'Automate document collection, entry, and verification cycles.',
            'Integrate seamlessly with existing ERP and CRM systems.',
            'Reduce manual entry errors by up to 99%.'
        ],
        icon: Zap,
        layout: 'right',
        visualColor: 'from-purple-600 to-blue-600'
    },
    {
        id: 'extract',
        badge: 'DocExtract',
        title: 'Extract, Validate, and Process Documents with Ease',
        description: [
            'Extract unstructured data from invoices, receipts, and forms.',
            'Real-time validation against external databases.',
            'Customizable rules engine for specific business needs.'
        ],
        icon: FileSearch,
        layout: 'left',
        visualColor: 'from-orange-500 to-red-500'
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
        title: "The Future of AI in Document Processing",
        date: "Dec 12, 2024",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500",
        excerpt: "How artificial intelligence is revolutionizing the way businesses handle paperwork and compliance."
    },
    {
        id: 2,
        title: "Preventing Fraud with Machine Learning",
        date: "Nov 28, 2024",
        category: "Security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500",
        excerpt: "Discover the latest techniques in fraud detection and how ML models are staying one step ahead."
    },
    {
        id: 3,
        title: "Streamlining Workflows for Enterprise",
        date: "Nov 15, 2024",
        category: "Business",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500",
        excerpt: "Tips and strategies for optimizing your document management systems for maximum efficiency."
    }
];
