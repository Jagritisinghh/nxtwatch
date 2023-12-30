import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  margin: 60px 0px 60px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    margin: 0px 0px 0px 250px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NotFoundVideosNote = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align:center;
  }
`
