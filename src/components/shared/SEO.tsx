import { Helmet } from 'react-helmet-async'
import { organizationJsonLd, pageDefaults, type PageMeta } from '@/lib/seo'

type SEOProps = PageMeta & {
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function SEO({ title, description, path, image, jsonLd }: SEOProps) {
  const meta = pageDefaults({ title, description, path, image })
  const structured = jsonLd ?? organizationJsonLd()

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:site_name" content="Growthera Ventures" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      <script type="application/ld+json">{JSON.stringify(structured)}</script>
    </Helmet>
  )
}
