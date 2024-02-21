function TernaryOperator() {
    let loggedIn = true;
    return (
        <div>
            <h2>Ternary Operator</h2>
            { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
        </div>
    );
}
export default TernaryOperator