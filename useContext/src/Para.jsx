import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './App'

export default function Para() {

    const lol = useContext(ThemeContext)

  return <div>{lol}</div>;
}
