"use client";
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react'
import { addReservation } from '@/lib/actions/reservation.actions';
import Confirmation from './confirmation';
import FormInput from './ui/forminput';

const ReserveForm = () => {
    const router = useRouter();

    const today = new Date(Date.now());
    let dd = (today.getDate() + 1 < 10) ? '0' + (today.getDate() + 1) : today.getDate() + 1;
    let mm = (today.getMonth() + 1 < 10) ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    let yyyy = today.getFullYear();

    const [numOfPersons, setNumOfPersons] = useState(0);
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [date, setDate] = useState(`${yyyy}-${mm}-${dd}`);
    const [time, setTime] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError(null)
        if (name.length <= 0 || numOfPersons <= 0 || phoneNum.length <= 0 || date.length <= 0 || time.length <= 0) {
            setError('Please fill up the form')
            reset()
            return
        }
        else {
            await addReservation({
                id: `${Date.now().toString()}-${name}`,
                name,
                numOfPersons,
                phoneNum,
                date,
                time,
            })
            setConfirmed(true)
        }
   
    }
    const reset = () => {
        setNumOfPersons(0);
        setName('');
        setPhoneNum('');
        setDate('');
        setTime('');
        setConfirmed(false)
    };


    const onSelect = (e: any) => {
        const value = e.target.value;
        setTime(value);
    };

    return (
        <div className='flex items-center mx-auto'>
            {
                confirmed ? (
                    <div className='flex flex-col gap-2'>
                        <Confirmation info={{ name: name, numOfPersons: numOfPersons }} />
                        <button className='bg-white-1 text-black-1 border-[1px] border-black-2 px-[1rem] py-[.8rem] rounded-md shadow-sm hover:-translate-y-[.1rem]'
                            onClick={reset}
                        >
                            <p className='font-bold uppercase text-[0.8rem]'>Make another Reservation</p>
                        </button>
                    </div>

                ) :
                    <form className='flex items-center mx-auto'>
                        <div className='flex flex-col items-start lg:items-center'>
                            <p className='text-xs font-extralight my-0 mb-[2rem] text-center'>(We do not accept same day reservations at this time)</p>
                            <div className='flex flex-col lg:flex-row gap-2 lg:gap-[2rem] mb-[2rem]'>
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
                            <div className='flex flex-col lg:flex-row items-start lg:items-end justify-between gap-2 lg:gap-[3rem] mb-[2rem]'>
                                <FormInput
                                    type='number'
                                    title='No. of Persons'
                                    optionalClassName='min-w-[20rem] lg:min-w-[3rem]'
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
                                <div className="flex flex-col ">
                                    <p className='paragraph-2 font-medium'>Time</p>
                                    <select
                                        name="time"
                                        id="time"
                                        value={time}
                                        className='bg-grey-1 px-2 py-1'
                                        onChange={(e) => onSelect(e)}
                                    >
                                        <option value="9:00AM">9:00AM</option>
                                        <option value="9:30AM">9:30AM</option>
                                        <option value="10:00AM">10:00AM</option>
                                        <option value="10:30AM">10:30AM</option>
                                        <option value="11:00AM">11:00AM</option>
                                        <option value="11:30AM">11:30AM</option>
                                        <option value="12:00PM">12:00PM</option>
                                        <option value="12:30PM">12:30PM</option>
                                        <option value="1:00PM">1:00PM</option>
                                        <option value="1:30PM">1:30PM</option>
                                        <option value="2:00PM">2:00PM</option>
                                        <option value="2:30PM">2:30PM</option>
                                        <option value="3:00PM">3:00PM</option>
                                    </select>
                                </div>
                            </div>

                            <button className={`bg-white-1 text-black-1 border-[1px] border-black-2 px-[1rem] py-[.8rem] rounded-md shadow-sm hover:-translate-y-[.1rem] ${error && 'shake'}`}
                                onClick={(e) => onSubmit(e)}
                            >
                                <p className='font-bold uppercase text-[0.8rem]'>Confirm Reservation</p>
                            </button>

                            {error &&  <p className='text-red-600 mt-4'>{error}</p>}

                        </div>

                    </form>

            }


        </div>
    )
}

export default ReserveForm