import { useParams } from 'react-router-dom'
import Card from '../components/card/card'
import Breadcrumb from '../components/breadcrumb'
import useFetchItem from '../hooks/useFetchItem'
import { useSelector } from 'react-redux'

const Deatil = () => {

  let { id } = useParams<string>();
  const { data, loading} = useFetchItem(`${id}`);
  const { categories } = useSelector((state:any) => state.categories)
  console.log(categories)
  return (
    <div>
      <Breadcrumb categories={categories} />
      <div className='content'>
        { !loading &&
          <Card data={data}/>
        }
      </div>
    </div>
  )
}

export default Deatil