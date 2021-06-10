import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import { Grid } from '@material-ui/core';
import CharacterInfo from '../components/characterInfo';
import CharacterStats from '../components/characterStats';


export default function Home() {
  return (
    <CharacterInfo />
  )
}
