import React, { useState } from 'react';
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
  InfoBox,
  InfoBoxItem,
  InfoTextItem,
  Price,
  HeadBox,
  TextSection,
  ReadMoreBox,
  TextReadmore,
  ReviewsBox,
  ReviewsItem,
  NameReviewer,
  RatingReviewer,
  ImgReviews,
  BoxReviewer,
  BoxReviewerInfo,
} from './TeacherCard.styled';
import { Button } from 'components/common/Button';
import { IconSvg } from 'components/common/IconSvg';

export const TeacherCard = ({ teachers }) => {
  const [readMoreArr, setReadMoreArr] = useState([]);

  const showReadMore = index => {
    setReadMoreArr(prev => [...prev, index]);
  };

  return (
    <div>
      {teachers.map((item, index) => (
        <ItemBox key={index}>
          <>
            <ImgBox>
              <Img src={item.avatar_url} alt={`avatar ${item.name}`} />
              <Ico />
            </ImgBox>
          </>
          <Box>
            <HeadBox>
              <TextMain>Languages</TextMain>
              <InfoBox>
                <InfoBoxItem>
                  <IconSvg icon="book" stroke="black" size="16px" />
                  <InfoTextItem>Lessons online</InfoTextItem>
                </InfoBoxItem>
                <InfoBoxItem>
                  <InfoTextItem>Lessons done: {item.lessons_done}</InfoTextItem>
                </InfoBoxItem>
                <InfoBoxItem>
                  <IconSvg icon="star" fill="#ffc531" size="16px" />
                  <InfoTextItem>Rating: {item.rating}</InfoTextItem>
                </InfoBoxItem>
                <InfoBoxItem>
                  <InfoTextItem>
                    Price / 1 hour: <Price>{item.price_per_hour}$</Price>
                  </InfoTextItem>
                </InfoBoxItem>
              </InfoBox>
              <button type="button">
                <IconSvg icon="heart" />
              </button>
            </HeadBox>
            <Name>
              {item.name} {item.surname}
            </Name>
            <TextSection>
              <TextMain>
                Speaks: <TextU>{item.languages.join(', ')}</TextU>
              </TextMain>
              <TextMain>
                Lesson Info: <Text>{item.lesson_info}</Text>
              </TextMain>

              <TextMain>
                Conditions: <Text>{item.conditions.join(' ')}</Text>
              </TextMain>
            </TextSection>
            {!readMoreArr.includes(index) && (
              <Button
                more
                margin="16px"
                height="auto"
                onClick={() => showReadMore(index)}
              >
                Read more
              </Button>
            )}
            {readMoreArr.includes(index) && (
              <ReadMoreBox>
                <TextReadmore>{item.experience}</TextReadmore>
                <ReviewsBox>
                  {item.reviews &&
                    item.reviews.map((i, index) => (
                      <ReviewsItem key={index} levels>
                        <BoxReviewerInfo>
                          <ImgReviews
                            src={item.avatar_url}
                            alt={`avatar ${item.name}`}
                          />
                          <BoxReviewer>
                            <NameReviewer>{i.reviewer_name}</NameReviewer>
                            <RatingReviewer>
                              <IconSvg icon="star" fill="#ffc531" size="16px" />
                              {i.reviewer_rating}
                            </RatingReviewer>
                          </BoxReviewer>
                        </BoxReviewerInfo>
                        <TextReadmore>{i.comment}</TextReadmore>
                      </ReviewsItem>
                    ))}
                </ReviewsBox>
              </ReadMoreBox>
            )}

            <LevelsBox>
              {item &&
                item.levels.map((i, index) => (
                  <Levels key={index} levels>
                    {`#${i}`}
                  </Levels>
                ))}
            </LevelsBox>
            {readMoreArr.includes(index) && (
              <Button width="232px" margin="32px 0px 0px 0px">
                Book trial lesson
              </Button>
            )}
          </Box>
        </ItemBox>
      ))}
    </div>
  );
};
