import { connect } from "react-redux";
import { AppState } from "../../state/reducers";
import { useNavigate } from 'react-router-dom';
import './Details.css';

const Detail = (props:any) => {
    const navigate = useNavigate();
    const {selectedItem} = props;
    return(
        <div className="details-container">
            <div className="details-container__header" role="navigation" onClick={()=> navigate('/')}>Go Back Search</div>
            <div className="details-container__detail" role="details">
                <h2>{selectedItem.title}</h2>
                <div className="details-container__detail__desc">
                    <img src={selectedItem.photo}></img>
                    <p>{selectedItem.description}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state:AppState) => {
    return {
        selectedItem: state.selectedResult
    }
}


export default connect(mapStateToProps,null)(Detail);