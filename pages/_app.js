import Proptypes from 'prop-types'
import 'antd/dist/antd.css'
import Head from 'next/head'
import wrapper from '../store/configureStore'

const NodeBird = ({Component}) => {
	return (
		<>
			<Head>
				<meta charSet='utf-4' />
				<title>NodeBird</title>
			</Head>
			<Component />
		</>
	)
}

NodeBird.propTypes = {
	Component: Proptypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);