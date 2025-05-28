import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSEOProps {
  items: BreadcrumbItem[];
}

/**
 * Component for adding BreadcrumbList structured data for better SEO
 * This helps search engines understand the navigation structure of your website
 */
const BreadcrumbSEO = ({ items }: BreadcrumbSEOProps) => {
  useEffect(() => {
    // Create the structured data script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Create the JSON-LD data for breadcrumbs
    const itemListElement = items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }));
    
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    };
    
    // Set the script content
    script.textContent = JSON.stringify(jsonLdData);
    
    // Add a unique ID to prevent duplicates
    const scriptId = 'breadcrumb-seo';
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

export default BreadcrumbSEO;
