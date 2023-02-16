import {ReactComponent} from "*.svg";
import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })


        //debugger

        //this.state.editMode = true
        //this.forceUpdate()
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
        //debugger
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
        //debugger
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        // console.log('render')

        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '26920 No status'}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} value={this.state.status} autoFocus
                               onBlur={this.deActivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
}