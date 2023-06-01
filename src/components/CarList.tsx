
export interface CarProps {
    id: number,
    name: string,
    year: number,
    selling_price: number,
    km_driven: number,
    fuel: string,
    seller_type: string,
    transmission: string,
    owner: string,
    mileage: string,
    engine: string,
    max_power: string,
    torque: string,
    seats: number,
}

export default function CarList(props:CarProps) {

    return (
            <div className="cake-item">
                <h3>Name: {props.name}</h3>
                <p>Id: {props.id}</p>
                <p>Year: {props.year}</p>
                <p>Selling Price: {props.selling_price}</p>
                <p>Km Driven: {props.km_driven}</p>
                <p>Fuel: {props.fuel}</p>
                <p>Seller Type: {props.seller_type}</p>
                <p>Transmission: {props.transmission}</p>
                <p>Owner: {props.owner}</p>
                <p>Mileage: {props.mileage}</p>
                <p>Engine: {props.engine}</p>
                <p>Max Power: {props.max_power}</p>
                <p>Torque: {props.torque}</p>
                <p>Seats: {props.seats}</p>
            </div>
    )
}