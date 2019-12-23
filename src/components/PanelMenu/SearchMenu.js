import React from 'react';
import PropTypes from 'prop-types';
import SlidingMenu from '../SlidingMenu/SlidingMenu';
import Form from "../forms/Form/Form";
import Input from "../forms/Input/Input";

const SearchMenu = ({ toggle, active }) => {
    return (
        <SlidingMenu toggle={toggle} titleId="action.search" visible={active}>
            <Form>
                <Input
                    labelId="action.search"
                    name="search"
                    value={form.search}
                    onChange={handleChange}
                    errors={errors.task}
                />
            </Form>
        </SlidingMenu>
    );
};

SearchMenu.propTypes = {
    toggle: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default SearchMenu;
