import Link from 'next/link'

export default function PostCardContent ({postData}) {
	return (
		<div>
			{
				postData.split(/(#[^\s#]+)/g).map((v, i) => {
					if(v.match(/(#[^\s#]+)/g)) {
						return <Link key={i} href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
					}
					return v;
				})
			}
		</div>
	)
	
}