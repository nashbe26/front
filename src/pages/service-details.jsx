import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
      USTAIN:

html
Copier
Modifier
<Head>
    <title>Service Details | XSUSTAIN Digital Solutions</title>
    <meta name="description" content="Discover how XSUSTAIN's expert digital services can help your business grow. Explore our web development, CRM, branding, and social media solutions." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="XSUSTAIN services, digital agency solutions, web development, CRM, branding, social media marketing" />
    <meta name="author" content="XSUSTAIN" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="XSUSTAIN Services | Digital Solutions Tailored for Your Business" />
    <meta property="og:description" content="Explore XSUSTAIN’s specialized services in web development, CRM, branding, and digital marketing. Drive growth with expert solutions." />
    <meta property="og:image" content="https://www.xsustain.io/logo.png" />
    <meta property="og:url" content="https://www.xsustain.io/services" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="XSUSTAIN Services | Digital Solutions Tailored for Your Business" />
    <meta name="twitter:description" content="Unlock the power of digital transformation with XSUSTAIN’s expert web development, CRM, and marketing services." />
    <meta name="twitter:image" content="https://www.xsustain.io/logo.png" />
</Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceDetailsDevelopment />
          <ServiceDetailsWorkflow />
          <ServiceDetailsService />
          <ServiceDetailsFaq />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
