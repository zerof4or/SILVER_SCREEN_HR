import React from 'react';
// import { PropTypes } from 'prop-types';
import './Sorterletters.Style.scss';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line import/no-unresolved
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { letters } from '../../Enums/letters.Enum';
export const Sorterletters = () => {
  const options = letters;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    setSelectedIndex(0);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction='column' alignItems='center' className='Sorterletters'>
      <Grid item xs={12}>
        <ButtonGroup variant='contained' ref={anchorRef} aria-label='split button'>
          <Button
            className='ButtonGroup-Sorterletters'
            onClick={handleClick}
            onDoubleClick={() => setSelectedIndex(0)}>
            {/* {selectedIndex === 0 ? (
              <span className='mdi mdi-filter-off-outline px-1  filter-icon-defult' />
            ) : (
              <span className='mdi mdi-filter-menu px-1  filter-icon' />
            )} */}
            {/* 
            {options[selectedIndex]} */}
            All
          </Button>
          <Button
            className='ButtonGroup-Sorterletters'
            size='small'
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label='select merge strategy'
            aria-haspopup='menu'
            onClick={handleToggle}>
            {selectedIndex === 0 ? (
              <span className='mdi mdi-sort-alphabetical-variant' />
            ) : (
              options[selectedIndex]
            )}
          </Button>
        </ButtonGroup>
        <Popper
          className='MenuItemSort'
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id='split-button-menu' className='MenuItemSort'>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}>
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};
export default Sorterletters;
//   isActive: PropTypes.bool.isRequired,= {
//   isAbsolute: PropTypes.bool,
// };
// Spinner.defaultProps = {
//   isAbsolute: false,
// };
