import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { Avatar, Button, Card, Popover } from 'antd';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import { useCallback, useState } from 'react';

const PostCard = ({ post }) => {
	const [liked, setLiked] = useState(false);
	const [commentFormOpened, setCommentFormOpend] = useState(false);
	const onToggleLike = useCallback(() => {
		setLiked((prev) => (!prev));
	}, []);
	const onToggleComment = useCallback(() => {
		setCommentFormOpend((prev) => (!prev));
	}, []);
	const id = useSelector((state) => state.user.me?.id);

	return (
		<div style={{marginBottom : "20px"}}>
			<Card
				cover={post.Images[0] && <PostImages image={post.Images} />}
				actions={[
					<RetweetOutlined key="retweet"/>,
					liked ? <HeartTwoTone twoToneColor="eb2f96" key="heart" onClick={onToggleLike}/> : <HeartOutlined key="heart" onClick={onToggleLike} />,
					<MessageOutlined key="commnet" onClick={onToggleComment}/>,
					<Popover key="more" content={(
						<Button.Group>
							{ id && post.User.id === id && 
								<>
									<Button>수정</Button>
									<Button type='danger'>삭제</Button>
								</>
							}
							<Button>신고</Button>
						</Button.Group>
					)}>
						<EllipsisOutlined />
					</Popover>
				]}
			>
				<Card.Meta 
					avatar={<Avatar>{[post.User.nickname[0]]}</Avatar>}
					title={post.User.nickname}
					description={post.content}
				/>
			</Card>
			{commentFormOpened && <div>댓글 부분</div>}
			{/* <CommentForm /> */}
			{/* <Comment /> */}
		</div>
	)
};

export default PostCard;