import PropTypes from "prop-types";
import {Wrapper} from "./styles";

const Transaction = ( {transaction : {value, label}}) => (
     <Wrapper value={value}>
          Label: {label} 
          <br/>  
          Value: {value}
          <br/>
     </Wrapper>
)

Transaction.propTypes = {
     transaction: PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.number
     })
}

Transaction.defaultProps = {
     transaction:{
          label: '',
          value: 0
     }
}

export default Transaction