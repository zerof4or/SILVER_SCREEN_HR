import React, { useState } from 'react';
import {  InputAdornment, InputBase } from '@material-ui/core';
import './listStyles.scss';

export const AddingList = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([]);
  const [newItemLabel, setNewItemLabel] = useState(''); 

  const handleAddItem = () => { 
   // if (newItemLabel.trim().length === 0) return;

    const newItem = { label: newItemLabel, id: '0000' };
    setItems((prevItems) => [...prevItems, newItem]);
    setNewItemLabel('');
  };

  // const handleRemoveItem = (event, item) => {
  //   event.preventDefault();
  //   setItems(items.filter((listItem) => listItem.id !== item.id));
  // };

  // const handleItemClick = (event) => {
  //   // eslint-disable-next-line no-useless-return
  //   if (event.defaultPrevented) return;
  // };

  const handleChange = (event) => {
    setNewItemLabel(event.target.value);
  };

  // add item on enter
  const handleKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
 handleAddItem(event);
  };

  return (
    <div>
      <InputBase
        value={newItemLabel}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className='ListAddInput'
        id='list-add-input'
        placeholder='Add new item'
        startAdornment={(
          <InputAdornment position='start'>
          <span className="mdi mdi-plus" />
          </InputAdornment>
        )}
      />
      {/* {items.length > 0 && (
        <div className='ListItems'>
          {items.map((item) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              key={item.id}
             // onClick={(event) => handleItemClick(event, item)}
              className='ListItem'
            >
              <span className='ListItemLabel'>{item.label}</span>
              <IconButton
                size='small'
                className='ListItemIcon'
                onClick={(event) => handleRemoveItem(event, item)}
              >
                <span className='mdi mdi-close' />
              </IconButton>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default AddingList;
