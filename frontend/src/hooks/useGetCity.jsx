import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { serverUrl } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../redux/userSlice'

function useGetCity() {

  const dispatch = useDispatch()
  const {userData} = useSelector(state=>state.user)
  const apiKey = import.meta.env.VITE_GEOAPIKEY
  useEffect(() => {
    navigator.geolocation.getCurrentPosition( async(pos) => {
        const latitude = pos.coords.latitude
        const longitude = pos.coords.longitude
        const result = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`)
        console.log(result?.data?.results[0].county)
        dispatch(setCity(result?.data?.results[0].county))
    })
  },[userData])
}

export default useGetCity
