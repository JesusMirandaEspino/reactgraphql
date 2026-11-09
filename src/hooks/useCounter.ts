import { INCREMENT_COUNT, DECREMENT_COUNT } from "../counter/counter-mutation";
import { GET_COUNT } from "../counter/counter-query";
import { INCREMENT_SUBSCRIPTION } from "../counter/counter-subscription";
import { useMutation, useQuery, useSubscription } from "@apollo/client/react";


export const useCounter = () => {
  const { data: initialData, loading } = useQuery(GET_COUNT);

  const { data: actualData, error } = useSubscription(INCREMENT_SUBSCRIPTION);

  const [incrementCountFunction] = useMutation(INCREMENT_COUNT);

  const [decrementCountFunction] = useMutation(DECREMENT_COUNT);

  const handleIncrement = async () => {
    await incrementCountFunction();
  };

  const handleDecrement = async () => {
    await decrementCountFunction();
  };

  return {
    loading,
    error,
    actualData,
    initialData,
    handleIncrement,
    handleDecrement,
  };
};