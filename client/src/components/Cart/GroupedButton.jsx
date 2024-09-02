import { Box, Button, styled, ButtonGroup } from "@mui/material";

const BoxWrapper = styled(ButtonGroup)`
 margin-top: 30px;
`

const ButtonStyle = styled(Button)`
 border-radius : 50%;
`

const GroupedButton = () => {
    return (
        <BoxWrapper>
            <ButtonStyle>-</ButtonStyle>
            <ButtonStyle disabled>1</ButtonStyle>
            <ButtonStyle>+</ButtonStyle>
        </BoxWrapper >
    )
}

export default GroupedButton;