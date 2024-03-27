import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    numOfPersons:  {
        type: Number,
        required: true,
    },
    name:  {
        type: String,
        required: true,
    },
    phoneNum:  {
        type: String,
        required: true,
    },
    date:  {
        type: Date,
        required: true,
    },
    time:  {
        type: String,
        required: true,
    },
});


const Reservation = mongoose?.models?.Reservation || mongoose.model("Reservation", reservationSchema);

export default Reservation;