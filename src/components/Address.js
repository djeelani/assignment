import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import {
  DetailsList,
} from 'office-ui-fabric-react/lib/DetailsList';

import countries from '../utils/countries.js';
import states from '../utils/states.js';
import cities from '../utils/cities.js';
import areas from '../utils/areas.js';

const Address = ({ state,
  handleCountryChange,
  handleStateChange,
  handleCityChange,
  handleAreaChange,
  items,
  handleAddClick,
  handleClearClick }) => {
  return (
    <div id='address'>
      <Dropdown
        placeHolder='Select Country'
        id='country'
        options={countries}
        onChanged={value => handleCountryChange(value)}
      />
      <Dropdown
        placeHolder='Select State'
        id='state'
        options={states}
        disabled={!state.country}
        onChanged={value => handleStateChange(value)}
      />
      <Dropdown
        placeHolder='Select City'
        id='city'
        options={cities}
        disabled={!state.state}
        onChanged={value => handleCityChange(value)}
      />
      <Dropdown
        placeHolder='Select Area'
        id='area'
        options={areas}
        disabled={!state.city}
        multiSelect={true}
        onChanged={value => handleAreaChange(value)}
      />
      <DefaultButton
        id='add'
        primary={true}
        checked={false}
        text='Add to Table'
        onClick={handleAddClick}
      />
      <DefaultButton
        id='clear'
        primary={true}
        checked={false}
        text='Clear Table'
        onClick={handleClearClick}
      />
      <MarqueeSelection >
        <DetailsList
          items={items}
          columns={[
            {
              key: 'column1',
              name: 'Country',
              fieldName: 'Country',
              minWidth: 130,
              maxWidth: 150,
              isRowHeader: true,
              data: 'string',
              onRender: (item: items) => {
                return (<span>{item.country}</span>);
              },
              isPadded: true
            },
            {
              key: 'column3',
              name: 'State',
              fieldName: 'State',
              minWidth: 130,
              maxWidth: 150,
              data: 'string',
              onRender: (item: items) => {
                return (<span>{item.state}</span>);
              },
              isPadded: true
            },
            {
              key: 'column4',
              name: 'City',
              fieldName: 'City',
              minWidth: 130,
              maxWidth: 150,
              isResizable: true,
              isCollapsable: true,
              data: 'string',
              onRender: (item: items) => {
                return (<span>{item.city}</span>);
              },
              isPadded: true
            },
            {
              key: 'column5',
              name: 'Area',
              fieldName: 'Area',
              minWidth: 210,
              maxWidth: 350,
              isResizable: true,
              isCollapsable: true,
              data: 'string',
              onRender: (item: items) => {
                return (<span>{item.area}</span>);
              }
            }]}
          setKey='set'
          isHeaderVisible={true}
        />
      </MarqueeSelection>
    </div>
  );
}

Address.propTypes = {
  handleCountryChange: PropTypes.func,
}

export default Address;