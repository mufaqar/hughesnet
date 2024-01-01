
import Head from 'next/head';

const SeoMeta = ({ title, description , url }: any) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="noindex"></meta>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="hughes-cable.vercel.app" />
            <meta property="article:publisher" content="https://www.facebook.com" />
            <meta property="article:modified_time" content="2024-07-06T22:58:46+00:00" />
            <meta property="og:image" content="https://hughes-cable.vercel.app/logo.png" />
            <meta property="og:image:width" content="254" />
            <meta property="og:image:height" content="56" />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@hughes-cable" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
};

export default SeoMeta;
