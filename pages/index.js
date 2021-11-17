import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TrackerForm from '../components/TrackerForm';
import Tracker from '../components/Tracker';
import { useState } from 'react';

export default function Home() {
    const [trackers, setTrackers] = useState([]);
    const addTracker = tracker => {
        setTrackers([...trackers, tracker]);
    }

    console.log('', { trackers });

    return (
        <>
            <Head>
                <title>bpost parcel tracker</title>
                <meta name="description" content="Track your bpost package" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.container}>
                <h1 className={styles.title}>bpost parcel tracker</h1>
                <TrackerForm onClick={addTracker} />
                {trackers.map((tracker, index) => <Tracker key={index} tracker={tracker} />)}
            </main>
        </>
        )
    }
