import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://arts-tic.crealab.ca'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            images: [ `${baseUrl}/images/hero.jpg` ],
        },
        {
            url: `${baseUrl}/projets`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            images: [ `${baseUrl}/images/projets/hero.jpg` ],
        },
        {
            url: `${baseUrl}/explo-arts`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            images: [ `${baseUrl}/images/explo-art/hero.jpg` ],
        },
        {
            url: `${baseUrl}/tic-creativite`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            images: [ `${baseUrl}/images/tic/hero.jpg` ],
        },
        {
            url: `${baseUrl}/intro.mp4`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            videos: [
                {
                    thumbnail_loc: `${baseUrl}/intro-thumbnail.png`,
                    title: 'Vidéo d’introduction au programme Arts et TIC',
                    description: 'Découvrez le programme Arts et TIC de La Camaradière à travers cette vidéo d’introduction qui présente les activités, les projets et l’ambiance du programme.',
                },
            ],
        },
    ]
}