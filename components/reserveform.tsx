"use client";
import { useState, FormEvent, ChangeEvent } from 'react'
import FormInput from './ui/forminput'

const ReserveForm = () => {
    const today = new Date(Date.now());
    let dd = (today.getDate() + 1 < 10) ? '0' + (today.getDate() + 1) : today.getDate() + 1;
    let mm = (today.getMonth() + 1 < 10) ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    let yyyy = today.getFullYear();
    // const getColonTimeFromDate = (date: Date) => date.toTimeString().slice(0, 8);
    // let currTime = getColonTimeFromDate(new Date()).slice(0, 5);

    const [numOfPersons, setNumOfPersons] = useState(0);
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [date, setDate] = useState(`${yyyy}-${mm}-${dd}`);
    const [time, setTime] = useState('');

    return (
        <form className='flex items-center mx-auto'>
            <div className='flex flex-col items-center'>
                <p className='text-xs font-extralight my-0 mb-[2rem]'>(We do not accept same day reservations at this time)</p>
                <div className='flex gap-[2rem] mb-[2rem]'>
                    <FormInput
                        type='text'
                        title='Name'
                        optionalClassName='min-w-[20rem]'
                        value={name}
                        handleChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                    <FormInput
                        type='tel'
                        title='Phone number (xxx-xxx-xxxx)'
                        optionalClassName='min-w-[20rem]'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={phoneNum}
                        handleChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNum(e.target.value)}
                    />

                </div>
                <div className='flex items-end justify-between gap-[3rem] mb-[2rem]'>
                    <FormInput
                        type='number'
                        title='No. of Persons'
                        optionalClassName='min-w-[3rem]'
                        min="1" max="8"
                        value={numOfPersons}
                        handleChange={(e: ChangeEvent<HTMLInputElement>) => setNumOfPersons(parseInt(e.target.value))}
                    />
                    <FormInput
                        type='date'
                        title='Date'
                        optionalClassName='min-w-[15rem]'
                        min={`${yyyy}-${mm}-${dd}`}
                        value={date}
                        handleChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                    />

                    <FormInput
                        type='time'
                        title='Time (PST)'
                        optionalClassName='min-w-[15rem]'
                        min="09:00" max="19:00"
                        value={time}
                        handleChange={(e: ChangeEvent<HTMLInputElement>) => setTime(e.target.value)}
                    />
                </div>
                <p className='mb-[2rem]'>Name:{name} {phoneNum} for {numOfPersons} persons on {date} {time}</p>

                <button className='bg-white-1 text-black-1 border-[1px] border-black-2 px-[1rem] py-[.8rem] rounded-md shadow-sm hover:-translate-y-[.1rem]'>
                    <p className='font-bold uppercase text-[0.8rem]'>Confirm Reservation</p>
                </button>

            </div>

        </form>
    )
}

export default ReserveForm