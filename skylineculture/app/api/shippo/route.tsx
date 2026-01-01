import { NextResponse } from "next/server";
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: process.env.SHIPPO_API_KEY_TEST!,
});

const lbToKg = (lb: number) => lb * 0.453592;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.totalWeightLb == null) {
      throw new Error("Missing totalWeightLb");
    }

    const weightKg = Math.max(
      0.25,
      lbToKg(body.totalWeightLb)
    ).toFixed(2);

    const shipment = await shippo.shipments.create({
      addressFrom: {
        name: "SkylineCulture",
        street1: "70 Coho Drive",
        city: "Whitby",
        state: "NY",
        zip: "10001",
        country: "US",
        email: "info@skylineculture.com",
      },

      addressTo: {
        name: `${body.address.firstName} ${body.address.lastName}`,
        street1: body.address.address1,
        city: body.address.city,
        state: body.address.state,
        zip: body.address.postalCode,
        country: "US",
        email: body.address.email,
      },

      parcels: [
        {
          length: "25",
          width: "20",
          height: "10",
          distanceUnit: "cm",
          weight: weightKg,
          massUnit: "kg",
        },
      ],

      async: false,
    });

    return NextResponse.json(shipment.rates);
  } catch (err: any) {
    console.error("❌ Shippo error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
