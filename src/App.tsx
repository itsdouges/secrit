import React from 'react';
import {
  SideNavigation,
  Footer,
  Header,
  MenuItem,
  NavigationContent,
} from './components/side-navigation';
import { Content, Layout, LeftSidebar } from './components/layout';
import { Queue } from './components/queue';

const App = () => {
  return (
    <Layout>
      <LeftSidebar>
        <SideNavigation>
          <Header title="NXTGen Industries" subtitle="Next-gen service desk" />
          <NavigationContent>
            <MenuItem>Your work</MenuItem>
            <MenuItem>Your customers</MenuItem>
            <MenuItem>Queues view</MenuItem>
            <MenuItem>Filters</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Dropbox</MenuItem>
          </NavigationContent>
          <Footer
            title="You're in the MacOS app"
            subtitle="Give feedback ∙ Learn more"
          />
        </SideNavigation>
      </LeftSidebar>
      <Content>
        <Queue />
      </Content>
    </Layout>
  );
};

export default App;
