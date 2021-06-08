import React from 'react';
import axios from 'axios';

class Submit extends React.Component {
    constructor(props){
        super(props);
    }
    
    handleSubmit = (e) => {
        (async (data) => {
            var res = await axios.post('http://localhost:3002/data/', JSON.stringify(data));
        })({ keyword: e.target.keyword.value })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <legend>검색 키워드를 입력해주세요!</legend>
                <input type='text' name='keyword' />
                <input type="submit" value="등록"/> 
            </form>
          </div>
        )
    }
}

export default Submit;