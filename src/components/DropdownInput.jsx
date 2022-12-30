import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Text from './Text';

const DropdownInput = ({allData, buttonOnClickFn, itemOnClickFn, selectedInput}) => {
    return (
        <DropdownInputContainer>
            <DropdownButton id="dropdown-item-button" title="Select Category" onClick={buttonOnClickFn}>
                {allData && allData.data.map((data) => {
                    return (
                        <Dropdown.Item as="button" onClick={() => itemOnClickFn(data)}>{data.name}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
            <DropdownTextContainer>
                <Text text={selectedInput.name}/>
            </DropdownTextContainer>
        </DropdownInputContainer>
    )
}

const DropdownInputContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:1.5em;
    
`

const DropdownTextContainer = styled.div`
    margin-top:1.5em;
`

export default DropdownInput