import React from "react";
import { PageHeader } from "antd";
import MenuRightSide from "./MenuRightSide";

const TopHeader = () => {

    return(
        <PageHeader
            className="header"
            title="Riviera Maya del Sol Golf Club"
            subTitle="Sun is always shining and the greens are greener"
            extra={[
                <MenuRightSide />
            ]}
        />
    );
}
export default TopHeader;