import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import VideoCard from '../VideoCard'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
              {savedVideos.length > 0 ? (
                <SavedVideoList>
                  {savedVideos.map(each => (
                    <VideoCard key={each.id} videoDetails={each} />
                  ))}
                </SavedVideoList>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading headingColor={headingColor}>
                    No saved videos found
                    <NoSavedVideosNote color={noteColor}>
                      You can save your videos while watching them
                    </NoSavedVideosNote>
                  </NoSavedVideosHeading>
                </NoSavedVideosView>
              )}
            </SavedVideoTitle>
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
