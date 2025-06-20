import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { fetchCityData, fetchWeather } from "./src/weatherhelper";

// 1. MCP Server definition
const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

// 2. Tool definition
server.tool(
  "fetch-weather",
  "Get weather data for a city",
  {
    city: z
      .string()
      .describe(
        "The name of the city for which the weather data is requested. This should be a valid city name recognized by the location service.",
      ),
  },
  async ({ city }) => {
    const cityData = await fetchCityData(city);

    if (!cityData) {
      return {
        content: [
          {
            type: "text",
            text: `No location found or failed to fetch location data for ${city}. Please check the city name and try again.`,
          },
        ],
      };
    }

    const weatherData = await fetchWeather(
      cityData.latitude,
      cityData.longitude,
    );

    if (!weatherData) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to fetch weather data for ${city}. Please try again later or check your network connection.`,
          },
        ],
      };
    }

    // The LLM will interpret the data
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(weatherData, null, 2),
        },
      ],
    };
  },
);

// 3. Connection via transoprt
// since is local we use stdio
const transport = new StdioServerTransport();
await server.connect(transport);
