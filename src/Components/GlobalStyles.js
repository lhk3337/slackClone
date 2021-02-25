import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset};
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
li{
    list-style:none;
}
a{
    text-decoration:none;
    color:inherit;
}
body{
}
`;
export default GlobalStyles;
