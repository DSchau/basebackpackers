import styled from 'styled-components';

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormGroup2col = styled.div.attrs({
  col: props => props.col || '1',
  mobcol: props => props.mobcol || '1'
})`
  display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${props =>
    props.inline &&
    css`
      width: inherit;
      display: inline-block;
      margin-right: 5px;
    `};
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Optional = styled.span`
  font-size: 0.8rem;
`;

export { FormGroup, FormLabel, Input, TextArea, Optional, FormGroup2col };
