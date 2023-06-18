import './App.css'

import MainGame, { GameObject, OBJECT_SIZE } from './components/MainGame'
import { useEffect, useRef, useState } from 'react'

import { random } from './utils/random'

const TIME_BETWEEN_MOVES = 50

function App() {
	const [objectArr, setObjectArr] = useState<GameObject[]>([
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
		{
			visible: true,
			className: 'square-one',
			location: {
				x: 0,
				y: 0,
			},
		},
	])
	const timeoutRef = useRef<number>()

	useEffect(() => {
		let i = 0

		function clickOne() {
			const newObjectArr = [...objectArr]
			newObjectArr[i].location = {
				x: random(0, window.innerWidth - OBJECT_SIZE),
				y: random(0, window.innerHeight - OBJECT_SIZE),
			}

			setObjectArr(newObjectArr)

			i++

			timeoutRef.current = setTimeout(() => {
				if (i < objectArr.length) {
					clickOne()
				} else {
					i = 0
					clickOne()
				}
			}, TIME_BETWEEN_MOVES)
		}

		clickOne()

		return () => clearTimeout(timeoutRef.current)
	}, [])

	return (
		<>
			<MainGame
				objectArr={objectArr}
				setObjectArr={setObjectArr}
			/>
		</>
	)
}

export default App
