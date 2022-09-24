import gql from 'graphql-tag'

export const productsQuery = gql`
query Products {
  products(
    filter: { camera_series: { eq: "Basler ace" } }
  ) {
    items {
      name
      sku
      thumbnail{
        url
        label
      }
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
  }
}
`