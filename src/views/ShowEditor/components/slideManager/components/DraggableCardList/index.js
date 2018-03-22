import React from 'react';

const propTypes = {
    onExchangeSlide: React.PropTypes.func.isRequired
};

class DragableCardList extends React.Component {

    constructor(props) {
        super(props);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.dragOver = this.dragOver.bind(this);
    }

    render() {
        return (
            <ul onDragOver={this.dragOver}>
                {this.renderChilds(this.props.children)}
            </ul>
        )
    }

    renderChilds(childs) {
        return childs.map((slide, idx) => {
            return (
                <li data-id={idx}
                    key={'slide' + slide.id}
                    draggable="true"
                    onDragEnd={this.dragEnd}
                    onDragStart={this.dragStart}>
                    {slide}
                </li>)
        });
    }

    dragStart(e) {
        let target = e.currentTarget;
        while (target.tagName != 'LI') {
            target = target.parentNode;
        }
        this.dragged = target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData("text/html", e.currentTarget);
    }

    dragEnd() {
        this.dragged.style.display = "block";
        if (!this.dragged.parentNode.contains(placeholder)) return;
        this.dragged.parentNode.removeChild(placeholder);
        var from = Number(this.dragged.dataset.id);
        var to = Number(this.over.dataset.id);
        if (from < to) to--;
        if (this.nodePlacement == "after") to++;
        this.props.onExchangeSlide(to, from);
    }

    dragOver(e) {
        e.preventDefault();
        this.dragged.style.display = "none";
        let target = e.target;
        if (e.target.className == "placeholder" || target.tagName == 'UL') return;
        while (target.tagName != 'LI') {
            target = target.parentNode;
        }
        this.over = target;
        var relY = e.clientY - this.over.offsetTop;
        var height = this.over.offsetHeight / 2;
        var parent = e.target;
        while (parent.tagName != 'UL') {
            parent = parent.parentNode;
        }
        while (target.tagName != 'LI') {
            target = target.parentNode;
        }
        if (relY > height) {
            this.nodePlacement = "after";
            parent.insertBefore(placeholder, target.nextElementSibling);
        }
        else if (relY < height) {
            this.nodePlacement = "before"
            parent.insertBefore(placeholder, target);
        }
    }

}

DragableCardList.propTypes = propTypes;
export default DragableCardList;
