import GETPRODUCTSBYIDENTIFIER from '../../../graphql/query.products-byIdentifier.graphql'

export default async function (client:any, variables: any) {
  try {
    const { data } = await client.query({
      query: GETPRODUCTSBYIDENTIFIER,
      variables,
      fetchPolicy: 'no-cache'
    })
    return data.productsByIdentifier
  } catch (error) {
    return null
  }
}
