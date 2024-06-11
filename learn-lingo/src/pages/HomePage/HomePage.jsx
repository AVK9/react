import { Section } from 'components/common/Section/Section';
import { Box } from './HomePage.styled';
import GetStarted from 'components/HomePage/GetStarted/GetStarted';
import ImgBlock from 'components/HomePage/ImgBlock/ImgBlock';
import Advantages from 'components/HomePage/Advantages/Advantages';

const HomePage = () => {
  return (
    <Section>
      <Box>
        <GetStarted />
        <ImgBlock />
      </Box>
      <Advantages />
    </Section>
  );
};

export default HomePage;
