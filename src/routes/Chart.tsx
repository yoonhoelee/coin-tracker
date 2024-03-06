import {useQuery} from "react-query";
import {fetchCoinHistory} from "./api";
import ApexChart from "react-apexcharts"
import {useRecoilValue} from "recoil";
import {isDarkAtom} from "./atoms";

interface ChartProps {
    coinId: string;
}

interface IHistoricalData {
    time_open: string
    time_close: string
    open: number
    high: number
    low: number
    close: number
    volume: number
    market_cap: number
}

function Chart({coinId}: ChartProps) {
    const isDark = useRecoilValue(isDarkAtom);
    const {isLoading, data} = useQuery<IHistoricalData[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "Price",
                            // Provide a default empty array if data is undefined
                            data: data?.map((price) => price.close) ?? [],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isDark?"dark":"light",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: {show: false},
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: {show: false},
                            axisTicks: {show: false},
                            labels: {show: false},
                        },
                        fill: {
                            type: "gradient",
                            gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        }
                    }}
                />
            )}
        </div>
    );
}

export default Chart;