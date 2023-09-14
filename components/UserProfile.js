import { Avatar, Button, Card } from 'antd';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logoutAction } from '../reducers/user';

const LogoutButton = styled(Button)`
margin-top: 10px;
`;

const UserProfile = () => {
	const dispatch = useDispatch();
	const onLogout = useCallback(() => {
		dispatch(logoutAction())
	}, []);
	
	return (
		<Card
			actions={[
				<div key="twit">짹짹<br/>0</div>,
				<div key="followings">팔로잉<br/>0</div>,
				<div key="followings">팔로워<br/>0</div>
			]}
		>
			<Card.Meta 
				avatar={<Avatar>ZC</Avatar>}
				title="ZeroCho"
			/>
			<LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
		</Card>
	)
}

export default UserProfile;