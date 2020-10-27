import React from 'react'

import Post from '../components/post'
import Layout from '../components/layout'

import client from '../client'

function Index({ posts }) {
  return (
    <Layout>
      <h1>All my great posts</h1>
      {
        posts.map(post => (
          <Post {...post} key={post.sys.id} />
        ))
      }
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await client.getEntries({
    'content_type': 'blogPost'
  })
    .then(res => res.items)
  return {
    revalidate: 1,
    props: {
      posts 
    }
  }
}

export default Index
