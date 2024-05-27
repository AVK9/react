import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
  Name,
  PriceBox,
  Price,
  PhotoBox,
  RatingBox,
  BoxItem,
  TextItem,
  TextItemLoc,
  DescriptionBox,
  Description,
  PrePhoto,
  TabBox,
  TabHead,
  TabName,
  FeaturesTab,
  InfoBox,
} from './Modal.styled';
import { Category } from '../common/Category/Category';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';
import { Reviews } from '../Reviews/Reviews';
import { Form } from '../Form/Form';
import { IconButton } from '../common/IconButton';

export const ModalContent = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <Name>{data.name}</Name>
      <RatingBox>
        <BoxItem>
          <IconButton icon="star" />
          <TextItem>
            {data.rating}({data.reviews.length} Reviews)
          </TextItem>
        </BoxItem>
        <BoxItem>
          <IconButton icon="map" />
          <TextItemLoc>{data.location}</TextItemLoc>
        </BoxItem>
      </RatingBox>
      <PriceBox>
        <Price>€ {parseFloat(data.price).toFixed(2)}</Price>
      </PriceBox>
      <PhotoBox>
        {data.gallery.map((item) => (
          <PrePhoto key={item} gallery={item} />
        ))}
      </PhotoBox>
      <DescriptionBox>
        <Description>{data.description}</Description>
      </DescriptionBox>
      <TabBox>
        <Tabs>
          <TabList>
            <TabHead>
              <Tab>
                <TabName
                  style={
                    activeTab === 1
                      ? { borderBottom: '4px solid #e44848' }
                      : { borderBottom: 'none' }
                  }
                  onClick={() => handleTabClick(1)}
                >
                  Features
                </TabName>
              </Tab>
              <Tab>
                <TabName
                  onClick={() => handleTabClick(2)}
                  style={
                    activeTab === 2
                      ? { borderBottom: '4px solid #e44848' }
                      : { borderBottom: 'none' }
                  }
                >
                  Reviews
                </TabName>
              </Tab>
            </TabHead>
          </TabList>

          <TabPanel>
            <FeaturesTab>
              <InfoBox>
                <Category details={data.details} />
                <VehicleDetails data={data} />
              </InfoBox>
              <Form />
            </FeaturesTab>
          </TabPanel>
          <TabPanel>
            <FeaturesTab>
              <InfoBox>
                <Reviews reviews={data.reviews} />
              </InfoBox>
              <Form />
            </FeaturesTab>
          </TabPanel>
        </Tabs>
      </TabBox>
    </>
  );
};
