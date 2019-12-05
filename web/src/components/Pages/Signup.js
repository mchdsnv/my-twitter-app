import React from 'react';
import {connect} from 'react-redux';
import {Col, Icon, Row} from 'antd';
import SignupForm from '../SignupForm';
import * as signupActions from '../../store/twitter/twitter-actions';

const Signup = ({loading}) => {
    return (
        <Row>
            <div style={{ background: '#fff', minHeight: 280, textAlign: 'center' }}>
                <Col>
                    <p>Signup now</p>
                    { loading ? <Icon type="loading" style={{fontSize: '45px'}}/> : <SignupForm />}
                </Col>
            </div>
        </Row>
    );
};

export default connect(() => (state) => ({loading: state.auth.loading}), signupActions)(Signup);