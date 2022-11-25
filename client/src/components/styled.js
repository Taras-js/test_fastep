import styled from "styled-components";
export const AddUser = styled.button`
  background: linear-gradient(113.41deg, rgba(91, 160, 59, 0.6) 21.91%, rgba(36, 115, 0, 0.6) 88.74%);
border-bottom-right-radius: 32px;
  backdrop-filter: blur(8px);
  //border-radius: 444px;
  border: none;
  cursor: pointer;
  height: 100%;
  font-size: 24px;
  line-height: 100%;
  color: #FFFFFF;
  width: 50%;
  opacity: 0.9;
  transition: 0.3s;
  
  &:hover {
    opacity: 0.5;
  }

  &.disabled {
    opacity: 0.5;
  }

  span {
    font-size: 14px;
    line-height: 120%;
    font-weight: bold;
    color: #FFFFFF;
    opacity: 0.8;
    //margin-top: 4px;
  }
`
export const MainButton = styled.button`
  background: rgba(39, 122, 0, 0.65);
  backdrop-filter: blur(8px);
  border-radius: 444px;
  border: none;
  cursor: pointer;
  height: 40px;
  font-size: 18px;
  line-height: 100%;
  color: #FFFFFF;
  width: 130px;
  opacity: 0.9;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &.disabled {
    opacity: 0.5;
  }

  span {
    font-size: 14px;
    line-height: 120%;
    font-weight: bold;
    color: #FFFFFF;
    opacity: 0.8;
    margin-top: 4px;
  }
`

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  left: 0;
  right: 0;
  background: linear-gradient(113.41deg, rgba(91, 160, 59, 0.6) 21.91%, rgba(36, 115, 0, 0.6) 88.74%);
  box-shadow: 0 3px 2px 0 #6cac4f85;
  opacity: 0.9;
  border-radius: 0 0 34px 34px;
  text-align: center;
  margin: 0 auto 20px auto;
  z-index: 100;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #FFFFFF;
  div{
    margin-left: 50px;
  }
  @media screen and (min-width: 743px) {
    width: 100%;
    height: 70px;
    box-shadow: none;
    border-radius: 0 0 34px 34px;
    background: linear-gradient(113.41deg, rgba(91, 160, 59, 0.6) 21.91%, rgba(36, 115, 0, 0.6) 88.74%);
    margin: 0 auto;
    font-weight: 600;
    font-size: 32px;
    div{
      margin-left: 250px;
    }
  }
`