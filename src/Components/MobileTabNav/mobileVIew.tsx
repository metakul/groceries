import React, { ReactNode } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container, useMediaQuery,  } from '@mui/material';

interface MobileTabNavigationProps {
  tabs: { value: ReactNode; content: ReactNode; label: string }[];
}

const MobileTabNavigation: React.FC<MobileTabNavigationProps> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const isNonMobile = useMediaQuery("(min-width: 680px)");

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="mobile tabs example"
        variant="fullWidth"
        sx={{
          bottom: 0,
          width: '100%',
          position: 'fixed',
          display: 'flex',
          flexDirection: 'row',
          zIndex: 20,
          bgcolor: '#0c831f',
        }}
      >
        {tabs.map(({ value }, index) => (
          <Tab key={index} icon={React.createElement('div', null, value)} {...a11yProps(index)} />
        ))}
      </Tabs>
      {tabs.map(({ content }, index) => (
        <CustomTabPanel isNonMobile={isNonMobile} key={index} value={value} index={index}>
          {content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

interface CustomTabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
  isNonMobile:boolean
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = ({ children, value, index, isNonMobile }) => (

  <Container
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    sx={{
      p:0,
      m: isNonMobile ? "auto" :0,
      mb:2
    }}
  >
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </Container>
);

export default MobileTabNavigation;
