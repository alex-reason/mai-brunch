interface InfoParams {
    info: {
       name: string,
       numOfPersons: number
    }

};

const Confirmation = ({ info }: InfoParams) => {
    return (
        <div>
            <p>Reservation for {info.numOfPersons} for {info.name} confirmed!</p>
        </div>
    )
}

export default Confirmation