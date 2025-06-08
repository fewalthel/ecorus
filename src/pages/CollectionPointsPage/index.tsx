import {MapComponent} from "./MapComponent";
import styles from './index.module.scss'
import {useEffect, useState} from "react";
import {useAppContext} from "../../AppContext";
import axiosConfig from "../../axiosConfig";
import {StoreEntity} from "../../app/models/generated";

export type CollectionPoint = Omit<StoreEntity, 'city'>

export const CollectionPointsPage = () => {
    const [pointsList, setPointsList] = useState<CollectionPoint[]>([])
    const {city} = useAppContext()

    const fetchPoints = async () => {
        try {
            const response = await axiosConfig.get(`/api/cities/${city?.id}/stores`)
            setPointsList(response.data)
            console.log('POINTS: ' + response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPoints
    }, []);

    useEffect(() => {
        fetchPoints
    }, [city]);


    return (
        <div className={styles.container}>
            <div style={{
                display: 'flex', justifyContent: 'space-between', background: 'none', position: 'absolute',
                top: '3vw', left: '12.5vw', zIndex: '12345', width: '75vw'
            }}>
                <div style={{
                    borderRadius: '0.5vw', boxShadow: '0 0.125vw #152D671F',
                    background: 'white', width: '37.5vw', display: 'flex', alignItems: 'center'
                }}>
                    <img style={{marginLeft: '1vw'}} src="/icons/search_icon.svg"/>
                    <input type="text" style={{
                        border: 'none', padding: '0.5vw 1.25vw 0.5vw 1vw', width: '90%',
                        outline: 'none'
                    }} placeholder="Поиск"/>
                </div>
                <select style={{
                    width: '17.5vw',
                    border: 'none',
                    background: 'white',
                    boxShadow: '0 0.125vw #152D671F'
                }}> Магазины
                    <option>H&M</option>
                    <option>P&B</option>
                    <option>Adidas</option>
                </select>
                <select style={{width: '17.5vw'}}> Материалы
                    <option>H&M</option>
                    <option>P&B</option>
                    <option>Adidas</option>
                </select>
            </div>
            <MapComponent style={{position: 'relative'}} markers={pointsList}/>
        </div>
    )
}