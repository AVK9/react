import { Section } from 'components/common/Section/Section';
import FavoritesList from 'components/FavoritesList/FavoritesList';
import Filter from 'components/Filter/Filter';

const FavoritesPage = () => {
  return (
    <Section>
      <Filter />
      <FavoritesList />
    </Section>
  );
};

export default FavoritesPage;
