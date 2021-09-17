import React from 'react'

// import Custom Components
// import Header from '../components/common/Header'
import BannerSection from "../components/modern-sass/banner";
import FeatureSection from "../components/modern-sass/feature";
import BuildSection from "../components/modern-sass/build";
import WorkSection from "../components/modern-sass/work";
import PriceSection from "../components/modern-sass/price";
import TestimonialSection from "../components/modern-sass/testimonial";
import SubscribeSection from "../components/modern-sass/subscribe";
import FaqSection from "../components/modern-sass/faq";
import ClientSection from "../components/modern-sass/client";
import FooterSection from "../components/modern-sass/footer";
import Copyright from '../components/modern-sass/copyright';

const LayoutPage = () => {
  return (
    <div>
      {/* <Header className="saas1" /> */}
  
      <BannerSection />

      <FeatureSection />

      <BuildSection />

      <WorkSection />

      <PriceSection />

      <TestimonialSection />

      <SubscribeSection />

      <FaqSection />

      <ClientSection />

      <FooterSection />

      <Copyright />
    </div>
  );
};

export default LayoutPage;