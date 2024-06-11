import React, { useContext, useEffect, useState } from 'react';
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
import { createPortal } from 'react-dom';
import { Modal } from 'components/Modal/Modal';
import { ModalContentBookTrial } from 'components/Modal/ModalContentBookTrial';
import { findAndDeleteRecord, findAndUpdateRecord } from 'services/authApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from 'index';
import { toast } from 'react-toastify';
import { favoritesData } from 'services/dbApi';

export const TeacherCard = ({ teacher }) => {
  const {
    avatar_url,
    name,
    surname,
    lessons_done,
    rating,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
    experience,
    reviews,
    levels,
  } = teacher;

  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [readMore, setReadMore] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const data = await favoritesData('email', user.email);

        setIsFavorite(data.some(i => i.surname === surname && i.name === name));
      }
    };
    fetchData();
  }, [user, surname, name]);

  const fetchData = async () => {
    if (user) {
      const data = await favoritesData('email', user.email);

      setIsFavorite(
        data.some(fav => fav.surname === surname && fav.name === name)
      );
    }
  };

  const addToFavoretes = async teacher => {
    if (user) {
      await findAndUpdateRecord('email', user.email, teacher);
      fetchData();
    } else {
      toast.warn('This functionality is available only to authorized users');
    }
  };

  const delFavorite = async teacher => {
    if (user) {
      await findAndDeleteRecord('email', user.email, teacher);
      fetchData();
    } else {
      toast.warn('This functionality is available only to authorized users');
    }
  };

  return (
    <div>
      <ItemBox>
        <>
          <ImgBox>
            <Img src={avatar_url} alt={`avatar ${name}`} />
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
                <InfoTextItem>Lessons done: {lessons_done}</InfoTextItem>
              </InfoBoxItem>
              <InfoBoxItem>
                <IconSvg icon="star" fill="#ffc531" size="16px" />
                <InfoTextItem>Rating: {rating}</InfoTextItem>
              </InfoBoxItem>
              <InfoBoxItem>
                <InfoTextItem>
                  Price / 1 hour: <Price>{price_per_hour}$</Price>
                </InfoTextItem>
              </InfoBoxItem>
            </InfoBox>
            <div>
              {isFavorite && (
                <button type="button" onClick={() => delFavorite(teacher)}>
                  <IconSvg icon="heart" stroke="#ff0000" fill="#ff0000" />
                </button>
              )}
              {!isFavorite && (
                <button
                  type="button"
                  onClick={() => {
                    addToFavoretes(teacher);
                  }}
                >
                  <IconSvg icon="heart" stroke="#ffc531" />
                </button>
              )}
            </div>
          </HeadBox>
          <Name>
            {name} {surname}
          </Name>
          <TextSection>
            <TextMain>
              Speaks: <TextU>{languages.join(', ')}</TextU>
            </TextMain>
            <TextMain>
              Lesson Info: <Text>{lesson_info}</Text>
            </TextMain>

            <TextMain>
              Conditions: <Text>{conditions.join(' ')}</Text>
            </TextMain>
          </TextSection>
          {!readMore && (
            <Button
              more="true"
              margin="16px 0px"
              height="auto"
              onClick={() => setReadMore(true)}
            >
              Read more
            </Button>
          )}
          {readMore && (
            <ReadMoreBox>
              <TextReadmore>{experience}</TextReadmore>
              <ReviewsBox>
                {reviews &&
                  reviews.map((i, index) => (
                    <ReviewsItem key={index} levels="true">
                      <BoxReviewerInfo>
                        <ImgReviews src={avatar_url} alt={`avatar ${name}`} />
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
            {levels.map((i, index) => (
              <Levels key={index} levels="true">
                {`#${i}`}
              </Levels>
            ))}
          </LevelsBox>
          {readMore && (
            <Button width="232px" margin="32px 0px 0px 0px" onClick={openModal}>
              Book trial lesson
            </Button>
          )}
        </Box>
        {createPortal(
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalContentBookTrial teacher={teacher} closeModal={closeModal} />
          </Modal>,
          document.getElementById('modal-root')
        )}
      </ItemBox>
    </div>
  );
};
