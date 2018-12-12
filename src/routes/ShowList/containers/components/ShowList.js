import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from '../styles.css';
import ShowCard from './ShowCard';

export default class ShowList extends React.Component {
    static propTypes ={
        onOpen: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        onRename: PropTypes.func.isRequired,
        onShare: PropTypes.func.isRequired,
    };

    render() {
        return (<div className={styles["show-list"]}>{this.renderShowList()}</div>)
    }

    renderShowList = () => {
        const {showList} = this.props;
        if (showList === undefined) return;
        if (showList.length === 0) {
            return (<div className={styles["temp-show"]} onClick={this.createShow}>발표자료가 없습니다<br/>새 발표자료 만들기</div>);
        } else
            return showList.map((show) => {
                return (
                    <ShowCard
                        key={show.id}
                        name={show.name}
                        thumbnail={show.thumbnail}
                        onOpen={() => this.props.onOpen(show.id)}
                        onShare={() => this.props.onShare(show.id)}
                        onDelete={this.props.onDelete(show.id)}
                    />
                );
            });
    };

    openShow = (id) => {
        window.location.href = '/editor/?show='+id;
    };

    renameShow(){
        this.setState({job: 'rename'});
    }
}