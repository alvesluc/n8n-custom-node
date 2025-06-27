# Custom n8n Nodes Bootstrapper

This project is a custom nodes bootstrapper for [n8n](https://n8n.io), generated from the [n8n-io/n8n-nodes-starter](https://github.com/n8n-io/n8n-nodes-starter) template. It provides a foundation for building, testing, and running your own n8n nodes locally, with Docker support for easy development.

## Included Custom Node Example

- **NASA Pics**: Fetches data from NASA's public APIs, including Astronomy Picture of the Day (APOD) and Mars Rover Photos.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher) and [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm i
   ```

2. **Update `package.json` for local Docker use:**
   - Change the following fields to match your custom node:
     - `name` (should be `n8n-nodes-<your-package-name>`)
     - `description`
     - `homepage`
     - `author`
     - `repository`
     - `n8n.credentials` (if your node uses credentials)
     - `n8n.nodes`

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Link the package locally:**
   ```bash
   npm link
   ```

5. **Ensure the init script is executable:**
   ```bash
   chmod +x init-data.sh
   ```

6. **Start Docker services in detached mode:**
   ```bash
   npm run services:detached
   ```

This will build your custom nodes and make them available for local development and testing with n8n via Docker.

---

For more details on creating and publishing n8n nodes, see the [n8n documentation](https://docs.n8n.io/integrations/creating-nodes/).

[MIT License](LICENSE.md)
