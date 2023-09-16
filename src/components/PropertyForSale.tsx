"use client"
import React, { useState, useEffect } from 'react';
import { fetchApi, baseUrl } from '@/utils/fetch';
import Property from './Property';


function PropertyForSale() {
  const [forSaleData, setForSaleData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
      .then(data => {
        setForSaleData(data?.hits);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      {/* Render the fetched data here */}
      {forSaleData.map((property) => <Property key={property.id} property={property} />)}
    </div>
  );
}

export default PropertyForSale;