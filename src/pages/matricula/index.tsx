import React from "react";
import Head from "next/head";
import { Button } from "@mui/material";
import styles from '../../styles/Home.module.css'

function Matricula() {
    return (
        <div>
            <Head>
                <h1 className={styles.title}>
                    MATRICULA
                </h1>
            </Head>
            <main>
                <Button variant="contained" href="/">Go to home</Button>
            </main>
        </div>
    )

}

export default Matricula