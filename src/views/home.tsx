import { useLocation } from 'react-router-dom';
import List from '../components/list/list';
import Breadcrumb from '../components/breadcrumb';
import useFetchSearch from '../hooks/useFetchSearch';

const Home = () => {
  let location = useLocation();

  const {search} = location;
  const {data, categories, loading} = useFetchSearch(`${search}`)
  return (
    <div>
      <Breadcrumb categories={categories} />
      { !loading &&
        <List data={data} />
      }
    </div>
  )
};

export default Home;
