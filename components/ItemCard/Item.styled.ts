import styled from "@emotion/styled";

const BlogSlyder = styled.div`
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 350px;
  transition: all 0.3s;

  & img {
    border-radius: 5%;
  }

  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    margin-bottom: 30px;
  }

  button {
    background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
    border: 0;
    border-radius: 12px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    :focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
        0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    }

    :hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
        0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    }
  }
`;

export { BlogSlyder };
