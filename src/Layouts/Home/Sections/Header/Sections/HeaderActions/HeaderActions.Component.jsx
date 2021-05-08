import React from 'react';
// import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ButtonBase from '@material-ui/core/ButtonBase';

export const HeaderActionsComponent = () => {
  return (
    <div className="header-actions-wrapper childs-wrapper">
      <div className="header-action-item-wrapper">
        <Badge className="header-action-item" badgeContent={54} max={9}>
          <ButtonBase>
            <span className="mdi mdi-plus" />
          </ButtonBase>
        </Badge>
      </div>
      <div className="header-action-item-wrapper">
        <Badge className="header-action-item" badgeContent={32} max={9}>
          <ButtonBase>
            <span className="mdi mdi-checkbox-multiple-marked" />
          </ButtonBase>
        </Badge>
      </div>
      <div className="header-action-item-wrapper">
        <Badge className="header-action-item" badgeContent={16} max={9}>
          <ButtonBase>
            <span className="mdi mdi-calendar-month-outline" />
          </ButtonBase>
        </Badge>
      </div>
      <div className="header-action-item-wrapper">
        <Badge className="header-action-item" badgeContent={27} max={9}>
          <ButtonBase>
            <span className="mdi mdi-forum" />
          </ButtonBase>
        </Badge>
      </div>
      <div className="header-action-item-wrapper">
        <Badge className="header-action-item" badgeContent={6} max={9}>
          <ButtonBase>
            <span className="mdi mdi-video" />
          </ButtonBase>
        </Badge>
      </div>
      <div className="header-action-item-wrapper">
        <Badge className="header-action-item" badgeContent={24} max={9}>
          <ButtonBase>
            <span className="mdi mdi-email" />
          </ButtonBase>
        </Badge>
      </div>
      <div className="header-action-item-wrapper">
        <Badge className="header-action-item" badgeContent={4} max={9}>
          <ButtonBase>
            <span className="mdi mdi-bell" />
          </ButtonBase>
        </Badge>
      </div>
    </div>
  );
};

// HeaderActionsComponent.propTypes = {};
