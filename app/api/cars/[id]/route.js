import { NextResponse } from "next/server";
import cars from "@/data/cars.json"

export async function GET(request, { params }) {
    const { id }  = await params;
    const car = cars["samochody"].find((car) => car.id == id);

    if(!car){
        return NextResponse.json(
            {error: "Nie ma samochodu o tym id"},
            {status: 404}
        )
    }

    return NextResponse.json(car);
}
