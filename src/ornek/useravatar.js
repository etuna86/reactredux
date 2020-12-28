import React, { Component } from 'react';
import {connect} from 'react-redux';


class UserAvatar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accountAvatar: props.AVATAR,
            avatar:'',
        }
    }
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.accountAvatar !== this.state.accountAvatar) {
            this.setState({ accountAvatar: nextProps.AVATAR });
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.accountAvatar}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    AVATAR: state.reducer1.accountAvatar,
})

export default connect(mapStateToProps)(UserAvatar);