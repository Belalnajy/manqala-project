import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSEOProps {
  items: FAQItem[];
}

/**
 * Component for adding FAQ structured data for better SEO
 * This helps search engines display your FAQs in rich results
 */
const FAQSEO = ({ items }: FAQSEOProps) => {
  useEffect(() => {
    // Create the structured data script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Create the JSON-LD data for FAQs
    const mainEntity = items.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }));
    
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': mainEntity
    };
    
    // Set the script content
    script.textContent = JSON.stringify(jsonLdData);
    
    // Add a unique ID to prevent duplicates
    const scriptId = 'faq-seo';
    script.id = scriptId;
    
    // Remove any existing script with the same ID
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    // Add the script to the document head
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [items]);
  
  return null; // This component doesn't render anything
};

export default FAQSEO;
