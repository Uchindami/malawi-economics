"use client"

import {Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis} from "recharts"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card"
import {ChartContainer, ChartTooltip, ChartTooltipContent} from "~/components/ui/chart"

const mwiData = [
  {year: "2004", value: 98.73},
  {year: "2005", value: 100.55},
  {year: "2006", value: 97.14},
  {year: "2007", value: 95.12},
  {year: "2008", value: 97.94},
  {year: "2009", value: 107.21},
  {year: "2010", value: 100.00},
  {year: "2011", value: 96.75},
  {year: "2012", value: 78.50},
  {year: "2013", value: 65.35},
  {year: "2014", value: 70.65},
  {year: "2015", value: 80.40},
  {year: "2016", value: 69.62},
  {year: "2017", value: 74.59},
  {year: "2018", value: 78.96},
  {year: "2019", value: 86.89},
  {year: "2020", value: 94.65},
  {year: "2021", value: 90.18},
  {year: "2022", value: 93.84},
  {year: "2023", value: 99.59}
]

const gradientOffset = () => {
  const dataMax = Math.max(...mwiData.map((i) => i.value));
  const dataMin = Math.min(...mwiData.map((i) => i.value));

  if (dataMax <= 100) {
    return 0;
  }
  if (dataMin >= 100) {
    return 1;
  }

  return 0.173;
};

const off = gradientOffset();

export default function MWIDataChart() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          Real Effective Exchange Rates</CardTitle>
        <CardDescription className="text-sm sm:text-base flex flex-col">
          <span>
            AFR Regional Economic Outlook (October 2024)
          </span>
          <code className={"flex flex-col"}>
            "unit": "Annual Average Index, 2010 = 100",
            "dataset": "AFRREO"
          </code>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            mwi: {
              label: "MWI Value",
              color: "#ff8300",
            },
          }}
        >
          <ResponsiveContainer width="80%" minHeight="100">
            <AreaChart
              data={mwiData}
              margin={{top: 5, right: 10, left: 0, bottom: 0}}
            >
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis
                dataKey="year"
                angle={-45}
                textAnchor="end"
                height={60}
                interval="preserveStartEnd"
                tick={{fontSize: 10}}
              />
              <YAxis
                domain={[60, 110]}
                tick={{fontSize: 10}}
              />
              <ChartTooltip content={<ChartTooltipContent/>}/>
              <ReferenceLine y={100} label="Above 100" stroke="black" strokeDasharray="3 3"/>
              <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={off} stopColor="" stopOpacity={1}/>
                  <stop offset={off} stopColor="rgba(255, 0, 0, 0.2)" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="black"
                fill="url(#splitColor)"
                baseValue={100}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}