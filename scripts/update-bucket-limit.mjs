import { withDatabaseClient } from "./lib/env.mjs";

try {
  await withDatabaseClient(async (client) => {
    await client.query(
      "UPDATE storage.buckets SET file_size_limit = 10485760 WHERE id = 'catalog-images'"
    );
    console.log("Bucket limit updated to 10MB");
  });
} catch (error) {
  console.error("Bucket update failed:", error.message);
  process.exit(1);
}
