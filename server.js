import { FastMCP } from 'fastmcp';
import { z } from 'zod';

// Initialize the FastMCP server with basic metadata
const server = new FastMCP({
  name: 'fast-mcp',
  version: '0.1.0',
});

// Define a simple tool that adds two numbers
server.addTool({
  name: 'add',
  description: 'Add two numbers',
  parameters: z.object({
    a: z.number(),
    b: z.number(),
  }),
  async execute(args) {
    return args.a + args.b;
  },
});

// Start the server using standard input/output transport
server.start({ transportType: 'stdio' });
