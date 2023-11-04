import { HeroContainer, HeroImage, HeroContent, HeroDescription, HeroButton, HeroLink, HeroTitle } from './Hero.style';
import HeroImageUrl from '../assets/images/hero.jpg';

function Hero() {
  return (
    <HeroContainer id="Home">
      <HeroImage src={HeroImageUrl}></HeroImage>
      <HeroContent>
        <HeroTitle>SnuggleShop</HeroTitle>
        <HeroDescription>
          Uncover a universe of curated collections, jaw-dropping deals, and limitless possibilities.
        </HeroDescription>
        <HeroButton><HeroLink href="#Products">Shop Now</HeroLink></HeroButton>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero