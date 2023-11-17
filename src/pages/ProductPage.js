import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";
import { ReactComponent as Photo} from '../img/image2.svg'


function ProductPage() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product" >
      <div className="product-item">
        <ul>
          {products && products.map(elem => 
            <div className="product__i">
              <Link key={elem.id} to={`/product/${elem.id}`}>
                <Photo/>
                <p>{elem.title}</p>
                <Stars rating={elem.rating}/>
              </Link>
            </div>           
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
