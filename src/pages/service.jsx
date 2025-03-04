import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceHero from "@/components/hero/ServiceHero";
import Service1 from "@/components/service/Service1";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Service = () => {
  return (
    <>
      <Head>
    <title>Our Services | XSUSTAIN Digital Solutions</title>
    <meta name="description" content="Explore XSUSTAIN's expert digital services, including web development, CRM solutions, branding, and social media marketing to help your business thrive." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="XSUSTAIN services, digital agency, web development, CRM solutions, branding, social media marketing, business growth" />
    <meta name="author" content="XSUSTAIN" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="XSUSTAIN Services | Digital Solutions for Business Growth" />
    <meta property="og:description" content="Discover how XSUSTAIN can enhance your business with expert web development, CRM solutions, branding, and marketing strategies." />
    <meta property="og:image" content="https://www.xsustain.io/logo.png" />
    <meta property="og:url" content="https://www.xsustain.io/services" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="XSUSTAIN Services | Digital Solutions for Business Growth" />
    <meta name="twitter:description" content="Unlock the potential of your business with XSUSTAIN’s expert services in web development, CRM, branding, and marketing." />
    <meta name="twitter:image" content="https://www.xsustain.io/logo.png" />
</Head>

      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceHero />
          <Service1 />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Service;
