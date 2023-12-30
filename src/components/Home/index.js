import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GrFormClose} from 'react-icons/gr'
import {IoIosSearch} from 'react-icons/io'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerContainer,
  BannerImage,
  BannerText,
  BannerButton,
  BannerLeftPart,
  BannerRightPart,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    initialList: [],
    bannerDisplay: 'flex',
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideoItems()
  }

  getHomeVideoItems = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    // console.log(response.status)
    if (response.status === 200) {
      const data = await response.json()

      const updatedData = data.videos.map(eachItem => ({
        channelName: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        initialList: updatedData,
        apiStatus: apiStatusConstants.success,
      })

      //   console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onSubmitSearchInput = () => {
    this.getHomeVideoItems()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideoItems())
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideosView = () => {
    const {initialList} = this.state
    return <HomeVideos homeVideos={initialList} onRetry={this.onRetry} />
  }

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.returnFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftPart>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerText>
                    <BannerButton>GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <GrFormClose size={25} />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    color={textColor}
                  />
                  <SearchIconContainer
                    data-testid="searchButton"
                    onClick={this.onSubmitSearchInput}
                  >
                    <IoIosSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

//   videoList = () => {
//     const {initialList} = this.state
//     return initialList.length !== 0 ? (
//       <VideoListContainer>
//         {initialList.map(each => (
//           <HomeVideoItems key={each.id} item={each} />
//         ))}
//       </VideoListContainer>
//     ) : (
//       this.noSearchResultsView()
//     )
//   }

//   searchInput = () => {
//     const {searchInput} = this.state
//     return (
//       <SearchInputContainer>
//         <input

//         />
//         <SearchButton
//           data-testid="searchButton"
//           type="button"
//           onClick={this.onSubmitSearchInput}
//         >
//           <IoIosSearch size={20} />
//         </SearchButton>
//       </SearchInputContainer>
//     )
//   }

//   onClickRetry = () => {
//     this.setState({searchInput: ''}, this.getHomeVideoItems)
//   }

//   noSearchResultsView = () => (
//     <NoResultsFoundContainer>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
//         alt="no videos"
//         className="no-search-result-image"
//       />
//       <h1 className="no-result-title">Oops! Something Went Wrong</h1>
//       <p className="no-result-description">
//         We are having some trouble to complete your request.
//         <br />
//         Please try again.
//       </p>
//       <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
//     </NoResultsFoundContainer>
//   )

//   PremiumBanner = () => {
//     const {showBanner} = this.state
//     return showBanner ? (
//       <BannerContainer>
//         <div className="banner-and-close-button">
//           <img

//             className="nxt-watch-logo"
//           />
//           <CloseIconButton onClick={this.onClickCloseButton}>
//             <GrFormClose size={30} />
//           </CloseIconButton>
//         </div>
//         <PremiumBannerDescription>
//         </PremiumBannerDescription>
//         <GetNowButton>GET IT NOW</GetNowButton>
//       </BannerContainer>
//     ) : null
//   }

//   renderLoadingView = () => (
//     <div className="loader-container" data-testid="loader">
//       <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
//     </div>
//   )

//   returnFailureView = () => (
//     <NoResultsFoundContainer>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
//         alt="failure view"
//         className="no-search-result-image"
//       />
//       <h1 className="no-result-title">No Search results found</h1>
//       <p className="no-result-description">
//         Try different key word or remove search filter
//       </p>
//       <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
//     </NoResultsFoundContainer>
//   )

//   render() {
//     return (
//       <>
//         <Header />
//         <HomePageMainContainer data-testid="home">
//           <SubContainer>
//             <Sidebar />
//             <ResponsiveContainer>
//               {this.PremiumBanner()}
//               {this.searchInput()}
//               {this.renderOutput()}
//             </ResponsiveContainer>
//           </SubContainer>
//         </HomePageMainContainer>
//       </>
//     )
//   }
// }

export default Home
