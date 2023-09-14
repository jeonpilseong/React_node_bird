import { StopOutlined } from '@ant-design/icons';
import { List, Button, Card } from 'antd';
import { useMemo } from 'react';

const FollowList = ({header, data}) => {
	const listStyle = useMemo(() => ({marginBottom: 20}), []);
	const buttonStyle = useMemo(() => ({textAlign : 'center', margin : '10px 0'}), []);
	const listItemStyle = useMemo(() => ({marginTop : 20}), []);
	
	return(
		<List
			style={listStyle}
			grid={{gutter: 4, xs: 2, md: 3}}
			size='small'
			header={<div>{header}</div>}
			loadMore={<div><Button style={buttonStyle}> 더보기</Button></div>}
			bordered
			dataSource={data}
			renderItem={(item) => (
				<List.Item style={listItemStyle}>
					<Card actions={[<StopOutlined key="stop" />]} >
						<Card.Meta description={item.nickname} />
					</Card>
				</List.Item>
			)}
		/>
	)
}

export default FollowList;