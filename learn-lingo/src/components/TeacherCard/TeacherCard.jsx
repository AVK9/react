import React from 'react';
import {
  ItemBox,
  ImgBox,
  Img,
  Ico,
  Name,
  TextMain,
  TextU,
  Text,
} from './TeacherCard.styled';

export const TeacherCard = ({ teachers }) => {
  console.log('teachers', teachers);
  return (
    <div>
      {teachers &&
        teachers.map((item, index) => (
          <ItemBox key={index}>
            <ImgBox>
              <Img src={item.avatar_url} alt={`avatar ${item.name}`} />
              <Ico />
            </ImgBox>
            <TextMain>Languages</TextMain>
            <Name>{item.name}</Name>
            <TextMain>
              Speaks: <TextU>{item.languages.join(', ')}</TextU>
            </TextMain>
            <TextMain>
              Lesson Info: <Text>{item.lesson_info}</Text>
            </TextMain>

            <TextMain>
              Conditions: <Text>{item.conditions}</Text>
            </TextMain>
          </ItemBox>
        ))}
    </div>
  );
};
