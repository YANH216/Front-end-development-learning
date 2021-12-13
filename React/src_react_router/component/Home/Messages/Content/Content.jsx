import React from 'react'
import { useParams } from 'react-router-dom' 

const contentData = [
    {
        id: "001",
        content: "AAAAAAAA"
    },
    {
        id: "002",
        content: "BBBBBBBB"
    },
    {
        id: "003",
        content: "CCCCCCCC"
    }
]

export default function Content() {
    const params = useParams()
    console.log(`params`, params)

    const result = (
        contentData.find((dataObj) => {
            return dataObj.id === params.id
        })
    )

    return (
        <div>
            <h3>Content界面</h3>
            <ul>
                <li>ID : {params.id}</li>
                <li>TITLE : {params.title}</li>
                <li>CONTENT : {result.content}</li>
            </ul>
        </div>
    )
}
