import useI18n from 'hooks/useI18n'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ChevronLeftIcon, Flex, Text } from '@pancakeswap-libs/uikit'

interface MenuProps {
  activeIndex?: number
}

const Menu: React.FC<MenuProps> = () => {
  const TranslateString = useI18n()

  return (
    <>
      <Flex mb="24px" justifyContent="center">
        <RouterLink to="/profile">
          <Flex alignItems="center">
            <ChevronLeftIcon color="primary" />
            <Text color="primary">{TranslateString(1104, 'Public Profile')}</Text>
          </Flex>
        </RouterLink>
      </Flex>
    </>
  )
}

export default Menu
