import React from 'react'
import { useParams } from "react-router-dom"
import Layout from '../containers/Layout'
import MainCategory from '../components/MainCategory'

const Category = () => {

    let { catId } = useParams();

    return(
        <Layout>
            <MainCategory catId={catId}/>
        </Layout>
    )
}

export default Category