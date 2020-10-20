import { gql } from '@apollo/client';
import { client, getItems } from '../../utils/client';

const getAllOrders = async () => {
  const result = await client.query({
    query: gql`
        query {
        getAllOrders {
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
      }
    `
  });
  const { data } = result;
  return data.getAllOrders;
};

const getOrderById = (id) => {
  const query = `
    query getOrder($id: ID){
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

export {
  getAllOrders,
  getOrderById
};