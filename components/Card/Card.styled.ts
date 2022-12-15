import styled from "@emotion/styled";

const ButtonRigth = styled.button`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  bottom: 7px;
  left: 50px;
  padding: 3px 12px;

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    background-position: right center;

    color: #fff;
    text-decoration: none;
  }

  :active {
    transform: scale(0.95);
  }
`;

const ButtonLeft = styled.button`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  bottom: 7px;
  right: 50px;
  padding: 3px 12px;

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    background-position: right center;

    color: #fff;
    text-decoration: none;
  }

  :active {
    transform: scale(0.95);
  }
`;
export { ButtonLeft, ButtonRigth };
