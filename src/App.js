import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './App.css'

const apiLink =
	'https://api-v2.douyin.wtf/douyin_profile_videos/?douyin_profile_url=https%3A%2F%2Fv.douyin.com%2FMN6Gqpj%2F&count=20'

function App() {
	const [videos, setVideos] = useState([])
	const getVideos = async () => {
		try {
			let result = await axios.get(apiLink)
			console.log(result.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getVideos()
	}, [])

	return (
		<div className='App'>
			<header className='App-header'>
				{videos?.map(url => (
					<ReactPlayer url={url} />
				))}
			</header>
		</div>
	)
}

export default App
