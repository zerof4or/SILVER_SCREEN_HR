import React, { useState } from 'react';
import { IconButton, InputAdornment, InputBase } from '@material-ui/core';
import './AddingList.Style.scss';

export const AddingListComponent = () => {
  const [items, setItems] = useState([]);
  const [newItemLabel, setNewItemLabel] = useState('');

  const handleAddItem = () => {
    if (newItemLabel.trim().length === 0) return;

    const newItem = { label: newItemLabel, id: '0000' };
    setItems((prevItems) => [...prevItems, newItem]);
    setNewItemLabel('');
  };

  const handleRemoveItem = (event, item) => {
    event.preventDefault();
    setItems(items.filter((listItem) => listItem.id !== item.id));
  };

  const handleItemClick = (event, item) => {
    if (event.defaultPrevented) return;
  };

  const handleChange = (event) => {
    setNewItemLabel(event.target.value);
  };

  // add item on enter
  const handleKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    handleAddItem();
  };

  return (
    <div>
      <InputBase
        value={newItemLabel}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="ListAddInput"
        id="list-add-input"
        placeholder="Add new item"
        startAdornment={
          <InputAdornment position="start">
            <span className="mdi mdi-plus mdi-24px" />
          </InputAdornment>
        }
      />
      {items.length > 0 && (
        <div className="ListItems">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={(event) => handleItemClick(event, item)}
              onKeyPress={() => {}}
              role="option"
              className="ListItem"
              tabIndex={-1}
              aria-selected="false"
            >
              <span className="ListItemLabel">{item.label}</span>
              <IconButton
                size="small"
                className="ListItemIcon"
                onClick={(event) => handleRemoveItem(event, item)}
              >
                <span className="mdi mdi-close" />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
