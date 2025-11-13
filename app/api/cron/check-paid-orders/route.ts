import { NextRequest, NextResponse } from "next/server";

const orders = [
  {
    id: "a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d",
    patient_id: "p1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c",
    provider_id: "pr1a2b3c-d4e5-4f6a-7b8c-9d0e1f2a3b4c",
    practice_id: "pc1a2b3c-d4e5-4f6a-7b8c-9d0e1f2a3b4c",
    status: "PAID",
    total_price_cents: 12500,
    order_date: "2025-11-13T10:00:00.000Z",
    created_at: "2025-11-13T09:00:00.000Z",
    updated_at: "2025-11-13T10:00:00.000Z",
  },
  {
    id: "d4e5f6a7-b8c9-4d5e-1f2a-4b5c6d7e8f9a",
    patient_id: "p2b3c4d5-e6f7-4a8b-9c0d-1e2f3a4b5c6d",
    provider_id: "pr2b3c4d-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    practice_id: "pc2b3c4d-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    status: "PAID",
    total_price_cents: 8750,
    order_date: "2025-11-13T07:00:00.000Z",
    created_at: "2025-11-13T06:00:00.000Z",
    updated_at: "2025-11-13T07:00:00.000Z",
  },
  {
    id: "a7b8c9d0-e1f2-4a5b-4c5d-7e8f9a0b1c2d",
    patient_id: "p3c4d5e6-f7a8-4b9c-0d1e-2f3a4b5c6d7e",
    provider_id: "pr3c4d5e-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
    practice_id: "pc3c4d5e-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
    status: "PAID",
    total_price_cents: 15000,
    order_date: "2025-11-12T12:00:00.000Z",
    created_at: "2025-11-12T12:00:00.000Z",
    updated_at: "2025-11-12T12:00:00.000Z",
  },
  {
    id: "d0e1f2a3-b4c5-4d5e-7f8a-0b1c2d3e4f5a",
    patient_id: "p4d5e6f7-a8b9-4c0d-1e2f-3a4b5c6d7e8f",
    provider_id: "pr4d5e6f-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
    practice_id: "pc4d5e6f-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
    status: "PAID",
    total_price_cents: 22000,
    order_date: "2025-11-13T00:00:00.000Z",
    created_at: "2025-11-12T23:00:00.000Z",
    updated_at: "2025-11-13T00:00:00.000Z",
  },
  {
    id: "a3b4c5d6-e7f8-4a5b-0c1d-3e4f5a6b7c8d",
    patient_id: "p5e6f7a8-b9c0-4d1e-2f3a-4b5c6d7e8f9a",
    provider_id: "pr5e6f7a-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
    practice_id: "pc5e6f7a-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
    status: "PAID",
    total_price_cents: 9500,
    order_date: "2025-11-13T11:30:00.000Z",
    created_at: "2025-11-13T11:00:00.000Z",
    updated_at: "2025-11-13T11:30:00.000Z",
  },
  {
    id: "f8a9b0c1-d2e3-4f5a-3b4c-6b7c8d9e0f1a",
    patient_id: "p6f7a8b9-c0d1-4e2f-3a4b-5c6d7e8f9a0b",
    provider_id: "pr6f7a8b-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
    practice_id: "pc6f7a8b-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
    status: "DRAFT",
    total_price_cents: null,
    order_date: null,
    created_at: "2025-11-13T11:50:00.000Z",
    updated_at: "2025-11-13T11:50:00.000Z",
  },
  {
    id: "c1d2e3f4-a5b6-4c5d-6e7f-9e0f1a2b3c4d",
    patient_id: "p7a8b9c0-d1e2-4f3a-4b5c-6d7e8f9a0b1c",
    provider_id: "pr7a8b9c-d0e1-4f2a-3b4c-5d6e7f8a9b0c",
    practice_id: "pc7a8b9c-d0e1-4f2a-3b4c-5d6e7f8a9b0c",
    status: "DRAFT",
    total_price_cents: null,
    order_date: null,
    created_at: "2025-11-13T11:55:00.000Z",
    updated_at: "2025-11-13T11:55:00.000Z",
  },
  {
    id: "f4a5b6c7-d8e9-4f5a-9b0c-2b3c4d5e6f7a",
    patient_id: "p8b9c0d1-e2f3-4a4b-5c6d-7e8f9a0b1c2d",
    provider_id: "pr8b9c0d-e1f2-4a3b-4c5d-6e7f8a9b0c1d",
    practice_id: "pc8b9c0d-e1f2-4a3b-4c5d-6e7f8a9b0c1d",
    status: "DRAFT",
    total_price_cents: null,
    order_date: null,
    created_at: "2025-11-13T10:00:00.000Z",
    updated_at: "2025-11-13T10:00:00.000Z",
  },
  {
    id: "c7d8e9f0-a1b2-4c5d-2e3f-5e6f7a8b9c0d",
    patient_id: "p9c0d1e2-f3a4-4b5c-6d7e-8f9a0b1c2d3e",
    provider_id: "pr9c0d1e-f2a3-4b4c-5d6e-7f8a9b0c1d2e",
    practice_id: "pc9c0d1e-f2a3-4b4c-5d6e-7f8a9b0c1d2e",
    status: "PROCESSING_PAYMENT",
    total_price_cents: 18500,
    order_date: "2025-11-13T11:45:00.000Z",
    created_at: "2025-11-13T11:40:00.000Z",
    updated_at: "2025-11-13T11:45:00.000Z",
  },
  {
    id: "f0a1b2c3-d4e5-4f5a-5b6c-8b9c0d1e2f3a",
    patient_id: "p10d1e2f-a3b4-4c5d-6e7f-8a9b0c1d2e3f",
    provider_id: "pr10d1e2-a3b4-4c5d-6e7f-8a9b0c1d2e3f",
    practice_id: "pc10d1e2-a3b4-4c5d-6e7f-8a9b0c1d2e3f",
    status: "PROCESSING_PAYMENT",
    total_price_cents: 11200,
    order_date: "2025-11-13T11:52:00.000Z",
    created_at: "2025-11-13T11:50:00.000Z",
    updated_at: "2025-11-13T11:52:00.000Z",
  },
  {
    id: "c3d4e5f6-a7b8-4c5d-8e9f-1e2f3a4b5c6d",
    patient_id: "p11e2f3a-b4c5-4d6e-7f8a-9b0c1d2e3f4a",
    provider_id: "pr11e2f3-b4c5-4d6e-7f8a-9b0c1d2e3f4a",
    practice_id: "pc11e2f3-b4c5-4d6e-7f8a-9b0c1d2e3f4a",
    status: "SENDING_TO_PHARMACY",
    total_price_cents: 14000,
    order_date: "2025-11-11T12:00:00.000Z",
    created_at: "2025-11-11T12:00:00.000Z",
    updated_at: "2025-11-12T12:00:00.000Z",
  },
  {
    id: "f6a7b8c9-d0e1-4f5a-1b2c-4b5c6d7e8f9a",
    patient_id: "p12f3a4b-c5d6-4e7f-8a9b-0c1d2e3f4a5b",
    provider_id: "pr12f3a4-c5d6-4e7f-8a9b-0c1d2e3f4a5b",
    practice_id: "pc12f3a4-c5d6-4e7f-8a9b-0c1d2e3f4a5b",
    status: "SENDING_TO_PHARMACY",
    total_price_cents: 19800,
    order_date: "2025-11-12T18:00:00.000Z",
    created_at: "2025-11-12T17:00:00.000Z",
    updated_at: "2025-11-12T18:00:00.000Z",
  },
  {
    id: "c9d0e1f2-a3b4-4c5d-4e5f-7e8f9a0b1c2d",
    patient_id: "p13a4b5c-d6e7-4f8a-9b0c-1d2e3f4a5b6c",
    provider_id: "pr13a4b5-d6e7-4f8a-9b0c-1d2e3f4a5b6c",
    practice_id: "pc13a4b5-d6e7-4f8a-9b0c-1d2e3f4a5b6c",
    status: "PREPARING_AT_PHARMACY",
    total_price_cents: 16500,
    order_date: "2025-11-10T12:00:00.000Z",
    created_at: "2025-11-10T12:00:00.000Z",
    updated_at: "2025-11-11T12:00:00.000Z",
  },
  {
    id: "f2a3b4c5-d6e7-4f5a-7b8c-0b1c2d3e4f5a",
    patient_id: "p14b5c6d-e7f8-4a9b-0c1d-2e3f4a5b6c7d",
    provider_id: "pr14b5c6-e7f8-4a9b-0c1d-2e3f4a5b6c7d",
    practice_id: "pc14b5c6-e7f8-4a9b-0c1d-2e3f4a5b6c7d",
    status: "PREPARING_AT_PHARMACY",
    total_price_cents: 13700,
    order_date: "2025-11-09T12:00:00.000Z",
    created_at: "2025-11-09T12:00:00.000Z",
    updated_at: "2025-11-10T12:00:00.000Z",
  },
  {
    id: "c5d6e7f8-a9b0-4c5d-0e1f-3e4f5a6b7c8d",
    patient_id: "p15c6d7e-f8a9-4b0c-1d2e-3f4a5b6c7d8e",
    provider_id: "pr15c6d7-f8a9-4b0c-1d2e-3f4a5b6c7d8e",
    practice_id: "pc15c6d7-f8a9-4b0c-1d2e-3f4a5b6c7d8e",
    status: "SHIPPED",
    total_price_cents: 21000,
    order_date: "2025-11-06T12:00:00.000Z",
    created_at: "2025-11-06T12:00:00.000Z",
    updated_at: "2025-11-08T12:00:00.000Z",
  },
  {
    id: "f8a9b0c1-d2e3-4f5a-3b4c-6b7c8d9e0f1b",
    patient_id: "p16d7e8f-a9b0-4c1d-2e3f-4a5b6c7d8e9f",
    provider_id: "pr16d7e8-a9b0-4c1d-2e3f-4a5b6c7d8e9f",
    practice_id: "pc16d7e8-a9b0-4c1d-2e3f-4a5b6c7d8e9f",
    status: "SHIPPED",
    total_price_cents: 17500,
    order_date: "2025-11-03T12:00:00.000Z",
    created_at: "2025-11-03T12:00:00.000Z",
    updated_at: "2025-11-04T12:00:00.000Z",
  },
  {
    id: "c1d2e3f4-a5b6-4c5d-6e7f-9e0f1a2b3c4e",
    patient_id: "p17e8f9a-b0c1-4d2e-3f4a-5b6c7d8e9f0a",
    provider_id: "pr17e8f9-b0c1-4d2e-3f4a-5b6c7d8e9f0a",
    practice_id: "pc17e8f9-b0c1-4d2e-3f4a-5b6c7d8e9f0a",
    status: "SHIPPED",
    total_price_cents: 24500,
    order_date: "2025-10-30T12:00:00.000Z",
    created_at: "2025-10-30T12:00:00.000Z",
    updated_at: "2025-11-01T12:00:00.000Z",
  },
  {
    id: "f4a5b6c7-d8e9-4f5a-9b0c-2b3c4d5e6f7b",
    patient_id: "p18f9a0b-c1d2-4e3f-4a5b-6c7d8e9f0a1b",
    provider_id: "pr18f9a0-c1d2-4e3f-4a5b-6c7d8e9f0a1b",
    practice_id: "pc18f9a0-c1d2-4e3f-4a5b-6c7d8e9f0a1b",
    status: "CANCELLED",
    total_price_cents: 10500,
    order_date: "2025-11-08T12:00:00.000Z",
    created_at: "2025-11-07T12:00:00.000Z",
    updated_at: "2025-11-08T12:00:00.000Z",
  },
  {
    id: "c7d8e9f0-a1b2-4c5d-2e3f-5e6f7a8b9c0e",
    patient_id: "p19a0b1c-d2e3-4f4a-5b6c-7d8e9f0a1b2c",
    provider_id: "pr19a0b1-d2e3-4f4a-5b6c-7d8e9f0a1b2c",
    practice_id: "pc19a0b1-d2e3-4f4a-5b6c-7d8e9f0a1b2c",
    status: "CANCELLED",
    total_price_cents: 7800,
    order_date: "2025-11-05T12:00:00.000Z",
    created_at: "2025-11-04T12:00:00.000Z",
    updated_at: "2025-11-05T12:00:00.000Z",
  },
  {
    id: "f0a1b2c3-d4e5-4f5a-5b6c-8b9c0d1e2f3b",
    patient_id: "p20b1c2d-e3f4-4a5b-6c7d-8e9f0a1b2c3d",
    provider_id: "pr20b1c2-e3f4-4a5b-6c7d-8e9f0a1b2c3d",
    practice_id: "pc20b1c2-e3f4-4a5b-6c7d-8e9f0a1b2c3d",
    status: "CANCELLED",
    total_price_cents: 6500,
    order_date: "2025-10-29T12:00:00.000Z",
    created_at: "2025-10-28T12:00:00.000Z",
    updated_at: "2025-10-29T12:00:00.000Z",
  },
];

export async function GET(request: NextRequest) {
  try {
    // Verify the request is from a cron job (optional but recommended)
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Query orders with PAID status
    const paidOrders = orders.filter((order) => order.status === "PAID");

    // Log the order IDs
    if (paidOrders.length > 0) {
      console.log("=== PAID ORDERS CHECK ===");
      console.log(
        `Found ${paidOrders.length} paid orders at ${new Date().toISOString()}`
      );

      paidOrders.forEach((order, index) => {
        console.log(`${index + 1}. Order ID: ${order.id}`);
      });

      console.log("========================");
    } else {
      console.log(`No paid orders found at ${new Date().toISOString()}`);
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      ordersFound: paidOrders.length,
      orderIds: paidOrders.map((order) => order.id),
    });
  } catch (error) {
    console.error("Error checking paid orders:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Disable body parsing and set runtime to edge (optional, for better performance)
export const runtime = "edge"; // or 'nodejs'
export const dynamic = "force-dynamic";
