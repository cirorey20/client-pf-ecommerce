function ClientData({ user, setIsClientData, addressOrder }) {

    addressOrder = addressOrder.split(',');
    const province = addressOrder[0].split(':')
    const city = addressOrder[1].split(':')
    const locality = addressOrder[2].split(':')
    const streetNumber = addressOrder[3].split(':')
    const apartmentFloor = addressOrder[4].split(':')

    console.log(addressOrder)

    return (
        <div className="absolute w-[500px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-lg">

            <button className="bg-red-600 rounded px-2 absolute top-[6px] right-[6px]" onClick={() => setIsClientData(false)}>X</button>
            <div className="flex justify-center items-center h-full">
                <div className="text-xl">

                    <div>
                        <span className="font-bold">Name: </span>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <span className="font-bold">Last name: </span>
                        <span>{user.last_name}</span>
                    </div>
                    <div>
                        <span className="font-bold">Email: </span>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span className="font-bold">{province[0]}:</span>
                        <span>{province[1]}</span>
                    </div>
                    <div>
                        <span className="font-bold">{city[0]}: </span>
                        <span>{city[1]}</span>
                    </div>
                    <div>
                        <span className="font-bold">{locality[0]}: </span>
                        <span>{locality[1]}</span>
                    </div>
                    <div>
                        <span className="font-bold">{streetNumber[0]}: </span>
                        <span>{streetNumber[1]}</span>
                    </div>
                    <div>
                        <span className="font-bold">{apartmentFloor[0]}: </span>
                        <span>{apartmentFloor[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ClientData;