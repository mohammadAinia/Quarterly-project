import './Add_Sitting_request.css'
import { Header, Componets_Add_Sitting_request } from '../../../../Componets'

import React from 'react'

const Add_Sitting_request = () => {
    return (
        <>
            <div>
                <div class="container" >
                    <div class="title">Add a Sitting request</div><br />
                    <div class="content">
                        <Componets_Add_Sitting_request />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_Sitting_request