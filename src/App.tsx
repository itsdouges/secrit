import React from 'react';
import { SideNavigation, Header, MenuItem } from './components/side-navigation';
import { Content, Layout, LeftSidebar } from './components/layout';
import { Queue } from './components/queue';

const App = () => {
  return (
    <Layout>
      <LeftSidebar>
        <SideNavigation>
          <Header title="NXTGen Industries" subtitle="Next-gen service desk" />
          <MenuItem>Your work</MenuItem>
          <MenuItem>Your customers</MenuItem>
          <MenuItem>Queues view</MenuItem>
          <MenuItem>Filters</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Dropbox</MenuItem>
        </SideNavigation>
      </LeftSidebar>
      <Content>
        <Queue />
      </Content>
    </Layout>
  );
};

export default App;
