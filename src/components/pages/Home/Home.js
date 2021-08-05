import React, { memo } from 'react';

import Page from '../../elements/Page';

import { SectionPlaceholder, NavbarPlaceholder } from './Home.styles';
import Projects from './Projects';

const Home = () => (
  <Page>
    <NavbarPlaceholder>Navbar</NavbarPlaceholder>
    <SectionPlaceholder>Hero</SectionPlaceholder>
    <Projects />
    <SectionPlaceholder>Contact Us</SectionPlaceholder>
  </Page>
);

export default memo(Home);
