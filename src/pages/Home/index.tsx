import Assets from "../../assets"
import Components from "../../components"
import ReactECharts from "echarts-for-react";

const Home = () => {
    return (
        <div className="flex w-full flex-col h-screen p-7 md:p-[50px] bg-primary-light relative">
            <Components.Menu/>

            <div className="flex w-full h-screen rounded-2xl bg-white items-start shadow-lg p-10 border border-gray-100 flex-col">
                <Components.Header/>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 px-2 py-5">

                    <div className="flex w-full">
                        <div className="flex w-full rounded-xl border border-gray-100 shadow-md p-4 flex-col gap-2">
                            <div className="flex w-full items-start">
                                <div className="flex flex-col gap-1 py-2 w-full">
                                    <div className="flex">
                                        <span className="text-md text-black font-aileron">New Message</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-3xl text-black font-medium font-aileron">85</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <img src={Assets.Chat} className="w-[30px] h-[30px] select-none cursor-pointer"/>
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-1 pt-4 pb-1 border-t border-t-gray-200 items-center h-full">
                                <div className="flex w-full h-full flex-col justify-center gap-2">
                                    <div className="flex w-full h-[7px] rounded-full bg-primary-light">
                                        <div className="flex w-[73%] h-[7px] bg-primary rounded-full"></div>
                                    </div>

                                    <span className="text-sm text-black font-medium font-aileron">
                                        Response Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex w-full rounded-xl border border-gray-100 shadow-md p-4 flex-col gap-2">
                            <div className="flex w-full items-start">
                                <div className="flex flex-col gap-1 py-2 w-full">
                                    <div className="flex">
                                        <span className="text-md text-black font-aileron">Leads</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-3xl text-black font-medium font-aileron">85</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <img src={Assets.AppIcon} className="w-[30px] h-[30px] select-none cursor-pointer"/>
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-1 pt-4 pb-1 border-t border-t-gray-200">
                                <div className="flex w-full">
                                    <div className="flex w-full justify-center items-end flex-col">
                                        <div className="flex gap-1">
                                            <span className="text-sm text-black font-semibold">60%</span>
                                            <span className="text-sm text-black text-nowrap">Daily Goal</span>
                                        </div>
                                        <div className="flex gap-1">
                                            <span className="text-sm text-black font-semibold">72</span>
                                            <span className="text-sm text-black text-nowrap">This week</span>
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-end items-center h-full">
                                        <ReactECharts 
                                            option={{
                                                grid: {
                                                    left: 10,
                                                    right: 10,
                                                    bottom: 0,
                                                    containLabel: true,
                                                },
                                                series: [
                                                    {
                                                        type: "gauge",
                                                        startAngle: 90,
                                                        endAngle: -270, // jadi lingkaran penuh
                                                        progress: {
                                                            show: true,
                                                            overlap: false,
                                                            roundCap: true,
                                                            clip: false,
                                                            itemStyle: {
                                                                color: "#1768B3", // warna progress
                                                            },
                                                        },
                                                        axisLine: {
                                                            lineStyle: {
                                                                width: 5,
                                                                color: [[1, "#E0ECF7"]], // warna background lingkaran
                                                            },
                                                        },
                                                        pointer: {
                                                            show: false, // sembunyikan jarum
                                                        },
                                                        axisTick: {
                                                            show: false,
                                                        },
                                                        splitLine: {
                                                            show: false,
                                                        },
                                                        axisLabel: {
                                                            show: false,
                                                        },
                                                        data: [
                                                            {
                                                                value: 63,
                                                                // name: "Progress",
                                                            },
                                                        ],
                                                        detail: {
                                                            show: false 
                                                        },
                                                    },
                                                ],
                                        }} 
                                        style={{ height: "70px", width: "70px" }} 
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex w-full rounded-xl border border-gray-100 shadow-md p-4 flex-col gap-2">
                            <div className="flex w-full items-start">
                                <div className="flex flex-col gap-1 py-2 w-full">
                                    <div className="flex">
                                        <span className="text-md text-black font-aileron">New Message</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-3xl text-black font-medium font-aileron">85</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <img src={Assets.Chat} className="w-[30px] h-[30px] select-none cursor-pointer"/>
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-1 pt-4 pb-1 border-t border-t-gray-200 items-center h-full">
                                <div className="flex w-full h-full flex-col justify-center gap-2">
                                    <div className="flex w-full h-[7px] rounded-full bg-primary-light">
                                        <div className="flex w-[73%] h-[7px] bg-primary rounded-full"></div>
                                    </div>

                                    <span className="text-sm text-black font-medium font-aileron">
                                        Response Rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 w-full">
                    <div className="flex w-full">
                        <ReactECharts 
                            option={{
                                tooltip: {
                                    trigger: "axis",
                                },
                                grid: {
                                    left: 10,
                                    right: 10,
                                    bottom: 0,
                                    containLabel: true,
                                },
                                xAxis: {
                                    type: "category",
                                    boundaryGap: false,
                                    data: ["Text","Text","Text","Text","Text","Text","Text","Text","Text","Text","Text","Text"],
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: "rgba(163,163,163,0.3)"
                                        },
                                    },
                                    axisLabel: {
                                        fontFamily: "Aileron, sans-serif", // font custom
                                        fontSize: 12,
                                        color: "#333", // warna teks
                                    },
                                },
                                yAxis: {
                                    type: "value",
                                    min: 0,
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: "rgba(163,163,163,0.3)"
                                        }
                                    },
                                    axisLabel: {
                                        fontFamily: "Aileron, sans-serif", // font custom
                                        fontSize: 12,
                                        color: "#333", // warna teks
                                    },
                                    
                                },
                                series: [
                                    {
                                        name: "Series 1",
                                        type: "line",
                                        smooth: true,
                                        data: [600, 1000, 20, 150, 750, 300, 800, 550, 200, 400, 50, 900],
                                        symbol: "circle",
                                        symbolSize: 8,
                                        lineStyle: {
                                            width: 2,
                                        },
                                        itemStyle: {
                                            color: "#1767B2",
                                        },
                                    },
                                    {
                                        name: "Series 2",
                                        type: "line",
                                        smooth: true,
                                        data: [500, 900, 300, 450, 600, 100, 700, 800, 900, 250, 300, 950],
                                        symbol: "circle",
                                        symbolSize: 6,
                                        lineStyle: {
                                            width: 2,
                                            opacity: 0.3,
                                        },
                                        itemStyle: {
                                            color: "#1767B2",
                                            opacity: 0.3,
                                        },
                                    },
                                ],
                            }} 
                            style={{ height: 400, width: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home