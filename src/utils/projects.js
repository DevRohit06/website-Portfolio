import ras from "../assets/images/ras.webp";
import gpt_3 from "../assets/images/gpt-3.webp";
import payment_gateway from "../assets/images/payment-gateway.webp";
import imaginify from "../assets/images/imaginify.webp";
import docAid from "../assets/images/docAid.webp";
import LifeInsureEase from "../assets/images/lifeinsureease.webp";
import Portfolio from "../assets/images/portfolio.webp"
import HealthcareManagementSystem from "../assets/images/HealthcareManagementSystem.webp"
const data = [
    {
        name: "Healthcare Management System",
        type: "WebApp",
        url: "https://care-pulse-55nd.vercel.app/",
        github: "https://github.com/ojasvars0308/CarePulse",
        image: HealthcareManagementSystem,
        slug: "healthcare-management-system",
        description: "This is a HealthCare Management System made using Next.js, TypeScript, Shadcn & Tailwind CSS having admin dashboard, patient appointment creation and updation",
        tech: ['TypeScript', 'Javascript', 'CSS', 'Tailwind CSS', 'Shadcn', 'NextJS']
        
    },
    {
        name: "Portfolio Website",
        type: "Website",
        url: "https://rohitk06.site/",
        github: "https://github.com/DevRohit06/Portfolio-website",
        image: Portfolio,
        slug: "portfolio",
        description: "This is my Portfolio website made using Astro, Reactjs and Tailwind css. ",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Reactjs']
    },
    {
        name: "Imaginify",
        type: "WebApp",
        url: "https://imaginify-mu.vercel.app/",
        github: "https://github.com/ojasvars0308/Imaginify",
        image: imaginify,
        slug: "imaginify",
        description: "This is an AI Saas WebApp made by using NextJS, TypeScript & Tailwind CSS.",
        tech: ['TypeScript', 'Javascript', 'CSS', 'Tailwind CSS', 'Cloudinary AI', 'Stripe', 'Clerk']
    },
    {
        name: "GPT-3",
        type: "Website",
        url: "https://gpt3-2d82f2.netlify.app",
        github: "https://github.com/ojasvars0308/gpt-3",
        image: gpt_3,
        slug: "gpt3",
        description: "The website which describes about the usage of chat-gpt, covering topics about OpenAI, blogs, case studies and much more!",
        tech: ['React', 'Javascript', 'CSS5', 'Tailwind CSS']
    },

    {
        name: "HooBank",
        type: "Website",
        url: "https://payment-gateway-978d5a.netlify.app/",
        github: "https://github.com/ojasvars0308/payment-gateway",
        image: payment_gateway,
        slug: "HooBank",
        description: "Website that was built for handling bank accounts named Hoo Bank built using react.js, tailwind css, vite",
        tech: ['HTML5', 'JavaScript', 'CSS5', 'Tailwind CSS', 'React.js', 'Vite']
    },
]

export function getData(){
    return data;
}