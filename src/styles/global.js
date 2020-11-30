import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
        margin:0;
        padding:0;
        outline: none;
    }

    body , input , button{
        font: 14px Roboto, sans-serif;
        background-color: #5757a0;
    }

    button{
        cursor: pointer;
    }

    h2 {
        color: #dfdfdf;
        font-size: 14px;
    }

    #main-container{
        max-width:1200px;
        margin: 0 auto;
        padding: 0 20px 50px;

        @media only screen and (max-width: 767px) {padding: 0;}
    }
`;
