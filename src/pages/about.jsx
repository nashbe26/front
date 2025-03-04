import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import AboutTeam from "@/components/team/AboutTeam";
import AboutTestimonial from "@/components/testimonial/AboutTestimonial";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About XSUSTAIN | Innovation in Digital Solutions</title>
        <meta name="description" content="Discover XSUSTAIN, a leading digital agency specializing in web development, CRM solutions, branding, and social media management. Transform your business with our expertise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="About XSUSTAIN, digital agency, web development, CRM solutions, branding, social media marketing" />
        <meta name="author" content="XSUSTAIN" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About XSUSTAIN | Innovation in Digital Solutions" />
        <meta property="og:description" content="Learn about XSUSTAIN’s mission, expertise, and commitment to delivering top-notch digital solutions for businesses." />
        <meta property="og:image" content="https://www.xsustain.io/logo.png" />
        <meta property="og:url" content="https://www.xsustain.io/about" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About XSUSTAIN | Innovation in Digital Solutions" />
        <meta name="twitter:description" content="Explore XSUSTAIN's journey in web development, CRM, branding, and social media growth strategies." />
        <meta name="twitter:image" content="https://www.xsustain.io/logo.png" />
      </Head>

      <main>
        <RootLayout>
          <AboutHero />
          <AboutStory />
          <AboutCounter />
          <AboutTeam />
          <DigitalAgencyBrand />
          <AboutTestimonial />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
