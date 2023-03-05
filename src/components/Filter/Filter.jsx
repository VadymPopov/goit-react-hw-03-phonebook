import React from "react";
import PropTypes from 'prop-types';
import { FilterContainer, Input } from "./Filter.styled";

const Filter = ({onChange, value})=>{
    return(
        <FilterContainer>
            <Input type="text" onChange={onChange} value={value} placeholder='Find contacts by name' />
        </FilterContainer>
    )
};

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Filter;