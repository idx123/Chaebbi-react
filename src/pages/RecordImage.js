import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Button from "../elements/Button";
import Input from "../elements/Input";

const RecordImage =()=>{
    const [loading, setLoading] = useState(true);
    const callapi = async() =>{
        setLoading(true);
        //axios로 api 호출 후 then절에서 setLoading(false)해 로딩 컴포넌트 감추기
        
    }
    return(
        <div>
            { loading ? <Loading/> : null }
            <h1>식단기록(이미지)</h1>
        </div>
    )
}

export default RecordImage;