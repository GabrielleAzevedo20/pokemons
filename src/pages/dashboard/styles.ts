import styled from 'styled-components';


export const Title = styled.div`
    div {
        height: 50px;
        background: #2b75bb;
        padding: 50px;
    }
    img {
        margin-right: 270px;
        margin-left: 270px;
    }
`;


export const Repositories = styled.div`
margin-top: 80px;
max-width: 700px;
margin-right: 270px;
margin-left: 270px;

a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: 0.2s;

    & + a {
        margin-top: 16px;
    }

    &:hover {
        transform: translateX(10px);
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }


    div {
        margin-left: 16px;

        strong {
            font-size: 20px;
            color: #3d3d4d;
        }

        p {
            font-size: 18px;
            color: #a8a8b3;
            margin-top: 4px;
        }


    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
    }

}

`;
