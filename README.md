# Hono REST API

This is a sample REST API built with Hono, a lightweight and fast web framework for the edge.

## Technologies Used

- **Hono:** A small, simple, and ultrafast web framework for the Edge.
- **Drizzle ORM:** A TypeScript ORM for SQL databases.
- **PostgreSQL:** A powerful, open source object-relational database system.
- **Better Auth:** A flexible and secure authentication library.
- **Zod:** A TypeScript-first schema declaration and validation library.
- **Resend:** An email API for developers.
- **Bun:** A fast all-in-one JavaScript runtime.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies:
   ```sh
   bun install
   ```
3. Create a `.env` file from the `.env.example` and add your environment variables.

## Running the application

1. Start the database:
   ```sh
   bun run db:up
   ```
2. Run the application:
   ```sh
   bun run dev
   ```

The application will be available at `http://localhost:3000`.

## Database Migrations

- To generate a migration:
  ```sh
  bun run db:generate:migration
  ```
- To apply migrations:
  ```sh
  bun run db:migrate
  ```
- To open the database studio:
  ```sh
  bun run db:studio
  ```

## API Documentation

To view the API documentation, run the application and go to `http://localhost:3000/api/auth/reference`.