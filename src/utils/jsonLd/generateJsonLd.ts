import { WithContext, Product,Organization} from 'schema-dts';

export const generateProductJsonLd = (machine: {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  reference: string;
  mark: string;
  applicable: string;
  available: boolean;
  price: number;
}): WithContext<Product> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: machine.name,
    description: machine.description,
    image: machine.imageUrl,
    category: machine.category,
    sku: machine.reference,
    brand: {
      '@type': 'Brand',
      name: machine.mark,
    },
    offers: {
      '@type': 'Offer',
      availability: machine.available
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      price: machine.price,
      priceCurrency: 'TND',
    },
  } as WithContext<Product>;
};


export const generateLandingPageJsonLd = (
  companyInfo: {
    name: string;
    description: string;
    url: string;
    logo: string;
    telephone: string;
    email: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    sameAs: string[];
  }
): WithContext<Organization> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    description: companyInfo.description,
    url: companyInfo.url,
    logo: companyInfo.logo,
    telephone: companyInfo.telephone,
    email: companyInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.streetAddress,
      addressLocality: companyInfo.address.addressLocality,
      addressRegion: companyInfo.address.addressRegion,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.addressCountry,
    },
    sameAs: companyInfo.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.telephone,
      contactType: 'customer service',
    },
    // ? here we add more specific details about the services || help in indexing
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vente de machines à coudre tunisie',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vente de machines à coudre',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vente de machines à coudre et pièces détachées',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Réparation et Assemblage machines à coudre',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fabrication de Guide machines à coudre',
        },
      },
    ],
  } as WithContext<Organization>;
};