import React from 'react';

//利用設定子component的style，加上拉條。
const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border:'5px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;