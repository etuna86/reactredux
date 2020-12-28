import React, { Component } from 'react';
import {UpdateAvatar}  from '../redux1/actions';
import {connect} from 'react-redux';

class Avatar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accountAvatar: props.AVATAR,
            avatar:'',
        }
    }

    avatarOnchange=(e)=>
    {
        this.setState({
            avatar:e.target.value,
        })


    }

    avatarUpdate=(e)=>
    {
        var val=this.state.avatar;
        UpdateAvatar(val)
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <div>
                    <form >

                        <input  type="text" value={this.state.avatar }  onChange={this.avatarOnchange}  />
                        <input type="submit"   onClick={this.avatarUpdate}/>
                    </form>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    AVATAR: state.reducer1.accountAvatar,
})

export default connect(mapStateToProps)(Avatar);
