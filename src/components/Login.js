import {Input, Button, Col, Row} from 'antd';
import React, {useState} from 'react';
import '../App.css';
import loginApi from "../api/loginApi"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function clickLogin() {
        try {
        if (username && password) {
            //login
            console.log(username, password)
            const data=await loginApi.login(username,password)
            console.log(data)
        } else {
            // thong bao loi
            alert("loi chua nhap thong tin")
        }
        }catch (e) {
            console.log(e)
        }
    }

    return <div style={{height: '50%'}}>
        <Row style={{height: "50%"}}>
        </Row>
        <Row>
            <Col span={10}></Col>
            <Col span={4}>
                <Input placeholder="Nhap username" style={{marginBottom: "16px"}} onChange={(e) => {
                    setUsername(e.target.value)
                }
                }/>
                <Input placeholder="Nhap password" type={"password"} onChange={(e) => {
                    setPassword(e.target.value)
                }
                }/>
                <Button type="primary" block onClick={clickLogin}>
                    Login
                </Button>
            </Col>
            <Col span={10}></Col>
        </Row>
        <Row>
        </Row>
    </div>
};

export default Login;