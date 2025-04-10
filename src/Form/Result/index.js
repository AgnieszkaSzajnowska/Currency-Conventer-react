import { Wrapper } from "./styled";

export const Result = ({result}) => (
    <Wrapper>
        {!!result && (
            <>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </>
        )}
    </Wrapper>
);