import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useCallback } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

// **** 최적화 기법
// style-component로 빼주면 inline css 리렌더링 방지
const ButtonWrapper = styled.div`
	margin-top: 10px;
`

const FormWrapper = styled(Form)`
	padding: 10px;
`;

const LoginForm = () => {
	const dispatch = useDispatch();
	const { isLoggingIn } = useSelector((state) => state.user);
	const [id, onChangeId] = useInput('');
	const [password, onChangePassword] = useInput('');

	// **** 최적화 기법
	// const style = useMemo(() => ({marginTop: 10}), []); // 객체를 캐싱해서 inline css 리렌더링 방지

	const onSubmitForm = useCallback(() => {
		console.log(id, password);
		dispatch(loginRequestAction({id, password}));
	}, [id, password]);

	return (
		<FormWrapper onFinish={onSubmitForm}> 
			<div>
				<label htmlFor='user-id'>아이디</label>
				<br />
				<Input name='user-id' value={id} onChange={onChangeId} required/>
			</div>
			<div>
				<label htmlFor='user-password'>비밀번호</label>
				<br />
				<Input name='user-password' type='password' value={password} onChange={onChangePassword} required/>
			</div>
			<ButtonWrapper >
				<Button type='primary' htmlType='submit' loading={isLoggingIn}>로그인</Button>
				<Link href="/signup"><a><Button>회원가입</Button></a></Link>
			</ButtonWrapper>
		</FormWrapper>		
	)
}

export default LoginForm;