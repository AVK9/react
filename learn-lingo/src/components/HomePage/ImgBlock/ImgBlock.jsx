import Head from '../../../assets/img/Head.svg';
import Mac from '../../../assets/img/Mac.svg';
import { Box, ImgHead, ImgMac, MainPictureBox } from './ImgBlock.styled';

const ImgBlock = () => {
  return (
    <MainPictureBox>
      <Box>
        <ImgHead src={Head} alt="Head" width="339px" height="339px" />
        <ImgMac src={Mac} alt="Mac" width="361" height="176" />
      </Box>
    </MainPictureBox>
  );
};

export default ImgBlock;
