import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { useState } from "react";
import { CartState } from "../context/Context";

const Filters = () => {
  const [rate, setRate] = useState(2);

  const {
    productState: { byStock, byFastDelivery, byRating, searchQuery },
    productDispatch,
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onClick={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            });
          }}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onClick={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            });
          }}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onClick={() => {
            productDispatch({
              type: "FILTER_BY_STOCK",
            });
          }}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onClick={() => {
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            });
          }}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) => {
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            });
          }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => {
          productDispatch({
            type: "CLEAR_FILTER",
          });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
