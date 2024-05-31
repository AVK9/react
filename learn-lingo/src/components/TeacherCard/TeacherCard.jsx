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
  Levels,
  LevelsBox,
  Box,
} from './TeacherCard.styled';
import { Button } from 'components/common/Button';

export const TeacherCard = ({ teachers }) => {
  console.log('teachers', teachers);
  return (
    <div>
      {teachers.map((item, index) => (
        <ItemBox key={index}>
          <Box>
            <ImgBox>
              <Img src={item.avatar_url} alt={`avatar ${item.name}`} />
              <Ico />
            </ImgBox>
          </Box>
          <Box>
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
            <Button more margin="16px" height="auto">
              Read more
            </Button>
            <LevelsBox>
              {item &&
                item.levels.map((i, index) => (
                  <Levels key={index} levels>
                    {`#${i}`}
                  </Levels>
                ))}
            </LevelsBox>
          </Box>
        </ItemBox>
      ))}
    </div>
  );
};
