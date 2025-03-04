import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Contact1 from "@/components/contact/Contact1";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact XSUSTAIN | Get in Touch with Our Experts</title>
        <meta name="description" content="Reach out to XSUSTAIN for expert digital solutions in web development, CRM, branding, and social media management. Let's grow your business together!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="contact XSUSTAIN, digital agency contact, web development support, CRM solutions, branding, social media experts" />
        <meta name="author" content="XSUSTAIN" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact XSUSTAIN | Digital Experts at Your Service" />
        <meta property="og:description" content="Have questions? Contact XSUSTAIN for top-tier web development, CRM solutions, branding, and more." />
        <meta property="og:image" content="https://www.xsustain.io/logo.png" />
        <meta property="og:url" content="https://www.xsustain.io/contact" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact XSUSTAIN | Digital Experts at Your Service" />
        <meta name="twitter:description" content="Get in touch with XSUSTAIN for innovative digital solutions tailored to your business needs." />
        <meta name="twitter:image" content="https://www.xsustain.io/logo.png" />
      </Head>

      <main>
        <RootLayout header="header3" footer="footer1">
          <Contact1 />
        </RootLayout>
      </main>
    </>
  );
};

export default Contact;
