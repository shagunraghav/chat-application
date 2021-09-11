import React from 'react';
import {connect} from 'react-redux';

class Message extends React.Component {
    render(){
        return(
            <div className={`message-item ${this.props.msg.userId === this.props.user.id ? 'msg-right' : 'msg-left '}`} >
               <i className="zmdi zmdi-account-circle" />
               <div className="chat-bubble" title={this.props.profile.name} data-toggle="tooltip">
                   {this.props.msg.content}
               </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.chat
});
const mapDispatchToProps = (dispatch) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Message);