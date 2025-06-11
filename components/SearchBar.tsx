import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress}: Props) => {
  return (
    <View className='flex-row items-center  bg-dark-200 rounded-full px-45 py-4'>
        <Image source={icons.search} className='sie-5' resizeMode='contain' tintColor="#abff" />
      
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChange={() => {}}
        placeholderTextColor='#A8B5DB'
        className="flex-1 ml-2 text-white"
      />
      <Text>SearchBar</Text>
    </View>
  )
}

export default SearchBar