import React from 'react'
import Image from 'next/image'

function Post(props) {
  console.log(props)
  return (
    <section style={{
      padding: '0.25rem 0.5rem',
      margin: '0.5rem 0',
      border: '1px solid #EEE'
    }}>
      {props.fields.heroImage && (
             <Image 
             alt={props.fields.heroImage.fields.description}
             src={`https:${props.fields.heroImage.fields.file.url}`}
             height={props.fields.heroImage.fields.file.details.image.height}
             width={props.fields.heroImage.fields.file.details.image.width}
           />
      )}
      <h2>{props.fields.title}</h2>
      <p>{props.fields.description}</p>
    </section>
  )
}

export default Post
