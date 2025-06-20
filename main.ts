import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { fetchCityData, fetchWeather } from "./src/weatherhelper";

const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

server.tool(
  "fetch-weather",
  {
    title: "Weather Fetcher",
    description: "Get weather data for a city",
    inputSchema: { city: z.string().describe("Name of the city") },
  },
  async ({ city }) => {
    const cityData = await fetchCityData(city);

    if (!cityData) {
      return {
        content: [
          {
            type: "text",
            text: `No location found or failed to fetch location data for ${city}.`,
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
            text: `Failed to fetch weather data for ${city}.`,
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

const transport = new StdioServerTransport();
await server.connect(transport);
