import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import {
  Persona,
  PersonaSize,
} from 'office-ui-fabric-react/lib/Persona';

const Card = ({ handleUserID, handleGetDetails, state }) => {
  const renderCard = () => {
    if (!!state.userDetails.id) {
      return (
        <Persona
          imageUrl={state.userDetails.avatar}
          text={`${state.userDetails.first_name} ${state.userDetails.last_name}`}
          secondaryText={`User ID: ${state.userDetails.id}`}
          size={PersonaSize.size72}
        />
      );
    } 
  };

  return (
    <div id='card'>
      <div id='userId'>
        <TextField
          placeholder='Enter UserID'
          onChanged={value => handleUserID(value)}
        />
      </div>
      <DefaultButton
        id='details'
        primary={true}
        checked={false}
        text='Get Details'
        onClick={handleGetDetails}
      />
      {renderCard()}

    </div>
  );
}

Card.propTypes = {
  handleUserID: PropTypes.func,
}

export default Card;