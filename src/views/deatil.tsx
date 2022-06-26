import { useParams } from 'react-router-dom'
import Card from '../components/card/card'
import Breadcrumb from '../components/breadcrumb'
import useFetchItem from '../hooks/useFetchItem'

const Deatil = () => {

  let { id } = useParams<string>();
  const { data, loading} = useFetchItem(`${id}`);

  return (
    <div>
      {/* <Breadcrumb /> */}
      <div className='content'>
        { !loading &&
          <Card data={data}/>
        }
      </div>
    </div>
  )
}

export default Deatil