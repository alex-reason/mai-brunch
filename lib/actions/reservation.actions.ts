"use server"
import { revalidatePath } from "next/cache";
import { connectToDB } from "@/lib/mongoose";
import Reservation from "@/lib/models/reservation.model";

interface ReservationActionAddParams {
    id: string,
    name: string,
    numOfPersons: number,
    phoneNum: string,
    date: string,
    time: string
};

export async function addReservation({
    id,
    name,
    numOfPersons,
    phoneNum,
    date,
    time
}: ReservationActionAddParams): Promise<void> {
    try {
        connectToDB();
         await Reservation.create({
            id,
            name,
            numOfPersons,
            phoneNum,
            date,
            time,
        });

    } catch (error: any) {
        console.log(`Failed to create reservation: ${error.message}`);
    }
};
