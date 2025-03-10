import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
				<picture>
					<source type='image/avif' srcSet={`
						${src.replace('.jpg', '.avif')} 1x,
						${src.replace('.jpg', '@2x.avif')} 2x,
						${src.replace('.jpg', '@3x.avif')} 3x,
					`} />
					<source type='image/jpeg' srcSet={`
						${src} 1x,
						${src.replace('.jpg', '@2x.jpg')} 2x,
						${src.replace('.jpg', '@3x.jpg')} 3x,
					`} />
					<Image src={src} alt={alt} />
				</picture>
      </Anchor>
			<Tags>
				{tags.map((tag) => (
          <>
						<Tag key={tag}>{tag}</Tag> &nbsp;
					</>
        ))}
			</Tags>

    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
	object-fit: cover;
`;

const Tags = styled.p`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
	margin-bottom: 1em;
`;

const Tag = styled.span`
	display: inline-block;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
