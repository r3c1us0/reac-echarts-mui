export class ChartOptions {
    /**
     * 
     * @param { number } left_bar 
     * @param { number } right_bar 
     * @param { number } bar_marker 
     * @param { mui/material - useTheme } theme
     */
    constructor(left_bar, right_bar, bar_marker, theme) {
        this.left_bar = left_bar || 0;
        this.right_bar = right_bar || 0;
        this.bar_marker = bar_marker || 0;
        this.theme = theme || null;
        this.options = {};
        this.#initOptions();
    }

    #initOptions() {
        this.options = {
            tooltip: {
                show: false,
            },
            xAxis: {
              type: 'value',
              position: 'top',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            },
            yAxis: {
              type: 'category',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
              },
            },
            grid: {
              top: 10,
              bottom: 10,
              left: '15%',
              right: '15%',
              containLabel: false,
            },
            series: [
              {
                name: 'Below Invest Average',
                type: 'bar',
                stack: 'Total',
                label: {
                  show: true,
                  position: 'insideLeft',
                  color: this.theme?.palette?.info?.contrastText
                },
                itemStyle: {
                  color: this.theme?.palette?.info?.light
                },
                data: [this.left_bar]
              },
              {
                name: 'Above Invest Average',
                type: 'bar',
                stack: 'Total',
                label: {
                  show: true,
                  position: 'insideRight',
                  color: this.theme?.palette?.info?.contrastText
                },
                itemStyle: {
                    color: this.theme?.palette?.info?.dark,
                },
                data: [this.right_bar],
                // add graphic for marker square on the bar
                markPoint: {
                    symbolSize: 20,
                    symbol: 'rect',
                    symbolOffset: [0, 0],
                    label: {
                      show: false
                    },
                    itemStyle: {
                      color: this.theme?.palette?.warning?.main
                    },
                    data: [
                      {
                        coord: [this.bar_marker, 0],
                      },
                    ]
                },
              },
            ]
        };
    }


    getOptions() {
        return this.options;
    } 
}