import { NextResponse } from "next/server";
import cars from "@/data/cars.json"

export async function GET() {
    const shortCars = cars["samochody"].map((car) => ({
        id: car.id,
        marka: car.marka,
        rok: car.rok,
        miniatura: car.miniatura,
        cena: car.cena,
        przebieg: car.przebieg,
        model: car.model
    }));

    return NextResponse.json(shortCars)
}