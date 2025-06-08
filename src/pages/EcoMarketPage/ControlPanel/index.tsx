import {useEffect, useState, FC} from "react";
import {ProductGender, ProductType} from "../../../app/models/generated";
import {fetchBrands, fetchGenders, fetchProductTypes} from "../../../api/products.ts";
import styles from './index.module.scss'

interface Props {
    setParameters: (newValue: any) => void
}

export const ControlPanel: FC<Props> = ({ setParameters}: Props) => {
    const [allGenders, setAllGenders] = useState<ProductGender[]>([])
    const [allProductTypes, setAllProductTypes] = useState<ProductType[]>([])
    const [allBrands, setAllBrands] = useState<object[]>([])

    useEffect(() => {
        Promise.allSettled([
            fetchGenders(setAllGenders),
            fetchProductTypes(setAllProductTypes),
            fetchBrands(setAllBrands)])
    }, [])

    return (
        <div className={styles.controlPanel}>
            Пол
            <ul>
                {allGenders.length > 0 ? allGenders.map((gender: ProductGender, index: number) =>
                    (<li key={`gender__${index}`}>
                        <label>{gender}
                            <input type="checkbox" value={gender}
                                   onChange={(e) => {
                                       setParameters(prev => ({
                                           ...prev,
                                           gender: e.target.checked ? gender : undefined
                                       }));
                                   }}
                            />
                        </label>
                    </li>)) : <p>Loading...</p>
                }
            </ul>
            <br/>
            Тип товара
            <ul>
                {allProductTypes.length > 0 ? allProductTypes.map((type: ProductType, index: number) =>
                    (<li key={`type__${index}`}>
                        <label>{type}
                            <input type="checkbox" value={type}
                                   onChange={(e) => {
                                       setParameters(prev => ({
                                           ...prev,
                                           type: e.target.checked ? type : undefined
                                       }));
                                   }}
                            />
                        </label>
                    </li>)
                ) : <p>Loading...</p>}
            </ul>
            <br/>
            Бренд
            <ul>
                {allBrands.length > 0 ? allBrands.map((brand: object, index: number) =>
                    (<li key={`type__${index}`}>
                        <label>{brand}
                            <input type="checkbox" value={brand}
                                   onChange={(e) => {
                                       setParameters(prev => ({
                                           ...prev,
                                           brand: e.target.checked ? brand : undefined
                                       }));
                                   }}
                            />
                        </label>
                    </li>)) : <p>Loading...</p>
                }
            </ul>
            <button className={styles.removeFilters__button}
                    onClick={() => {
                        setParameters({
                            gender: [],
                            type: [],
                            brand: []
                        })
                    }}
            >Сбросить фильтры
            </button>
        </div>
    )
}