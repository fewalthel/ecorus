import {ControlPanel} from "./ControlPanel";
import {SortsButtonsPanel} from "./SortsButtonsPanel";
import {useEffect, useState} from "react";
import {ProductType} from "../../app/models/generated";
import styles from './index.module.scss'
import {ProductCard} from "./ProductCard";
import {fetchProducts, ParametersData} from "@api/products";

export interface Product {
    name: string
    type: ProductType
    price: number
    id: number
}

export const EcoMarketPage = () => {
    const [productsList, setProductsList] = useState<Product[]>([])
    const [sortBy, setSortBy] = useState<string>('')

    const [parameters, setParameters] = useState<ParametersData>({
        gender: [],
        type: [],
        brand: [],
        limit: 123456,
        offset: 0
    })

    useEffect(() => {
        if (sortBy === 'price') {
            let newArr = [...productsList]
            setProductsList(newArr.sort((a, b) => a.price - b.price))
        }
        if (sortBy === 'new') {
            let newArr = [...productsList]
            setProductsList(newArr.sort((a, b) => b.id - a.id)
            )
        }
    }, [sortBy])

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetchProducts(parameters);
                setProductsList(resp.list)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [parameters]);

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetchProducts({})
                setProductsList(resp.list)
                console.log(resp.list)
            } catch (error) {
                console.error(error)
            }
        })()
    }, []);

    return (<>
            <div className={styles.topContainer}>
                <h1>Экомаркет</h1>
                <SortsButtonsPanel sortBy={sortBy}
                                   setSortBy={setSortBy}/>
            </div>
            <div className={styles.catalogContainer}>
                <ControlPanel setParameters={setParameters}/>
                <div className={styles.productsContainer}>
                    {productsList.map(product =>
                        <ProductCard product={product}/>
                    )}
                </div>
            </div>
        </>
    )
}