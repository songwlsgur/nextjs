import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Header from '../components/Header'
export default function Home() {

  const PostLink = props => (
    <li>
      <Link href="[id]" as={`${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  )

  return (

    <div>
      <Header></Header>
      <ul>
        <PostLink id="about" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </div>
  
  )
}
