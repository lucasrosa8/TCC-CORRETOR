import Head from "next/head";

export function SEO({ title }) {
  return (
    <Head>
      <title>{title || "JS"}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
