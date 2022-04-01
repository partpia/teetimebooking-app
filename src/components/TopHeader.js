import React from "react";
import { Button, PageHeader } from "antd";
import MenuRightSide from "./MenuRightSide";

const TopHeader = () => {

    return(
        <PageHeader
            className="header"
            title="Riviera Maya Golf Club"
            subTitle="Some text"
            extra={[
                <MenuRightSide />
            ]}
        />
    );
}
export default TopHeader;