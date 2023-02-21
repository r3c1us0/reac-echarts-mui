import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import * as echarts from 'echarts';

function ChartElement({elementId, chartOptions, onResize}) {

    const options = (!chartOptions) ? {} : chartOptions

    useEffect(() => {
        // initialize echarts instance
        const chart = echarts.init(document.getElementById(elementId));

        // set chart options
        chart?.setOption(options);

        if(onResize) {
            chart?.resize();
        }
        
        // dispose chart instance on unmount
        return () => {
            chart?.dispose();
        };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onResize]);

  return (
        <Box id={elementId} sx={{
            height: {
                xs: '55px',
                sm: '55px',
                md: '75px',
                lg: '100px',
                xl: '150px',
            },
            width: {
                xs: '250px',
                sm: '500px',
                md: '750px',
                lg: '950px',
                xl: '1200px',
            }
        }}>Loading...</Box>
    );

}

export default ChartElement;