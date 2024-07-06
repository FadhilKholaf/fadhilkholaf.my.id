import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fadhilkholaf.my.id',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}
