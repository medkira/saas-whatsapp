import { MetadataRoute } from "next";

const baseUrl = "https://mmc-cyan.vercel.app";

export default function robots(): MetadataRoute.Robots {

    return {
        rules: {
            userAgent: "*",
            allow: ['/', '/machines', '/pieces'],
            disallow: []
        },
        sitemap: `${baseUrl}/sitemap.xml`

    }
}