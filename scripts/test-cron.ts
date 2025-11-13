// scripts/test-cron.ts
// Run with: npx ts-node scripts/test-cron.ts

const CRON_SECRET =
  process.env.CRON_SECRET || "xK9mN2pQ5vR8wB3fH7jL4sT6yU1aE0cD";
const BASE_URL = "http://localhost:3000";

async function testCron() {
  try {
    const response = await fetch(`${BASE_URL}/api/cron/check-paid-orders`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${CRON_SECRET}`,
      },
    });

    const data = await response.json();
    console.log("Response:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run once
testCron();

// Or run every minute (for testing)
// setInterval(testCron, 60000);
