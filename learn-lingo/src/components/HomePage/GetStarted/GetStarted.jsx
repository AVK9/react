import React from 'react';
import { Decor, Text, UnlockPotential } from './GetStarted.styled';
import { Button } from 'components/common/Button';
import { TEACHERS_ROUTE } from 'utils/const';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <UnlockPotential>
      <h1>
        <span className="textrubber-nowrap">Unlock your potential with </span>
        <span className="textrubber">
          the best <Decor>language</Decor> tutors
        </span>
      </h1>
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
