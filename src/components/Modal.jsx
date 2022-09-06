import {React, Components} from 'react'
import s from './Modal.module.css'

export default class Modal extends Components {
    componentDidMount(){
    }
    componentWillUnmount(){
    }

    render() {
        return (
            <div className={s.backdrop}>
                <div className={s.content}></div>
            </div>
        )
    }
}

