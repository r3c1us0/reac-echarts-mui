import React, { useEffect, useState } from 'react';
import {  Box, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import dataList from '../data/data.json';
import { ChartOptions } from './ChartOptions';
import ChartElement from './ChartElement';

function ChartList() {
    const [resize, setResize] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        window.onresize = function() {
            setResize(prevState => !prevState);
        }
    }, [resize]);

  return (
    <>
        <Typography align='center' color="info.dark" variant='h2'>Chart List</Typography>
        <Box>
            { dataList.map(function(chart, index) {
                const elemId = 'elem'.concat(index);
                const chartOptions = new ChartOptions(chart.left_bar, chart.right_bar, chart.bar_marker, theme);
                return (
                    <Box key={index} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <ChartElement 
                            elementId={elemId}
                            chartOptions={chartOptions.getOptions()}
                            onResize={resize}
                        />
                    </Box>
                );
            })}
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Box id={'leftBarDescription'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                    <Box sx={{ width: '1rem', height: '0.5rem', background: theme.palette.info.light }}></Box>
                    Below Inv. Average
                </Box>
                <Box id={'rightBarDescription'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                    <Box sx={{ width: '1rem', height: '0.5rem', background: theme.palette.info.dark }}></Box>
                    Above Inv. Average
                </Box>
            </Box>            
        </Box>
    </>
  );
}

export default ChartList;