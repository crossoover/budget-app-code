import styled from 'styled-components';

export const Wrapper = styled.div`
     background: ${({value}) => value < 0 ? '#797979' : value > 0 ? '#f2f2f2' : '#ffff74'};
     font-family: 'Helvetica', sans-serif;
     border: 3px solid #333333;
     border-radius: 5px;
     padding: 5px;
     margin-bottom: 10px;
     color: ${props => props.value < 0 ? 'white' : 'black'};
`;

Wrapper.displayName = 'TransactionWrapper';