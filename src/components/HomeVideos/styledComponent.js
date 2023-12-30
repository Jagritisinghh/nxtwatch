import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideosImage = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideosHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`
export const NoVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 15px;
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 3px;
`

export const VideoCardList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
