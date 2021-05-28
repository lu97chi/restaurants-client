import { gql } from "graphql-tag";

export const getRates = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;
