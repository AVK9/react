import React from 'react';
import { Decor, P, Text, UnlockPotential } from './GetStarted.styled';
import { Button } from 'components/common/Button';

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
      <Button width="267px" margin="64px 0px 0px 0px" to={'/teachers'}>
        Get started
      </Button>
    </UnlockPotential>
  );
};

export default GetStarted;
