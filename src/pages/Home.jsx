import React from 'react';
import {
  AppSection,
  BlogSectionOld,
  BooksOld,
  CommunitySection,
  GetStartedOld,
  HeroSection,
  Libraries,
  LibrariesOld,
  MyLibraryCommunityOld,
  PostSectionOld,
  ReligiousSectionOld,
  StepsSection,
  TestimonialSection,
  FeatureSection,
  Title,

} from '../components';

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <StepsSection /> */}
      {/* <CommunitySection /> */}
      {/*<Libraries />*/}
      {/*<TestimonialSection />*/}
        <Title/>
        <FeatureSection />
        <GetStartedOld />
     

      {/*<PostSectionOld />*/}
      <MyLibraryCommunityOld />
     

         <LibrariesOld />
        
         <BooksOld />
        <AppSection />
       
        <ReligiousSectionOld />
        <BlogSectionOld />
        </>
  );
};

export default Home;
