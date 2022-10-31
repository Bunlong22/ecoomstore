
import Layout from '../components/layout/Layout';
import ProductItem from '../components/layout/ProductItem'
import data from '../utils/data'
//import KayScreen from '../components/layout/KayItem';


export default function Home() {
  return (
    <Layout title="Home Page">
     <div className='text-center text-xl mb-3'>
      <h1>Keyboard and Mouse</h1>
     </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products?.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
        {/* {data.kays?.map((kay) => (
          <ProductItem product={kay} key={kay.slug}></ProductItem>
        ))} */}
       </div>
       {/* imprt mouse data from data js */}
       {/* <h1 className='text-center'>Mouse</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.kays?.map((kay) => (
          <KayScreen product={kay} key={kay.slug}></KayScreen>
        ))}
      </div>  */}
    
    </Layout>
  );
}
