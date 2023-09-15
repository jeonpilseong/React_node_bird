import { Avatar, Button, Card } from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logoutRequestAction } from '../reducers/user';

const LogoutButton = styled(Button)`
margin-top: 10px;
`;

const UserProfile = () => {
	const dispatch = useDispatch();
	const { me, isLoggingOut } = useSelector((state) => state.user);
	const onLogout = useCallback(() => {
		dispatch(logoutRequestAction())
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
				avatar={<Avatar>{me.nickname[0]}</Avatar>}
				title={me.nickname}
			/>
			<LogoutButton onClick={onLogout} loading={isLoggingOut}>로그아웃</LogoutButton>
		</Card>
	)
}

export default UserProfile;