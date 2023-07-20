import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@chakra-ui/react";

export default function Bar() {
  return (
    <Box>
    <BarChart
      width={500}
      height={300}
      series={[
        {
          data: [
            400, 600, 800, 500, 1000, 1600, 466, 755, 150, 950, 630, 420, 850,
            1250, 750, 940,410,530,840,950,340
          ]
        },
      ]}
      xAxis={[
        {
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21,
          ],
          scaleType: "band",
        },
      ]}
    />
    </Box>
  );
}
