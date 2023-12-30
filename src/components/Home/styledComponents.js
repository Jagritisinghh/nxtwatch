import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: ${props => props.display};
  padding: 20px;
  width: 100%;
  background-size: cover;
  height: 200px;
  justify-content: space-between;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  height: 80px;
  width: 30px;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  height: 25px;
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: transparent;
  border: 1px solid black;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ##000000;

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 20px;
  border: 1px solid #909090;
  border-radius: 3px;
  height: 40px;

  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  border: none;
  width: 70px;
`

export const SearchInput = styled.input`
 border: none;
 background:none;
 width: 100%;
  outline: none;
  padding:5px;
 color=${prps => prps.color};
 font-family:"Roboto";
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
