import { NextResponse } from "next/server";
import cars from "@/data/cars.json"

export async function GET() {
    const shortCars = cars["samochody"].map((car) => ({
        id: car.id,
        marka: car.marka,
        rok: car.rok
    }));

    return NextResponse.json(shortCars)
}