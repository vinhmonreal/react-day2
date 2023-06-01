import { useEffect, useState } from "react"
import CarList, { CarProps } from "../components/CarList"
import { useParams } from "react-router-dom"

const base_api_call = import.meta.env.VITE_API_URL


export default function CarListPage() {
    let  [cars, setCars] = useState<CarProps[]>([])
    const { carId } = useParams()
    
    useEffect(() => {
        (async () => {
            const response = await fetch(`${base_api_call}/${carId}`)
            const data = await response.json()
            setCars(data)
            console.log(data)
        }
        )()        
    }
    , [])

    return (
        <div>
            <h1>Car List Page</h1>
            <CarList {...cars} />   
        </div>
    )

}
//red wiggle but still works?!!