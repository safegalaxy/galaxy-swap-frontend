import React from 'react'
import { NoProfileAvatarIcon } from '@pancakeswap-libs/uikit'
import { Profile } from 'state/types'
import styled from 'styled-components'

export interface ProfileAvatarProps {
  profile: Profile
}

const AvatarWrapper = styled.div<{ bg: string }>`
  background: url('${({ bg }) => bg}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 100%;
  height: 100%;

  & > img {
    border-radius: 50%;
  }
`
// TODO: replace with no provile avatar icon
const AvatarInactive = styled(NoProfileAvatarIcon)`
  width: 100%;
  height: 100%;
`

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ profile }) => {
  return (
    <AvatarWrapper bg={`/images/nfts/${profile.nft?.images?.md}`}>
      {!profile.isActive && <AvatarInactive />}
    </AvatarWrapper>
  )
}

export default ProfileAvatar
