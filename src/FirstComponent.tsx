import {useState} from 'react';
import "./FirstComponent.css"

const FirstComponent = (props: {
    person: string
}) => {
    const [name, setName] = useState('Gordon')

    return (
        <div className="container">
            <div className="box1"/>
            <div className="box2"/>
            <div className="box3"/>
            <div className="box4"/>
        </div>
    )
}

export default FirstComponent