import { Section } from 'components/common/Section/Section';
import { Box } from './HomePage.styled';
import GetStarted from 'components/HomePage/GetStarted/GetStarted';
import ImgBlock from 'components/HomePage/ImgBlock/ImgBlock';
import Advantages from 'components/HomePage/Advantages/Advantages';
import { Container } from 'components/common/Section/Container';
// import AdditionalHTML from 'components/AdditionalHTML';

const HomePage = () => {
  return (
    <Container>
      <Section className="get-started">
        <Box>
          <GetStarted />
          <ImgBlock />
        </Box>
      </Section>
      <Section className="advantages">
        <Advantages />
      </Section>
      {/* <AdditionalHTML /> */}
    </Container>
  );
};

export default HomePage;
