import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {default as BootstrapTabs} from 'react-bootstrap/Tabs';
import {default as BootstrapTab} from 'react-bootstrap/Tab';

const StyledTabs = styled.div`
  width: 100%;
`;

const StyledTabsList = styled(BootstrapTab)`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  margin: 0;
`;

const StyledTabsContent = styled.div`
  padding: 10px;
  border: solid #ccc;
  border-width: 0 1px 1px 1px;
  height  100%;
`;

const Tabs = ({tabs, selectedTab, setSelectedTab }) => {

  return (
    <StyledTabs>
      <BootstrapTabs
        activeKey={selectedTab}
        onSelect={setSelectedTab}
      >
        {tabs.map(({ label, content }) => (
          <StyledTabsList
            eventKey={label}
            title={label}
          >
            <StyledTabsContent>
              {content}
            </StyledTabsContent>
          </StyledTabsList>
        ))}
      </BootstrapTabs>
    </StyledTabs>
  )
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.node).isRequired,
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired
}

export default Tabs;
