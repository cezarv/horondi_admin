import { gql } from '@apollo/client';
import { getItems, setItems, client } from '../../utils/client';

export const getOrderById = (id) => {
  const query = `
    query getOrder($id:ID!){
  getOrderById(id: $id) {
    ...on Order {
      _id
      status
      user {
        firstName
        lastName
        patronymicName
        email
        phoneNumber
      }
      dateOfCreation
      lastUpdatedDate
      adminComment
      userComment
      cancellationReason
      delivery {
        sentOn
        sentBy
        invoiceNumber
        courierOffice
        byCourier
        cost {
          currency
          value
        }
      }
      address {
        country
        region
        city
        zipcode
        street
        buildingNumber
        appartment
      }
      items {
        name {
          lang
          value
        }
        category{
          lang
          value
        }
        subcategory{
          lang
          value
        }
        model{
          lang
          value
        }
        colors{
          lang
          value
        }
        pattern{
          lang
          value
        }
        closure{
          lang
          value
        }
        closureColor
        size{
          heightInCm
          widthInCm
          depthInCm
          volumeInLiters
          weightInKg
          available
          additionalPrice {
            value
            currency
          }
          name
        }
        bottomMaterial{
          lang
          value
        }
        bottomColor{
          lang
          value
        }
        additions{
          lang
          value
        }
        actualPrice{
          currency
          value
        }
        quantity
      }
      totalItemsPrice {
        currency
        value
      }
      totalPriceToPay {
        currency
        value
      }
      isPaid
      paymentMethod
    }
    ...on Error {
      statusCode
      message
    }
  }
}
  `;
  return getItems(query, { id });
};

export const updateOrder = (order) => {
  const query = `
    mutation updateOrder($order:OrderInput!){
  updateOrder(order:$order) {
  ...on Order {
      _id
      status
      user {
        firstName
        lastName
        patronymicName
        email
        phoneNumber
      }
      dateOfCreation
      lastUpdatedDate
      adminComment
      userComment
      cancellationReason
      delivery {
        sentOn
        sentBy
        invoiceNumber
        courierOffice
        byCourier
        cost {
          currency
          value
        }
      }
      address {
        country
        region
        city
        zipcode
        street
        buildingNumber
        appartment
      }
      items {
        name {
          lang
          value
        }
        category{
          lang
          value
        }
        subcategory{
          lang
          value
        }
        model{
          lang
          value
        }
        colors{
          lang
          value
        }
        pattern{
          lang
          value
        }
        closure{
          lang
          value
        }
        closureColor
        size{
          heightInCm
          widthInCm
          depthInCm
          volumeInLiters
          weightInKg
          available
          additionalPrice {
            value
            currency
          }
          name
        }
        bottomMaterial{
          lang
          value
        }
        bottomColor{
          lang
          value
        }
        additions{
          lang
          value
        }
        actualPrice{
          currency
          value
        }
        quantity
      }
      totalItemsPrice {
        currency
        value
      }
      totalPriceToPay {
        currency
        value
      }
      isPaid
      paymentMethod
    }
    ...on Error {
      statusCode
      message
    }
  }
}
  `;
  return setItems(query, { order });
};

export const getAllOrders = async (skip, limit, filter) => {
  const result = await client.query({
    query: gql`
      query($limit: Int, $skip: Int, $filter: FilterInput) {
        getAllOrders(limit: $limit, skip: $skip, filter: $filter) {
          items {
            _id
            status
            dateOfCreation
            totalItemsPrice {
              currency
              value
            }
            totalPriceToPay {
              currency
              value
            }
          }
          count
        }
      }
    `,
    variables: {
      skip,
      limit,
      filter: {
        orderStatus: filter.length ? filter : null
      }
    }
  });
  const { data } = result;
  return data.getAllOrders;
};
