import React from 'react';
import Categories from './categories';
import Products from './products';
import CurrentCategoory from './current-category';

export default function Storefront(){
  return(
    <>
      <div>Storefront!</div>
      <Categories />
      
      <Products />

    </>
  )
}