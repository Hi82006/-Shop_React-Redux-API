import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import { useGetProductQuery } from '../../features/api/apiSlice';
import { getRaletedProducts } from '../../features/products/productsSlice';

import { ROUTES } from '../../utils/routes';

import Product from './Product';
import Products from './Products';


const SingleProduct = () => {
  const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate()
    const { related } = useSelector(({ products }) => products)

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
    
    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME)
        }
    },[isLoading, isFetching, isSuccess, navigate])

    useEffect(() => {
      if(data){
        dispatch(getRaletedProducts(data.category.id))
      }
    },[data,dispatch]);

  return !data ? (
    <section className='preloader'>Loading...</section>
    ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
};

export default SingleProduct

