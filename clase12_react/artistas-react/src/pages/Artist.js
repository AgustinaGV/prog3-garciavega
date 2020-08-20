import React from 'react'
import { useParams } from "react-router-dom"
import Layout from '../containers/Layout'
import MainArtist from '../components/MainArtist'

const Artist = () => {

    let { id } = useParams();

    return(
        <div>
            <Layout>
                <MainArtist />
            </Layout>
        </div>
    )
}

export default Artist