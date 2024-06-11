import React, { useContext, useState } from 'react';
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

export const TeacherCard = ({ teachers, dataFavorite }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = item => {
    setIsOpen(true);
    setItemBook(item);
  };
  const closeModal = () => setIsOpen(false);

  const [readMoreArr, setReadMoreArr] = useState([]);

  const showReadMore = index => {
    setReadMoreArr(prev => [...prev, index]);
  };

  const [itemBook, setItemBook] = useState([]);
  const [red, setRed] = useState(false);

  const addToFavoretes = item => {
    if (user) {
      findAndUpdateRecord('email', user.email, item);
      favoritesData('email', user.email);
      // isItemExists(item);
      // if (isItemExists) {
      //   setRed(true);
      // }
    } else {
      toast.warn('This functionality is available only to authorized users');
    }
  };

  const isItemExists = item => {
    dataFavorite.some(
      fav => fav.name === item.name && fav.surname === item.surname
    );
  };

  const delFavorite = item => {
    if (user) {
      findAndDeleteRecord('email', user.email, item);
      favoritesData('email', user.email);
      // isItemExists(item);
      // if (isItemExists) {
      //   setRed(true);
      // }
    } else {
      toast.warn('This functionality is available only to authorized users');
    }
  };
  let isFavorite;

  const stateFavorite = item => {
    console.log('item', item);
    console.log('dataFavorite', dataFavorite);
    delFavorite(item);
    // isFavorite = dataFavorite?.some(fav => fav.surname === item.surname);
    // console.log('isFavoriteisFavorite', isFavorite);
    // isFavorite ? delFavorite(item) : addToFavoretes(item);
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
              <div onClick={() => stateFavorite(item)}>
                {isFavorite ? (
                  <button
                    type="button"
                    // onClick={() => addToFavoretes(item)}
                  >
                    <IconSvg icon="heart" stroke="#ff0000" fill="#ff0000" />
                  </button>
                ) : (
                  <button
                    type="button"
                    // onClick={() => addToFavoretes(item)}
                  >
                    <IconSvg icon="heart" stroke="#ffc531" />
                  </button>
                )}
              </div>
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
                margin="16px 0px"
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
              <Button
                width="232px"
                margin="32px 0px 0px 0px"
                onClick={() => openModal(item)}
              >
                Book trial lesson
              </Button>
            )}
          </Box>
          {createPortal(
            <Modal isOpen={isOpen} onClose={closeModal}>
              <ModalContentBookTrial
                itemBook={itemBook}
                closeModal={closeModal}
              />
            </Modal>,
            document.getElementById('modal-root')
          )}
        </ItemBox>
      ))}
    </div>
  );
};
