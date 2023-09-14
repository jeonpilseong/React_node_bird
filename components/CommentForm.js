import { Button, Form, Input } from 'antd';
import { useCallback } from 'react';
import useInput from '../hooks/useInput';

export default function CommentForm ({post}) {

	const [commentText, onChangeCommentText] = useInput('');
	const onsubmitComment = useCallback(() => {
		console.log(post.id, commentText);
	}, [commentText]);

	return (
		<Form onFinish={onsubmitComment}>
			<Form.Item style={{position : 'relative', margin : 0}}>
				<Input.TextArea defaultValue={commentText} onChange={onChangeCommentText} rows={4}/>
				<Button style={{position : 'absolute', right : 0, bottom: -40}} type='primary' htmlType='submit'>삐약</Button>
			</Form.Item>
		</Form>
	)
}