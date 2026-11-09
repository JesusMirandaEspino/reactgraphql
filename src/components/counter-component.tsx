import React from "react";
import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client/react";
import { useCounter } from "../hooks/useCounter";



const CounterComponent = () => {


    const { loading, error, initialData, handleIncrement, handleDecrement } =
        useCounter();


    if (loading) {
      return <p>Loading...</p>;
    }

    if(error){
        return  <p>Error... { Error.message }</p>
    }

    return (
      <>
        <h2>Counter: {data.getCount}</h2>
        <button type="button" onClick="{incrementCountFunction}">
          Increment Count
        </button>
        <button type="button" onClick="{decrementCountFunction}">
          Increment Count
        </button>
      </>
    );
}

export default CounterComponent;