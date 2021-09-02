import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

import useStyles from './styles'

const products = [
  { id:1, name: 'pins', description: 'wizard and moon', price: '$100', image: 'https://i.pinimg.com/736x/29/a8/9d/29a89d5369ffcf77bee426f9148cf6c0.jpg' },
  { id:2, name: 'sticker', description: 'looming men ', price: '$150', image: 'https://64.media.tumblr.com/7602ea09f9adcbb22b984e07fc06acac/tumblr_pp51m7ZE7X1rnz1s9o1_1280.jpg' }
]



const Products = () => {
  const classes = useStyles()
  
  return (
  <div>
    <Grid container justify="center" spacing={4}>
      {products.map((product) =>(
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product 
            product={product}
          />
        </Grid>
      ))}
    </Grid>
  </div>
  )

}

export default Products