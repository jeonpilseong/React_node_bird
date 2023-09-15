import { useState } from 'react';
import Slick from 'react-slick'
import * as S from './styles'

const ImagesZoom = ({images, onClose}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	
	return (
		<S.Overlay>
			<S.Global />
			<S.Header>
				<h1>상세 이미지</h1>
				<S.CloseBtn onClick={onClose}>X</S.CloseBtn>
			</S.Header>
			<div>
				<S.SlickWrapper>
					<Slick 
						initialSlide={0}
						beforeChange={(slide) => setCurrentSlide(slide)}
						infinite
						arrows={false}
						slidesToShow={1}
						slidesToScroll={1}
					>
						{images.map((v)=>(
							<S.ImgWrapper key={v.src}>
								<img src={v.src} alt={v.src} />
							</S.ImgWrapper>
						))}
					</Slick>
					<S.Indicator>
						<div>
							{currentSlide + 1}
							{' '}
							/
							{images.length}
						</div>
					</S.Indicator>
				</S.SlickWrapper>
			</div>
		</S.Overlay>
	)
}

export default ImagesZoom;