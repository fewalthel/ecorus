import styles from "./index.module.scss";
import {Promocode, PromocodeCard} from "../PromocodeCard";
import {useEffect, useState} from "react";
import {HistoryItem} from "@pages/ProfilePage/HistoryItem";
import {fetchHistory} from "@api/users";


const promocodesList: Promocode[] = [
    {
        date: '2025-06-01',
        cost: 19.99,
        productLink: 'https://example.com/product/123',
    },
    {
        date: '2025-06-02',
        cost: 9.5,
        productLink: 'https://example.com/product/456',
    },
    {
        date: '2025-06-03',
        cost: 29.99,
        productLink: 'https://example.com/product/789',
    },
    {
        date: '2025-06-04',
        cost: 15.0,
        productLink: 'https://example.com/product/1011',
    },
    {
        date: '2025-06-05',
        cost: 5.25,
        productLink: 'https://example.com/product/1213',
    },
];

export const SidePanel = () => {
    const [tab, setTab] = useState<'Промокоды' | 'История'>('Промокоды')

    const [historyList, setHistoryList] = useState([])

    useEffect(() => {
        (async () =>
            setHistoryList(fetchHistory()))()
    }, []);

    return (
        <div className={styles.sidePanel}>
            <div className={styles.tabsContainer}>
                <button onClick={() => setTab('Промокоды')}
                        className={tab === 'Промокоды' ? styles.tab_active : styles.tab}>Промокоды
                </button>
                <button onClick={() => setTab('История')}
                        className={tab === 'История' ? styles.tab_active : styles.tab}>История
                </button>
            </div>

            <ul className={styles.container}>
                {tab === 'Промокоды' ?
                    (
                        promocodesList.map((promocode: Promocode, index: number) =>
                            <li key={`promocode__${index}`}>
                                <PromocodeCard promocode={promocode}/>
                            </li>
                        )
                    ) :
                    (historyList ?
                            historyList.map((historyItem, index: number) =>
                                <li key={`history__${index}`}>
                                    <HistoryItem item={historyItem}/>
                                </li>
                            )
                            : <p>Loading...</p>
                    )
                }
            </ul>

        </div>)
}