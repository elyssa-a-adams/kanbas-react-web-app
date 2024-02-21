import VariablesAndConstants from "./variables/VariablesAndConstants";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunction from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import ImpliedReturn from "./functions/ImpliedReturn";
import Destructing from "./json/Destructing";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import FunctionDestructing from "./functions/FunctionDestructing";
function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <WorkingWithFunctions/>
          <JsonStringify/>
          <ES5Functions/>
          <ArrowFunction/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
          <Spreading/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript;