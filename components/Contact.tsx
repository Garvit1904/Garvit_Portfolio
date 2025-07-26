import React, { useState } from 'react';
import Section from './Section';
import { EMAIL, SOCIAL_LINKS } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';
import { GoogleGenAI } from '@google/genai';

interface StatusMessage {
    type: 'success' | 'error';
    text: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<StatusMessage | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        try {
            if (!process.env.API_KEY) throw new Error("API_KEY not found");
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `A person named ${formData.name} has sent a message. Write a short, creative, and friendly confirmation message (under 40 words) back to them. Let them know their message about "${formData.message.substring(0, 30)}..." has been received and Garvit will be in touch soon.`;
            
            const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
            setStatus({ type: 'success', text: response.text });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Gemini API Error:", error);
            setStatus({ type: 'error', text: 'Oops! My AI assistant is napping. Please email me directly.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Section id="contact">
            <AnimateOnScroll>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-[--primary-500] dark:text-[--primary-400] mb-8 font-semibold">Open to connect</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-[--primary-500] focus:border-[--primary-500]" />
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-[--primary-500] focus:border-[--primary-500]" />
                        <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required placeholder="Your Message" className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-[--primary-500] focus:border-[--primary-500]"></textarea>
                        <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center px-6 py-3 bg-[--primary-600] text-white font-semibold rounded-lg shadow-md hover:bg-[--primary-700] transition-all disabled:bg-[--primary-400] disabled:cursor-not-allowed">
                            {isLoading ? ( <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Thinking...</> ) : ( 'Send Message' )}
                        </button>
                    </form>
                    {status && ( <div className={`mt-6 p-4 rounded-md text-center ${status.type === 'success' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200'}`}>{status.text}</div> )}
                     <div className="mt-12 text-center">
                        <p className="text-lg mb-4">Or reach out directly:</p>
                        <a href={`mailto:${EMAIL}`} className="text-[--primary-500] dark:text-[--primary-400] hover:underline font-semibold text-xl">{EMAIL}</a>
                        <div className="flex justify-center space-x-6 mt-6">
                            {SOCIAL_LINKS.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[--primary-500] dark:hover:text-[--primary-400] transition-colors"><link.icon className="h-8 w-8" /></a>)}
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </Section>
    );
};

export default Contact;
