import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Stars from "../components/Stars";

function InfoproductPage(){

    const { id } = useParams()
    const [product, setProduct] = useState({ images: [] })
    let navigate = useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
          .then(res => res.json())
          .then(data => setProduct(data));
    }, [id]);

    return (
        <div className="content">
            <div className="contet_block">
                <h4>{product.title}</h4>
                <img style={{height: '250px', width: '250px' }} src={product.image} alt="img"/>
                <p> Price: {product.price}$</p>
                <p> Description: {product.description}</p>
                <Stars rating={product.rating}/>
                <button className="but" onClick={() => navigate('/product')}>Назад!</button>
            </div>
        </div>
    )
}

export default InfoproductPage
