import React from 'react';
import { Decor, P, Text, UnlockPotential } from './GetStarted.styled';
import { Button } from 'components/common/Button';
import { TEACHERS_ROUTE } from 'utils/const';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <UnlockPotential>
      <p className="textrubber">Unlock your potential with</p>
      <p className="textrubber">
        the best <Decor>language</Decor> tutors
      </p>
      <Text>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </Text>
      <Link to={TEACHERS_ROUTE}>
        <Button width="267px" margin="64px 0px 0px 0px">
          Get started
        </Button>
      </Link>
    </UnlockPotential>
  );
};

export default GetStarted;
