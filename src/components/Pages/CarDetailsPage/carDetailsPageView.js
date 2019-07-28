import React from "react";
import CarDetails from "../../CarDetails/carDetailsView";
import { WithHeaderAndFooter } from "../../../utils/composition";


const CarDetailsPage = props => {
  return (
    <WithHeaderAndFooter>
      <CarDetails {...props} />
    </WithHeaderAndFooter>
  );
};

export default CarDetailsPage;
