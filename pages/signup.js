import { Button, Checkbox, Form, Input } from 'antd';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import { useCallback, useMemo, useState } from 'react';
import useInput from '../hooks/useInput';

const Signup = () => {
	const [id, onChangeId] = useInput('');
	const [password, onChangePassword] = useInput('');
	const [nickname, onChangeNickname] = useInput('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [term, setTerm] = useState('');
	const [termError, setTermError] = useState('');
	const buttonStyle = useMemo(() => ({marginTop : 10}), []);
	const divStyle = useMemo(() => ({color : 'red'}), []);

	const onChangeTerm = useCallback((e) => {
		setTerm(e.target.checked);
		setTermError(false);
	}, []);

	const onChangePasswordCheck = useCallback((e) => {
		setPasswordCheck(e.target.value);
		setPasswordError(e.target.value !== password);
	}, [password]);

	const onSubmit = useCallback(() => {
		if(password !== passwordCheck) {
			return setPasswordError(true);
		}
		if(!term) {
			return setTermError(true);
		}
		console.log(id, nickname, password);
	}, [password, passwordCheck, term]);

	return (
		<AppLayout>
			<Head>
				<title>회원가입 | NodeBird</title>
			</Head>
			<Form onFinish={onSubmit}>
				<div>
					<label htmlFor='user-id'>아이디</label>
					<br />
					<Input name='user-id' value={id} required onChange={onChangeId} />
				</div>
				<div>
					<label htmlFor='user-nickname'>닉네임</label>
					<br />
					<Input name='user-nickname' value={nickname} required onChange={onChangeNickname} />
				</div>
				<div>
					<label htmlFor='user-password'>비밀번호</label>
					<br />
					<Input name='user-password' type='password' value={password} required onChange={onChangePassword} />
				</div>
				<div>
					<label htmlFor='user-passwordCheck'>비밀번호 체크</label>
					<br />
					<Input 
						name='user-password-check'
						type='password'
						value={passwordCheck}
						required
						onChange={onChangePasswordCheck}
					/>
					{passwordError && <div style={divStyle}>비밀번호가 일치하지 않습니다.</div>}
				</div>
				<div>
					<Checkbox name='user-term' checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 통의합니다.</Checkbox>
					{termError && <div style={divStyle}>약관에 동의하셔야 합니다.</div>}
				</div>
				<div style={buttonStyle}>
					<Button type='primary' htmlType='submit'>가입하기</Button>
				</div>
			</Form>
		</AppLayout>
	)
};
export default Signup;