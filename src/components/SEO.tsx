import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'منقلة - حلول هندسية مبتكرة',
  description = 'منقلة - شركة تصميم وإنتاج حلول هندسية مبتكرة',
  keywords = 'منقلة, تصميم, هندسة, مشاريع, حلول مبتكرة, تصميم داخلي',
  ogTitle = 'منقلة - حلول هندسية مبتكرة',
  ogDescription = 'شركة منقلة المتخصصة في تقديم حلول هندسية مبتكرة وتصاميم إبداعية',
  ogImage = '/protractor.svg',
  twitterTitle = 'منقلة - حلول هندسية مبتكرة',
  twitterDescription = 'شركة منقلة المتخصصة في تقديم حلول هندسية مبتكرة وتصاميم إبداعية',
  twitterImage = '/protractor.svg',
  canonicalUrl = 'https://manqla.com',
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph meta tags
    updateMetaTag('og:title', ogTitle);
    updateMetaTag('og:description', ogDescription);
    updateMetaTag('og:image', ogImage);
    
    // Update Twitter meta tags
    updateMetaTag('twitter:title', twitterTitle);
    updateMetaTag('twitter:description', twitterDescription);
    updateMetaTag('twitter:image', twitterImage);
    
    // Update canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalElement) {
      canonicalElement.href = canonicalUrl;
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
  ]);

  const updateMetaTag = (name: string, content: string) => {
    let metaTag: HTMLMetaElement | null;
    
    // Check if the meta tag is using name or property attribute
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      metaTag = document.querySelector(`meta[property="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', name);
        document.head.appendChild(metaTag);
      }
    } else {
      metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
    }
    
    metaTag.setAttribute('content', content);
  };

  return null; // This component doesn't render anything
};

export default SEO;
