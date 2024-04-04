import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import DeliverySelector from "#/components/domain/delivery/DeliverySelector.jsx";
import PickupSelector from "#/components/domain/delivery/PickupSelector.jsx";
import MeetupSelector from "#/components/domain/delivery/MeetupSelector.jsx";
import { DELIVERY_METHODS } from "#/config/constants.js";
import React from "react";

const DeliveryMethodSelectionContainer = ({prevSelected, handleEvent}) => {
    return (
      <Box className="h-full flex flex-col gap-0 justify-around">
        {
          DELIVERY_METHODS?.map(({ value, label, isActive }, index) => {
            let component = null;
            if(value === 'DELIVERY') {
              component = <DeliverySelector handleEvent={handleEvent} isSelected={prevSelected === 0} disabled={!isActive}/>;
            }
            else if(value === 'PICKUP') {
              component = <PickupSelector handleEvent={handleEvent} isSelected={prevSelected === 1} disabled={!isActive}/>;
            }
            else if(value === 'MEETUP') {
              component = <MeetupSelector handleEvent={handleEvent} isSelected={prevSelected === 2} disabled={!isActive}/>;
            }

            return (
              <React.Fragment key={value}>
                {component}
                {index < DELIVERY_METHODS.length - 1 && <Divider />}
              </React.Fragment>
            );
          })
        }
      </Box>
    )
}

export default DeliveryMethodSelectionContainer