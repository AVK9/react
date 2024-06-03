import React from 'react';
import { Advantage, AdvantageCount, BoxMode, Item } from './Advantages.styled';

const Advantages = () => {
  return (
    <BoxMode>
      <Item>
        <AdvantageCount>32,000 +</AdvantageCount>
        <Advantage>
          Experienced <br /> tutors
        </Advantage>
      </Item>
      <Item>
        <AdvantageCount>300,000 +</AdvantageCount>
        <Advantage>
          5-star tutor <br /> reviews
        </Advantage>
      </Item>
      <Item>
        <AdvantageCount>120 +</AdvantageCount>
        <Advantage>
          Subjects <br />
          taught
        </Advantage>
      </Item>
      <Item>
        <AdvantageCount>200 +</AdvantageCount>
        <Advantage>
          Tutor <br /> nationalities
        </Advantage>
      </Item>
    </BoxMode>
  );
};

export default Advantages;
