import { PropertyProps } from "@/interfaces";
import React from "react";

interface PropertyDetail {
	property: PropertyProps;
}

const PropertDetail: React.FC<PropertyDetail> = ({ property }) => {
	return <div>{property.name}</div>;
};

export default PropertDetail;
