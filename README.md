Here's an updated README tailored for the specific project and API key retrieval instructions:

---

# Template Project Setup

This project utilizes the `undb` platform for managing and retrieving schema data. To properly configure and run the project, you need to set up several environment variables. Follow the steps below to ensure everything is configured correctly.

## Undb template table Setup

You should setup a table in undb

## Environment Variables

### `PUBLIC_UNDB_HOST`

- **Description:** The URL of the `undb` instance where the schema will be retrieved from.
- **Default:** `http://localhost:3721`
- **Example:** `PUBLIC_UNDB_HOST=http://localhost:3721`

### `UNDB_TEMPLATE_BASE_NAME`

- **Description:** The name of the base in `undb` where the templates are stored.
- **Default:** `templates`
- **Example:** `UNDB_TEMPLATE_BASE_NAME=templates`

### `UNDB_TEMPLATE_TABLE_NAME`

- **Description:** The name of the table within the base that contains the template schema.
- **Default:** `templates`
- **Example:** `UNDB_TEMPLATE_TABLE_NAME=templates`

### `UNDB_API_KEY`

- **Description:** The API key used to authenticate requests to the `undb` instance.
- **Required:** Yes
- **Instructions to Obtain:**
  1. Navigate to your `undb` instance.
  2. Go to the **Developer** tab under the space you want to use.
  3. Create a new API token if you don't already have one.
  4. Copy the API key and set it in your `.env` file.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/undb-io/template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd template
   ```

3. Create a `.env` file in the root of your project and add the required environment variables:

   ```bash
   echo "PUBLIC_UNDB_HOST=http://localhost:3721" >> .env
   echo "UNDB_TEMPLATE_BASE_NAME=templates" >> .env
   echo "UNDB_TEMPLATE_TABLE_NAME=templates" >> .env
   echo "UNDB_API_KEY=your_api_key_here" >> .env
   ```

4. Start the development server:
   ```bash
   bun install
   bun run dev
   ```

## Additional Notes

- Ensure that the `undb` instance is running and accessible at the specified `PUBLIC_UNDB_HOST`.
- The API key (`UNDB_API_KEY`) must be obtained from your `undb` instance and should have the necessary permissions to access the schema in the specified base and table.

---

This README should guide users through the process of setting up and running the project, including retrieving the necessary API key from their `undb` instance.
