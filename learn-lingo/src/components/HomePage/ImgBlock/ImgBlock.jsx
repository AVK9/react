import { MySVG } from 'assets/img/Mac';
import Head from '../../../assets/img/Head.svg';
import { Box, ImgHead, MainPictureBox } from './ImgBlock.styled';

const ImgBlock = () => {
  return (
    <MainPictureBox>
      <Box>
        <ImgHead src={Head} alt="Head" width="339px" height="339px" />
        {/* <ImgMac src={Mac} alt="Mac" width="361" height="176" /> */}
        <div width="361" height="176">
          <MySVG alt="Mac" />
        </div>
      </Box>
    </MainPictureBox>
  );
};

export default ImgBlock;
