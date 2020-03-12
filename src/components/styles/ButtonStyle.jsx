import styled from 'styled-components'

export const ButtonContainer1 = styled.button `
text-transform: capitalize;
font-size:1.2rem;
background:transparent;
color:white;
border:0.3rem solid var(--lightBlue);
border-radius: 20px ;
transition:all 0.5s ease-in-out;
&:hover{
    color:var(--mainBlue);
    background:var(--lightBlue);
}
:focus{
    outline:none;
}
`;

export const ButtonContainer2 = styled.button `
text-transform: capitalize;
font-size:1.2rem;
background:transparent;
color:brown;
border:0.3rem solid yellowgreen;
border-radius: 20px ;
transition:all 0.5s ease-in-out;
&:hover{
    color:var(--mainBlue);
    background:yellowgreen;
}
:focus{
    outline:none;
}
`;