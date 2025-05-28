import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'WebSite' | 'BreadcrumbList';
  data: Record<string, any>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    // Create the structured data script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Create the JSON-LD data based on the type
    let jsonLdData: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
    
    // Set the script content
    script.textContent = JSON.stringify(jsonLdData);
    
    // Add a unique ID to prevent duplicates
    const scriptId = `structured-data-${type.toLowerCase()}`;
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
  }, [type, data]);
  
  return null; // This component doesn't render anything
};

export default StructuredData;
