import { useEffect } from 'react';

interface SectionSEOProps {
  id: string;
  title: string;
  description: string;
  keywords?: string;
}

/**
 * Component for adding structured data to sections for better SEO
 * This helps search engines understand the content of each section
 */
const SectionSEO = ({ id, title, description, keywords }: SectionSEOProps) => {
  useEffect(() => {
    // Create the structured data script element for this section
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Create the JSON-LD data for the section
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'WebPageElement',
      'isPartOf': {
        '@type': 'WebPage',
        '@id': window.location.href
      },
      'name': title,
      'description': description,
      'keywords': keywords || '',
      '@id': `${window.location.href}#${id}`
    };
    
    // Set the script content
    script.textContent = JSON.stringify(jsonLdData);
    
    // Add a unique ID to prevent duplicates
    const scriptId = `section-seo-${id}`;
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
  }, [id, title, description, keywords]);
  
  return null; // This component doesn't render anything
};

export default SectionSEO;
