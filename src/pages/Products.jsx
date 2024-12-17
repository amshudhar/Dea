import React from 'react'
import {Product} from '../data/product'
import { useLocation,useNavigate } from 'react-router-dom'


const Products = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const queryparams=new URLSearchParams(location.search)
    // extract the parameters
    const category=queryparams.get("category")
    const sort=queryparams.get("sort")

    //filtering the products
    const filteredProducts=Product.filter(product=>category?product.category===category:true)
    console.log(filteredProducts)

    //sorting the products
    if(sort=="Low"){
        filteredProducts.sort((a,b)=>a.price-b.price)
    }else{
        filteredProducts.sort((a,b)=>b.price-a.price)
    }

    function HandleFilter(key,value){
        if(value){
            queryparams.set(key,value)
        }else{
            queryparams.delete(key)
        }
        navigate(`?${queryparams.toString()}`)
    }

  return (
    <div>
        <h1 className='text-center p-4'>Shop the best summer deals</h1>

        {/**category filter selection starts */}
        <div className="category text-center ">
        <div className="btn-group bg-info-subtle p-3" role="group" aria-label="Basic example">
            <button type="button" onClick={()=>HandleFilter("category","men's clothing")} className="btn btn-info-subtle">men's clothing</button>
            <button type="button" onClick={()=>HandleFilter("category","women's clothing")} className="btn btn-info-subtle">women's clothing</button>
            <button type="button" onClick={()=>HandleFilter("category","electronics")} className="btn btn-info-subtle">electronics</button>
            <button type="button" onClick={()=>HandleFilter("category","jewelery")} className="btn btn-info-subtle">jewellery</button>
            <button type="button" onClick={()=>HandleFilter("category")} className="btn btn-info-subtle">all products</button>
        </div>
        </div>
        {/**category filter selection ends */}


        {/**sorting buttons starts */}
        <div className="sort-products text-center p-3">
            <div className="btn-group bg-warning p-2" role="group" aria-label="Basic example">
                <button type="button" onClick={()=>HandleFilter("sort","Low")} className="btn ">Low</button>
                <button type="button" onClick={()=>HandleFilter("sort","High")} className="btn ">High</button>
            </div>
        </div>
        {/**sorting buttons ends */}


        {/**products start */}
        <div className="row mx-5" >
        {filteredProducts.length > 0 ? (
            filteredProducts.map((ele) => (
            <div className="col-sm-12 col-md-3 col-lg-3 my-3"   >
            <div className="card shadow p-3" >
                <img src={ele.image} alt={ele.title}  height={"250px"} />
                <h3 className="card-title">{ele.title.slice(0,15)}</h3>
                <p className="card-text">${ele.price}</p>
            </div>
            </div>
            ))
            ) : (
                <div className="text-center text-danger my-5">No Products Found</div>
        )}
        </div>
        
        {/**products ends */}
    </div>
  )
}






export default Products


















