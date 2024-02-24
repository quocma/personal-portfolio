'use client';
import { useState } from 'react';
import { Sun, Moon }  from 'react-feather';
import { twMerge } from 'tailwind-merge';

type themeMode = 'light' | 'dark'

type ThemeModeButtonProps = {
  classname?: string
}

const ThemeModeButton = ({ classname }: ThemeModeButtonProps) => {
  const [mode, setMode] = useState<themeMode>('light')
  const toggleThemeMode = () => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark')
  }
  return (
    <button className={twMerge('rounded-full bg-white text-c2-main', classname)} onClick={toggleThemeMode}>
      { mode === 'light' ? (
        <Sun width={32} height={32} />
      ) : (
        <Moon width={32} height={32} />
      )}
    </button>
  )
}

export default ThemeModeButton