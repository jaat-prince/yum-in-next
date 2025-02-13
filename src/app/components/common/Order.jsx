import React from "react";
import Accordion from "../common/Accordion";
import { orderData } from "../Helper/Helper";
import { OrderIcon } from "../Helper/Icon";

function Order() {
  return (
    <div>
      <Accordion icon={<OrderIcon />} title={"Order"} text={"order Detail"} />
    </div>
  );
}

export default Order;
