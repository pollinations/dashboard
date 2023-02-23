import styled from '@emotion/styled';
import { ResponsiveBar } from '@nivo/bar'
import { fetchUserData } from '../../supabase/user';
import { useState } from 'react';

const Chart = props =>{
  const [data, setData] = useState(null)
  fetchUserData("pollen", "end_time").then(setData)
  return (<Style>
      
    Usage: {data && Object.keys(data?.data).length}

</Style>)
};

export default Chart

const Style = styled.div`

width: 100%;
height: 100%;
max-height: 50vh;
max-width: 70vw;
display: flex;
justify-content: center;
`