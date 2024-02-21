function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
            <h2>Functions</h2>
            <h3>Function Parenthesis and Parameters</h3>
            twoSquared = { twoSquared }<br />
            threePlusOne = { threePlusOne }<br />
        </>
    );
}

export default FunctionParenthesisAndParameters;