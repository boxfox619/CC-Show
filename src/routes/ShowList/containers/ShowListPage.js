import React from 'react';
import {connect} from 'react-redux';
import styles from 'styles.css';
import ActionDialog from "./components/ActionDialog";
import ShowList from "./components/ShowList";

const MESSAGE = {
    'rename': '변경할 이름을 입력해 주세요',
    'create': '새 발표자료의 이름을 정해주세요!',
    'share': '이 링크로 발표자료를 공유할 수 있어요!!'
};

class ShowListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlideIdx: 0
        }
    }

    render() {
        return (
            <div>
                <div className={styles.header}>{/*@TODO Implement Header*/}</div>
                <div className={styles.context}>
                    <ShowList onDelete={this.props.deleteShow}
                              onShare={this.shareShow}
                              onRename={this.props.renameShow}
                              onOpen={this.props.openShow}/>
                    {this.renderActionDialog()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.loadShowList();
    }

    renderActionDialog = () => {
        const job = this.state.job;
        if (job === undefined) return;
        return <ActionDialog callback={this.dialogCallback}
                             message={MESSAGE[job]}
                             text={this.state.text}
        />
    };

    dialogCallback = (result) => {
        if (result !== undefined && result.length > 0) {
            this.props.createShow(result);
        }
        this.setState({job: undefined, text: undefined},);
    };

    createShow() {
        this.setState({job: 'create'});
    }

    shareShow(id) {
        let host = `http://${window.location.hostname}`;
        this.setState({job: 'share', text: `${host}/show/play/?show=${id}`});
    }
}

const mapDispatchToProps = {
    deleteShow,
    renameShow,
    createShow,
    loadShowList
};

const mapStateToProps = (state) => ({
    data: state.show.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowListPage)