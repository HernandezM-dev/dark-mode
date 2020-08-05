import React from 'react';
import { useLocalSave } from "./useLocalSave";

export const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalSave('enabled', true)
    return [darkMode, setDarkMode]
}