import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Faq1 from "@/components/faq/Faq1";
import FaqCTA from "@/components/cta/FaqCTA";

const Faq = () => {
  return (
    <>
      <Head>
  <title>FAQ | XSUSTAIN</title>
  <meta name="description" content="Find answers to frequently asked questions about XSUSTAIN's digital solutions, services, and support." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <meta name="keywords" content="XSUSTAIN FAQ, Digital Agency Help, Support, Questions, Services, Web Development, CRM, Social Media Management" />

  <meta property="og:title" content="FAQ | XSUSTAIN - Your Digital Growth Partner" />
  <meta property="og:description" content="Get answers to frequently asked questions about XSUSTAIN’s services, pricing, and support." />
  <meta property="og:image" content="https://www.xsustain.io/logo.png" />
  <meta property="og:url" content="https://www.xsustain.io/faq" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="FAQ | XSUSTAIN" />
  <meta name="twitter:description" content="Have questions? Get quick answers about XSUSTAIN's services and support." />
  <meta name="twitter:image" content="https://www.xsustain.io/logo.png" />

  <link rel="canonical" content="https://www.xsustain.io/faq" />
</Head>

      <main>
        <RootLayout header="header3" footer="footer3">
          <Faq1 />
          <FaqCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Faq;
