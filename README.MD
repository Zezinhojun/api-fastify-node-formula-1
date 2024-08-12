# Formula 1 API

## Description

The Formula 1 API provides endpoints to manage and retrieve information about Formula 1 teams and drivers. The API is implemented using Node.js and Fastify, offering HTTP endpoints to interact with F1 data.

## Data Structure

The API interacts with data that might be represented in the following JSON format:

### Teams Data

```json
[
    {
        "teamName": "Red Bull Racing",
        "teamPrincipal": "Christian Horner",
        "nationality": "UK"
    },
    {
        "teamName": "Mercedes-AMG Petronas",
        "teamPrincipal": "Toto Wolff",
        "nationality": "Germany"
    }
]
```

### Drivers Data

```json
[
    {
        "driverName": "Max Verstappen",
        "team": "Red Bull Racing",
        "nationality": "Netherlands"
    },
    {
        "driverName": "Lewis Hamilton",
        "team": "Mercedes-AMG Petronas",
        "nationality": "UK"
    }
]
```

Each team object contains:
- `teamName`: Name of the team.
- `teamPrincipal`: Principal of the team.
- `nationality`: Nationality of the team.

Each driver object contains:
- `driverName`: Name of the driver.
- `team`: Team of the driver.
- `nationality`: Nationality of the driver.

## Endpoints

### 1. Get Teams

**Endpoint:** `/teams`

**Method:** GET

**Description:** Returns a list of all Formula 1 teams.

### 2. Get Drivers

**Endpoint:** `/drivers`

**Method:** GET

**Description:** Returns a list of all Formula 1 drivers.

### 3. Get Driver

**Endpoint:** `/drivers:id`

**Method:** GET

**Description:** Returns details of a specific Formula 1 driver based on a provided query parameter.

## Technologies Used

- **[Node.js](https://nodejs.org/):** JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[Fastify](https://fastify.dev/):** High-performance web framework for Node.js.
- **[@fastify/cors](https://github.com/fastify/fastify-cors):** Fastify plugin for enabling Cross-Origin Resource Sharing (CORS).
- **[TypeScript](https://www.typescriptlang.org/):** Superset of JavaScript that adds static typing and other features.
- **[Tsup](https://tsup.egoist.dev/):** Build tool for compiling TypeScript code to JavaScript.
- **[TSX](https://tsx.dev/):** Tool for running and developing TypeScript projects.
- **[@types/node](https://www.npmjs.com/package/@types/node):** TypeScript type definitions for Node.js.

## Running the Project

1. **Install Dependencies**

   Run the following command to install project dependencies:

   ```bash
   npm install
   ```

2. **Start the Server**

   Run the following command to start the server in development mode:

   ```bash
   npm run start:dev
   ```

3. **Test the API**

   Use tools like Postman or cURL to test the API endpoints:

   - List teams: `GET http://localhost:3000/teams`
   - List drivers: `GET http://localhost:3000/drivers`
   - Get a specific driver: `GET http://localhost:3000/driver/id`

## Contributing

Feel free to open issues or submit pull requests to contribute improvements to this project.

## License

This project is licensed under the [MIT License](LICENSE).